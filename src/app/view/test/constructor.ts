export default class constructorView{

    constructor(){
    }

    constructorRender(ELEM: string, CLASSES: string, TEXT: string){
        const element = document.createElement(ELEM);
        element.className = CLASSES;
        element.innerText = TEXT;
        return element;
    }

}