import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, Text, View } from 'react-native'
import images from '../../assets'
import styles from './styles'

interface SplashProps {
   onInit?: (data?: any) => any
   onComplete?: (data?: any) => any
}

const Splash = ({ onInit, onComplete }: SplashProps) => {
   useEffect(() => {
      onInit?.()
   }, [onInit])

   useEffect(() => {
      setTimeout(() => {
         onComplete?.()
      }, 2000)
   }, [onComplete])

   return (
      <View style={styles.container}>
         <View style={styles.logoContainer}>
            <Image source={images.logo} style={styles.logo} />
         </View>
         <View style={styles.textContainer}>
            <Text style={styles.text}>Copyright 2022 Stupendousware</Text>
         </View>
      </View>
   )
}

export default Splash
