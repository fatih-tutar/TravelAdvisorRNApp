import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const ItemCarContainer = ({imageSrc, title, location}) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[160px] my-2">
        <Image 
            source={{uri: imageSrc}} 
            className="w-full h-[120px] rounded-md object-cover"
        />
        <Text className="text-[#428288] text-[18px] font-bold">
            {title?.length > 13 ? `${title.slice(0,13)}..` : title}
        </Text>
        <View className="flex-row items-center space-x-1">
            <FontAwesome name="map-marker" size={20} color="black" />
            <Text className="text-[#428288] text-[14px] font-bold">
                {location?.length > 18 ? `${title.slice(0,18)}..` : location}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default ItemCarContainer