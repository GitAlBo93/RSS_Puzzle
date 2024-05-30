import ConstructorView from '../constructor/constructor_view';
import './game.css';

export default class GamePage extends ConstructorView {
    constructor() {
        super();
        this.render();
    }

    render() {
        const Section = document.createElement('section');
        Section.className = 'sectionGame';

        const TaskDiv = this.constructorDiv('div', 'taskDiv', 'taskDivID');
        Section.appendChild(TaskDiv);

        const PuzzleDiv = this.constructorDiv('div', 'puzzleDiv', 'puzzleDivID');
        Section.appendChild(PuzzleDiv);

        const SentenceDiv = this.constructorDiv('div', 'sentenceDiv', 'sentenceDivID');
        Section.appendChild(SentenceDiv);

        const SettingDiv = this.constructorDiv('div', 'settingDiv', 'settingDivID');
        Section.appendChild(SettingDiv);

        return Section;
    }
}
