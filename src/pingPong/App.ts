import { Application, Rectangle, Container, Graphics } from 'pixi.js';

const PingPong = (divContainer) => {
    (async () => {
        const app = new Application();
        await app.init({ background: '#1099bb', width: 680, height: 400 });
        divContainer.appendChild(app.canvas);

        const padRect = new Rectangle(0, 0, 50, 100);

        const userPad = new Container({
            x: 0,
            y: 0,
            width: padRect.width,
            height: padRect.height
        });
        const graphics = new Graphics();
        graphics.rect(0, 0, padRect.width, padRect.height);
        graphics.fill(0xd69e1a);
        userPad.addChild(graphics);
        app.stage.addChild(userPad);

        const computerPad = new Container({
            x: app.screen.width - padRect.width,
            y: 0,
            width: padRect.width,
            height: padRect.height
        });
        const graphics2 = new Graphics();
        graphics2.rect(0, 0, padRect.width, padRect.height);
        graphics2.fill(0xd621cc);
        computerPad.addChild(graphics2);
        app.stage.addChild(computerPad);

        app.ticker.add((time) => {
        });
    })();
}

export default PingPong;