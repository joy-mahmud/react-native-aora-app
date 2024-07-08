import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, StatusBar } from 'react-native'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'
const SignIn = () => {
    const [form, setform] = useState({
        email: '',
        password: ''
    })
    const [isSubmitting, setisSubmitting] = useState(false)
    const submit = () => {
        createUser()
    }
    return (
        <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }} className={`bg-primary h-full px-4`}>
            <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
                <View className="w-full justify-center items-center h-full">
                    <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]"></Image>
                    <Text className="font-semibold mt-5 text-2xl text-white font-psemibold">Log in to Aora</Text>
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChanngeText={(e) => setform({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType='email-address'
                        placeholder=''
                    ></FormField>
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChanngeText={(e) => setform({ ...form, password: e })}
                        otherStyles="mt-7"
                        placeholder=''
                    ></FormField>
                    <CustomButton
                        title="Sign in"
                        handlePress={submit}
                        containerStyles="w-full mt-7"
                        isLoading={isSubmitting}

                    ></CustomButton>
                    <View className='justify-center pt-5 flex-row'>
                        <Text className="text-gray-100 font-pregular text-lg">Dont have an account?<Link href='/sign-up' className="text-secondary"> Signup</Link> </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn
