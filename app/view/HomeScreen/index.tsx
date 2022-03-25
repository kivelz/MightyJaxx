import { Image, Text, View, StyleSheet, RefreshControl, ActivityIndicator, Platform } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getUnsplashData, pullToRefresh } from '../../../redux/action';
import { bindActionCreators } from 'redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FlatList } from 'react-native-gesture-handler';
import UnsplashView from '../../component/unsplashView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

if (Platform.OS === 'ios') {
  EvilIcon.loadFont();
  Ionicons.loadFont();
}
interface IProps {
  getUnsplashData: (page: number) => any;
  data: any;
  isListEnd: boolean;
  loading: boolean;
  pullToRefresh :(payload: boolean) => void;
}
interface IState {
  currentPage: number
  isRefreshing: boolean
}
const HomeScreen = (props: IProps) => {
  const [page, setPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const requestUnsplashApi = () => {
    props.getUnsplashData(page)
  }
  const renderFooter = () => (
    <View style={{ flex: 1 }} >
      {props.data.moreLoading && <ActivityIndicator />}   
    </View>
  )

  useEffect(() => {
    requestUnsplashApi();
  }, [page]);

  async function _fetchMoreData() {
    if (!props.data.isListEnd && !props.data.moreLoading) {
      setPage(page + 1)
    }
  }
  const onRefresh = async () => {
    console.log('paaaage', page)
   props.pullToRefresh(true)
    setTimeout(async() => {
      await props.getUnsplashData(1)
    }, (500));
    if(props.loading) {
      
      setIsRefreshing(true);
    }
  }
  console.log('propsdata', props.data)
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList data={props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <UnsplashView data={item} />}
        onEndReached={_fetchMoreData}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl
          refreshing={isRefreshing}
          onRefresh={() => onRefresh()}
          />
        }
      />{props.data.length == 0 && (
        <View style={{flex:1, alignSelf:'center'}}>
           <Text>No data from unsplash</Text> 
          </View>
       )}
    </View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    data: state.unsplashReducer.data,
    isListEnd: state.unsplashReducer.isListEnd,
    loading: state.unsplashReducer.loading
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getUnsplashData,
      pullToRefresh
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    diplay: 'grid',
    borderRadius: 5,
    flex: 1,
    margin: 10,
    padding: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    width: wp(34), height: wp(34), borderRadius: 6
  }
})