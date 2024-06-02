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

        const SettingDiv = this.constructorDiv('div', 'settingDiv', 'settingDivID');
        Section.appendChild(SettingDiv);

            const  LevelDiv = this.constructorForm('div', 'levelDiv');
            SettingDiv.appendChild(LevelDiv);

            const  SetBtnDiv = this.constructorForm('div', 'setBtnDiv');
            SettingDiv.appendChild(SetBtnDiv);

        const TaskDiv = this.constructorDiv('div', 'taskDiv', 'taskDivID');
        Section.appendChild(TaskDiv);

            const SpeakTaskDiv = this.constructorDiv('div', 'speakTaskDiv', 'speakTaskDivID');
            TaskDiv.appendChild(SpeakTaskDiv);

            const SentTaskDiv = this.constructorDiv('div', 'sentTaskDiv', 'sentTaskDivID');
            TaskDiv.appendChild(SentTaskDiv);

        const PuzzleDiv = this.constructorDiv('div', 'puzzleDiv', 'puzzleDivID');
        Section.appendChild(PuzzleDiv);

        const SentenceDiv = this.constructorDiv('div', 'sentenceDiv', 'sentenceDivID');
        Section.appendChild(SentenceDiv);

            const SentencePuzzleDiv = this.constructorDiv('div', 'sentPuzzleDiv', 'sentPuzzleDivID');
            SentenceDiv.appendChild(SentencePuzzleDiv);

            const BTNSentenceDiv = this.constructorDiv('div', 'BTNSentDiv', 'BTNSentDivID');
            SentenceDiv.appendChild(BTNSentenceDiv);

            const worlds = 'Они прибыли в школу в 7 часов утра';
            let worldsSplit = worlds.split(' ');
            console.log(worldsSplit);

            worldsSplit.forEach((world) =>{
            const testWorlds = this.constructorH1('h1', 'testWorldsClass', world);
            SentenceDiv.appendChild(testWorlds);  
            });


        

        return Section;
    }
}
