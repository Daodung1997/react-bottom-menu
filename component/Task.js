import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
const Task = (props) => (
    <View style={styles.taskWrapper}>
        <TouchableOpacity onPress={() => props.setChecked()}>
            <Icon
                name={props.checked ? "check" : "square"}
                size={30}
                color="#900"
                style={{ marginLeft: 15 }}
            />
        </TouchableOpacity>

        <Text style={[styles.task, props.checked ? styles.verticalLine : '' ]}>{props.text}</Text>
        <Icon
            name="trash-2"
            size={30}
            color="#900"
            style={{ marginLeft: 'auto' }}
            onPress={props.delete}
        />
    </View>
)

export default Task

const styles = StyleSheet.create({
    taskWrapper: {
        flexDirection: 'row',
        borderColor: '#FFFFFF',
        borderBottomWidth: 1.5,
        width: '100%',
        alignItems: 'center',
        minHeight: 40,
        paddingVertical: 10
    },
    task: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        wordBreak: 'break-word',
        wordWrap: 'break-word',
        width: '85%',
        paddingHorizontal: 10

    },
    verticalLine: {
        textDecoration: 'line-through',
        color: "green"
    }
})
