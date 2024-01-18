import {Dimensions, Platform} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const WIDTH_WINDOW = Dimensions.get('window').width;
export const HEIGHT_WINDOW = Dimensions.get('window').height;

export const headHeight =
  Platform.OS === 'ios' ? HEIGHT_WINDOW * 0.1 : moderateScale(30);
