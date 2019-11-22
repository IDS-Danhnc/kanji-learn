import {
    StyleSheet
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
    mainView: {
        height: "100%",
        width: "100%",
        padding: 5,
        backgroundColor: '#33b5e5'
    },
    inputWord: {
        backgroundColor: Colors.red,
        fontSize: 20,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 25,
        backgroundColor: '#FFF'
    },
    verticalLine: {
        width: "100%",
        height: 1,
        backgroundColor: "#FFF",
        marginBottom: 5,
        marginTop: 5
    },
    searchItem: {
        backgroundColor: "#FFF",
        fontSize: 30,
        marginTop: 2
    },
    scoreView: {
        width: '100%',
        height: '5%',
        flex: 1,
        flexDirection: 'row',
    },
    questionView: {
        width: '100%',
        height: '55%',
        padding: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#FFF'
    },
    answerView: {
        width: '100%',
        height: '40%',
        backgroundColor: '#33b5e5'
    },
    answerRow: {
        flex: 1,
        flexDirection: 'row'
    },
    answer1: {
        width: '50%',
        height: '100%',
        backgroundColor: '#ff4444'
    },
    answer2: {
        width: '50%',
        height: '100%',
        backgroundColor: '#ffbb33'
    },
    answer3: {
        width: '50%',
        height: '100%',
        backgroundColor: '#00C851'
    },
    answer4: {
        width: '50%',
        height: '100%',
        backgroundColor: '#aa66cc'
    },
    textQuestion: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 200
    },
    textAnswer: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white'
    },
    question: {
        width: '40%',
        height: '100%',
        fontWeight: 'bold'
    },
    correctAnswer: {
        width: '20%',
        height: '100%',
        flex: 1,
        flexDirection: 'row'
    },
    timeCounter: {
        width: '20%',
        height: '100%',
        fontWeight: 'bold'
    },
    menuItem: {
        width: '70%',
        height: '15%',
        marginBottom: 5,
        //backgroundColor: '#64dd17',
        alignSelf: 'center'
    },
    item: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white'
    },
    menuView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent'
    },
    menuControl: {
        width: '100%',
        height: '50%'
    },
    menuHeader: {
        width: '100%',
        height: '100%',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 150,
        color: 'red'
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
    }
});
