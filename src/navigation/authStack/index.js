import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, OtpScreen, HomeScreen, PoshScreen } from '../../screens';

const AuthStack = createNativeStackNavigator();


const AuthNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
            <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
            <AuthStack.Screen name="HomeScreen" component={HomeScreen} />
            <AuthStack.Screen name="PoshScreen" component={PoshScreen} />

        </AuthStack.Navigator>
    )
}

export default AuthNavigator;
