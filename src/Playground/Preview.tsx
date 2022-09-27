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
  const showError$ = $(false);
  const errorMessage$ = $('');

  compiler.onmessage = ({ data }: { data: { js: string; css?: string; error?: string } }) => {
    if (data.error) {
      showError$(true);
      errorMessage$(data.error);
    } else {
      showError$(false);
      doc$(getHtml(data.js, data.css));
    }
  };

  return (
    <div class='preview'>
      <Ternary when={doc$}>
        <iframe
          class='preview__iframe'
          style={() => `pointer-events:${resizing() ? 'none' : 'all'}`}
          ref={iframeEl$}
          title='Voby REPL'
          srcDoc={doc$}
          sandbox='allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin'
        />
        <h1>Loading Playground...</h1>
      </Ternary>
      <code class={['preview__error', { 'preview__error--visible': showError$ }]}>
        {errorMessage$}
      </code>
    </div>
  );
};
