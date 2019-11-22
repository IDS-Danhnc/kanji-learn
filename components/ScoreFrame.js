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
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ScoreFrame extends Component {

    constructor(props) {
      super(props);
      this.state = {
          correct: 0,
          incorrect: 0
      };
    }

    UNSAFE_componentWillReceiveProps(props) {
        //if(props.is)
    }
  
    render() {
      return(
        <View style={styles.scoreView}>
            <View style={styles.question}><Text>Question: {this.props.currentQuestion + 1}/{this.props.maxQuestion}</Text></View>
            <View style={styles.correctAnswer}><Icon name='check' color='blue' size={20}/><Text>{this.props.correct}</Text></View>
            <View style={styles.correctAnswer}><Icon name='close' color='red' size={20}/><Text>{this.props.incorrect}</Text></View>
            <View style={styles.timeCounter}><Text>Time: {this.props.count + 1}s</Text></View>
        </View>
      );
    }
  }
