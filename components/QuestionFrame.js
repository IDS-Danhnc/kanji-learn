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

export default class QuestionFrame extends Component {

    constructor(props) {
      super(props);
      this.state = {
          word: ''
      };
      this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(value) {
        this.setState({
            word: value
        });
        // console.warn(value);
    }
  
    render() {
      return(
        <View style={styles.questionView}>
            <Text style={styles.textQuestion}>{this.props.question.kanji}</Text>
        </View>
      );
    }
  }
