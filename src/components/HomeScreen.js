import React, { Component } from 'react';
import { View, Text, Platform, Linking, TouchableWithoutFeedback } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { Actions } from 'react-native-router-flux';
import SplashScreen from 'rn-splash-screen';
import { Button } from './';
import { COMPANY_NAME, LEGAL, SUPPORT, HOWTO, VIEWEMOJI, MERCH } from './Constants';

class HomeScreen extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  handleClick = (url) => {
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          const str = 'Invalid Url:';
          console.log(str, url);
        }
      });
    };


  render() {
    const { containerStyle, imageStyle, howtoButtonStyle, howtoButtontextStyle,
            viewEmojiButtonStyle, viewEmojiButtontextStyle,
            footerStyle, companyStyle, companyNameStyle,
            legalContainerStyle, textStyle } = styles;
    let companyName = COMPANY_NAME;
    let legalText = LEGAL;
    let legalSupport = SUPPORT;
    //letterSpacing not working for android, added some hack
    if (Platform.OS === 'android') {
      companyName = companyName.split('').join('\u200A'.repeat(3));
      legalText = legalText.split('').join('\u200A'.repeat(2));
      legalSupport = legalSupport.split('').join('\u200A'.repeat(2));
    }
    return (
      <View style={containerStyle}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={imageStyle}>
             <ResponsiveImage
             source={{ uri: 'home_screen_icon' }} initWidth="370" initHeight="230"
             />
          </View>
          <View>
            <Button
              onPress={() => Actions.Howto()}
              buttonText={HOWTO} buttonStyle={howtoButtonStyle}
              textStyle={howtoButtontextStyle}
            />
          </View>
          <View>
            <Button
              onPress={() => Actions.SliderScreens()}
              buttonText={VIEWEMOJI} buttonStyle={viewEmojiButtonStyle}
              textStyle={viewEmojiButtontextStyle}
            />
          </View>
          <View>
            <Button
              onPress={() => Actions.SliderScreens()}
              buttonText={MERCH} buttonStyle={viewEmojiButtonStyle}
              textStyle={viewEmojiButtontextStyle}
            />
          </View>
        </View>

        <View style={footerStyle}>
          <View style={companyStyle}>
             <ResponsiveImage source={{ uri: 'home_screen_logo' }} initWidth="50" initHeight="50" />
             <TouchableWithoutFeedback onPress={() => this.handleClick('http://www.chippmoji.com')}>
              <View>
                <Text style={companyNameStyle}>{companyName}</Text>
              </View>
             </TouchableWithoutFeedback>
          </View>
          <View style={legalContainerStyle}>
             <TouchableWithoutFeedback onPress={() => Actions.Legal()}>
             <View>
              <Text style={textStyle}>{legalText}</Text>
             </View>
             </TouchableWithoutFeedback>
             <Text style={textStyle}>|</Text>
             <Text style={textStyle}>{legalSupport}</Text>
          </View>
        </View>
      </View>
    );
  }

}


const styles = {
  containerStyle: {
    flex: 1,
  },
  imageStyle: {
    paddingTop: 50,
    paddingBottom: 20
  },
  howtoButtonStyle: {
      padding: 2,
      margin: 2,
      backgroundColor: '#FFFFFF',
  },
  howtoButtontextStyle: {
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 30,
      letterSpacing: 2,
      textAlign: 'center',
      color: '#000000',
      fontFamily: 'CircularStd-Bold',
  },
  viewEmojiButtonStyle: {
      padding: 2,
      margin: 2,
      backgroundColor: '#FFFFFF',
  },
  viewEmojiButtontextStyle: {
      fontSize: 30,
      letterSpacing: 2,
      textAlign: 'center',
      color: '#000000',
      fontFamily: 'CircularStd-Bold',
  },
  companyStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  companyNameStyle: {
    paddingLeft: 15,
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'VisbyCF-LightOblique',
    textAlignVertical: 'center',
    color: '#000000'
  },
  legalContainerStyle: {
    paddingLeft: 50,
    flexDirection: 'row'
  },
  textStyle: {
    letterSpacing: 1,
    paddingRight: 10,
    fontFamily: 'VisbyCF-ThinOblique',
    color: '#000000'
  },
  footerStyle: {
    height: 75,
    alignItems: 'center',
    marginBottom: 10
  }
};

export { HomeScreen };
