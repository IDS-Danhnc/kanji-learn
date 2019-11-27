import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { result } from '../StyleSheet';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ResultFrame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: props.result
        };
    }

    UNSAFE_componentWillReceiveProps(props) {
        if (props.result != this.state.result) {
            this.setState({
                result: props.result
            });
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const level = this.props.level;
        return (
            <View style={result.main}>
                <View style={result.disabled}></View>
                <View style={result.content}>
                    <View style={result.resultHeader}><Text style={result.headerItem}>WRONG WORD</Text></View>
                    <ScrollView style={result.resultContent}>
                        {this.state.result.length > 0 ?
                            this.state.result.map(element =>
                                <View style={result.contentItem}>
                                    <Text style={result.kanji}>{element.kanji}</Text>
                                    <Text style={result.vietnamese}>{element.vietnamese}</Text>
                                </View>
                            )
                            : <Text>Giỏi quá cơ ^^</Text>
                        }
                    </ScrollView>
                    <View style={result.resultFooter}>
                        <View style={result.resultButton}>
                            <TouchableOpacity style={result.footerButtonMain} onPress={() => navigate('MenuFrame')}>
                                <Text style={result.button}><Icon name='home' color='white' size={20} />&nbsp;MAIN</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={result.resultButton}>
                            <TouchableOpacity style={result.footerButtonRetry} onPress={() => this.props.onRetry()}>
                                <Text style={result.button}><Icon name='refresh' color='white' size={20} />&nbsp;RETRY</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
