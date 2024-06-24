import GamePage from './view/game_page/game_view';
import { LoginPage } from './view/login_page/login_view';
import StartPage from './view/start_page/start_view';

class App {
    private static container: HTMLElement = document.body;

    static renderNewPage(idPage: string) {
        let page: LoginPage | StartPage | GamePage | null = null;

        if (idPage === 'Login') {
            page = new LoginPage();
        } else if (idPage === 'Start') {
            page = new StartPage();
        } else if (idPage === 'Game') {
            page = new GamePage();
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
            App.renderNewPage(hash);
        });
    }

    constructor() {
        if (window.location.hash) {
            App.renderNewPage(window.location.hash.slice(1));
        } else if (!window.location.hash && localStorage.length == 0) {
            App.renderNewPage('Login');
            window.location.hash = '#Login';
        } else if (!window.location.hash && localStorage.length > 0) {
            App.renderNewPage('Game');
            window.location.hash = '#Game';
        }

        this.enableRouter();
    }
}

export default App;
