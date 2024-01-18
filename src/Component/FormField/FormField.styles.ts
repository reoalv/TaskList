import {StyleSheet} from 'react-native';
import {Style} from './FormField.types';
import {moderateScale} from 'react-native-size-matters';

const styles: Style = StyleSheet.create({
  hintContainer: {
    height: moderateScale(16),
  },
  errorContainer: {
    marginTop: moderateScale(2),
  },
  linkText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: 'green',
    textDecorationLine: 'underline',
    textDecorationColor: 'green',
  },
  errorText: {
    fontSize: moderateScale(13),
    fontWeight: '500',
    color: 'red',
  },
});

export default styles;
