import {DetailScreenPropParams} from './DetailScreen/DetailScreen.types';

export enum Routes {
  HomeScreen = 'HomeScreen',
  DetailScreen = 'DetailScreen',
}

export type RoutesStackParams = {
  [Routes.HomeScreen]: undefined;
  [Routes.DetailScreen]: DetailScreenPropParams;
};
