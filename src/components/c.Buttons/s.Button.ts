import {StyleSheet} from 'react-native';
import theme from '../../theme';

const btnStyle = StyleSheet.create({
  btnForm: {
    backgroundColor: 'black',
    margin: 70,
    padding: 5,
    alignItems: 'center',
    height: 50,
    width: 370,
    borderRadius: 5,
  },
  textB: {
    color: theme.colors.WHITE,
    fontSize: theme.fonts.LARGE,
  },
});

export default btnStyle;
