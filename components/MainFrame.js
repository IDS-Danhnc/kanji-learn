import React, { Component } from 'react';
import QuestionFrame from '../components/QuestionFrame';
import AnswerFrame from '../components/AnswerFrame';
import ScoreFrame from '../components/ScoreFrame';
import file from '../data.json';
import { BackHandler } from 'react-native';
import ResultFrame from './ResultFrame';

const MAX_QUESTION = 15;

export default class MainFrame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: {},
            quiz: {},
            current: 1,
            correct: 0,
            incorrect: 0,
            countdown: -1,
            wrongList: [],
            isFinish: false,
            level: 'N5'
        };
        this.kanji = [];
        this.currentQuestion = 0;
        this.arrayQuestion = [];
        this.generateQuestion = this.generateQuestion.bind(this);
        this.onQuestion = this.onQuestion.bind(this);
        this.onAnswer = this.onAnswer.bind(this);
        this.random = [];
        this.interval;
        this.handleBackButton = this.handleBackButton.bind(this);
        this.onInitialize = this.onInitialize.bind(this);
        this.handleRetry = this.handleRetry.bind(this);
    }

    componentDidMount() {
        // console.warn(this.props.navigation.getParam('level','N5'));
        let level = this.props.navigation.getParam('level','N5');
        this.onInitialize(level);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    onInitialize(level) {
        let levelIndex = 0;
        switch(level) {
            case 'N5':
                levelIndex = 0;
                break;
            case 'N4':
                levelIndex = 1;
                break;
            case 'N3':
                levelIndex = 2;
                break;
            case 'N2':
                levelIndex = 3;
                break;
            default:
                break;
        }
        this.kanji = file.kanji[levelIndex].data;
        this.generateQuestion();
        this.onQuestion(0);
        this.setState({
            level: level
        });
    }

    handleBackButton() {
        clearInterval(this.interval);
    }

    shuffle(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    onQuestion() {
        if(this.currentQuestion < MAX_QUESTION){
            // Get question
            let question = this.arrayQuestion[this.currentQuestion];
            let time = 5;
            let that = this;
            this.interval = setInterval(() => {
                time--;
                that.setState({
                    countdown: time
                });
                if(time < 0) {
                    clearInterval(that.interval);
                    this.currentQuestion++;
                    that.onQuestion();
                    let incorrect = this.state.incorrect + 1;
                    let wrong = [...that.state.wrongList];
                    wrong.push(question.quiz[question.quizIndex]);
                    this.setState({
                        incorrect: incorrect,
                        wrongList: wrong
                    });
                }
            }, 1000);
            this.setState({
                question: question.quiz[question.quizIndex],
                quiz: question,
                current: this.currentQuestion
            });
        } else {
            // Stop all
            this.setState({
                isFinish: true
            });
        }
    }

    generateQuestion() {
        let i=0, index = 0, count = 0;
        let length = this.kanji.length;
        this.random = this.shuffle(Array.from({length: length}, () => {return i++}));
        for(count; count < MAX_QUESTION; count++) {
            let question = {};
            let quizIndex = Math.floor(Math.random() * 4);
            question.quizIndex = quizIndex;
            let arr = [];
            arr.push(this.kanji[this.random[index++]]);
            arr.push(this.kanji[this.random[index++]]);
            arr.push(this.kanji[this.random[index++]]);
            arr.push(this.kanji[this.random[index++]]);
            question.quiz = [...arr];
            this.arrayQuestion.push(question);
        }
    }

    onAnswer(isCorrect, object) {
        if(this.currentQuestion < MAX_QUESTION) {
            if(isCorrect) {
                // Calculate score
                let correct = this.state.correct + 1;
                this.setState({
                    correct: correct
                });
            } else {
                let incorrect = this.state.incorrect + 1;
                let wrong = [...this.state.wrongList];
                wrong.push(object);
                this.setState({
                    incorrect: incorrect,
                    wrongList: wrong
                });
            }
            // Clear interval
            clearInterval(this.interval);
            // Next question
            this.currentQuestion++;
            this.onQuestion();
        }
    }

    handleRetry() {
        this.setState({
            question: {},
            quiz: {},
            current: 1,
            correct: 0,
            incorrect: 0,
            countdown: -1,
            wrongList: [],
            isFinish: false
        });
        this.currentQuestion = 0;
        this.arrayQuestion = [];
        this.random = [];
        this.onInitialize(this.state.level);
    }

    render() {
        return (
            <>
                <ScoreFrame maxQuestion={MAX_QUESTION} currentQuestion={this.state.current} correct={this.state.correct} incorrect={this.state.incorrect} count={this.state.countdown}></ScoreFrame>
                <QuestionFrame question={this.state.question}></QuestionFrame>
                <AnswerFrame answer={this.state.quiz} onAnswer={this.onAnswer}></AnswerFrame>
                {this.state.isFinish ? <ResultFrame result={this.state.wrongList} navigation={this.props.navigation} onRetry={this.handleRetry}></ResultFrame> : <></>}
            </>
        );
    }
}
