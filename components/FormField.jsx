import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({ value, handleChanngeText, placeholder, title, otherStyles, ...props }) => {
    const [showPassword, setshowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles} w-full `}>
            <Text className='font-pmedium text-gray-200 mt-5'>{title}</Text>
            <View className="border-2 h-12 w-full px-4 border-black-200 bg-black-100 rounded-2xl focus:border-secondary flex flex-row items-center justify-center">
                <TextInput
                className="flex-1 text-white font-psemibold text-base"
                    value={value}
                    onChangeText={handleChanngeText}
                    placeholder={placeholder}
                    placeholderTextColor='7b7b8b'
                    secureTextEntry={title === 'Password' && !showPassword}
                ></TextInput>
                {title==='Password' && (
                    <TouchableOpacity onPress={()=>setshowPassword(!showPassword)}>
                        <Image resizeMode='contain' className="w-6 h-6" source={!showPassword? icons.eye:icons.eyeHide}></Image>
                    </TouchableOpacity>
                )}
            </View>

        </View>
    )
}

export default FormField