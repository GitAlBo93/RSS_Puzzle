import constructorView from "../constructor";

export default class Page1 extends constructorView{
    private conteiner: HTMLElement;
   static TEST1 = {
        ELEM: 'h1',
        CLASSES: 'classTestP1',
        TEXT: 'TextTestP1',
    };

    constructor(){
        super();
        this.conteiner = document.createElement('div');
    }

    // tPage1(){
    //     const TP1 = document.createElement(Page1.TEST1.ELEM);
    //     TP1.className = Page1.TEST1.CLASSES;
    //     TP1.innerText = Page1.TEST1.TEXT;
    //     document.body.append(TP1);
    // }

    tPage1(){
        const innertext = this.constructorRender(Page1.TEST1.ELEM, Page1.TEST1.CLASSES, Page1.TEST1.TEXT);
        // document.body.append(innertext);
        this.conteiner.append(innertext);
        return this.conteiner;
    }
}