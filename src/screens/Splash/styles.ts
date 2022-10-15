import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginVertical: 16,
   },
   logoContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
   },
   logo: {
      alignSelf: 'center',
      height: 120,
      width: 120,
   },
   textContainer: { flex: 1, justifyContent: 'flex-end' },
   text: { justifyContent: 'flex-end', alignSelf: 'center' },
})

export default styles
