import React from "react";
import { StyleSheet, View } from "react-native";
import { PokemonProvider } from "./src/context/PokemonContext";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from './src/screens/Homepage'
import PokemonPage from './src/screens/PokemonPage'

const Stack = createStackNavigator()

export default function App(){
  return(
    <View style={styles.App}>
      <PokemonProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Homepage} options={{title: 'Home'}}/>
            <Stack.Screen name="PokemonPage" component={PokemonPage}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PokemonProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%'
  }
})