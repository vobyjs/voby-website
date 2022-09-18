import './editor.scss';

import { $, untrack } from 'voby';

import { EditorTabs } from './EditorTabs';
import { MonacoEditor } from './MonacoEditor';
import { activeData, formatter, resizing } from './shared';

export const Editor = () => {
  const editorSize = $(50);
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

  const startResizing = () => {
    resizing(true);
    const onResize = (event: MouseEvent | TouchEvent) => {
      let x;
      if (event.type === 'touchmove') {
        x = (event as TouchEvent).changedTouches[0].clientX;
      } else {
        x = (event as MouseEvent).x;
      }
      let newVal = (x / document.documentElement.clientWidth) * 100;
      if (newVal > 75) newVal = 75;
      else if (newVal < 25) newVal = 25;
      editorSize(newVal);
    };
    const end = () => {
      window.removeEventListener('mousemove', onResize);
      window.removeEventListener('touchmove', onResize);
      resizing(false);
    };
    window.addEventListener('mousemove', onResize);
    window.addEventListener('touchmove', onResize);
    window.addEventListener('mouseup', end);
    window.addEventListener('touchend', end);
  };

  return (
    <>
      <div class='editor' style={{ width: () => `${editorSize()}%` }}>
        <div class='playground-header'>
          <EditorTabs />
          <button class='playground-format' onClick={format}>
            <div class='icon--prettier' />
          </button>
        </div>
        <MonacoEditor position$={cursorPosition} />
      </div>
      <div class='editor-resizer' onMouseDown={startResizing} onTouchStart={startResizing} />
    </>
  );
};
