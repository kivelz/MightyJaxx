import { Image, Text, View, StyleSheet, DeviceEventEmitter, Alert } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUnsplashData } from '../../../redux/action';
import { bindActionCreators } from 'redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
interface IProps {
    getUnsplashData: (params: any) => any;
    data: any;
    isListEnd: boolean;
}
interface IState {
currentPage: number
}
export class HomeScreen extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
          currentPage: 1
        }
        
      }
     componentDidMount() {
        this.props.getUnsplashData(this.state.currentPage)
       
      }
    _fetchMoreData = async() => {
       if(!this.props.data.isListEnd && !this.props.data.moreLoading){
           this.setState((prevState) => {
               return {currentPage: prevState.currentPage + 1}
           })
           console.log('currentpage',this.state.currentPage)
           
       }
      await this.props.getUnsplashData(this.state.currentPage+1) 
    }

    _renderUnsplashData = ({item, index}: any) => {
        const screenWidth = wp('100%');
        console.log(item)
        const heart =   <FontAwesome5Icon
              name={'heart'}
              size={14}
              style={{
                marginHorizontal: 5,
                  color: '#000',
                  paddingHorizontal: 10,
              }}
    />
      return (
            <View style={[styles.container]}>               
                    <Image source={{uri: item.urls.thumb}} resizeMode={'cover'} style={[styles.imageContainer]} accessibilityLabel={item.alt_description}/>
                    <View style={{flex:1 , margin: 20, marginTop: 5, flexDirection:'column'}}>
                        <Text style={{fontSize: 18, fontWeight: '500', marginVertical: 5}}>{item.user.instagram_username}</Text>
                        <Text numberOfLines={1} style={{textAlign:'left'}}>{item.description ? item.description : 'This item has no description'}</Text>
                        <View style={{ flex:2,  justifyContent: 'flex-end', alignItems:'flex-start'}}>
                          <Text>{heart} {item.likes} Likes</Text>
                            </View>
                        </View>
                 
                  
                </View>
      )
       
    
  
    }
      render() {
        const {data} = this.props;
        console.log('statesssss', this.props.data, this.props.data.length)
        return (
          <View style={{flex: 1, backgroundColor: '#fff'}}>
           <FlatList data={data} 
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={this._renderUnsplashData}   
                      onEndReached={this._fetchMoreData}
                      onEndReachedThreshold={0}        />
          </View>
        )
      }
    }
    
    const mapStateToProps = (state: any) => {
      return {
        data: state.unsplashReducer.data,
        isListEnd: state.unsplashReducer.isListEnd
      };
    };
    
    const mapDispatchToProps = (dispatch: any) =>
      bindActionCreators(
          {
            getUnsplashData
          },
          dispatch,
      );
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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