
import * as React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
} from 'react-native';

const HomeScreen = (props) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, padding: 16}}>
                <View style={styles.container}>
                    <Text style={styles.header}>You are on Home Screen</Text>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() =>
                            props.navigation.navigate(
                                'SettingTask',
                                {screen: 'Settings'}
                            )
                        }>
                        <Text>Go to setting Tab</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => props.navigation.navigate('ProfileStack', {screen: 'Profile'})}>
                        <Text>Open Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => props.navigation.navigate('Todo')}>
                        <Text>Open List Todo</Text>
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

export default HomeScreen;

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
