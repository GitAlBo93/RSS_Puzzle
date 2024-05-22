//import App from "../../app";
//import {ICreatElement}  from '../../interface/interface';

export default class LoginPage {
    constructor() {
        this.loginPg();
        // Вызов функции для инициализации элементов на странице и добавление корневого элемента в body
        //const sectionElement = this.startPg();
        //document.body.appendChild(sectionElement);
    }

    loginPg(): HTMLElement {
        function createInputFLName(id: string, Placeholder: string): HTMLInputElement {
            // console.log("create");

            const inputFirstName = document.createElement('input');
            //        inputFirstName.type = "text";
            inputFirstName.id = id;
            inputFirstName.placeholder = Placeholder;
            //        console.log(id + Placeholder);
            //        inputField.style.margin = '5px';

            //Поле обязательно для заполнение
            inputFirstName.required = true;

            return inputFirstName;
        }

        function createLableFLName(Text: string): HTMLLabelElement {
            const lableFLName = document.createElement('label');
            //        lableFLName.title = "Lable";
            lableFLName.textContent = Text;
            return lableFLName;
        }

        const Section = document.createElement('section');
        Section.className = 'Section';
        //        document.body.appendChild(Section);

        const Container = document.createElement('form');
        Container.className = 'container';
        Section.appendChild(Container);

        const ContainerFName = document.createElement('div');
        ContainerFName.className = 'containerFName';
        Container.appendChild(ContainerFName);

        const ContainerLName = document.createElement('div');
        ContainerLName.className = 'containerLName';
        Container.appendChild(ContainerLName);

        const inputFirstName = createInputFLName('idFirstName', 'Укажите своё имя');
        const labelFirstName = createLableFLName('Имя: ');
        ContainerFName.appendChild(labelFirstName);
        ContainerFName.appendChild(inputFirstName);

        const inputLastName: HTMLInputElement = createInputFLName('idLastName', 'Укажите свою фамилию');
        const labelLastName = createLableFLName('Фамилия: ');
        ContainerLName.appendChild(labelLastName);
        ContainerLName.appendChild(inputLastName);

        const BtnStartGame = document.createElement('button');
        BtnStartGame.className = 'btnStartGame';
        BtnStartGame.textContent = 'Играть';
        Container.appendChild(BtnStartGame);
        //    console.log(inputField1);
        //    console.log(Container);
        // Пример добавления обработчика событий на кнопку
        BtnStartGame.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            console.log('Имя:', inputFirstName.value);
            console.log('Фамилия:', inputLastName.value);
        });

        return Section;
    }
}