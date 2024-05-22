//import LoginPage from './view/login_page/login_view';
import StartPage from './view/start_page/start_view';

class App {
    constructor() {
        this.start();
        //console.log("Приложение загружено");
    }

    start() {
        // const PageLogin = new LoginPage();
        // document.body.append(PageLogin.loginPg());

        const PageStart = new StartPage();
        document.body.append(PageStart.startPg());
    }
}

export default App;
