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
import ViewSearch from './ViewSearch';

class Dictionary extends Component {

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
        <View style={styles.mainView}>
            <TextInput style={styles.inputWord} onChangeText={this.onChangeText}></TextInput>
            <View style={styles.verticalLine}></View>
            {/* <Text>Text: {this.state.word}</Text> */}
            <ViewSearch input={this.state.word}></ViewSearch>
        </View>
      );
    }
  }

  export default Dictionary;