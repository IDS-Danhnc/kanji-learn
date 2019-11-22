import React, {Component} from 'react';
import {
    FlatList,
    View,
    Text
  } from 'react-native';
import { styles } from '../StyleSheet';
import dicData from '../data.json'

export default class ViewSearch extends Component {

    constructor(props) {
      super(props);
      this.state = {
          data: []
      };
      this.renderItem = this.renderItem.bind(this);
      this.searching = this.searching.bind(this);
    }

    searching(input) {
        if(!input) {
            this.setState({
                data: []
            });
            return;
        }
        let search = input;
        let searchedData = [];
        searchedData = dicData.data.filter(record => record.input.indexOf(search) > -1);
        this.setState({
            data: searchedData
        });
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if(newProps.input != this.props.input) {
            this.searching(newProps.input);
        }
    }

    renderItem(data) {
        return(
            <View style={styles.searchItem}>
                <Text>{data.item.input}</Text>
                <Text>{data.item.translated}</Text>
            </View>
        );
    }
  
    render() {
      return(
        <View>
            <FlatList data={this.state.data} keyExtractor={item => item.id} renderItem={this.renderItem}>
            </FlatList>
        </View>
      );
    }
  }
