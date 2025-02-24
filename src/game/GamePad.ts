import { Container, Graphics } from 'pixi.js';

export default class GamePad extends Container {

    constructor() {
        super();
        this.init();
    }

    private init() {
        const padGraphics = new Graphics();
        padGraphics.rect(0, 0, 50, 100);
        padGraphics.fill(0xd621cc);
        this.addChild(padGraphics);
    }

}
