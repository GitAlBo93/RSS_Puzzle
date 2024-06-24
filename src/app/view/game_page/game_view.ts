import ConstructorView from '../constructor/constructor_view';
import CollectionLevel1 from '../../../data/wordCollectionLevel1.json';
import './game.css';

export default class GamePage extends ConstructorView {
    private roundPage: number = Number(localStorage.getItem('roundPage'));
    private Collection1 = CollectionLevel1;
    private massClickSentenc: string[] = [];
    private LengtSentence = this.Collection1.rounds[this.roundPage].words.length - 1;
    private ArraySent = Array.from({ length: this.LengtSentence + 1 }, (_, i) => i);
    private randomNumber = this.randomArr(this.ArraySent);
    private SentenceSplitENEQ!: string[];
    private SentenceSplitRU!: string;
    private SentenceSplitEN!: string;
    private SentencePuzzleDiv!: HTMLElement;
    private sentTaskHelp!: HTMLElement;
    private DivInPuzzle!: HTMLElement;
    private SentTaskDiv!: HTMLElement;
    private ElemMassSent!: number;
    private SpeckHelpImages: string = 'images/loud_on.png';
    private SentHelpImages: string = 'images/translator.png';
    private QuestHelpImages: string = 'images/question_on.png';

    constructor() {
        super();
    }

    render() {
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
        const VoiceHelp = this.constructorIMG(
            this.SpeckHelpImages,
            'Подсказка "Голосом"',
            'IMG_Help',
            'IMG_Help_Voice',
            'on'
        );

        VoiceHelp.addEventListener('click', () => this.ToggleVoice(VoiceHelp));
        const SentHelp = this.constructorIMG(
            this.SentHelpImages,
            'Подсказка "Перевод"',
            'IMG_Help',
            'IMG_Help_Sent',
            'on'
        );
        SentHelp.addEventListener('click', () => this.ToggleTranclate(SentHelp));
        const QustHelp = this.constructorIMG(
            this.QuestHelpImages,
            'Подсказка "Вопрос"',
            'IMG_Help',
            'IMG_Help_Quest',
            'on'
        );
        QustHelp.addEventListener('click', () => this.ToggleQuestion(QustHelp));

        SettingDiv.appendChild(SetBtnDiv);
        SetBtnDiv.appendChild(SentHelp);
        SetBtnDiv.appendChild(VoiceHelp);
        SetBtnDiv.appendChild(QustHelp);

        const TaskDiv = this.constructorDiv('div', 'taskDiv', 'taskDivID');
        Section.appendChild(TaskDiv);

        const SpeakTaskDiv = this.constructorDiv('div', 'speakTaskDiv', 'speakTaskDivID');
        TaskDiv.appendChild(SpeakTaskDiv);

        this.SentTaskDiv = this.constructorDiv('div', 'sentTaskDiv', 'sentTaskDivID');
        TaskDiv.appendChild(this.SentTaskDiv);

        const PuzzleDiv = this.constructorDiv('div', 'puzzleDiv', 'puzzleDivID');
        Section.appendChild(PuzzleDiv);

        const SentenceDiv = this.constructorDiv('div', 'sentenceDiv', 'sentenceDivID');
        Section.appendChild(SentenceDiv);

        this.SentencePuzzleDiv = this.constructorDiv('div', 'sentPuzzleDiv', 'sentPuzzleDivID');
        SentenceDiv.appendChild(this.SentencePuzzleDiv);

        const BTNSentenceDiv = this.constructorDiv('div', 'BTNSentDiv', 'BTNSentDivID');
        SentenceDiv.appendChild(BTNSentenceDiv);

        const BtnSentOk = this.constructorH1('button', 'btnSentsOk none', 'btnSentsOkID', 'Завершить');
        BTNSentenceDiv.append(BtnSentOk);
        BtnSentOk.addEventListener('click', () => this.ArrOk());

        this.DivInPuzzle = this.constructorDiv('div', 'divInPuzzle', 'divInPuzzleID' + this.ElemMassSent);
        PuzzleDiv.appendChild(this.DivInPuzzle);

        for (let indexSelector = 1; indexSelector < this.Collection1.rounds.length + 1; indexSelector++) {
            const element = this.constructorSelectOption(
                'option',
                'PageOptions',
                'PageOptions' + String(indexSelector),
                String(indexSelector),
                String(indexSelector)
            );
            PageSelector.appendChild(element);
        }
        this.DivInPuzzle.ondragover = this.allowDrop;
        this.DivInPuzzle.ondrop = this.drop;
        window.onload = () => this.changPage();
        return Section;
    }

    private ToggleTranclate(IMG: HTMLImageElement) {
        const ImageData = IMG.getAttribute('data-state');
        const newDataState = ImageData === 'off' ? 'on' : 'off';
        IMG.setAttribute('data-state', newDataState);
        if (newDataState === 'off') {
            IMG.src = 'images/translator_off.png';
            this.SentTaskDiv.innerHTML = '';
            this.SentenceSplitEN = this.Collection1.rounds[this.roundPage].words[this.ElemMassSent].textExample;
            this.sentTaskHelp = this.constructorLable('h1', 'sentTaskHelp', this.SentenceSplitEN);
            this.SentTaskDiv.appendChild(this.sentTaskHelp);
        } else {
            IMG.src = 'images/translator.png';
            this.SentTaskDiv.innerHTML = '';
            this.SentenceSplitRU =
                this.Collection1.rounds[this.roundPage].words[this.ElemMassSent].textExampleTranslate;
            this.sentTaskHelp = this.constructorLable('h1', 'sentTaskHelp', this.SentenceSplitRU);
            this.SentTaskDiv.appendChild(this.sentTaskHelp);
        }
    }

    private ToggleVoice(IMG: HTMLImageElement) {
        const audio = new Audio();
        audio.src = 'images/' + this.Collection1.rounds[this.roundPage].words[this.ElemMassSent].audioExample;
        audio.autoplay = true;
    }

    private ToggleQuestion(IMG: HTMLImageElement) {
        const ImageData = IMG.getAttribute('data-state');
        const newDataState = ImageData === 'off' ? 'on' : 'off';
        IMG.setAttribute('data-state', newDataState);
        if (newDataState === 'off') {
            IMG.src = 'images/question_off.png';
        } else {
            IMG.src = 'images/question_on.png';
        }
    }

    private allowDrop(event: any) {
        event.preventDefault();
    }

    private drag(event: any) {
        event.dataTransfer.setData('id', event.target.id);
    }

    private drop(event: any) {
        const itemID = event.dataTransfer.getData('id');
    }

    init() {
        if (this.SentencePuzzleDiv != null) {
            this.SentenceSplitRU =
                this.Collection1.rounds[this.roundPage].words[this.ElemMassSent].textExampleTranslate;
            this.sentTaskHelp = this.constructorLable('h1', 'sentTaskHelp', this.SentenceSplitRU);
            this.SentTaskDiv.appendChild(this.sentTaskHelp);
            this.SentenceSplitENEQ =
                this.Collection1.rounds[this.roundPage].words[this.ElemMassSent].textExample.split(' ');
            const SentenceSplitEN = this.Collection1.rounds[this.roundPage].words[this.ElemMassSent].textExample
                .split(' ')
                .sort(() => Math.random() - 0.7);
            localStorage.setItem('roundPage', String(this.roundPage));

            SentenceSplitEN.forEach((world) => {
                const testWorlds = this.constructorH1('button', 'testWorldsClass', 'testWorldsID' + world, world);
                this.SentencePuzzleDiv.appendChild(testWorlds);
                testWorlds.addEventListener('click', () => this.clickBTNWorlds(world));
                testWorlds.ondragstart = this.drag;
            });
        }
    }

    private randomArr(ArraySent: number[]) {
        const randomElement = Math.floor(Math.random() * ArraySent.length);
        this.ElemMassSent = ArraySent[randomElement];
        this.randomNumber = randomElement;
        this.DivInPuzzle = this.constructorDiv('div', 'divInPuzzle', 'divInPuzzleID' + this.ElemMassSent);
        document.getElementById('puzzleDivID')?.appendChild(this.DivInPuzzle);
        return randomElement;
    }

    private clickBTNWorlds = (world: string) => {
        this.massClickSentenc.push(world);
        document.getElementById('testWorldsID' + world)?.classList.add('none');
        const PuzzleSentRus = this.constructorH1('button', 'puzzleSplit', 'puzzleSplit' + world, world);
        document.getElementById('divInPuzzleID' + this.ElemMassSent)?.appendChild(PuzzleSentRus);
        PuzzleSentRus.addEventListener('click', () => this.removeBTNWorlds(world));
        this.ArrEq(this.SentenceSplitENEQ, this.massClickSentenc);
    };

    private removeBTNWorlds = (world: string) => {
        document.getElementById('puzzleSplit' + world)?.remove();
        document.getElementById('testWorldsID' + world)?.classList.toggle('none');
        this.findElem(world);
    };

    private findElem = (world: string) => {
        const finding = this.massClickSentenc.indexOf(world) != -1;
        if (finding === true) {
            this.massClickSentenc.splice(this.massClickSentenc.indexOf(world), 1);
        }
    };

    private ArrEq(SentenceSplitENEQ: string[], massClickSentenc: string[]) {
        if (SentenceSplitENEQ.toString() === massClickSentenc.toString()) {
            document.getElementById('btnSentsOkID')?.classList.toggle('none');
            massClickSentenc.length = 0;
            this.ArraySent.splice(this.randomNumber, 1);
            this.roundsOff(this.ArraySent);
        }
    }

    private ArrOk = () => {
        document.getElementById('btnSentsOkID')?.classList.add('none');
        console.log(this.ArraySent);
        console.log(this.massClickSentenc);
        this.randomArr(this.ArraySent);
        const SentDiv = document.getElementById('sentPuzzleDivID') as HTMLElement;
        SentDiv.innerHTML = '';
        this.SentTaskDiv.innerHTML = '';
        const PuzzleDiv = document.getElementById('puzzleDivID') as HTMLElement;
        PuzzleDiv.style.backgroundImage = '';
        this.init();

        const BTNNextLevel = document.getElementById('btnNextLevelID') as HTMLElement;
        if (BTNNextLevel!) {
            BTNNextLevel.remove();
        }
    };

    private cleanHTML() {
        this.SentTaskDiv.innerHTML = '';
        const SentDiv = document.getElementById('sentPuzzleDivID') as HTMLElement;
        SentDiv.innerHTML = '';
        const PuzzleDiv = document.getElementById('puzzleDivID') as HTMLElement;
        PuzzleDiv.innerHTML = '';
        const BTNDIVEND = document.getElementById('BTNSentDivID') as HTMLElement;
        BTNDIVEND.innerHTML = '';
    }

    private roundsOff(ArraySent: number[]) {
        if (ArraySent.length === 0) {
            const BTNNextLevel = this.constructorH1('button', 'btnNextLevel', 'btnNextLevelID', 'Следующий Уровень');
            document.getElementById('BTNSentDivID')?.appendChild(BTNNextLevel);
            const PuzzleDiv = document.getElementById('puzzleDivID') as HTMLElement;
            PuzzleDiv.style.backgroundImage =
                'url(images/' + this.Collection1.rounds[this.roundPage].levelData.imageSrc + ')';
            PuzzleDiv.innerHTML = '';
            BTNNextLevel.addEventListener('click', () => this.ArrOk());
            this.ArraySent = Array.from({ length: this.LengtSentence + 1 }, (_, i) => i);
            if (this.roundPage < 44) {
                this.roundPage = this.roundPage + 1;
            }
        }
    }

    private changPages(clickPagesss: HTMLSelectElement) {
        const pageCheck = clickPagesss.value;
        clickPagesss.options.selectedIndex = Number(pageCheck) - 1;
        this.roundPage = Number(pageCheck) - 1;
        localStorage.setItem('roundPage', String(this.roundPage));
        this.cleanHTML();
        this.init();
    }

    private changPage() {
        const clickPagesss = document.getElementById('pageSelectorID') as HTMLSelectElement;
        clickPagesss.addEventListener('change', () => this.changPages(clickPagesss));
        this.init();
    }
}
