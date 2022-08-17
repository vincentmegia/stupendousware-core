import React from 'react'
import { Image, Text, View } from 'react-native'
import images from '../../assets'
import styles from './style'

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={images.logo} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Copyright Stupendousware 2022.</Text>
      </View>
    </View>
  )
}

export default Splash
