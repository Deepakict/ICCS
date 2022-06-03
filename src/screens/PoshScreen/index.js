import React, { useState } from 'react'
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import axios from 'axios';

export const PoshScreen = (props) => {
    const [text, setText] = useState('')
    const [subject, setSubject] = useState('')
    const [userId, setUserId] = useState('')

    const poshApi = async () => {
        try {
            const url = `http://203.123.32.98:3636/accenthrp/api/SendPOSHMail.aspx?userId=${userId}&subject=${subject}&detail=${text}`
            const response = await axios.get(url);
            if (response.data.Table[0].Sucess === 1) {
                props.navigation.goBack()
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'something wrong please check again',
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
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff' }}>
            <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
            />
                  <Toast />

            <View style={{ flex: 0.15, padding: '2%' }}>
                <Text style={{ fontSize: 18, color: '#000', position: 'absolute', top: 10, right: 10, color: '#6B8E23' }}>POSH COMPLAINT</Text>
                <Image style={{ height: 50, width: 140, }} source={{ uri: 'https://www.iccs-bpo.com/front-end/images/iccs_logo.png' }} />
            </View>
            <View style={{ flex: 0.65, padding: '2%' }}>

                <View style={{
                    flexDirection: 'row', backgroundColor: '#E1ECAB', alignItems: 'center',
                    height: 45, width: '100%', justifyContent: 'center',
                }}>
                    <MaterialCommunityIcon name="message-text-lock" size={20} />

                    <Text style={{ fontSize: 12, color: '#000', fontWeight: '500', marginVertical: '2%' }}> POSH COMPLAINT !</Text>
                </View>
                <View style={{ flex: 1, }}>
                <TextInput
                        style={{
                            fontSize: 14,
                            borderColor: '#6B8E23',
                            height: 45,
                            borderWidth: 0.5,
                            borderRadius: 4,
                            marginVertical: '2%'
                        }}
                        placeholder="User ID"
                        value={userId}
                        multiline={true}

                        onChangeText={text => setUserId(text)}
                    />
                    <TextInput
                        style={{
                            fontSize: 14,
                            borderColor: '#6B8E23',
                            height: 45,
                            borderWidth: 0.5,
                            borderRadius: 4,
                            marginVertical: '2%'
                        }}
                        placeholder="Subject"
                        value={subject}
                        multiline={true}

                        onChangeText={text => setSubject(text)}
                    />
                    <Text style={{ fontSize: 14, color: '#6B8E23', fontWeight: '500', marginVertical: '2%' }}> Description:*</Text>

                    <View style={{ flex: 0.6, backgroundColor: '#E1ECAB', borderRadius: 14 }}>
                        <TextInput
                            style={{
                                fontSize: 18,
                                color: '#000',
                            }}
                            placeholder="Description"
                            value={text}
                            multiline={true}

                            onChangeText={text => setText(text)}
                        />
                    </View>
                    <TouchableOpacity
                    onPress={poshApi}
                    style={{
                        backgroundColor: '#808080', alignItems: 'center',
                        height: 45, width: '100%', justifyContent: 'center', borderRadius: 4, marginTop: '4%'
                    }}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>Go</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </ScrollView>
    )
}