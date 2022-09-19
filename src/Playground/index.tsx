import './index.scss';

import { compressToURL } from '@amoutonbrady/lz-string';
import { $, untrack } from 'voby';

import { Editor } from './Editor';
import { EditorTabs } from './EditorTabs';
import { Preview, reload } from './Preview';
import { editorDataAsJson } from './parsers';
import { activeData, formatter } from './shared';

export const Playground = () => {
  const cursorPosition = $(0);

  const format = () => {
    const data = untrack(activeData);
    if (!data) return;

    const { model, fileType } = data;
    formatter.addEventListener(
      'message',
      ({ data }: { data: { code: string; cursorOffset: number } }) => {
        model.setValue(data.code);
        cursorPosition(data.cursorOffset);
      },
      { once: true },
    );
    formatter.postMessage({
      code: model.getValue(),
      cursorOffset: untrack(cursorPosition),
      isCss: fileType === 'css',
    });
  };

  const share = () => {
    location.hash = compressToURL(JSON.stringify(editorDataAsJson()));
    navigator.clipboard.writeText(location.href);
  };

  return (
    <div class='playground'>
      <div class='playground__header'>
        <EditorTabs />
        <button class='icon--prettier' onClick={format} />
        <button class='icon--reload' onClick={reload} />
        <button class='icon--share' onClick={share} />
      </div>
      <input
        class='playground__mobile-switcher-input'
        id='playground-mobile-switcher'
        type='checkbox'
      />
      <label class='playground__mobile-switcher' for='playground-mobile-switcher'>
        code
        <div class='playground__mobile-switcher-visual' />
        output
      </label>
      <div class='playground__content'>
        <Editor cursorPosition={cursorPosition} />
        <Preview />
      </div>
    </div>
  );
};
