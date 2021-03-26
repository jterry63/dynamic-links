import React from 'react';
import { Button, View, Text, Linking } from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
   };

   componentDidMount() {
    Linking.addEventListener('url', this._handleOpenURL);
    dynamicLinks()
      .getInitialLink()
        .then(link => {
          console.log(link)
          if (link.url === 'https://rndeeplink') {
            this.props.navigation.navigate("DeepLink")
          }
        })
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  _handleOpenURL = event => {
      dynamicLinks().onLink(url => {
         console.log(url.url)
         this.props.navigation.navigate("DeepLink")
      });
  };


render() {
 return (
  <View style={{ 
   flex: 1,
   alignItems:'center',
   justifyContent:'center'
  }}>
<Button title="Go to Profile screen"
    onPress={() => this.props.navigation.navigate('DeepLink')}
   />
  </View>
);
}
}
export default HomeScreen;