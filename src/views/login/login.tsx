import React, {useEffect, useState} from 'react';
import {Text, View, Image, Alert} from 'react-native';

import ButtonForm from '../../components/c.Buttons/i.Button';
import InputForm from '../../components/c.Input/i.Input';
import stylesLogin from './login.styles';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    return new Promise((resolve, reject) => {
      resolve({
        id: 1,
        email: 'drivesave@gmail.com',
        name: 'drivesave',
        pass: '123456',
        token: 'token',
      });
    }).then((value: any) => {
      if (
        (email === '' || email === null || email === undefined) &&
        (password === '' || password === null || password === undefined)
      ) {
        Alert.alert('Llene los datos');
      } else if (email === value.email && password === value.pass) {
        Alert.alert('Bienvenido', ` ${value.name}`);
        navigation.navigate('Login2');
      } else if (email != value.email || password != value.pass) {
        Alert.alert('Contraseña o email incorrectos');
      } else {
        Alert.alert('Error');
      }
    });
  };

  useEffect(() => {}, []);

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
            text={'Email'}
            type={'email-address'}
            changed={setEmail}
            secure={false}
          />
          <InputForm
            text={'Password'}
            type={'default'}
            changed={setPassword}
            secure={true}
          />

          <View style={{alignItems: 'center'}}>
            <ButtonForm
              text={'Login'}
              pressed={() => {
                login();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
