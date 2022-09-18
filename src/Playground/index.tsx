import './index.scss';

import { Editor } from './Editor';
import { Preview } from './Preview';

export const Playground = () => (
  <div class='playground'>
    <Editor />
    <Preview />
  </div>
);
