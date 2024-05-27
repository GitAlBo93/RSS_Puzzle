export default class ConstructorView {
    constructor() {}

    constructorRender(ELEM: string, CLASSES: string, TEXT: string, ID: string) {
        const element = document.createElement(ELEM);
        element.className = CLASSES;
        element.innerText = TEXT;
        element.id = ID;
        return element;
    }
}
