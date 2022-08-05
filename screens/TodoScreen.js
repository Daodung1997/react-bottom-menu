import React, {useState} from "react";
// import {} from 'react-native-web'
import { View, Text, StyleSheet, ImageBackground, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Task from '../component/Task'
const Todo = ()=>{
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])
    const handleAddTodo = ()=>{
        if(inputValue && inputValue.length >0){
            setTodos([...todos, {text:  inputValue, key:Date.now(), checked: false}])
            setInputValue('')
        }
    }
    const handleChecked = (key) => {
        setTodos(
            todos.map((todo)=>{
                if(todo.key === key) todo.checked = !todo.checked
                return todo
            })
        )
    }

    const handleDeleteTodo = (key) => {
        setTodos(
            todos.filter((todo)=>{
                if(todo.key !== key) return true
            })
        )
    }
    return (
        <ImageBackground style={styles.bgStyle} source={require('../assets/images/BackgroundColor.jpg')}>
            <View style={styles.container}>
                <Text style={styles.textHeader}>Today</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(inputValue)=> setInputValue(inputValue)}
                        value={inputValue}
                        placeholder={'Do it now !'}
                        placeholderTextColor="white"
                    />
                    <TouchableOpacity onPress={()=> handleAddTodo()}>
                        <Icon name="plus" size={30} color="#900" style={{marginLeft: 15}}></Icon>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {todos.map((task)=>(
                        <Task
                            text={task.text}
                            key={task.key}
                            checked={task.checked}
                            setChecked={()=> handleChecked(task.key)}
                            delete={()=>handleDeleteTodo(task.key)}
                        ></Task>
                    ))}
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

Todo.navigationOptions = (navData) => {
    return {
        headerTitle: 'Todo Page',
    };
};

export default Todo

const styles = StyleSheet.create({
    bgStyle: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textHeader:{
        marginTop: 10,
        fontSize: 16,
        color: 'white'
    },
    textInput: {
        height: 32,
        flex: 1,
        minHeight: '7%',
        marginTop: '5%',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 10,
        border: 'none',
        outline: 'none'
    },
    taskWrapper: {
        marginTop: '5%',
        flexDirection: 'row',
        borderColor: '#D0D0D0',
        borderBottomWidth: 0.5,
        width: '100%',
        alignItems: 'stretch',
        minHeight: 40,
    },
    task: {
        paddingBottom: 20,
        paddingLeft: 10,
        paddingTop: 6,
        borderColor: 'white',
        borderBottomWidth: 1,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        borderColor: 'rgb(222,222,222)',
        borderBottomWidth: 1,
        paddingRight: 10,
        paddingBottom: 5
    }
});
