import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter'
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid'
import {useDispatch, useSelector} from 'react-redux'
import {addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId} from '../features/basketSlice'


const DishRow = ({id, image, title, description, price}) => {
    const [isPressed, setIsPressed] = useState(false)
    const items = useSelector((state) => selectBasketItemsWithId(state, id))
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        dispatch(addToBasket({
            id,
            image,
            title,
            description,
            price,
        }))
    }

    const removeItemFromBasket = () => {
        if (!items.length > 0) return;

        dispatch(removeFromBasket({ id }))
    }

  return (
    <>
        <TouchableOpacity
            onPress={() => setIsPressed(!isPressed)}
            className={`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`}
        >
            <View className="flex-row">
                <View className="flex-1 pr-2">
                    <Text className="text-lg mb-1 capitalize">{title}</Text>
                    <Text className="text-gray-400">{description}</Text>
                    <Text className="text-gray-400 mt-2">
                        <Currency quantity={price} currency="USD" />
                    </Text>
                </View>

                <View>
                    <Image
                        style={{
                            borderWidth: 1,
                            borderColor: '#F3F3F4',
                        }}
                        source={{
                            uri: urlFor(image).url()
                        }}
                        className="w-20 h-20 bg-gray-300 p-4"
                    />
                </View>
            </View>
        </TouchableOpacity>

        {isPressed && (
            <View className="bg-white px-4">
                <View className="flex-row items-center space-x-2 pb-3">
                    <TouchableOpacity
                        disabled={!items.length}
                        onPress={removeItemFromBasket}
                    >
                        <MinusCircleIcon size={40} color={items.length > 0 ? "#F27405" : "gray"} />
                    </TouchableOpacity>

                    <Text>{items.length}</Text>

                    <TouchableOpacity>
                        <PlusCircleIcon
                            onPress={addItemToBasket}
                            size={40}
                            color="#F27405"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )}
    </>
  )
}

export default DishRow