import './preview.scss';

import { $, Ternary, untrack } from 'voby';

import { compiler, resizing } from './shared';

const getHtml = (js: string, css?: string) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script
          async
          src="https://unpkg.com/es-module-shims@0.10.1/dist/es-module-shims.min.js"
        ></script>
        <script type="importmap">
          {
            "imports": {
              "voby": "https://cdn.skypack.dev/voby"
            }
          }
        </script>
        <script defer type="module">
          ${js};
        </script>
        ${css ? `<style>${css}</style>` : ''}
      </head>
      <body></body>
    </html>`;
};

const doc$ = $('');
const iframeEl$ = $<HTMLIFrameElement>();

export const reload = () => {
  const iframeEl = untrack(iframeEl$);
  if (iframeEl?.srcdoc) iframeEl.srcdoc = doc$();
};

export const Preview = () => {
  compiler.onmessage = ({ data }: { data: { js: string; css?: string } }) => {
    doc$(getHtml(data.js, data.css));
  };

  return (
    <Ternary when={doc$}>
      <iframe
        class='preview'
        style={() => `pointer-events:${resizing() ? 'none' : 'all'}`}
        ref={iframeEl$}
        title='Voby REPL'
        srcDoc={doc$}
        sandbox='allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin'
      />
      <div class='preview'>
        <h1>Loading Playground...</h1>
      </div>
    </Ternary>
  );
};
