import { Container, Graphics } from 'pixi.js';

export default class GameBall extends Container {
    private color = 0xffffff;

    constructor(color: number) {
        super();
        this.color = color;
        this.init();
    }

    private init() {
        const padGraphics = new Graphics();
        padGraphics.circle(0, 0, 10);
        padGraphics.fill(this.color);
        this.addChild(padGraphics);
    }

}
