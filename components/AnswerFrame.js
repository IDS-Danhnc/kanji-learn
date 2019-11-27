import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput
  } from 'react-native';
import { styles } from '../StyleSheet';

export default class AnswerFrame extends Component {

    constructor(props) {
      super(props);
      this.state = {
          answer1: '',
          answer2: '',
          answer3: '',
          answer4: '',
          correct: 0
      };
      this.onTouch = this.onTouch.bind(this);
    }

    UNSAFE_componentWillReceiveProps(props) {
        if(props.answer != this.props.answer) {
            this.setState({
                answer1: props.answer.quiz[0].vietnamese,
                answer2: props.answer.quiz[1].vietnamese,
                answer3: props.answer.quiz[2].vietnamese,
                answer4: props.answer.quiz[3].vietnamese,
                correct: props.answer.quizIndex
            });
        }
    }

    onTouch(e) {
        this.props.onAnswer(this.state.correct == e, this.props.answer.quiz[this.state.correct]);
    }
  
    render() {
      return(
        <View style={styles.answerView}>
            <View style={styles.answerRow}>
                <View style={styles.answer1} onTouchStart={() => this.onTouch(0)}><Text style={styles.textAnswer}>{this.state.answer1}</Text></View>
                <View style={styles.answer2} onTouchStart={() => this.onTouch(1)}><Text style={styles.textAnswer}>{this.state.answer2}</Text></View>
            </View>
            <View style={styles.answerRow}>
                <View style={styles.answer3} onTouchStart={() => this.onTouch(2)}><Text style={styles.textAnswer}>{this.state.answer3}</Text></View>
                <View style={styles.answer4} onTouchStart={() => this.onTouch(3)}><Text style={styles.textAnswer}>{this.state.answer4}</Text></View>
            </View>
        </View>
      );
    }
  }
