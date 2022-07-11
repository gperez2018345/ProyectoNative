import {StyleSheet} from 'react-native';
import theme from '../../theme';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    borderWidth: 4,
    width: 335,
    height: 48,
    left: 40,
    top: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: theme.colors.WHITE,
    fontSize: theme.fonts.LARGE,
    borderRadius: 8,
    margin: 5,
  },
  buscador: {
    padding: 0.5,
    marginTop: 40,
    borderRadius: 100,
  },
  fecha: {
    padding: 0.5,
    margin: 50,
    borderRadius: 100,
    backgroundColor: theme.colors.WHITE,
  },
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
  topText: {
    color: theme.colors.DARK_GRAY,
    fontFamily: 'Patrick Hand',
    fontStyle: 'normal',
    fontSize: theme.fonts.XXXLARGE,
    lineHeight: 100,
    letterSpacing: 0.01,
    textAlign: 'center',
    top: 25,
  },
  subText: {
    textAlign: 'center',
    top: 25,
    fontFamily: 'Patrick Hand',
    fontStyle: 'normal',
    fontSize: theme.fonts.DEFAULT,
    color: theme.colors.BLACK,
    lineHeight: 18,
  },
  signinButton: {
    borderRadius: 8,
    marginHorizontal: 50,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  fondo: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    width: 400,
    marginTop: 125,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;
