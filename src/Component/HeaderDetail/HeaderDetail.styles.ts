import {moderateScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerContentSave: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    backgroundColor: 'green',
    borderRadius: moderateScale(4),
  },
  containerContentSaveDisable: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    backgroundColor: 'grey',
    borderRadius: moderateScale(4),
  },
  textContentSave: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: 'white',
  },
  containerContentDelete: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    backgroundColor: 'red',
    borderRadius: moderateScale(4),
    marginRight: moderateScale(6),
  },
  textContentDelete: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: 'white',
  },
  containerIsDone: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    borderWidth: moderateScale(1),
    borderColor: 'green',
    borderRadius: moderateScale(4),
    marginRight: moderateScale(6),
  },
  containerNotDone: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    backgroundColor: 'green',
    borderRadius: moderateScale(4),
    marginRight: moderateScale(6),
  },
  textContentIsDone: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: 'green',
  },
  textContentNotDone: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: 'white',
  },
  backText: {
    fontSize: moderateScale(16),
    color: 'green',
    textDecorationLine: 'underline',
    textDecorationColor: 'green',
  },
});

export default styles;
