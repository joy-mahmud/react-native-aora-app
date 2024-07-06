import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center gap-1'>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className="w-6 h-6"

            />
            <Text style={{color:color}} className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>{name}</Text>

        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor:'#ffa001',
                tabBarInactiveTintColor:'#cdcde0',
                tabBarStyle:{
                    backgroundColor:'#161622',
                    borderTopWidth:1,
                    borderTopColor:'#232533',
                    height:84
                }
            }}>
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => {
                            return (
                                <TabIcon
                                    icon={icons.home}
                                    color={color}
                                    focused={focused}
                                    name="Home"
                                ></TabIcon>
                            )
                        }
                    }} />
                <Tabs.Screen
                    name='bookmark'
                    options={{
                        title: 'Bookmark',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => {
                            return (
                                <TabIcon
                                    icon={icons.bookmark}
                                    color={color}
                                    focused={focused}
                                    name="Bookmark"
                                ></TabIcon>
                            )
                        }
                    }} />
                <Tabs.Screen
                    name='create'
                    title='Create'
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => {
                            return (
                                <TabIcon
                                    icon={icons.plus}
                                    color={color}
                                    focused={focused}
                                    name="Create"
                                ></TabIcon>
                            )
                        }
                    }} />
                <Tabs.Screen
                    name='profile'
                    title='Profile'
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => {
                            return (
                                <TabIcon
                                    icon={icons.profile}
                                    color={color}
                                    focused={focused}
                                    name="Profile"
                                ></TabIcon>
                            )
                        }
                    }} />
            </Tabs>
        </>
    )
}

export default TabsLayout