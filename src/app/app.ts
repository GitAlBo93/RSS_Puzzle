import startPage from './view/start_page/start_view';

class App {
    constructor() {
        this.start();
        //console.log("Приложение загружено");
    }

    start() {
        const StartPage = new startPage();
        document.body.append(StartPage.startPg());
    }
}

export default App;
