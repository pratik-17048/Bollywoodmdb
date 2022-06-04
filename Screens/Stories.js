import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';

const Stories = () => {
    const {colors} = useTheme()
  return (
      
    <View>
        <View style={{height:'100%', width:'100%'}}>
            <Image source={require('../Assets/kat.jpg')} style={{height:'100%',width:'100%', resizeMode:'cover'}} />
            <View style={{position:'absolute', top:'2%', marginHorizontal:10, flexDirection:'row', marginHorizontal:5}}>
                <View style={{width:100,height:2, backgroundColor:'rgba(217, 217, 217, 0.8)', marginHorizontal:2}}></View>
                <View style={{width:100,height:2, backgroundColor:'rgba(217, 217, 217, 0.8)', marginHorizontal:2}}></View>
                <View style={{width:100,height:2, backgroundColor:'rgba(217, 217, 217, 0.8)', marginHorizontal:2}}></View>
                <View style={{width:100,height:2, backgroundColor:'rgba(217, 217, 217, 0.8)', marginHorizontal:2}}></View>
            </View>
            <Text style={{position:'absolute', top:'4%', left:'3%',color:'#696969' ,fontSize:15, fontWeight:'600', marginHorizontal:10, textAlign:'center'}}>BollywoodMDB</Text>
            <View style={{position:'absolute', top:'4%', right:'3%', color: colors.text ,fontSize:18, fontWeight:'600', marginHorizontal:10, flexDirection:'row', marginHorizontal:5}}>
            <Image source={require('../Assets/volume.png')} style={{width:20, height:20, tintColor:'#bfbfbf', marginHorizontal:5}}/>
            <Image source={require('../Assets/pause.png')} style={{width:20, height:20, tintColor:'#bfbfbf', marginHorizontal:5}}/>
            <Image source={require('../Assets/more.png')} style={{width:20, height:20, tintColor:'#bfbfbf', marginHorizontal:5}}/>
            </View>
            <Text style={{position:'absolute', top:'80%', color: colors.text ,fontSize:18, fontWeight:'600', marginHorizontal:10}}>Lorem Ipsum</Text>
            <Text style={{position:'absolute', top:'85%', color: colors.text ,fontSize:15, fontWeight:'600', marginHorizontal:10, textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
        </View>

    </View>
  );

}

export default Stories

const styles = StyleSheet.create({})