/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/space-before-blocks */
// import ConstructorView from '../constructor/constructor_view';
import './start.css';

// export default class StartPage extends ConstructorView{
export default class StartPage {
    // eslint-disable-next-line @typescript-eslint/space-before-blocks
    constructor() {
        // super();
        this.startPg();
    }

    startPg(): HTMLElement {
        const Section = document.createElement('section');
        Section.className = 'Section';

        const Container = document.createElement('form');
        Container.className = 'container';
        Section.appendChild(Container);

        // const NameGame = document.createElement('h2');
        // NameGame.className = 'name_Game';
        // NameGame.textContent = 'RSS_Puzzle';
        // Container.appendChild(NameGame);

        // const TYPE = 'h2';
        // const CLASESS = 'name_Game';
        // const TEXT = 'RSS_Puzzle';
        // this.constViewP(TYPE, CLASESS, TEXT);

        const Welcom = document.createElement('p');
        Welcom.className = 'welcom';
        Welcom.textContent = 'Welcom in Puzzle';
        Container.appendChild(Welcom);

        const TextGame = document.createElement('p');
        TextGame.className = 'text_Game';
        TextGame.textContent =
            'Погрузитесь в непревзойденное испытание английского языка! Составляйте предложения из перепутанных слов в этой интерактивной игре. Благодаря различным уровням сложности и полезным подсказкам, это идеальный способ улучшить свои навыки английского языка, весело проводя время!';
        Container.appendChild(TextGame);

        const BtnWelcom = document.createElement('button');
        BtnWelcom.className = 'welcom_btn';
        BtnWelcom.textContent = 'Game Start';
        Container.appendChild(BtnWelcom);

        const BtnLogOff = document.createElement('button');
        BtnLogOff.className = 'logOff_btn';
        BtnLogOff.textContent = 'Выход';
        Container.appendChild(BtnLogOff);

        return Section;
    }
}
