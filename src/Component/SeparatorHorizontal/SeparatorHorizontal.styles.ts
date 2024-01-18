import {moderateScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'grey',
  },
});

export default styles;
