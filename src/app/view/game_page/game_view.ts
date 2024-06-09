import ConstructorView from '../constructor/constructor_view';
import CollectionLevel1 from '../../../data/wordCollectionLevel1.json';

import './game.css';

export default class GamePage extends ConstructorView {
    private Collection1 = CollectionLevel1;
    private massClickSentenc: string[] = [];
    private LengtSentence = this.Collection1.rounds[0].words.length - 1;
    private ArraySent = Array.from({ length: this.LengtSentence + 1 }, (_, i) => i);
    private randomNumber = this.randomArr(this.ArraySent);
    // private randomNumber: number;
    // private SentenceSplitENEQ = this.Collection1.rounds[0].words[this.randomNumber].textExample.split(' ');
    private SentenceSplitENEQ!: string[];
    private SentencePuzzleDiv!: HTMLElement;
    private DivInPuzzle!: HTMLElement;

    constructor() {
        super();
        this.render();
        // if (this.SentencePuzzleDiv) {
        //   const start = this.init();
        // };
    }

    render() {
        console.log(this.SentenceSplitENEQ);

        const Section = document.createElement('section');
        Section.className = 'sectionGame';

        const SettingDiv = this.constructorDiv('div', 'settingDiv', 'settingDivID');
        Section.appendChild(SettingDiv);

        const LevelDiv = this.constructorForm('div', 'levelDiv');
        SettingDiv.appendChild(LevelDiv);

        const LevelLable = this.constructorLable('label', 'levelLable', 'Level: ');
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

        const PageLable = this.constructorLable('label', 'pageLable', 'Page: ');
        LevelDiv.appendChild(PageLable);
        const PageSelector = this.constructorDiv('select', 'pageSelector', 'pageSelectorID') as HTMLSelectElement;
        LevelDiv.appendChild(PageSelector);

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
        Section.appendChild(PuzzleDiv);

        const SentenceDiv = this.constructorDiv('div', 'sentenceDiv', 'sentenceDivID');
        Section.appendChild(SentenceDiv);

        this.SentencePuzzleDiv = this.constructorDiv('div', 'sentPuzzleDiv', 'sentPuzzleDivID');
        SentenceDiv.appendChild(this.SentencePuzzleDiv);
        // console.log(this.SentencePuzzleDiv); // Проверка, что элемент создан

        const BTNSentenceDiv = this.constructorDiv('div', 'BTNSentDiv', 'BTNSentDivID');
        SentenceDiv.appendChild(BTNSentenceDiv);

        const BtnSentOk = this.constructorH1('button', 'btnSentsOk none', 'btnSentsOkID', 'Завершить');
        BTNSentenceDiv.append(BtnSentOk);

        this.DivInPuzzle = this.constructorDiv('div', 'divInPuzzle', 'divInPuzzleID' + this.randomNumber);
        PuzzleDiv.appendChild(this.DivInPuzzle);

        // BtnSentOk.addEventListener('click', () => this.init());
        // BtnSentOk.addEventListener('click', () => this.ArrOk());

        for (let indexSelector = 1; indexSelector < this.Collection1.rounds.length + 1; indexSelector++) {
            const element = this.constructorSelectOption(
                'option',
                'PageOptions' + indexSelector,
                'PageOptions' + String(indexSelector),
                String(indexSelector),
                String(indexSelector)
            );
            PageSelector.appendChild(element);
        }
        this.init();
        return Section; // Добавляем Section в body
    }

    init() {
        if (this.SentencePuzzleDiv != null) {
            // console.log(this.SentencePuzzleDiv);
            this.SentenceSplitENEQ = this.Collection1.rounds[0].words[this.randomNumber].textExample.split(' ');
            const SentenceSplitEN = this.Collection1.rounds[0].words[this.randomNumber].textExample
                .split(' ')
                .sort(() => Math.random() - 0.7);
            // console.log(SentenceSplitEN);

            SentenceSplitEN.forEach((world) => {
                const testWorlds = this.constructorH1(
                    'button',
                    'testWorldsClass' + world,
                    'testWorldsID' + world,
                    world
                );
                this.SentencePuzzleDiv.appendChild(testWorlds);

                // console.log(testWorlds);
                testWorlds.addEventListener('click', () => this.clickBTNWorlds(world));
            });
        }
    }

    private randomArr(ArraySent: number[]) {
        const randomElement = Math.floor(Math.random() * ArraySent.length);
        console.log(randomElement);
        this.randomNumber = randomElement;
        this.DivInPuzzle = this.constructorDiv('div', 'divInPuzzle', 'divInPuzzleID' + this.randomNumber);
        document.getElementById('puzzleDivID')?.appendChild(this.DivInPuzzle);
        return randomElement;
    }

    private clickBTNWorlds = (world: string) => {
        this.massClickSentenc.push(world);
        console.log(this.massClickSentenc);
        document.getElementById('testWorldsID' + world)?.classList.add('none');
        const PuzzleSentRus = this.constructorH1('button', 'puzzleSplit', 'puzzleSplit' + world, world);
        document.getElementById('divInPuzzleID' + this.randomNumber)?.appendChild(PuzzleSentRus);
        // document.getElementById('puzzleDivID')?.appendChild(PuzzleSentRus);
        
        
        this.ArrEq(this.SentenceSplitENEQ, this.massClickSentenc);
    };

    private ArrEq(SentenceSplitENEQ: string[], massClickSentenc: string[]) {
        if (SentenceSplitENEQ.toString() === massClickSentenc.toString()) {
            document.getElementById('btnSentsOkID')?.classList.toggle('none');
            massClickSentenc.length = 0;
            // this.randomArr(this.ArraySent);
            document.getElementById('btnSentsOkID')?.addEventListener('click', () => this.ArrOk());
            // this.ArrOk();
        } else {
            console.log(massClickSentenc);
        }
    }

    private ArrOk = () => {
        this.ArraySent.splice(this.randomNumber, 1);
        document.getElementById('btnSentsOkID')?.classList.add('none');
        console.log(this.ArraySent);
        console.log(this.massClickSentenc);
        this.randomArr(this.ArraySent);
        const SentDiv = document.getElementById('sentPuzzleDivID') as HTMLElement;
        SentDiv.innerHTML = '';
        this.init();
        // BtnSentOk.addEventListener('click', () => this.randomArr(this.ArraySent));
        // BtnSentOk.addEventListener('click', () => this.init());
    };
}

// const startPlayGame = new GamePage();
