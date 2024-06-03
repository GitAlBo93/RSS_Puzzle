import ConstructorView from '../constructor/constructor_view';
import CollectionLevel1 from '../../../data/wordCollectionLevel1.json';

import './game.css';
import { log } from 'console';

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

        const LevelLable = this.constructorLable('lable', 'levelLable', 'Level: ');
        LevelDiv.appendChild(LevelLable);
        const LevelSelector = this.constructorDiv('select', 'levelSelector', 'levelSelectorID');
        LevelDiv.appendChild(LevelSelector);

        const LevelOtion = [
            { type: 'option', className: 'levelOption1', id: 'lvlOption1ID', value: '1', textContent: '1 ' },
            { type: 'option', className: 'levelOption2', id: 'lvlOption2ID', value: '2', textContent: '2 ' },
            { type: 'option', className: 'levelOption3', id: 'lvlOption3ID', value: '3', textContent: '3 ' },
            { type: 'option', className: 'levelOption4', id: 'lvlOption4ID', value: '4', textContent: '4 ' },
            { type: 'option', className: 'levelOption5', id: 'lvlOption5ID', value: '5', textContent: '5 ' },
            { type: 'option', className: 'levelOption6', id: 'lvlOption6ID', value: '6', textContent: '6 ' },
        ];
        LevelOtion.forEach((element) => {
            const option = this.constructorSelectOption(
                element.type,
                element.className,
                element.id,
                element.value,
                element.textContent
            );
            LevelSelector.appendChild(option);
        });
        const PageLable = this.constructorLable('lable', 'pageLable', 'Page: ');
        LevelDiv.appendChild(PageLable);
        const PageSelector = this.constructorDiv('select', 'pageSelector', 'pageSelectorID') as HTMLSelectElement;
        PageSelector.addEventListener('change', SelectPageSelector);

        LevelDiv.appendChild(PageSelector);
        // const PageOptions1 = this.constructorSelectOption('option', 'PageOptions1', 'PageOptions1ID', '1', '1');
        // PageSelector.appendChild(PageOptions1);
        // const PageOptions2 = this.constructorSelectOption('option', 'PageOptions2', 'PageOptions2ID', '2', '2');
        // PageSelector.appendChild(PageOptions2);
        // const PageOptions3 = this.constructorSelectOption('option', 'PageOptions3', 'PageOptions3ID', '3', '3');
        // PageSelector.appendChild(PageOptions3);

        const SetBtnDiv = this.constructorForm('div', 'setBtnDiv');
        SettingDiv.appendChild(SetBtnDiv);

        const TaskDiv = this.constructorDiv('div', 'taskDiv', 'taskDivID');
        Section.appendChild(TaskDiv);

        const SpeakTaskDiv = this.constructorDiv('div', 'speakTaskDiv', 'speakTaskDivID');
        TaskDiv.appendChild(SpeakTaskDiv);

        const SentTaskDiv = this.constructorDiv('div', 'sentTaskDiv', 'sentTaskDivID');
        TaskDiv.appendChild(SentTaskDiv);

        const PuzzleDiv = this.constructorDiv('div', 'puzzleDiv', 'puzzleDivID');
        // PuzzleDiv.style.backgroundImage = "url('../../../../../images/body_img.sjpg')";
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
        }
        const Collection1 = CollectionLevel1;
        const LengtSentence = Collection1.rounds[0].words.length - 1;
        // const LengtSentence = Collection1.rounds.length - 1;

        console.log(Collection1.rounds.length);
        let indexSelector = 1;

        for (indexSelector = 1; indexSelector < Collection1.rounds.length + 1; indexSelector++) {
            const element = this.constructorSelectOption(
                'option',
                'PageOptions' + indexSelector,
                'PageOptions' + String(indexSelector),
                String(indexSelector),
                String(indexSelector)
            );
            PageSelector.appendChild(element);
        }
        let randomNumber = randomFunction(0, LengtSentence);
        // let randomNumber: number;
        let textExampleRandom: number = Number(PageSelector.value);

        // let insert = PageSelector.addEventListener('change',);

        // PageSelector.addEventListener('change', SelectPageSelector);

        console.log(textExampleRandom + ' ' + randomNumber);

        function SelectPageSelector() {
            if (textExampleRandom === randomNumber) {
                console.log('yclovie');
            } else {
                // randomNumber = randomFunction(0, LengtSentence);
                console.log('NEEyclovie');
                randomNumber = Number(PageSelector.value);
            }

            console.log('Randommm' + randomNumber);
            return randomNumber;
        }

        // console.log(Collection1.rounds[0]);
        console.log('Randommmin' + randomNumber);

        // const SentenceSplitEN = Collection1.rounds[0].words[randomFunction(0, LengtSentence)].textExample.split(' ');
        const SentenceSplitEN = Collection1.rounds[0].words[randomNumber].textExample.split(' ');
        const SentenceSplitRUS = Collection1.rounds[0].words[randomNumber].textExampleTranslate;
        //String(SentenceSplit).replace(/,/g, ' ') - преобразование объекта в строку и замена запятых на пробелы
        // const SentTaskRus = this.constructorH1('h2', 'sentTaskRus', String(SentenceSplit).replace(/,/g, ' '));
        const SentTaskRus = this.constructorH1('h2', 'sentTaskRus', String(SentenceSplitRUS));
        SentTaskDiv.appendChild(SentTaskRus);

        console.log('random ' + randomFunction(0, LengtSentence)); //Number
        console.log('SentSplit ' + typeof SentenceSplitEN); //предложение

        SentenceSplitEN.forEach((world) => {
            const testWorlds = this.constructorH1('h1', 'testWorldsClass', world);
            SentencePuzzleDiv.appendChild(testWorlds);
        });

        return Section;
    }
}
