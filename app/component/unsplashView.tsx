import React, {useEffect, useState} from 'react';
import { FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

interface IProps {
    data: any
}
const renderUnsplashView = (props: IProps) => {
    const heart =  <FontAwesome5Icon
    name={'heart'}
    size={14}
    style={{
        marginHorizontal: 5,
        color: '#000',
        paddingHorizontal: 10,
    }}
/>
console.log('kelvindata', props.data)
  return (
        <View style={[styles.container]}>               
                <Image source={{uri: props.data.urls.thumb}} resizeMode={'cover'} style={[styles.imageContainer]} accessibilityLabel={props.data.alt_description}/>
                <View style={{flex:1 , margin: 20, marginTop: 5, flexDirection:'column'}}>
                    <Text style={{fontSize: 18, fontWeight: '500', marginVertical: 5}}>{props.data.user.instagram_username}</Text>
                    <Text numberOfLines={1} style={{textAlign:'left'}}>{props.data.description ? props.data.description : 'This item has no description'}</Text>
                    <View style={{ flex:2,  justifyContent: 'flex-end', alignItems:'flex-start'}}>
                      <Text>{heart} {props.data.likes} Likes</Text>
                        </View>
                    </View> 
            </View>
  ) 
}


export default renderUnsplashView;

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
        diplay:'grid',
            borderRadius: 5,
            flex: 1,
            margin: 10,
            padding: 5,
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10,
            flexDirection: 'row',
    },
    imageContainer: {
      width: wp(34), height: wp(34), borderRadius: 6
    }
})