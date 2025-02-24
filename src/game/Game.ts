import { Application } from 'pixi.js';
import GamePad from './GamePad';

export default class PingPong {
    private app: Application;

    constructor(divContainer: HTMLElement) {
        this.app = new Application();
        this.init(divContainer);
    }

    private async init(divContainer: HTMLElement): Promise<void> {
        await this.app.init({ 
            background: '#1099bb', 
            width: 680, 
            height: 400 
        });
        divContainer.appendChild(this.app.canvas);

        const userPad: GamePad = new GamePad();
        this.app.stage.addChild(userPad);

        const computerPad: GamePad = new GamePad();
        this.app.stage.addChild(computerPad);

        this.app.ticker.add((time) => {
            // Animation logic goes here
        });
    }
}
