import React from 'react';
import { View } from "react-native";
import { styles } from './styleLoader';
import ProgressLoader from 'rn-progress-loader';


export const Loader = (props) => {
  return (
    <View style={styles.container}>
      <ProgressLoader
                visible={props.isLoading}
                isModal={true} 
                isHUD={true}
                hudColor={"#E1ECAB"}
                color={"#FFFFFF"} />
    </View>
  )
}

export default Loader