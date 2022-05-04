import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton, Colors, Avatar } from 'react-native-paper';
import { List } from 'react-native-paper';

export const HomeScreen = (props) => {
  const EmpData = props.route.params.data;
  // const EmpData = {
  //   "Table": [
  //     {
  //       "Sucess": 1
  //     }
  //   ],
  //   "Table1": [
  //     {
  //       "LeaveType": "CL",
  //       "NumberOfLeaves": 0.40
  //     }
  //   ],
  //   "Table2": [
  //     {
  //       "Error": 0,
  //       "ErrorMsg": "Sucess"
  //     }
  //   ],
  //   "Table3": [
  //     {
  //       "EmpCode": "ATS57343",
  //       "EmpJoinDate": "2021-01-20T00:00:00",
  //       "EmpName": "PRABHA",
  //       "DesignationName": "Customer Care Executive",
  //       "Dept_name": "Operations"
  //     }
  //   ],
  //   "Table4": [
  //     {
  //       "Month": "April-2022",
  //       "Days in Month": 30,
  //       "Paid Days": 12.40
  //     }
  //   ],
  //   "Table5": [
  //     {
  //       "Head": "Basic",
  //       "Rate": 8000.00,
  //       "Paid Amount": 3333.00
  //     },
  //     {
  //       "Head": "Total",
  //       "Rate": 8000.00,
  //       "Paid Amount": 3333.00
  //     }
  //   ]
  // }
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
            icon="power"
            onPress={() => props.navigation.navigate('LoginScreen')}
          />
        </View>
      </View>
      <View style={{ flex: 0.1, padding: '2%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Image style={{ height: 70, width: 160, }} source={{ uri: 'https://www.iccs-bpo.com/front-end/images/iccs_logo.png' }} />
      </View>
      <View style={{ flex: 0.05, padding: '2%', flexDirection: 'column', justifyContent: 'center' }}>
        <Text style={{ fontSize: 22, color: '#808080', fontWeight: '500' }}>Let's Get with Dashboard !</Text>
      </View>
      {EmpData?.Table2[0]?.Error == 0 ? (
        <View style={{ flex: 0.75, padding: '2%', justifyContent: "center", }}>
          <View style={{ borderWidth: 0.5 }}>
            <View style={{ flexDirection: 'row', height: 50, borderBottomWidth: 0.5, alignItems: 'center', padding: '1%' }}>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.7 }}>ATS ID : </Text>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.3 }}>{EmpData?.Table3[0]?.EmpCode || ''}</Text>
            </View>
            <View style={{ flexDirection: 'row', height: 50, borderBottomWidth: 0.5, alignItems: 'center', padding: '1%' }}>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.7 }}>Name : </Text>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.3 }}>{EmpData?.Table3[0]?.EmpName || ''}</Text>
            </View>
            <View style={{ flexDirection: 'row', height: 50, borderBottomWidth: 0.5, alignItems: 'center', padding: '1%' }}>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.7 }}>Designation: </Text>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.3 }}>{EmpData?.Table3[0]?.DesignationName || ''}</Text>
            </View>
            <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', padding: '1%' }}>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.7 }}>Department: </Text>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.3 }}>{EmpData?.Table3[0]?.Dept_name || ''}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', }} />

          <View style={{ borderWidth: 0.5 }}>
            <View style={{ flexDirection: 'row', height: 50, borderBottomWidth: 0.5, alignItems: 'center', padding: '1%' }}>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.7 }}>Attendance<Text style={{ fontSize: 7, color: '#000', fontWeight: '500', }}> (Month till date of the present month only)</Text>  : </Text>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.3 }}> </Text>
            </View>
            <View style={{ flexDirection: 'row', height: 50, borderBottomWidth: 0.5, alignItems: 'center', padding: '1%' }}>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.7 }}>Amount Payable as per attendance : </Text>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.3 }}> {EmpData?.Table5[1]?.['Paid Amount'] || ''}</Text>
            </View>
            <View style={{ flexDirection: 'row', height: 50, borderBottomWidth: 0.5, alignItems: 'center', padding: '1%' }}>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.7 }}>Total Absent : </Text>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.3 }}> </Text>
            </View>
            <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', padding: '1%' }}>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.7 }}>Total available leaves : </Text>
              <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', flex: 0.3 }}>{EmpData?.Table1[0]?.NumberOfLeaves || ''}</Text>
            </View>
          </View>
          {/* <View style={{backgroundColor:'#fff',height:"47%",width:"48%",borderRadius:10,elevation:10,margin:'1%',padding:'2%'}}>
        <View style={{borderRadius:10,backgroundColor:'#E1ECAB',justifyContent:'center',alignItems:'center',flex:0.45}}>
        <MaterialCommunityIcon name="account" size={40} />
        </View>
        <View style={{flex:0.55,marginTop:'2%'}}>
        <Text style={{ fontSize: 12, color: '#000',fontWeight:'500',marginVertical:'2%' }}>Employee Details :</Text>
        <Text style={{ fontSize: 12, color: '#808080'}}>Emp Name: {EmpData?.Table3[0]?.EmpName}</Text>
        <Text style={{ fontSize: 12, color: '#808080'}}>Dept Name: {EmpData?.Table3[0]?.Dept_name}</Text>
        <Text style={{ fontSize: 12, color: '#808080'}}>Designation Name: {EmpData?.Table3[0]?.DesignationName}</Text>
        <Text style={{ fontSize: 12, color: '#808080'}}>Emp Code: {EmpData?.Table3[0]?.EmpCode}</Text>
        </View>
        </View>
        <View style={{backgroundColor:'#fff',height:"47%",width:"48%",borderRadius:10,elevation:10,margin:'1%',padding:'2%'}}>
        <View style={{borderRadius:10,backgroundColor:'#E1ECAB',justifyContent:'center',alignItems:'center',flex:0.45}}>
        <MaterialCommunityIcon name="calendar-month-outline" size={40} />
        </View>
        <View style={{flex:0.55,marginTop:'2%'}}>
        <Text style={{ fontSize: 12, color: '#000',fontWeight:'500',marginVertical:'2%' }}>Leaves Details :</Text>
        <Text style={{ fontSize: 12, color: '#808080'}}>Leave Type: {EmpData?.Table1[0]?.LeaveType}</Text>
        <Text style={{ fontSize: 12, color: '#808080'}}>Number Of Leaves: {EmpData?.Table1[0]?.NumberOfLeaves}</Text>
        </View>
        </View>
        <View style={{backgroundColor:'#fff',height:"47%",width:"48%",borderRadius:10,elevation:10,margin:'1%',padding:'2%'}}>
        <View style={{borderRadius:10,backgroundColor:'#E1ECAB',justifyContent:'center',alignItems:'center',flex:0.45}}>
        <MaterialCommunityIcon name="bell-ring-outline" size={40} />
        </View>
        <View style={{flex:0.55,marginTop:'2%'}}>
        <Text style={{ fontSize: 12, color: '#000',fontWeight:'500',marginVertical:'2%' }}>Attendance Details:</Text>
        <Text style={{ fontSize: 12, color: '#808080'}}>Days in Month: {EmpData?.Table4[0]?.['Days in Month']}</Text>
        <Text style={{ fontSize: 12, color: '#808080'}}>Month: {EmpData?.Table4[0]?.['Month']}</Text>
        <Text style={{ fontSize: 12, color: '#808080'}}>Paid Days: {EmpData?.Table4[0]?.['Paid Days']}</Text>

        </View>
        </View>
        <View style={{backgroundColor:'#fff',height:"47%",width:"48%",borderRadius:10,elevation:10,margin:'1%',padding:'2%'}}>
        <View style={{borderRadius:10,backgroundColor:'#E1ECAB',justifyContent:'center',alignItems:'center',flex:0.45}}>
        <MaterialCommunityIcon name="book" size={40} />
        </View>
        <View style={{flex:0.55,marginTop:'2%'}}>
        <Text style={{ fontSize: 12, color: '#000',fontWeight:'500',marginVertical:'2%' }}>Employee Wages:</Text>
        <Text style={{ fontSize: 12, color: '#808080'}}>Paid Amount: {EmpData?.Table5[1]?.['Paid Amount']}</Text>
        <Text style={{ fontSize: 12, color: '#808080'}}>Rate: {EmpData?.Table5[1]?.['Rate']}</Text>
        </View>
        </View> */}

        </View>
      ) : (
        <View style={{ flex: 0.75, padding: '2%', justifyContent: "center",alignItems:'center' }}>
          <Text style={{ fontSize: 18, color: '#000', fontWeight: '500', flex: 0.7 }}>{EmpData?.Table2[0]?.ErrorMsg}</Text>

        </View>
      )}
    </View>
  )
}