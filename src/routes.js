import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './pages/Feed';

import logo from './assets/instagram.png';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerTitle: <Image source={logo} />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
