import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, Text, View } from 'react-native'
import images from '../../assets'
import styles from './style'

interface SplashProps {
   onInit?: (data?: any) => any
   onComplete?: (data?: any) => any
}

const Splash = ({ onInit, onComplete }: SplashProps) => {
   const navigation = useNavigation<any>()

   useEffect(() => {
      if (!onInit) return
      onInit()
   }, [onInit])

   useEffect(() => {
      if (!onComplete) return
      setTimeout(() => {
         onComplete()
         navigation.push('Home')
      }, 5000)
   }, [navigation, onComplete])

   return (
      <View style={styles.container}>
         <View style={styles.logoContainer}>
            <Image source={images.logo} style={styles.logo} />
         </View>
         <View style={styles.textContainer}>
            <Text style={styles.text}>Copyright Stupendousware 2022.dddd</Text>
         </View>
      </View>
   )
}

export default Splash
