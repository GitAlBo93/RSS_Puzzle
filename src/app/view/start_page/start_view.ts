/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/space-before-blocks */
// import ConstructorView from '../constructor/constructor_view';
import './start.css';
// import { getFLName } from '../login_page/login_view';

// export default class StartPage extends ConstructorView{
export default class StartPage {
    // eslint-disable-next-line @typescript-eslint/space-before-blocks
    constructor() {
        // super();
        this.render();
    }

    render(): HTMLElement {
        // const name = new getFLName();
        // name.sendFLName();
        console.log(localStorage.getItem('Name'));
        
        const Section = document.createElement('section');
        Section.className = 'sectionStart';

        const Container = document.createElement('form');
        Container.className = 'containerStart';
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
        // Welcom.textContent = 'Welcom in Puzzle ' + name.sendFLName();
        Welcom.textContent = 'Welcom in Puzzle ' + localStorage.getItem('Name') + ' ' + localStorage.getItem('LastName');
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

        BtnWelcom.addEventListener('click', ()=> {
            window.location.hash = 'Game';
        });

        const BtnLogOff = document.createElement('button');
        BtnLogOff.className = 'logOff_btn';
        BtnLogOff.textContent = 'Выход';
        Container.appendChild(BtnLogOff);

        BtnLogOff.addEventListener('click', ()=> {
            localStorage.clear();
            window.location.hash = 'Login';
            // console.log(localStorage);
            
        })

        return Section;
    }
}
