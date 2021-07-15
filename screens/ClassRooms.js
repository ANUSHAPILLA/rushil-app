import * as React from 'react';
import { Button, View,Text,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem } from 'react-native-elements'
import { Component } from 'react';

function class1({ navigation }) {
  return (
    <ListItem
       leftElement ={<Text>STUDENT</Text>}
    rightElement={
        <TouchableOpacity>
          <Text style={{color:'black'}}>View</Text>
        </TouchableOpacity>
      } 
    bottomDivider
  />
  );
}

function class2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function class3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Screen({ navigation }) {
  return (
    <View>
    <View style={{ marginTop:50, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="class1" onPress={() => navigation.navigate(class1)} />
    </View>
     <View style={{ marginTop:50, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="class2" onPress={() => navigation.navigate(class2)} />
    </View>
     <View style={{ marginTop:50, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="class3" onPress={() => navigation.navigate(class3)} />
    </View>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Screen} />
      <Stack.Screen name="class1" component={class1} />
      <Stack.Screen name="class2" component={class2} />
      <Stack.Screen name="class3" component={class3} />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  render(){
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
  }
}
