export default class Page1 {
   static TEST1 = {
        ELEM: 'h1',
        CLASSES: 'classTestP1',
        TEXT: 'TextTestP1',
    };

    constructor(){

    }

    tPage1(){
        const TP1 = document.createElement(Page1.TEST1.ELEM);
        TP1.className = Page1.TEST1.CLASSES;
        TP1.innerText = Page1.TEST1.TEXT;
        document.body.append(TP1);
    }
}