import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,containerStyles,textStyles,handlePress,isLoading}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    className={`bg-secondary justify-center items-center min-h-[62px] rounded-xl ${containerStyles} ${isLoading?'opacity-50':''}`}>
      <Text className={`${textStyles} font-psemibold text-lg text-primary`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton