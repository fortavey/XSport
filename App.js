import React, { useEffect } from 'react'
import getLang from './src/asyncFunctions/getLang'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/Screens/HomeScreen'
import CategoryScreen from './src/Screens/CategoryScreen'
import CardScreen from './src/Screens/CardScreen'
import DocsScreen from './src/Screens/DocsScreen'

function App() {
  const Stack = createNativeStackNavigator()

  useEffect(() => {
    getLang()
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
        <Stack.Screen
          name="Docs"
          component={DocsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
