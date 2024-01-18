import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    minHeight: moderateScale(40),
    padding: moderateScale(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerLeft: {
    padding: moderateScale(8),
    marginRight: moderateScale(8),
  },
  centerComp: {
    flex: 1,
    top: moderateScale(8),
    marginRight: moderateScale(52),
  },
  containerText: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    color: '#000000',
  },
  containerRight: {
    padding: moderateScale(8),
    position: 'absolute',
    right: moderateScale(12),
  },
});
export default styles;
