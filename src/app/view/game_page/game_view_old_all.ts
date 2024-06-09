import ConstructorView from '../constructor/constructor_view';
import CollectionLevel1 from '../../../data/wordCollectionLevel1.json';

import './game.css';

export default class GamePage extends ConstructorView {
    // private massClickSentenc: string[] = [];

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
        const ImgHelp = this.constructorIMG();
        SettingDiv.appendChild(SetBtnDiv);
        SetBtnDiv.appendChild(ImgHelp);

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
        // SentencePuzzleDiv.addEventListener('click', clickBTNWorlds);

        const BTNSentenceDiv = this.constructorDiv('div', 'BTNSentDiv', 'BTNSentDivID');
        SentenceDiv.appendChild(BTNSentenceDiv);

        // const randomFunct = (min: number, max: number): number => {
        // return min + Math.floor((max - min + 1) * Math.random());
        // };

        // Блок с выбором рандомных предложений
        // function randomFunction(min: number, max: number) {
        //     return min + Math.floor((max - min + 1) * Math.random());
        // }

        function randomArr(ArraySent: number[]) {
            const randomElement = Math.floor(Math.random() * ArraySent.length);
            console.log(randomElement);
            return randomElement;
        }
        // randomArr(Collection1.rounds[0].words);

        const Collection1 = CollectionLevel1;
        const LengtSentence = Collection1.rounds[0].words.length - 1;

        const ArraySent = Array.from({ length: LengtSentence + 1 }, (_, i) => i);
        console.log(ArraySent);

        // const LengtSentence = Collection1.rounds[0].words;
        // const LengtSentence = Collection1.rounds.length - 1;

        console.log(Collection1.rounds[0].words);
        console.log(LengtSentence);

        for (let indexSelector = 1; indexSelector < Collection1.rounds.length + 1; indexSelector++) {
            const element = this.constructorSelectOption(
                'option',
                'PageOptions' + indexSelector,
                'PageOptions' + String(indexSelector),
                String(indexSelector),
                String(indexSelector)
            );
            PageSelector.appendChild(element);
        }
        let randomNumber = randomArr(ArraySent);
        // let randomNumber = randomFunction(0, ArraySent.length - 1);
        // let randomNumber: number;
        let textExampleRandom: number = Number(PageSelector.value);

        // let insert = PageSelector.addEventListener('change',);

        // PageSelector.addEventListener('change', SelectPageSelector);

        // console.log(textExampleRandom + ' ' + randomNumber);

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
        const SentenceSplitEN = Collection1.rounds[0].words[randomNumber].textExample
            .split(' ')
            .sort(() => Math.random() - 0.7);
        const SentenceSplitENEQ = Collection1.rounds[0].words[randomNumber].textExample.split(' ');
        const SentenceSplitRUS = Collection1.rounds[0].words[randomNumber].textExampleTranslate;
        console.log(SentenceSplitENEQ);

        // // Добавляем в блок Пазла все предложения на нулевом уровне
        // for (let i = 0; i < Collection1.rounds[0].words.length; i++) {
        //     const split: string = Collection1.rounds[0].words[i].textExampleTranslate;
        //     const puzzleSplitRus = this.constructorH1('h4', 'puzzleSplit', split);
        //     PuzzleDiv.appendChild(puzzleSplitRus);
        // }

        //String(SentenceSplit).replace(/,/g, ' ') - преобразование объекта в строку и замена запятых на пробелы
        // const SentTaskRus = this.constructorH1('h2', 'sentTaskRus', String(SentenceSplit).replace(/,/g, ' '));
        const SentTaskRus = this.constructorH1('h2', 'sentTaskRus', 'sentTaskRusID', String(SentenceSplitRUS));
        SentTaskDiv.appendChild(SentTaskRus);

        // console.log('random ' + randomFunction(0, LengtSentence)); //Number
        console.log(SentenceSplitEN); //предложение

        SentenceSplitEN.forEach((world) => {
            const testWorlds = this.constructorH1('button', 'testWorldsClass' + world, 'testWorldsID' + world, world);
            // const PuzzleSentRus = this.constructorH1('h4', 'puzzleSplit none', 'puzzleSplit' + world, world);
            SentencePuzzleDiv.appendChild(testWorlds);
            // PuzzleDiv.appendChild(PuzzleSentRus);
            testWorlds.addEventListener('click', () => clickBTNWorlds(world));
            // return world;
        });

        const massClickSentenc: string[] = [];

        const clickBTNWorlds = (world: string) => {
            massClickSentenc.push(world);
            // console.log(world);
            console.log(massClickSentenc);
            document.getElementById('testWorldsID' + world)?.classList.add('none');
            const PuzzleSentRus = this.constructorH1('button', 'puzzleSplit', 'puzzleSplit' + world, world);
            PuzzleDiv.appendChild(PuzzleSentRus);
            // clickBtn?.classList.add('none');
            // document.getElementById('puzzleSplit' + world)?.classList.remove('none');
            // PuzzleBtn?.classList.remove('none');
            ArrEq(SentenceSplitENEQ, massClickSentenc);
        };

        function ArrEq(SentenceSplitENEQ: string[], massClickSentenc: string[]) {
            if (SentenceSplitENEQ.toString() === massClickSentenc.toString()) {
                ArrOk();
                console.log(randomNumber);
                console.log(ArraySent);
                console.log('Массивы совпадают');
            } else {
                console.log(massClickSentenc);
            }
        }
        console.log(massClickSentenc);

        const ArrOk = () => {
            ArraySent.splice(randomNumber, 1);
            const BtnSentOk = this.constructorH1('button', 'btnSentsOk', 'btnSentsOkID', 'Завершить');
            BTNSentenceDiv.append(BtnSentOk);
            console.log(ArraySent);
            BtnSentOk.addEventListener('click', () => randomArr(ArraySent));
        };

        return Section;
    }
}