import React, {useContext, useEffect, useState} from 'react';
import {Text, View, Image, Alert} from 'react-native';

import ButtonForm from '../../components/c.Buttons/i.Button';
import InputForm from '../../components/c.Input/i.Input';
import stylesLogin from './login.styles';
import {AuthContext} from '../../state/contexts/context';
import {initialLoginState, loginReducer} from '../../state/reducers/auth';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = React.useContext(AuthContext);

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const login = async (username: any, password: any) => {
    signIn(username, password);
    setTimeout(() => {
      if (loginState.singedIn === true) {
        navigation.navigate('Register');
      }
    }, 1000);
  };

  return (
    <View>
      <View style={stylesLogin.centerImg}>
        <Image
          source={require('../../res/img/user.png')}
          style={stylesLogin.img}
        />
      </View>

      <View>
        <View>
          <InputForm
            text={'Email...'}
            type={'email-address'}
            changed={setEmail}
            secure={false}
          />
          <InputForm
            text={'Password...'}
            type={'default'}
            changed={setPassword}
            secure={true}
          />
          <View style={{alignItems: 'center'}}>
            <ButtonForm
              text={'Login'}
              pressed={() => {
                login(email, password);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
