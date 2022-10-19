import { SafeAreaView, Text } from 'react-native'
import React, {useEffect} from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import {useNavigation} from '@react-navigation/native'

const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect (() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 4000)
  }, [])

  return (
    <SafeAreaView className="bg-[#F27405] flex-1 justify-center items-center">
      <Animatable.Image
        source={require('../assets/orderLoading.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-16 w-16"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-white text-md font-bold my-10 text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={30} indeterminate={true} color="white" />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen