import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    padding: moderateScale(12),
  },
  containerScroll: {
    backgroundColor: 'white',
    flexGrow: 1,
    padding: moderateScale(12),
    borderRadius: moderateScale(8),
  },
});

export default styles;
