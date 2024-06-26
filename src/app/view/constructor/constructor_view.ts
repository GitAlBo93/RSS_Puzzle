// import { url } from 'inspector';
// import Image from '../../../img/loud_on.png';

export default class ConstructorView {
    constructor() {
        // const images: string[] = importAll(require.context('./img', true, /\.(png|jpe?g|gif|svg)$/));
    }

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

    constructorH1(ELEM: string, CLASSES: string, ID: string, TEXT: string) {
        const constH1 = document.createElement(ELEM);
        constH1.className = CLASSES;
        constH1.id = ID;
        constH1.innerText = TEXT;
        return constH1;
    }

    constructorDiv(ELEM: string, CLASSES: string, ID: string) {
        const constDiv = document.createElement(ELEM);
        constDiv.className = CLASSES;
        constDiv.id = ID;
        return constDiv;
    }

    constructorSelectOption(ELEM: string, CLASSES: string, ID: string, VALUE: string, TEXT: string) {
        const consSelect = document.createElement(ELEM) as HTMLSelectElement;
        consSelect.className = CLASSES;
        consSelect.id = ID;
        consSelect.value = VALUE;
        consSelect.textContent = TEXT;
        return consSelect;
    }

    // importAll(r: __WebpackModuleApi.RequireContext): string[] {
    //     return r.keys().map(r);
    // }
    constructorIMG(ImageURL: string, ALT: string, CLASS: string, ID: string, DATA: string) {
        const consIMG = document.createElement('img');
        consIMG.src = ImageURL;
        consIMG.alt = ALT;
        consIMG.className = CLASS;
        consIMG.id = ID;
        consIMG.setAttribute('data-state', DATA);
        return consIMG;
    }
}
