export default class ConstructorView {
    constructor() {}

    constructorLable(ELEM: string, CLASSES: string, TEXT: string) {
        const constLable = document.createElement(ELEM);
        constLable.className = CLASSES;
        constLable.innerText = TEXT;
        return constLable;
    }

    constructorInput(ELEM: string, CLASSES: string, TEXT: string, ID: string, REQUIRED: true) {
        const constInput = document.createElement(ELEM) as HTMLInputElement;
        constInput.className = CLASSES;
        constInput.placeholder = TEXT;
        constInput.id = ID;
        constInput.required = REQUIRED;
        return constInput;
    }

    constructorForm(ELEM: string, CLASSES: string) {
        const constForm = document.createElement(ELEM) as HTMLFormElement;
        constForm.className = CLASSES;
        return constForm;
    }

    constructorH1(ELEM: string, CLASSES: string, TEXT: string) {
        const constH1 = document.createElement(ELEM);
        constH1.className = CLASSES;
        constH1.innerText = TEXT;
        return constH1;
    }

    constructorDiv(ELEM: string, CLASSES: string, ID: string) {
        const constDiv = document.createElement(ELEM) as HTMLDivElement;
        constDiv.className = CLASSES;
        constDiv.id = ID;
        return constDiv;
    }
}
