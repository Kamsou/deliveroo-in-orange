import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native';
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "HomeScreen",
            headerShown: false,
        })
    }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image 
                source={{
                    uri: "https://links.papareact.com/wru",
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />

            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
                <Text className="font-bold text-xl">
                    Current location
                    <ChevronDownIcon size={20} color="#F27405" />
                </Text>
            </View>

            <UserIcon size={35} color="#F27405" />
        </View>

        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                <MagnifyingGlassIcon color="gray" size={20} />
                <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
            </View>

            <AdjustmentsVerticalIcon size={35} color="#F27405" />
        </View>

        <ScrollView
            className="bg-gray-100"
            contentContainerStyle={{
                paddingBottom: 100,
            }}
        >
            <Categories />

            <FeaturedRow
                id="1"
                title="Featured"
                description="Paid placements from our partners"
            />

            <FeaturedRow
                id="2"
                title="Tasty Discounts"
                description="Everyone's been enjoying these juicy discounts!"
            />

            <FeaturedRow
                id="3"
                title="Offers near you"
                description="Why not support your local restaurants tonight!"
            />
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen