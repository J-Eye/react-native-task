import React, {useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ChosenTask({ navigation, GlobalState}) {
    const {chosenTask} = GlobalState;
        
    return(
     <View style={styles.screen}>     
        <Header />
        <View style={styles.body}   >
            <Text>{chosenTask.task}</Text>
        </View>
        <Footer navigation={navigation}/>
    </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center'  
    },
    body:{
        flex: 8,
        width: '100%',
        backgroundColor:"#141410",
        alignItems: 'center',
        justifyContent: 'center'    
    },
})