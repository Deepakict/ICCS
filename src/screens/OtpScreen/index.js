import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import OtpInputs from 'react-native-otp-inputs';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export const OtpScreen = (props) => {
  const mobile = props.route.params.mobile;
  const [text, setText] = useState('')

  const verifyOTP = async () => {

    try {
      const url = `http://203.123.32.98:3636/accenthrp/api/validateotp.aspx?mobno=${mobile}&OTP=${text}`
      const response = await axios.get(url);
      if (response.data.Table[0].Sucess === 1) {
        props.navigation.navigate('HomeScreen', { data: response.data })
      } else {
        Toast.show({
          type: 'error',
          text1: 'Not a valid OTP',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Server Error',
      });
    }

  }
  
  const sentOtp = async () => {
    try {
      const url = `http://203.123.32.98:3636/accenthrp/api/sendotp.aspx?mobno=${mobile}`
      const response = await axios.get(url);
      if (response.data.Table[0].Sucess === 1) {

      } else {
        Toast.show({
          type: 'error',
          text1: 'Not a valid user',
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
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <Text style={{ fontSize: 18, color: '#000', position: 'absolute', top: 10, right: 10, color: '#6B8E23' }}>NEED HELP ?</Text>
      <Image style={{ height: 70, width: 160, }} source={{ uri: 'https://www.iccs-bpo.com/front-end/images/iccs_logo.png' }} />
      <View style={{ height: 10 }} />
      <Text style={{ fontSize: 22, color: '#808080' }}>Awesome, Thanks!</Text>
      <View style={{ height: 5 }} />
      <Text style={{ fontSize: 16, color: '#808080' }}>Please enter the OTP sent to <Text style={{ color: '#000' }}>{text}</Text> <Text onPress={() => setShowOTP(false)} style={{ color: '#6B8E23' }}> Edit</Text></Text>
      <View style={{ height: 30 }} />
      <View style={{ flexDirection: 'row', }}>
        <OtpInputs
          inputContainerStyles={{ borderWidth: 0.2, width: 45, height: 45, borderRadius: 4 }}
          inputStyles={{ textAlign: 'center' }}
          handleChange={(code) => setText(code)}
          numberOfInputs={4}
        />
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
        <Text style={{ fontSize: 14, color: '#808080' }}>Didn't receive OTP ?</Text>
        <Text onPress={sentOtp} style={{ fontSize: 14, color: '#6B8E23' }}> Resend</Text>
        <View>
        </View>
      </View>
    </View>

  )
}