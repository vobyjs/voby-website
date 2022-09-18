import { editor, languages, Uri } from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import { $, Observable, untrack, useEffect } from 'voby';

import { editorDataAsJson } from './parsers';
import { activeData, compiler, resizing } from './shared';

(window as any).MonacoEnvironment = {
  getWorker(_moduleId: unknown, label: string) {
    switch (label) {
      case 'typescript':
      case 'javascript':
        return new tsWorker();
      case 'css':
        return new cssWorker();
      default:
        return new editorWorker();
    }
  },
};

let vobyFiles = import.meta.glob('/node_modules/voby/dist/**/*', {
  as: 'raw',
  eager: true,
});
Object.assign(
  vobyFiles,
  import.meta.glob('/node_modules/voby/package.json', { as: 'raw', eager: true }),
);
Object.assign(
  vobyFiles,
  import.meta.glob('/node_modules/oby/dist/**/*', { as: 'raw', eager: true }),
);
Object.assign(
  vobyFiles,
  import.meta.glob('/node_modules/oby/package.json', { as: 'raw', eager: true }),
);

for (const path in vobyFiles) {
  editor.createModel(vobyFiles[path] as any as string, 'typescript', Uri.parse(`file://${path}`));
}

languages.typescript.typescriptDefaults.setEagerModelSync(true);
languages.typescript.typescriptDefaults.setCompilerOptions({
  strict: true,
  target: languages.typescript.ScriptTarget.ESNext,
  module: languages.typescript.ModuleKind.ESNext,
  moduleResolution: languages.typescript.ModuleResolutionKind.NodeJs,
  jsx: languages.typescript.JsxEmit.Preserve,
  jsxImportSource: 'voby',
  allowNonTsExtensions: true,
});

export const MonacoEditor = ({ position$ }: { position$?: Observable<number> }) => {
  let mEditor: editor.IStandaloneCodeEditor;
  const editorEl = $<HTMLElement>();
  let resizeObserver: ResizeObserver;

  useEffect(() => {
    const el = editorEl();
    if (!el || mEditor) {
      resizeObserver?.disconnect();
      return;
    }

    mEditor = editor.create(el, {
      lineDecorationsWidth: 5,
      lineNumbersMinChars: 3,
      model: untrack(activeData)?.model,
      language: 'javascript',
      minimap: { enabled: false },
      fontSize: 15,
      fontWeight: 'normal',
      padding: { top: 8 },
    });

    if (position$) {
      mEditor.onDidChangeCursorPosition(({ position }) =>
        position$(mEditor.getModel()?.getOffsetAt(position) || 0),
      );
      useEffect(() => {
        mEditor.setPosition(
          mEditor.getModel()?.getPositionAt(position$()) || { lineNumber: 0, column: 0 },
        );
        mEditor.focus();
      });
    }

    mEditor.onDidChangeModelContent(() => compiler.postMessage(editorDataAsJson()));
    compiler.postMessage(editorDataAsJson());

    resizeObserver = new ResizeObserver(([entry]) => {
      const size = entry.contentBoxSize[0];
      if (size) {
        mEditor.layout({ width: size.inlineSize, height: size.blockSize });
      }
    });
    resizeObserver.observe(el);
  });

  useEffect(() => {
    const model = activeData()?.model;
    if (model && mEditor && mEditor.getModel() !== model) {
      mEditor.setModel(model);
    }
  });

  return (
    <div class='editor__view' style={() => `pointer-events:${resizing() ? 'none' : 'all'}`}>
      <div class='editor__el' ref={editorEl} />
    </div>
  );
};
