import { Application } from 'pixi.js';
import GamePad from './GamePad';
import GameBall from './GameBall';

export default class PingPong {
    private readonly backgroundColor = '#1099bb';
    private readonly width = 680;
    private readonly height = 400;
    private readonly padWidth = 50;
    private readonly padHeight = 100;
    private readonly ballRadius = 10;
    private readonly userPadColor = 0xd622a9;
    private readonly computerPadColor = 0xf88000;
    private readonly ballColor = 0xf0fe00;

    private app: Application;
    private userPad: GamePad;
    private computerPad: GamePad;
    private ball: GameBall;

    constructor(divContainer: HTMLElement) {
        this.app = new Application();
        this.userPad = new GamePad(this.userPadColor);
        this.computerPad = new GamePad(this.computerPadColor);
        this.ball = new GameBall(this.ballColor);
        this.init(divContainer);
    }

    private async init(divContainer: HTMLElement): Promise<void> {
        await this.app.init({
            background: this.backgroundColor,
            width: this.width,
            height: this.height,
        });
        divContainer.appendChild(this.app.canvas);

        this.computerPad.x = this.width - this.computerPad.width;
        this.ball.x = this.width / 2;
        this.ball.y = this.height / 2;

        this.app.stage.addChild(this.userPad, this.computerPad, this.ball);

        this.app.ticker.add((time) => {
            // Animation logic goes here
        });
    }
}
