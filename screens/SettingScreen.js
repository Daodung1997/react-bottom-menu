// Bottom Navigation with Navigation Icon from Local Directory
// https://aboutreact.com/react-native-bottom-navigation-icon-from-local/

import * as React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
} from 'react-native';

const SettingsScreen = (props) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, padding: 16}}>
                <View style={styles.container}>
                    <Text style={styles.header}>
                        You are on Setting Screen
                    </Text>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => props.navigation.navigate('HomeStack', {screen:'Home'})}>
                        <Text>Go to Home Tab</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => props.navigation.navigate('Detail')}>
                        <Text>Open Detail Screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => props.navigation.navigate('ProfileStack', {screen:'Profile'})}>
                        <Text>Open Profile Screen</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.footerHeading}>
                    Bottom Navigation with Navigation Icon from Local Directory
                </Text>
                <Text style={styles.footerText}>www.aboutreact.com</Text>
            </View>
        </SafeAreaView>
    );
};

export default SettingsScreen;

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
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
});
