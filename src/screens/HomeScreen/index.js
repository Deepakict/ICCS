import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton, Colors, Avatar } from 'react-native-paper';
import { List } from 'react-native-paper';

export const HomeScreen = (props) => {
  // const EmpData = props.route.params.data;

  return (

    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <IconButton
            icon={() => <MaterialCommunityIcon name="magnify" size={25} />}
          />
          <IconButton
            icon="bell"
          />
        </View>
      </View>
      <View style={{ flex: 0.2, padding: '2%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Image style={{ height: 70, width: 160, }} source={{ uri: 'https://www.iccs-bpo.com/front-end/images/iccs_logo.png' }} />


      </View>
      <View style={{ flex: 0.7, padding: '2%' }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }}>
          <List.Accordion theme={{
            colors: {
              primary: '#000',
            },
          }}
            title="Attendance" id="1" style={{ elevation: 5, backgroundColor: '#E1ECAB', marginVertical: '2%' }}>
            <View style={{ width: "100%", borderRadius: 16, height: 100, backgroundColor: '#D3D3D3',padding:'2%'}}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{fontWeight:'500',color:'#000',fontSize:16}}>EL</Text>
                <Text style={{fontWeight:'500',color:'#000',fontSize:16}}>ML</Text>
                <Text style={{fontWeight:'500',color:'#000',fontSize:16}}>CL</Text>
                <Text style={{fontWeight:'500',color:'#000',fontSize:16}}>CO</Text>
                <Text style={{fontWeight:'500',color:'#000',fontSize:16}}>SL</Text>
              </View>
            </View>
          </List.Accordion>
          <List.Accordion
            theme={{
              colors: {
                primary: '#000',
              },
            }}
            title="Amount Payable" id="2" style={{ elevation: 5, backgroundColor: '#E1ECAB', marginVertical: '2%' }}>
          <View style={{ width: "100%", borderRadius: 16, height: 100, backgroundColor: '#D3D3D3',padding:'2%'}}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{fontWeight:'500',color:'#000',fontSize:16}}>Month</Text>
                <Text style={{fontWeight:'500',color:'#000',fontSize:16}}>Days in Month</Text>
                <Text style={{fontWeight:'500',color:'#000',fontSize:16}}>Paid Days</Text>
              </View>
            </View>
          </List.Accordion>
          <List.Accordion
            theme={{
              colors: {
                primary: '#000',
              },
            }}
            title="Total Absent" id="3" style={{ elevation: 5, backgroundColor: '#E1ECAB', marginVertical: '2%' }}>
            <View style={{ width: "100%", borderRadius: 16, height: 100, backgroundColor: '#D3D3D3',padding:'2%'}}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{fontWeight:'500',color:'#000',fontSize:16}}>Conveyance</Text>
                <Text style={{fontWeight:'500',color:'#000',fontSize:16}}>HRA</Text>
                <Text style={{fontWeight:'500',color:'#000',fontSize:16}}>SALARY</Text>
                <Text style={{fontWeight:'500',color:'#000',fontSize:16}}>Total</Text>
              </View>
              
            </View>
          </List.Accordion>
          <List.Accordion
            theme={{
              colors: {
                primary: '#000',
              },
            }}
            title="Total available leaves" id="4" style={{ elevation: 5, backgroundColor: '#E1ECAB', marginVertical: '2%' }}>
            <View style={{ width: "100%", borderRadius: 6, height: 150, backgroundColor: '#808080', opacity: 0.2 }}>

            </View>
          </List.Accordion>
        </ScrollView>
      </View>

    </View>
  )
}