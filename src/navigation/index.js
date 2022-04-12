import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './authStack';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import MainNavigator from './mainStack';

const TAG = 'navigation';
const Navigation = () => {

    return (
        <PaperProvider>
            <NavigationContainer>
                <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <StatusBar
                        backgroundColor="#fff"
                        barStyle="dark-content"
                    />
                    <AuthNavigator />
                    {/* <MainNavigator/> */}
                </SafeAreaView>
            </NavigationContainer>
        </PaperProvider>
    );
};

export default Navigation;