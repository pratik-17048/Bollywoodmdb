import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../Header/CustomHeader'
import { useTheme } from '@react-navigation/native' 

const AboutUsScreen = ({navigation}) => {
  const {colors} = useTheme()
  return (
    <View>
     <CustomHeader title="About Us" isHome={false} navigation={navigation}/>
     <View style={{marginHorizontal:10,marginVertical:10}}>
         <Text style={{fontSize:18,color:colors.text,fontWeight:'bold'}}>
             About
         </Text>

         <Text style={{marginTop:10,lineHeight:19,color:colors.text}}>
         BollywoodMDB.com is one of the leading entertainment websites in
          India, which covers premium Bollywood news, in-depth celebrity
          interviews, movie events, and breaking entertainment news from the
          world of Hindi cinema. Apart from writing extensively about Hindi
          movies, the website also covers interesting stories from television
          and various regional film industries across the country. Frequently
          referenced by many top media outlets, the website has a dedicated team
          of entertainment writers and journalists who glean information from
          various industry sources and piece them together into lucid and
          entertaining stories for our readers who read us far beyond
          geographical boundaries.Frequently referenced by many top media
          outlets, the website has a dedicated team of entertainment writers and
          journalists who glean information from various industry sources and
          piece them together into lucid and entertaining stories for our
          readers who read us far beyond geographical boundaries.
         </Text>

         <Text style={{fontSize:18,fontWeight:'bold',color:colors.text,marginTop:10}}>
             History
         </Text>

         <Text style={{marginTop:10,lineHeight:19,color:colors.text}}>
            BollywoodMDB first came into existence in 2007 as FridayRelease.com.
          However, in order to make it more industry-specific, the website was
          rebranded as BollywoodMDB in the year of 2013. Since then, there has
          been no looking back for BollywoodMDB and it has grown rapidly over
          the years to become the go-to destination for breaking news in the
          entertainment industry.
         </Text>
     </View>


    </View>
  )
}

export default AboutUsScreen;

