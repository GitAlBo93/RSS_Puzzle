import StartPage from './view/start_page/start_view';

class App {
    constructor() {
        this.start();
        //console.log("Приложение загружено");
    }

    start() {
        const PageStart = new StartPage();
        document.body.append(PageStart.startPg());
    }
}

export default App;
