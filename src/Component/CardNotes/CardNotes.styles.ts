import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {WIDTH_WINDOW} from '../../Utils/Dimension';

const styles = StyleSheet.create({
  container: {
    width: (WIDTH_WINDOW - WIDTH_WINDOW / moderateScale(7)) / 2,
    alignSelf: 'flex-start',
    height: moderateScale(120),
    padding: moderateScale(8),
    borderRadius: moderateScale(6),
    borderWidth: moderateScale(1.5),
    borderColor: 'green',
    backgroundColor: 'white',
    marginVertical: moderateScale(6),
    shadowColor: 'black',
    elevation: 2,
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: 'black',
  },
  body: {
    fontSize: moderateScale(14),
    marginTop: moderateScale(4),
    color: 'black',
  },
  containerFinish: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopEndRadius: moderateScale(4),
    borderBottomStartRadius: moderateScale(4),
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(4),
  },
  finishText: {
    fontSize: moderateScale(10),
    fontWeight: '600',
    color: 'black',
  },
});

export default styles;
