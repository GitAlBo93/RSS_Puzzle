// import LoginPage from './view/login_page/login_view';
// import StartPage from './view/start_page/start_view';
import Page2 from './view/test/test_page2/testp2';

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

        const Pages2 = new Page2('main');
        App.container.append(Pages2.renderP2());
    }
}

export default App;
