import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Hotels, Attractions, Restaurants } from '../assets';
import MenuContainer from '../components/MenuContainer';
import ItemCarContainer from '../components/ItemCarContainer';
import { FontAwesome } from '@expo/vector-icons';

const Discover = () => {

  const navigation = useNavigation();

  const [type, setType] = useState("restaurants")
  const [isLoading, setisLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[36px]">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
           <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
           />
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{fields : "geometry"}}
          placeholder='Search'
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: 'AIzaSyDhtoyBIjRllV9bkd0JSswG_60V28WAqRE',
            language: 'tr',
          }}
        />
      </View>
      {/* Menu Container */}
      { isLoading ? 
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0B646B" />
      </View> 
      : 
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <MenuContainer 
            key={"hotel"}
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer 
            key={"attractions"}
            title="Attractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer 
            key={"restaurants"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>
        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2C7379] text-[28px] font-bold">Top Tips</Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
              <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore</Text>
              <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>
          <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
            <ItemCarContainer 
              key={"101"} 
              imageSrc={"https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg"} 
              title="Something a very big" 
              location="Doha" 
            />
            <ItemCarContainer 
              key={"102"} 
              imageSrc={"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg"} 
              title="Sample" 
              location="Qatar" 
            />
          </View>
        </View>
      </ScrollView>
      }
    </SafeAreaView>
  )
}

export default Discover