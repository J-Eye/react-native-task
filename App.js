import React, {useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import registerNNPushToken from 'native-notify';
import {Text} from 'react-native';

import ChosenTask from './src/screens/ChosenTask';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  //push notif
  registerNNPushToken(6633, '95zK9Dl08zCscTdGeXulJN');
  
  //globalstate management
  //[{id: 1, task: "brush your teeth"}]
  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState('');
  const [chosenTask, setChosenTask] = useState('');

  const GlobalState ={
    toDoList, setToDoList,
    task, setTask,
    chosenTask, setChosenTask
  }

  //navigation
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name='Home' options={{headerShown: false}}>
        {props =><Home {...props} GlobalState ={GlobalState}/>}
      </Stack.Screen> 

      <Stack.Screen name='ChosenTask' options={{headerShown: false}}>
        {props =><ChosenTask {...props} GlobalState ={GlobalState}/>}
      </Stack.Screen>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
