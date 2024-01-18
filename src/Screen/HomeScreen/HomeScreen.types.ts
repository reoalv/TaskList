import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes, RoutesStackParams} from '../Screen.types';

export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RoutesStackParams,
  Routes.HomeScreen
>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProps;
};
