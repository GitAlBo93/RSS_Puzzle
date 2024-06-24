import './login.css';

class LoginPage {
    constructor() {
        this.render();
        // Вызов функции для инициализации элементов на странице и добавление корневого элемента в body
        //const sectionElement = this.startPg();
        //document.body.appendChild(sectionElement);
    }

    render(): HTMLElement {
        function createInputFLName(id: string, Placeholder: string, MINLENGTH: number): HTMLInputElement {
            const inputFirstName = document.createElement('input');
            inputFirstName.id = id;
            inputFirstName.placeholder = Placeholder;

            //Поле обязательно для заполнение
            inputFirstName.required = true;
            inputFirstName.type = 'text';
            inputFirstName.minLength = MINLENGTH;
            return inputFirstName;
        }

        function createLableFLName(Text: string): HTMLLabelElement {
            const lableFLName = document.createElement('label');
            lableFLName.textContent = Text;
            lableFLName.className = 'lableFLName';
            return lableFLName;
        }

        const Section = document.createElement('section');
        Section.className = 'sectionLogin';

        const Container = document.createElement('form');
        Container.className = 'containerLogin';
        Section.appendChild(Container);

        const ContainerGameName = document.createElement('h1');
        ContainerGameName.className = 'containerGName';
        ContainerGameName.innerText = 'RSS-Puzzle';
        Container.appendChild(ContainerGameName);

        const ContainerFName = document.createElement('div');
        ContainerFName.className = 'containerFName';
        Container.appendChild(ContainerFName);

        const ContainerLName = document.createElement('div');
        ContainerLName.className = 'containerLName';
        Container.appendChild(ContainerLName);

        const inputFirstName = createInputFLName('idFirstName', 'Укажите своё имя', 3);
        const labelFirstName = createLableFLName('Имя: ');
        ContainerFName.appendChild(labelFirstName);
        ContainerFName.appendChild(inputFirstName);

        const inputLastName: HTMLInputElement = createInputFLName('idLastName', 'Укажите свою фамилию', 4);
        const labelLastName = createLableFLName('Фамилия: ');
        ContainerLName.appendChild(labelLastName);
        ContainerLName.appendChild(inputLastName);

        const BtnStartGame: HTMLButtonElement = document.createElement('button');
        BtnStartGame.className = 'btnStartGame';
        BtnStartGame.textContent = 'Game';
        BtnStartGame.disabled = true;
        Container.appendChild(BtnStartGame);

        // Пример добавления обработчика событий на кнопку
        BtnStartGame.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.hash = 'Start';
            localStorage.setItem('Name', inputFirstName.value);
            localStorage.setItem('LastName', inputLastName.value);
        });

        window.addEventListener('input', function () {
            if (inputFirstName.validity.valid && inputLastName.validity.valid) {
                BtnStartGame.disabled = false;
            } else {
                BtnStartGame.disabled = true;
            }
        });
        return Section;
    }
}

export { LoginPage };
