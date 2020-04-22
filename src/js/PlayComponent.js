import { PlayCardComponent, PlayCardState } from "./PlayCardComponent";
import { PlayButtonComponent, PlayButtonState } from "./PlayButtonComponent";
import { StarLineComponent, StarLineState } from "./StarLineComponent";

export class PlayComponent {
    
    constructor (category, wordsAndTranslations, state) {
        this.category = category;
        this.wordsAndTranslations = wordsAndTranslations;
        this.state = state;
        this.root = document.createElement('main');
        this.cards = [];
    }

    draw () {
        this.delete();
        const wrapper = `<div class="wrapper main__wrapper">
                            <ol class="breadcrumb ${!this.state.isTraining ? 'play-mode' : ""}">
                                <li class="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li class="breadcrumb-item active">
                                    ${this.category[0].toUpperCase() + this.category.slice(1)}
                                </li>
                            </ol>
                            <h1 class="titleCategory">${this.category[0].toUpperCase() + this.category.slice(1)}</h1>
                            <div class="cards__wrapper">
                                <div class="row">
                                </div>
                            </div>
                            <audio class="audio"></audio>
                        </div>`;
        this.root.insertAdjacentHTML("beforeend", wrapper);

        this.cards = [];

        if (this.state.playStatus === 'NOT_STARTED' || this.state.playStatus === 'PLAYING') {
            for (let i = 0; i < this.wordsAndTranslations.length; i++) {
                let wasAnswered = this.state.questionsArray.indexOf(i) < this.state.currentQuestionIndex;
                let card = new PlayCardComponent(
                    i,
                    this.wordsAndTranslations[i].word, 
                    new PlayCardState(wasAnswered, this.state.currentAudio, this.state.currentStarsArray),
                    (id) => this.verifyAnswer(id));
                this.cards.push(card);
                this.root.querySelector('.row').append(card.draw());
            }

            const buttonPlayStatus = this.state.playStatus === 'PLAYING';
            let button = new PlayButtonComponent(new PlayButtonState(buttonPlayStatus), () => this.startPlay(), () => this.playCurrentAudio());
            this.root.querySelector('.main__wrapper').append(button.draw());

            this.root.querySelector('.titleCategory').after(new StarLineComponent(new StarLineState(this.state.answersArray)).draw());

            if(this.state.playStatus === 'PLAYING' 
                && (this.state.answersArray.length === 0 || this.state.answersArray[this.state.answersArray.length - 1] === 1)) {
                this.playCurrentAudio();
            }
        }

        if (this.state.playStatus === 'FINISHED') {
            const audio = this.root.querySelector('.audio');
            if(this.state.answersArray.includes(0)) {
                const fail = `<div>
                            <img class = 'fail img-fluid' src = 'images/fail.jpeg'>
                        </div>`;
                audio.src = `audio/fail.mp3`;
                this.root.querySelector('.main__wrapper').insertAdjacentHTML('beforeend', fail);
            } else {
                const success = `<div>
                                <img class = 'success img-fluid' src = 'images/success.jpeg'>
                            </div>`;
                audio.src = `audio/success.mp3`;
                this.root.querySelector('.main__wrapper').insertAdjacentHTML('beforeend', success);
            }
            
            audio.play();
            setTimeout( () => {
                window.location.replace("/#/main");
              }, 5000);
        }

        return this.root;
    }

    changeState(newState) {
        this.state = newState;
        this.draw();
    }

    startPlay() {
        this.changeState(new PlayState(this.state.isTraining, 'PLAYING', this.state.answersArray, this.state.questionsArray, this.state.currentQuestionIndex));
    }

    playCurrentAudio() {
        this.cards[this.state.questionsArray[this.state.currentQuestionIndex]].playAudio();
    }

    verifyAnswer(clickedCardId) {
        const audio = this.root.querySelector('.audio');
        if(clickedCardId === this.state.questionsArray[this.state.currentQuestionIndex]) {
            audio.src = `audio/correct-answer.mp3`;
            audio.play();
            setTimeout( () => {
                this.recordCorrectAnswer();
              }, 1200)
        } else {
            audio.src = `audio/wrong-answer.mp3`;
            audio.play();
            setTimeout( () => {
                this.recordWrongAnswer();
              }, 2000);
        }
    }

    recordCorrectAnswer() {
        this.state.answersArray.push(1);
        this.changeState(new PlayState(
            this.state.isTraining, 
            this.state.currentQuestionIndex === 7 ? "FINISHED" : "PLAYING",
            this.state.answersArray, 
            this.state.questionsArray, 
            this.state.currentQuestionIndex + 1
            ));
    }

    recordWrongAnswer() {
        this.state.answersArray.push(0);
        this.changeState(new PlayState(
            this.state.isTraining, 
            this.state.playStatus, 
            this.state.answersArray, 
            this.state.questionsArray, 
            this.state.currentQuestionIndex
            ));
    }

    delete() {
        if(this.root.querySelector('.main__wrapper')) {
            this.root.querySelector('.main__wrapper').remove();
        }
    } 

 }

export class PlayState {
    constructor(isTraining, playStatus, answersArray, questionsArray, currentQuestionIndex) {
        this.isTraining = isTraining;
        this.playStatus = playStatus; // NOT_STARTED, PLAYING, FINISHED
        this.answersArray = answersArray;
        this.questionsArray = questionsArray;
        this.currentQuestionIndex = currentQuestionIndex;
    }
}