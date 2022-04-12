import { View, Text, StatusBar, Image, TextInput, TouchableOpacity,Keyboard } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from 'react-native-paper';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export const LoginScreen = (props) => {
  const [text, setText] = useState('')

  const sentOtp = async () => {
    Keyboard.dismiss()
    try {
      const url = `http://203.123.32.98:3636/accenthrp/api/sendotp.aspx?mobno=${text}`
      const response = await axios.get(url);
      if (response.data.Table[0].Sucess === 1) {
        props.navigation.navigate('OtpScreen',{mobile:text})
      } else {
        Toast.show({
          type: 'error',
          text1: 'Not a valid user',
        });
      }
    } catch (error) {
      console.log("ere", error)
      Toast.show({
        type: 'error',
        text1: 'Server Error',
      });
    }

  }

  return (
    <View  style={{
      backgroundColor: '#fff',
      flex: 1, justifyContent: 'center', padding: '5%'
    }}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <Toast />

      <Text style={{ fontSize: 18, color: '#000', position: 'absolute', top: 10, right: 10, color: '#6B8E23' }}>NEED HELP ?</Text>
      <Image style={{ height: 70, width: 160, }} source={{ uri: 'https://www.iccs-bpo.com/front-end/images/iccs_logo.png' }} />
      <View style={{ height: 10 }} />
      <Text style={{ fontSize: 22, color: '#808080' }}>Let's Get Started</Text>
      <View style={{ height: 5 }} />
      <Text style={{ fontSize: 16, color: '#808080' }}>We will send an OTP to your mobile number</Text>
      <View style={{ height: 30 }} />
      <View style={{ flexDirection: 'row', }}>
        <TextInput
          style={{
            flex: 0.7,
            backgroundColor: '#ffff',
            fontSize: 18, height: 45,
            borderWidth: 1,
            borderRadius: 4
          }}
          placeholder="Enter your Mobile No."
          value={text}
          onChangeText={text => setText(text)}
        />
        <View style={{ flex: 0.05 }} />
        <TouchableOpacity onPress={sentOtp}
          style={{
            backgroundColor: '#808080', flex: 0.25, alignItems: 'center',
            height: 45, justifyContent: 'center', borderRadius: 4
          }}>
          <Text style={{ color: '#fff', fontSize: 18 }}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 25 }} />

      <View style={{ flexDirection: 'row' }}>
        <IconButton
          icon="check"
          color={'#6B8E23'}
          size={25}
        />
        <View>
          <Text style={{ fontSize: 14, color: '#808080' }}>I have read and understood the</Text>
          <Text style={{ fontSize: 14, color: '#6B8E23' }}>Term and Privacy Policy</Text>
        </View>
      </View>
    </View>

  )
}