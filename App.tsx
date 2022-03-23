import { Alert, Text, View } from 'react-native'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUnsplashData } from './redux/action';


interface IProps {
  getUnsplashData: () =>void
  data: any
}
interface IState {

}

export class App extends Component<IProps,IState> {
  /**
   *
   */
  constructor(props: IProps) {
    super(props);
    this.state = {
      
    }
    
  }
  componentDidMount() {
    this.props.getUnsplashData()
   
  }


  render() {
    console.log('state', this.props.data)
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <Text>App</Text>
      </View>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    data: state
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
      {
        getUnsplashData
      },
      dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
