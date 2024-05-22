export default class StartPage {
    constructor(){
        this.startPg();
    }

    startPg(){
        const Section = document.createElement('section');
        Section.className = 'Section';

        const Container = document.createElement('form');
        Container.className = 'container';
        Section.appendChild(Container);

        const NameGame = document.createElement('h2');
        NameGame.className = 'name_Game';
        NameGame.textContent = 'RSS_Puzzle';
        Container.appendChild(NameGame);

        const Welcom = document.createElement('p');
        Welcom.className = 'welcom';
        Welcom.textContent = 'Welcom in Puzzle';
        Container.appendChild(Welcom);

        const TextGame = document.createElement('p');
        TextGame.className = 'text_Game';
        TextGame.textContent = 'Text_Text_text_TextText_Text_text_TextText_Text_text_TextText_Text_text_TextText_Text_text_Text';
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