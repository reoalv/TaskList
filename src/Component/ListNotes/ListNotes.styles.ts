import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    flexGrow: 1,
    paddingBottom: moderateScale(12),
    paddingTop: moderateScale(10),
  },
  flatlistColumn: {
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(18),
  },
});

export default styles;
