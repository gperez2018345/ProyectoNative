import {StyleSheet} from 'react-native';
import theme from '../../theme';

const inputS = StyleSheet.create({
  inputS: {
    alignItems: 'center',
    borderWidth: 1.5,
    width: 350,
    height: 48,
    left: 20,
    backgroundColor: theme.colors.WHITE,
    fontSize: theme.fonts.DEFAULT,
    borderRadius: 8,
    margin: 5,
  },
});

export default inputS;
