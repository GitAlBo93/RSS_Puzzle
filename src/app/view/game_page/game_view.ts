import ConstructorView from '../constructor/constructor_view';
import CollectionLevel1 from '../../../data/wordCollectionLevel1.json';

import './game.css';

export default class GamePage extends ConstructorView {

    constructor() {
        super();
        this.render();
        // console.log(CollectionWorld);
        // const elem = CollectionWorld;
        // console.log(elem.rounds[0].words[0].textExampleTranslate);
    }

    render() {

        const Section = document.createElement('section');
        Section.className = 'sectionGame';

        const SettingDiv = this.constructorDiv('div', 'settingDiv', 'settingDivID');
        Section.appendChild(SettingDiv);

        const LevelDiv = this.constructorForm('div', 'levelDiv');
        SettingDiv.appendChild(LevelDiv);

        const SetBtnDiv = this.constructorForm('div', 'setBtnDiv');
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

        // const randomFunct = (min: number, max: number): number => {
        // return min + Math.floor((max - min + 1) * Math.random());
        // };

        // Блок с выбором рандомных предложений
        function randomFunction(min: number, max: number) {
            return min + Math.floor((max - min + 1) * Math.random());
        };
        const Collection1 = CollectionLevel1;
        const LengtSentence = Collection1.rounds[0].words.length - 1;
        const SentenceSplit = Collection1.rounds[0].words[randomFunction(0, LengtSentence)].textExampleTranslate.split(' ');
        // console.log(worlds.rounds[0]);
        // console.log(lengtWords);
        console.log(randomFunction(0, LengtSentence));
        SentenceSplit.forEach((world) => {
            const testWorlds = this.constructorH1('h1', 'testWorldsClass', world);
            SentencePuzzleDiv.appendChild(testWorlds);
        });

        return Section;
    }
}
