import { Container, Graphics } from 'pixi.js';

export default class GamePad extends Container {
    private color = 0xffffff;

    constructor(color: number) {
        super();
        this.color = color;
        this.init();
    }

    private init() {
        const padGraphics = new Graphics();
        padGraphics.rect(0, 0, 50, 100);
        padGraphics.fill(this.color);
        this.addChild(padGraphics);
    }

}
