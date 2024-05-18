class App {

    constructor() {
//console.log("Приложение загружено");
    }

start(){

    function createInputFLName(id: string, Placeholder: string): HTMLInputElement { 
        console.log("create");

        const inputFirstName = document.createElement('input');
        inputFirstName.type = "text";
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
    document.body.appendChild(Container);

    const inputFirstName = createInputFLName('idFirstName', 'Укажите своё имя');
    const inputLastName = createInputFLName('idLastName', 'Укажите свою фамилию');
    const labelFirstName = createLableFLName ('Имя: ');
    const labelLastName = createLableFLName ('Фамилия: ');

    Container.appendChild(labelFirstName);
    Container.appendChild(inputFirstName);
    Container.appendChild(labelLastName);
    Container.appendChild(inputLastName);

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