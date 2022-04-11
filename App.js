import React, { useState } from 'react'
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import { IconButton, Colors, Avatar } from 'react-native-paper';
import OtpInputs from 'react-native-otp-inputs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {

  const [text, setText] = useState('')
  const [showOTP, setShowOTP] = useState('')


  return (
//     <View style={{ flex: 1 }}>
//       <StatusBar
//         backgroundColor="#fff"
//         barStyle="dark-content"
//       />
//       <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//         <IconButton
//             icon={() => <MaterialCommunityIcon name="account" size={25} />}

// />
//         </View>
//         <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
//           <IconButton
//             icon={() => <MaterialCommunityIcon name="magnify" size={25} />}
//           />
//           <IconButton
//             icon="bell"
//           />
//         </View>

//       </View>
   // </View>
        <View style={{backgroundColor:'#fff',
        flex:1,justifyContent:'center',padding:'5%'}}>
          <StatusBar  
         backgroundColor = "#fff"  
         barStyle = "dark-content"   
       />  
       <Text style={{fontSize:18,color:'#000',position:'absolute',top:10,right:10,color:'#6B8E23'}}>NEED HELP ?</Text>


    <Image style={{height:70,width:160,}} source={{uri: 'https://www.iccs-bpo.com/front-end/images/iccs_logo.png'}}/>
     {showOTP ?  (
     <>

    <View style={{height:10}}/>
    <Text style={{fontSize:22,color:'#808080'}}>Awesome, Thanks!</Text>
    <View style={{height:5}}/>
    <Text style={{fontSize:16,color:'#808080'}}>Please enter the OTP sent to <Text style={{color:'#000'}}>{text}</Text> <Text onPress={()=>setShowOTP(false)} style={{color:'#6B8E23'}}> Edit</Text></Text>
    <View style={{height:30}}/>
    <View style={{flexDirection:'row',}}>
    <OtpInputs
    inputContainerStyles={{borderWidth:0.2,width:45,height:45,borderRadius:4}}
              handleChange={(code) => console.log(code)}
              numberOfInputs={5}
            />
        <View style={{flex:0.05}}/>
    <TouchableOpacity style={{backgroundColor:'#808080',flex:0.15,alignItems:'center',
    height:45,width:45,justifyContent: 'center',borderRadius:4}}>
    <Text style={{color:'#fff',fontSize:18}}>Go</Text>
      </TouchableOpacity>
    </View>
    <View style={{height:25}}/>

    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,color:'#808080'}}>Didn't receive OTP ?</Text>
    <Text style={{fontSize:14,color:'#6B8E23'}}> Resend</Text> 
    <View>
    </View>
    </View>
    </>
     ):(
       <>
       <View style={{height:10}}/>
    <Text style={{fontSize:22,color:'#808080'}}>Let's Get Started</Text>
    <View style={{height:5}}/>
    <Text style={{fontSize:16,color:'#808080'}}>We will send an OTP to your mobile number</Text>
    <View style={{height:30}}/>
    <View style={{flexDirection:'row',}}>
    <TextInput
          style={{flex:0.7,
          backgroundColor:'#ffff',
          fontSize:18,height:45,
          borderWidth:1,
          borderRadius:4}}
          placeholder="Enter your Mobile No."
          value={text}
          onChangeText={text => setText(text)}
        />
        <View style={{flex:0.05}}/>
    <TouchableOpacity onPress={()=>setShowOTP(true)}
    style={{backgroundColor:'#808080',flex:0.25,alignItems:'center',
    height:45,justifyContent: 'center',borderRadius:4}}>
    <Text style={{color:'#fff',fontSize:18}}>Submit</Text>
      </TouchableOpacity>
    </View>
    <View style={{height:25}}/>

    <View style={{flexDirection:'row'}}>
    <IconButton
        icon="check"
        color={'#6B8E23'}
        size={25}
      />
    <View>
    <Text style={{fontSize:14,color:'#808080'}}>I have read and understood the</Text>
    <Text style={{fontSize:14,color:'#6B8E23'}}>Term and Privacy Policy</Text> 
    </View>
    </View>
    </>
     )}


          </View>
  )
}
