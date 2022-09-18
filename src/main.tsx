import './main.scss';

import { render } from 'voby';

import { Header } from './Header';
import { Playground } from './Playground';

render([Header, Playground], document.body);
