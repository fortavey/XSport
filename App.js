import React, { useEffect } from 'react'
import loadFunction from './src/asyncFunctions/load'
import getLang from './src/asyncFunctions/getLang'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/Screens/HomeScreen'
import CategoryScreen from './src/Screens/CategoryScreen'
import CardScreen from './src/Screens/CardScreen'

function App() {
  const Stack = createNativeStackNavigator()

  useEffect(() => {
    getLang()
    // loadFunction()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Card"
          component={CardScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
