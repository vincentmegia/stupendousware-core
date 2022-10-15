import React from 'react'
import { render } from '@testing-library/react-native'
import Splash from '../'

describe('Splash screen test', () => {
   it('matches the snapshot', async () => {
      const { toJSON } = render(
         <Splash onInit={jest.fn} onComplete={jest.fn} />
      )
      expect(toJSON()).toMatchSnapshot()
   })
})
