// import LoginPage from './view/login_page/login_view';
// import StartPage from './view/start_page/start_view';
import Page1 from './view/test/test_page1/testp1';
import Page2 from './view/test/test_page2/testp2';

import HrefTest from './view/test/href';
// import constructorView from './view/test/constructor';

class App {
    private static container: HTMLElement = document.body;

    static renderNewPage(idPage: string) {
        let page: Page1 | Page2 | null = null;

        if (idPage === 'idTest1') {
            page = new Page1();
        } else if (idPage === 'idTest2') {
            page = new Page2(idPage);
        }

        if (page) {
            const Pageses = page.render();
            this.container.innerHTML = '';
            this.container.appendChild(Pageses);
        }
    }

    private enableRouter() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            console.log(hash);
            App.renderNewPage(hash);
        });
    }

    constructor() {
        // this.start();
        //console.log("Приложение загружено");
        // let hashPage = window.location.hash.slice(1);
        if (window.location.hash) {
            App.renderNewPage(window.location.hash.slice(1));
            console.log('YES HASH');
        } else {
            App.renderNewPage('idTest1');
            window.location.hash = '#idTest1';
            console.log('Not HASH');
        }
        
        console.log(window.location.hash);
        
        this.enableRouter();
    }

    start() {
        // const PageLogin = new LoginPage();
        // document.body.append(PageLogin.loginPg());

        // const PageStart = new StartPage();
        // App.container.append(PageStart.startPg());

        function PAGES1() {
            const Pages1 = new Page1();
            App.container.append(Pages1.render());
        }

        function PAGES2() {
            const Pages2 = new Page2('Page2');
            App.container.append(Pages2.render());
        }

        function HREFS() {
            const Hrefs = new HrefTest('HrefTest');
            App.container.append(Hrefs.render());
        }

        HREFS();

        const BTN1 = document.getElementById('idHref1');
        BTN1?.addEventListener('click', () => {
            document.body.innerHTML = '';
            PAGES1();
            // HREFS();
            console.log('clickBTN1');
        });

        const BTN2 = document.getElementById('idHref2');
        BTN2?.addEventListener('click', () => {
            document.body.innerHTML = '';
            PAGES2();
            // HREFS();
            console.log('clickBTN2');
        });
    }
}

export default App;
