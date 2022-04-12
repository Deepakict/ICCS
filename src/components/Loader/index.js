import React from 'react';
import { ActivityIndicator, View } from "react-native";
import { styles } from './styleLoader';


export const Loader = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={props.isLoading} size="large" color={'#E1ECAB'} />
    </View>
  )
}

export default Loader