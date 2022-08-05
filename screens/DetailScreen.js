// Bottom Navigation with Navigation Icon from Local Directory
// https://aboutreact.com/react-native-bottom-navigation-icon-from-local/

import * as React from 'react';
import { useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import axios from 'axios'
const DetailsScreen = () => {

    const [advice, setAdvice] = useState('')

    const getRandomId = (min, max)=>{
        min = Math.ceil(min);
        max = Math.floor(max);
        return(Math.floor(Math.random()*(max-min +1))+ min).toString()
    }

    const getAdvice = () => {
        axios.get('http://api.adviceslip.com/advice/'+ getRandomId(1,200)).then(response => {
            setAdvice(response.data.slip.advice)
        })
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, padding: 16}}>
                <View style={styles.container}>
                    <Text style={styles.header}>
                        You are on Details Screen
                    </Text>
                    <Text style={{paddingVertical: 10}}>{advice}</Text>
                    <Button title="Get AdVice" onPress={()=> getAdvice()} />
                </View>
                <Text style={styles.footerText}>www.aboutreact.com</Text>
            </View>
        </SafeAreaView>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16,
    },
    footerHeading: {
        fontSize: 18,
        textAlign: 'center',
        color: 'grey',
    },
    footerText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey',
    },
});
