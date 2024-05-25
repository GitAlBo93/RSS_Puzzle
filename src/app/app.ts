// import LoginPage from './view/login_page/login_view';
// import StartPage from './view/start_page/start_view';
// import Page1 from './view/test/test_page1/testp1';
// import Page2 from './view/test/test_page2/testp2';

import HrefTest from './view/test/href';

class App {
    private static container: HTMLElement = document.body;
    constructor() {
        this.start();
        //console.log("Приложение загружено");
    }

    start() {
        // const PageLogin = new LoginPage();
        // document.body.append(PageLogin.loginPg());

        // const PageStart = new StartPage();
        // App.container.append(PageStart.startPg());

        // const Pages1 = new Page1();
        // App.container.append(Pages1.tPage1());

        // const Pages2 = new Page2('main');
        // App.container.append(Pages2.renderP2());

        const Hrefs = new HrefTest('main');
        App.container.append(Hrefs.hrefRend());
    }
}

export default App;
