import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import OtpInputs from 'react-native-otp-inputs';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export const OtpScreen = (props) => {
  const userId = props.route.params.mobile;
  const [text, setText] = useState('')

  const verifyOTP = async () => {
    try {
      const url = `http://203.123.32.98:3636/accenthrp/api/ValidateUser.aspx?uid=${userId}&upass=${text}`
      const response = await axios.get(url);
      if (response.data.Table[0].Sucess === 1) {
        props.navigation.navigate('HomeScreen', { data: response.data })
      } else {
        Toast.show({
          type: 'error',
          text1: 'Not a valid Account',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Server Error',
      });
    }

  }
  
 
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1, justifyContent: 'center', padding: '5%'
    }}>
            <Toast />

      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <Text style={{ fontSize: 18, color: '#000', position: 'absolute', top: 10, right: 10, color: '#6B8E23' }}>NEED HELP ?</Text>
      <Image style={{ height: 70, width: 165, }} source={require('../../assets/iccs_logo.png')} />
      <View style={{ height: 10 }} />
      <Text style={{ fontSize: 22, color: '#808080' }}>Awesome, Thanks!</Text>
      <View style={{ height: 5 }} />
      <Text style={{ fontSize: 16, color: '#808080' }}>Please enter the password. <Text style={{fontSize: 14, color: '#808080' }}>{userId}</Text><Text onPress={() =>props.navigation.goBack()} style={{ color: '#6B8E23' }}> Edit User Id ?</Text></Text>
      <View style={{ height: 30 }} />
      <View style={{ flexDirection: 'row', }}>
      <TextInput
      textBreakStrategy='simple'
          style={{
            flex: 0.8,
            backgroundColor: '#ffff',
            fontSize: 18, height: 45,
            borderWidth: 1,
            borderRadius: 4,
            color:'#000'

          }}
          placeholder="Enter User Password"
          value={text}
          onChangeText={text => setText(text)}
        />
        {/* <OtpInputs
          inputContainerStyles={{ borderWidth: 0.2, width: 45, height: 45, borderRadius: 4 }}
          inputStyles={{ textAlign: 'center' }}
          handleChange={(code) => setText(code)}
          numberOfInputs={4}
        /> */}
        <View style={{ flex: 0.05 }} />
        <TouchableOpacity onPress={verifyOTP} style={{
          backgroundColor: '#808080', flex: 0.15, alignItems: 'center',
          height: 45, width: 45, justifyContent: 'center', borderRadius: 4
        }}>
          <Text style={{ color: '#fff', fontSize: 18 }}>Go</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 25 }} />

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 14, color: '#808080' }}>Forget Your Password ?</Text>
        <Text  style={{ fontSize: 14, color: '#6B8E23' }}> Contact Admin</Text>
        <View>
        </View>
      </View>
    </View>

  )
}