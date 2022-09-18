import { decompressFromURL } from '@amoutonbrady/lz-string';
import { editor, Uri } from 'monaco-editor';
import { $, useMemo } from 'voby';

import { EditorDataJson, getEditorDataFromJson } from '../parsers';
import CompilerWorker from '../workers/compile?worker';
import FormatterWorker from '../workers/format?worker';
import demoCss from './playgroundDemo.css?raw';
import demoTs from './playgroundDemo?raw';

export interface EditorData {
  id: number;
  name: string;
  fileType: 'ts' | 'tsx' | 'js' | 'jsx' | 'css';
  model: editor.ITextModel;
}

let rawEditorData: EditorData[];
try {
  const editorDataJson = JSON.parse(decompressFromURL(location.hash.slice(1))!) as EditorDataJson[];
  for (const editorData of editorDataJson) {
    if (typeof editorData.file !== 'string' || typeof editorData.value !== 'string') throw Error();
  }
  rawEditorData = getEditorDataFromJson(editorDataJson);
} catch (_) {
  rawEditorData = [
    {
      id: 0,
      name: 'index',
      fileType: 'tsx',
      model: editor.createModel(demoTs, 'typescript', Uri.file('index.tsx')),
    },
    {
      id: 1,
      name: 'main',
      fileType: 'css',
      model: editor.createModel(demoCss, 'css', Uri.file('main.css')),
    },
  ];
}

export const editorData = $(rawEditorData);

export const activeTab = $(0);

export const activeData = useMemo(() => {
  const activeTabId = activeTab();
  return editorData().find((tab) => tab.id === activeTabId);
});

export const resizing = $(false);

export const compiler = new CompilerWorker();

export const formatter = new FormatterWorker();
