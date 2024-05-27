//import App from "../../app";
//import {ICreatElement}  from '../../interface/interface';
import ConstructorView from '../constructor/constructor_view';
import './login.css';

const LoginDiv = [
    {
        ELEM: 'div',
        CLASSES: 'containerFName',
    },
    {
        ELEM: 'div',
        CLASSES: 'containerLName',
    },
];

export default class LoginPage extends ConstructorView {
    private Section: HTMLElement;

    constructor() {
        super();
        // this.loginPg();

        this.Section = document.createElement('section');
        this.Section.className = 'Section';
    }

    loginPg(): HTMLElement {
        function createInputFLName(id: string, Placeholder: string): HTMLInputElement {
            const inputFirstName = document.createElement('input');
            inputFirstName.id = id;
            inputFirstName.placeholder = Placeholder;
            inputFirstName.required = true;

            return inputFirstName;
        }

        function createLableFLName(Text: string): HTMLLabelElement {
            const lableFLName = document.createElement('label');
            lableFLName.textContent = Text;
            lableFLName.className = 'lableFLName';
            return lableFLName;
        }

        const Container = document.createElement('form');
        Container.className = 'container';
        this.Section.appendChild(Container);

        const ContainerGameName = document.createElement('h1');
        ContainerGameName.className = 'containerGName';
        ContainerGameName.innerText = 'RSS-Puzzle';
        Container.appendChild(ContainerGameName);

        LoginDiv.forEach((div) => {
            const divElem = this.constructorDiv(div.ELEM, div.CLASSES);
            Container.appendChild(divElem);
        });

        const inputFirstName = createInputFLName('idFirstName', 'Укажите своё имя');
        const labelFirstName = createLableFLName('Имя: ');
        ContainerFName.appendChild(labelFirstName);
        ContainerFName.appendChild(inputFirstName);

        const inputLastName: HTMLInputElement = createInputFLName('idLastName', 'Укажите свою фамилию');
        const labelLastName = createLableFLName('Фамилия: ');
        ContainerGameName.appendChild(labelLastName);
        ContainerGameName.appendChild(inputLastName);

        const BtnStartGame: HTMLButtonElement = document.createElement('button');
        BtnStartGame.className = 'btnStartGame';
        BtnStartGame.textContent = 'Game';
        Container.appendChild(BtnStartGame);

        BtnStartGame.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            console.log('Имя:', inputFirstName.value);
            console.log('Фамилия:', inputLastName.value);
        });

        return this.Section;
    }
}
