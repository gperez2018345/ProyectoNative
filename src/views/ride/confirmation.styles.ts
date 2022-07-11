import {StyleSheet} from 'react-native';
import theme from '../../theme';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  topText: {
    width: 335,
    height: 64,
    left: 20,
    top: 10,
    fontFamily: 'Patrick Hand',
    fontSize: theme.fonts.DEFAULT,
    color: theme.colors.BLACK,
    lineHeight: 32,
    textAlign: 'center',
  },
  subText: {
    width: 335,
    height: 64,
    left: 20,
    top: 50,
    fontFamily: 'Patrick Hand',
    fontSize: theme.fonts.XXLARGE,
    color: theme.colors.BLACK,
    lineHeight: 32,
    textAlign: 'center',
  },
  img: {
    width: 425,
    height: 425,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  centerImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
