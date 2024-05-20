class App {

    constructor() {
//console.log("Приложение загружено");
    }

start(){

    function createInputFLName(id: string, Placeholder: string): HTMLInputElement { 
        // console.log("create");

        const inputFirstName = document.createElement('input');
//        inputFirstName.type = "text";
        inputFirstName.id = id;
        inputFirstName.placeholder = Placeholder;
//        console.log(id + Placeholder);
//        inputField.style.margin = '5px';
        return inputFirstName
    }

    function createLableFLName (Text: string): HTMLLabelElement {
        const lableFLName = document.createElement('label');
//        lableFLName.title = "Lable";
        lableFLName.textContent = Text;
        return lableFLName
    }
    
    const Container = document.createElement('div');
    Container.className = "conteiner";
    document.body.appendChild(Container);

    const ContainerFName = document.createElement('div');
    ContainerFName.className = "conteinerFName";
    Container.appendChild(ContainerFName);

    const ContainerLName = document.createElement('div');
    ContainerLName.className = "conteinerLName";
    Container.appendChild(ContainerLName);

    const inputFirstName = createInputFLName('idFirstName', 'Укажите своё имя');
    const labelFirstName = createLableFLName ('Имя: ');
    ContainerFName.appendChild(labelFirstName);
    ContainerFName.appendChild(inputFirstName);

    const inputLastName = createInputFLName('idLastName', 'Укажите свою фамилию');
    const labelLastName = createLableFLName ('Фамилия: ');
    ContainerLName.appendChild(labelLastName);
    ContainerLName.appendChild(inputLastName);
 
    const BtnStartGame = document.createElement ('button');
    BtnStartGame.className = "btnStartGame";
    BtnStartGame.textContent = "Играть";
    Container.appendChild(BtnStartGame);
//    console.log(inputField1);
//    console.log(Container);
    
}

}

export default App;


// function createInputField(id: string, Placeholder: string): HTMLInputElement { const inputField = document.createElement('input');
//  inputField.type = 'текст';
//  inputField.id = идентификатор; 
//  inputField.placeholder = заполнитель;
//  inputField.style.margin = '5px';
//   вернуть поле ввода;
//  } 
// функция добавления элементов на страницу 
// function addInputFieldsToBody(): void { const inputField1 = createInputField('input1', 'Введите текст 1');
// const inputField2 = createInputField('input2', 'Введите текст 2'); 
// Создание контейнера для полей ввода
// constContainer = document.createElement('div');
// контейнер.appendChild(inputField1);
// контейнер.appendChild(inputField2); 
// Добавление контейнера в тело 
// document.body.appendChild(container); } 
// Вызов функции для добавления полей ввода на страницу
// addInputFieldsToBody();