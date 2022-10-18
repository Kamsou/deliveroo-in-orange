import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">FeaturedRow</Text>
            <ArrowRightIcon color="#F27405" />
        </View>

        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            <RestaurantCard
                id="1"
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="1-3-5, Shibuya, Tokyo"
                short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl sit amet lorem. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl sit amet lorem."
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard
                id="1"
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="1-3-5, Shibuya, Tokyo"
                short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl sit amet lorem. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl sit amet lorem."
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard
                id="1"
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="1-3-5, Shibuya, Tokyo"
                short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl sit amet lorem. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl sit amet lorem."
                dishes={[]}
                long={20}
                lat={0}
            />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow