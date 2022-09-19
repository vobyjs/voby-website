import './editor.scss';

import { $, Observable } from 'voby';

import { MonacoEditor } from './MonacoEditor';
import { resizing } from './shared';

export const Editor = ({ cursorPosition }: { cursorPosition: Observable<number> }) => {
  const editorSize = $(50);

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

  return [
    <div class='editor' style={{ '--desktop-width': () => `${editorSize()}%` }}>
      <MonacoEditor position$={cursorPosition} />
    </div>,
    <div class='editor-resizer' onMouseDown={startResizing} onTouchStart={startResizing} />,
  ];
};
