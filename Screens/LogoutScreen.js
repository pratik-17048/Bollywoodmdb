import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const LogoutScreen = () => {
  const {colors} = useTheme()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       
        <Text style={{fontSize:34, color:colors.text}}>
          LogoutScreen</Text>
      </View>
  )
}

export default LogoutScreen