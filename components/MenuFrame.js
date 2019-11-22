import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    ImageBackground
  } from 'react-native';
import { styles } from '../StyleSheet';

export const N5 = 'N5', N4 = 'N4', N3 = 'N3', N2 = 'N2', N1 = 'N1';
// export const MainNavigator = createStackNavigator({
//     MainFrame: {screen: MainFrame},
//     MenuFrame: {screen: MenuFrame},
//   });
// export const ListNavigator = createAppContainer(MainNavigator);

export default class MenuFrame extends Component {

    constructor(props) {
      super(props);
      this.state = {
      };
      this.onPress = this.onPress.bind(this);
    }
  
    onPress(e) {
        //
        //console.warn(e);
        //this.props.navigation('MainFrame', {level: e});
    }

    render() {
      return(
        <ImageBackground source={require('../images/background.png')} style={styles.imgBackground} resizeMode='cover'>
            <View style={styles.menuView}>
                <View style={styles.menuControl}><Text style={styles.menuHeader}>漢字</Text></View>
                <View style={styles.menuControl}>
                    <View style={styles.menuItem}><Button title="Kanji N5" onPress={() => this.onPress(N5)}></Button></View>
                    <View style={styles.menuItem}><Button title="Kanji N4" onPress={() => this.onPress(N4)}></Button></View>
                    <View style={styles.menuItem}><Button title="Kanji N3" onPress={() => this.onPress(N3)}></Button></View>
                    <View style={styles.menuItem}><Button title="Kanji N2" onPress={() => this.onPress(N2)}></Button></View>
                    <View style={styles.menuItem}><Button title="Kanji N1" onPress={() => this.onPress(N1)}></Button></View>
                </View>
            </View>
        </ImageBackground>
      );
    }
  }
