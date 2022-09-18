import './preview.scss';

import { compressToURL } from '@amoutonbrady/lz-string';
import { $, If, untrack } from 'voby';

import { editorDataAsJson } from './parsers';
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

export const Preview = () => {
  const doc = $('');
  const iframeEl = $<HTMLIFrameElement>();

  compiler.onmessage = ({ data }: { data: { js: string; css?: string } }) => {
    doc(getHtml(data.js, data.css));
  };

  const share = () => {
    location.hash = compressToURL(JSON.stringify(editorDataAsJson()));
    navigator.clipboard.writeText(location.href);
  };

  return (
    <div class='preview'>
      <div class='playground-header playground-header--preview'>
        <button class='icon--reload' onClick={() => (untrack(iframeEl)!.srcdoc = untrack(doc))} />
        <button class='icon--share' onClick={share} />
      </div>
      <If
        when={doc}
        fallback={
          <h1 class='flex-center font-normal text-xl mt-30% md:mt-50%'>Loading Playground...</h1>
        }
      >
        <iframe
          style={() => `pointer-events:${resizing() ? 'none' : 'all'}`}
          class='preview__iframe'
          ref={iframeEl}
          title='Voby REPL'
          srcDoc={doc}
          sandbox='allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin'
        />
      </If>
    </div>
  );
};
