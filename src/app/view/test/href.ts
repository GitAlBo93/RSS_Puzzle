import constructorView from './constructor';

const hrefHref = [
    {
        ELEM: 'button',
        CLASSES: 'hrefTestP1',
        TEXT: 'HREF1',
        ID: 'idHref1',
    },
    {
        ELEM: 'button',
        CLASSES: 'hrefTestP2',
        TEXT: 'HREF2',
        ID: 'idHref2',
    },
];

export default class HrefTest extends constructorView {
    private conteiner: HTMLElement;

    constructor(id: string) {
        super();
        this.conteiner = document.createElement('div');
        this.conteiner.id = id;
    }

    render() {
        hrefHref.forEach((href) => {
            const innertext = this.constructorRender(href.ELEM, href.CLASSES, href.TEXT, href.ID);
            this.conteiner.append(innertext);
        });

        return this.conteiner;
    }
}
