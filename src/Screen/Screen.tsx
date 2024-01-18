import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes, RoutesStackParams} from './Screen.types';
import HomeScreen from './HomeScreen/HomeScreen';
import {QueryClient, QueryClientProvider} from 'react-query';
import DetailScreen from './DetailScreen/DetailScreen';

const Stack = createNativeStackNavigator<RoutesStackParams>();

const queryClient = new QueryClient();

const Screen = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
          <Stack.Screen name={Routes.DetailScreen} component={DetailScreen} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default Screen;
