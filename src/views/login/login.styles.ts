import {StyleSheet} from 'react-native';
import theme from '../../theme';
const styles = StyleSheet.create({
  linkLo: {
    borderWidth: 4,
    width: 335,
    height: 48,
    left: 20,
    top: 330,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: theme.colors.BLACK,
    fontSize: theme.fonts.LARGE,
    borderRadius: 8,
    margin: 5,
    color: theme.colors.WHITE,
  },
  container: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  topText: {
    position: 'absolute',
    width: 230,
    height: 24,
    left: 20,
    fontSize: theme.fonts.DEFAULT,
    color: theme.colors.DARK_GRAY,
    fontFamily: 'Patrick Hand',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.01,
  },
  subText: {
    position: 'absolute',
    width: 335,
    height: 64,
    left: 20,
    top: 35,
    fontFamily: 'Patrick Hand',
    fontStyle: 'normal',
    fontSize: theme.fonts.XLARGE,
    colors: theme.colors.BLACK,
    lineHeight: 32,
  },
  textBox: {
    alignItems: 'center',
    borderWidth: 1.5,
    width: 335,
    height: 48,
    left: 20,
    top: 300,
    backgroundColor: theme.colors.WHITE,
    fontSize: theme.fonts.DEFAULT,
    borderRadius: 8,
    margin: 5,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    paddingTop: 100,
    alignItems: 'center',
  },
  imgLogo: {
    height: 200,
    width: 200,
  },
});

export default styles;
