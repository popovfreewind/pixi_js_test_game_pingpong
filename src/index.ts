import './style.css';
import PingPong from './game/Game';

const domNode = document.getElementById('root') as HTMLElement;
new PingPong(domNode);