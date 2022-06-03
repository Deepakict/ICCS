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
  //       "NumberOfLeaves": 0.50
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
  //       "EmpCode": "ATS58664",
  //       "EmpJoinDate": "2022-04-01T00:00:00",
  //       "EmpName": "RIKKY SAGAR",
  //       "DesignationName": "Customer Care Executive",
  //       "Dept_name": "Operations"
  //     }
  //   ],
  //   "Table4": [
  //     {
  //       "Month": "June-2022",
  //       "Days in Month": 30,
  //       "Paid Days": 2.00
  //     }
  //   ],
  //   "Table5": [
  //     {
  //       "Head": "Basic",
  //       "Rate": 13000.00,
  //       "Paid Amount": 867.00
  //     },
  //     {
  //       "Head": "Total",
  //       "Rate": 13000.00,
  //       "Paid Amount": 867.00
  //     }
  //   ],
  //   "Table6": [
  //     {
  //       "userid": 167366,
  //       "empid": 167360,
  //       "empcode": "ATS58664",
  //       "empname": "RIKKY SAGAR",
  //       "RM": "MAYANK SRIVASTAVA",
  //       "FM": "MAYANK SRIVASTAVA"
  //     }
  //   ],
  //   "Table7": [
  //     {
  //       "Holiday": "Republic day 2022",
  //       "From": "26/01/2022",
  //       "TO": "26/01/2022"
  //     },
  //     {
  //       "Holiday": "Independence day...",
  //       "From": "15/08/2022",
  //       "TO": "15/08/2022"
  //     },
  //     {
  //       "Holiday": "Gandhi Jayanti...2022",
  //       "From": "02/10/2022",
  //       "TO": "02/10/2022"
  //     }
  //   ]
  // }

  const holiday = (data) => {
    return data.map((item, key) => {
      return (
        <Text style={{ fontSize: 12, color: '#808080' }}>{item.Holiday}</Text>
      )
    })
  }


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
            onPress={() => props.navigation.navigate('PoshScreen')}
            icon={() => <MaterialCommunityIcon name="account-alert" size={25} />}
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
      <View style={{ flex: 0.1, padding: '2%', flexDirection: 'column', justifyContent: 'center' }}>
        <Text style={{ fontSize: 22, color: '#808080', fontWeight: '500' }}>Let's Get with Dashboard !</Text>
      </View>
      {EmpData?.Table2[0]?.Error == 0 ? (
        <View style={{ flex: 0.7, }}>

          <ScrollView contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            flexGrow:1,
          }}>
            <View style={{ backgroundColor: '#fff', width: "48%", borderRadius: 10, elevation: 10, margin: '1%', padding: '2%' }}>
              <View style={{ borderRadius: 10, backgroundColor: '#E1ECAB', justifyContent: 'center', alignItems: 'center', flex: 0.45 }}>
                <MaterialCommunityIcon name="account" size={40} />
              </View>
              <View style={{ flex: 0.55, marginTop: '2%' }}>
                <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', marginVertical: '2%' }}>Employee Details :</Text>
                <Text style={{ fontSize: 12, color: '#808080' }}>ATS ID: {EmpData?.Table3[0]?.EmpCode}</Text>
                <Text style={{ fontSize: 12, color: '#808080' }}>Name: {EmpData?.Table3[0]?.EmpName}</Text>
              </View>
            </View>

            <View style={{ backgroundColor: '#fff', width: "48%", borderRadius: 10, elevation: 10, margin: '1%', padding: '2%' }}>
              <View style={{ borderRadius: 10, backgroundColor: '#E1ECAB', justifyContent: 'center', alignItems: 'center', flex: 0.45 }}>
                <MaterialCommunityIcon name="calendar-month-outline" size={40} />
              </View>
              <View style={{ flex: 0.55, marginTop: '2%' }}>
                <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', marginVertical: '2%' }}>Total available leaves :</Text>
                <Text style={{ fontSize: 12, color: '#808080' }}>Number Of Leaves: {EmpData?.Table1[0]?.NumberOfLeaves}</Text>
              </View>
            </View>

            <View style={{ backgroundColor: '#fff', width: "48%", borderRadius: 10, elevation: 10, margin: '1%', padding: '2%' }}>
              <View style={{ borderRadius: 10, backgroundColor: '#E1ECAB', justifyContent: 'center', alignItems: 'center', flex: 0.45 }}>
                <MaterialCommunityIcon name="book" size={40} />
              </View>
              <View style={{ flex: 0.55, marginTop: '2%' }}>
                <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', marginVertical: '2%' }}>Employee Wages:</Text>
                <Text style={{ fontSize: 12, color: '#808080' }}>Amount Payable as per attendance : {EmpData?.Table5[1]?.['Paid Amount']} </Text>
              </View>
            </View>

            <View style={{ backgroundColor: '#fff', width: "48%", borderRadius: 10, elevation: 10, margin: '1%', padding: '2%' }}>
              <View style={{ borderRadius: 10, backgroundColor: '#E1ECAB', justifyContent: 'center', alignItems: 'center', flex: 0.45 }}>
                <MaterialCommunityIcon name="office-building" size={40} />
              </View>
              <View style={{ flex: 0.55, marginTop: '2%' }}>
                <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', marginVertical: '2%' }}>Department Details:</Text>
                <Text style={{ fontSize: 12, color: '#808080' }}>Department: {EmpData?.Table3[0]?.Dept_name}</Text>
                <Text style={{ fontSize: 12, color: '#808080' }}>Designation Name: {EmpData?.Table3[0]?.DesignationName}</Text>
              </View>
            </View>

            <View style={{ backgroundColor: '#fff', width: "48%", borderRadius: 10, elevation: 10, margin: '1%', padding: '2%' }}>
              <View style={{ borderRadius: 10, backgroundColor: '#E1ECAB', justifyContent: 'center', alignItems: 'center', flex: 0.45 }}>
                <MaterialCommunityIcon name="party-popper" size={40} />
              </View>
              <View style={{ flex: 0.55, marginTop: '2%' }}>
                <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', marginVertical: '2%' }}>Holiday:</Text>

                {holiday(EmpData?.Table7)}
              </View>
            </View>

            <View style={{ backgroundColor: '#fff', width: "48%", borderRadius: 10, elevation: 10, margin: '1%', padding: '2%' }}>
              <View style={{ borderRadius: 10, backgroundColor: '#E1ECAB', justifyContent: 'center', alignItems: 'center', flex: 0.45 }}>
                <MaterialCommunityIcon name="bell-ring-outline" size={40} />
              </View>
              <View style={{ flex: 0.55, marginTop: '2%' }}>
                <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', marginVertical: '2%' }}>Total Absent :</Text>
              </View>
            </View>

            
          </ScrollView>
        </View>
      ) : (
        <View style={{ flex: 0.75, padding: '2%', justifyContent: "center", alignItems: 'center' }}>
          <Text style={{ fontSize: 18, color: '#000', fontWeight: '500', flex: 0.7 }}>{EmpData?.Table2[0]?.ErrorMsg}</Text>

        </View>
      )}
    </View>
  )
}