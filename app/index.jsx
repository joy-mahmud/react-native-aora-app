import { Link } from "expo-router";
import { SafeAreaView, Text, View, StatusBar, ScrollView, Image } from "react-native";
import { images } from '@/constants'

export default function Index() {
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }} className="bg-primary h-full"
    >
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="justify-center items-center w-full h-full">
          <Image resizeMode="contain" source={images.logo} className="h-[84px] w-[130px]" />
          <Image resizeMode="contain" source={images.cards} className="h-[300px] max-w-[380px]" />
          <View>
          <Text className="text-[30px] font-semibold text-white text-center">Discover Endless Possibilities with 
            <Text className="text-secondary-200"> Aora</Text>
          
          </Text>
          <Image resizeMode="contain" source={images.path} className="absolute -bottom-2 -right-8 w-[136px] h-[15px]"></Image>
          </View>
          <Text className="text-sm font-pregular text-gray-100 text-center mt-10">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
        </View>
      
      </ScrollView>

    </SafeAreaView>
  );
}
