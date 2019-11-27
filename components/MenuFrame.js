import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    ImageBackground
  } from 'react-native';
import { styles } from '../StyleSheet';

export const N5 = 'N5', N4 = 'N4', N3 = 'N3', N2 = 'N2', N1 = 'N1';

export default class MenuFrame extends Component {

    constructor(props) {
      super(props);
      this.state = {
      };
      this.onPress = this.onPress.bind(this);
    }
  
    onPress(e) {
        //
        console.warn('Under development');
    }

    render() {
      const {navigate} = this.props.navigation;
      return(
        <ImageBackground source={require('../images/background.png')} style={styles.imgBackground} resizeMode='cover'>
            <View style={styles.menuView}>
                <View style={styles.menuControl}><Text style={styles.menuHeader}>漢字</Text></View>
                <View style={styles.menuControl}>
                    <View style={styles.menuItem}><Button title="Kanji N5" onPress={() => navigate('MainFrame', {level: N5})}></Button></View>
                    <View style={styles.menuItem}><Button title="Kanji N4" onPress={() => navigate('MainFrame', {level: N4})}></Button></View>
                    <View style={styles.menuItem}><Button title="Kanji N3" onPress={() => navigate('MainFrame', {level: N3})}></Button></View>
                    <View style={styles.menuItem}><Button title="Kanji N2" onPress={() => navigate('MainFrame', {level: N2})}></Button></View>
                    <View style={styles.menuItem}><Button title="Kanji N1" onPress={() => this.onPress(N1)}></Button></View>
                </View>
            </View>
        </ImageBackground>
      );
    }
  }
