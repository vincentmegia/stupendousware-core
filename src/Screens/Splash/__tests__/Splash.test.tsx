import React from 'react'
import { render } from '@testing-library/react-native'
import Splash from '../'

describe('Splash screen test', () => {
   it('matches the snapshot', () => {
      const { toJSON } = render(<Splash />)
      expect(toJSON()).toMatchInlineSnapshot(`
<View
  style={
    Object {
      "flex": 1,
      "marginVertical": 16,
    }
  }
>
  <View
    style={
      Object {
        "flex": 1,
        "flexDirection": "column",
        "justifyContent": "flex-end",
      }
    }
  >
    <Image
      source=""
      style={
        Object {
          "alignSelf": "center",
          "height": 120,
          "width": 120,
        }
      }
    />
  </View>
  <View
    style={
      Object {
        "flex": 1,
        "justifyContent": "flex-end",
      }
    }
  >
    <Text
      style={
        Object {
          "alignSelf": "center",
          "justifyContent": "flex-end",
        }
      }
    >
      Copyright 2022 Stupendousware
    </Text>
  </View>
</View>
`)
   })
})
