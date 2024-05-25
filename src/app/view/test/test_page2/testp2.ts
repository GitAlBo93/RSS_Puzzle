export default class Page2 {
    private conteiner: HTMLElement;
    static TEST2 = {
        ELEM: 'h1',
        CLASSES: 'classTestP2',
        TEXT: 'TextTestP2',
    };

    constructor(id: string){
        this.conteiner = document.createElement('div');
        this.conteiner.id = id;
    }
    //Приватный метод возвращает созданый h1 с классом и текстом(из renderP2)
    private testPage2(text: string){
        const TP2 = document.createElement(Page2.TEST2.ELEM);
        TP2.className = Page2.TEST2.CLASSES;
        TP2.innerText = text;
        return TP2;
    }
// Публичный метод. innertext вызывает testPage2 и передает в него text и добавляется в conteiner
    renderP2(){
        const innertext = this.testPage2(Page2.TEST2.TEXT);
        this.conteiner.append(innertext);
        return this.conteiner;
    }
}