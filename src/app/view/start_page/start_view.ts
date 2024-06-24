import './start.css';

export default class StartPage {
    constructor() {
        this.render();
    }

    render(): HTMLElement {
        const Section = document.createElement('section');
        Section.className = 'sectionStart';

        const Container = document.createElement('form');
        Container.className = 'containerStart';
        Section.appendChild(Container);

        const Welcom = document.createElement('p');
        Welcom.className = 'welcom';
        Welcom.textContent =
            'Welcom in Puzzle ' + localStorage.getItem('Name') + ' ' + localStorage.getItem('LastName');
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

        BtnWelcom.addEventListener('click', () => {
            window.location.hash = 'Game';
        });

        const BtnLogOff = document.createElement('button');
        BtnLogOff.className = 'logOff_btn';
        BtnLogOff.textContent = 'Выход';
        Container.appendChild(BtnLogOff);

        BtnLogOff.addEventListener('click', () => {
            localStorage.clear();
            window.location.hash = 'Login';
        });

        return Section;
    }
}
