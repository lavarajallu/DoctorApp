import React, { Component } from 'react';
import { Text, View, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
import GeneralStar from '../components/Rating'


export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidat'
    }
  }
  componentWillMount() {
    // console.log("this.props.parammmaaa", this.props.item)
  }
  renderViewMore(onPress) {
    return (
      <View style={styles.showMoreView}>
        <Text style={styles.showlessmoreLabel} onPress={onPress}>Show more</Text>
      </View>
    )
  }
  renderViewLess(onPress) {
    return (
      <View style={styles.showMoreView}>
        <Text style={styles.showlessmoreLabel} onPress={onPress}>Show less</Text>
      </View>
    )
  }

  viewMore() {
    return (
      <ViewMoreText
        numberOfLines={10}
        renderViewMore={this.renderViewMore}
        renderViewLess={this.renderViewLess}
        textStyle={{ textAlign: 'center' }}
      >
        <Text style={styles.showMoreText}>{this.state.moreText}</Text>
      </ViewMoreText>
    )
  }

  render() {
    const { item } = this.props
    return (
      <View style={styles.container}>

        <View style={{ flex: 0.30, position: 'relative' }}>
          <ImageBackground style={{ height: '100%', width: '100%' }} resizeMode="cover" source={require('../assets/blur-hospital.jpg')}>
            <View style={{ flex: 1, justifyContent: "space-between", flexDirection: 'row', padding: 20, }}>
              {/* <TouchableOpacity>
                <Image style={{ height: 30, width: 30 }} source={require('../assets/left-arrow.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{ height: 25, width: 25 }} source={require('../assets/more.png')} />
              </TouchableOpacity> */}
            </View>
          </ImageBackground>

        </View>
        <View style={{ flex: 0.05, alignItems: 'center', bottom: 90 }}>
          <Image style={{ height: 150, width: 150, borderRadius: 75 }}
            source={{ uri: item.image }} />
        </View>

        <View style={{ flex: 0.25 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.hospital}>{item.specialist}</Text>
          <View style={{ flex: 0.25, flexDirection: 'row', justifyContent: "space-between", alignItems: "center", marginHorizontal: 20 }}>
            <View>
              <GeneralStar />
            </View>
            <View><Text>120</Text></View>
          </View>
          <View style={styles.borderView}>
            <View style={styles.rightBorderView}>
              <Text>RichardAwe</Text>
              <Text>12.stmartinRoad</Text>
              <Text>NewYark, US - 50023</Text>
              <Text style={styles.directionText}>Get Direction</Text>
            </View>
            <View style={styles.leftBorderView}>
              <Text>667-256-1533</Text>
              <Text>info@josh.com</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 0.10 }}>
          <Text style={{ textAlign: 'left', paddingLeft: 10, fontWeight: '700', fontSize: 18 }}>We Provide Consultation Through</Text>
          <View style={{ flex: 1, paddingTop: 10, paddingBottom: 10, justifyContent: "space-evenly", alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity>
              <Image style={{ height: 50, width: 50 }} source={require('../assets/email.png')} />
            </TouchableOpacity>
            <Image style={{ height: 50, width: 50 }} source={require('../assets/phone-call.png')} />
            <Image style={{ height: 50, width: 50 }} source={require('../assets/chat.png')} />
            <Image style={{ height: 50, width: 50 }} source={require('../assets/whatsapp.png')} />
          </View>
        </View>
        <View style={{ flex: 0.30 }}>
          <ScrollView style={styles.container}>
            <Text style={styles.aboutLabel}>About Dr.Andrew</Text>
            {this.viewMore()}
            {/* <Text style={styles.showMoreText}>{this.state.moreText}</Text> */}
          </ScrollView>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  showMoreView: {

    marginLeft: 25
    // alignItems: 'flex-end',
    // paddingLeft: 10,
    // justifyContent: 'flex-end',
    // padding: 10
  },
  showlessmoreLabel: {
    textAlign: 'center',
    fontSize: 15,
    color: 'blue',
    fontWeight: '800',
    marginLeft: 15,
    marginRight: 15
  },
  name: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },
  hospital: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aboutLabel: { fontSize: 18, fontWeight: 'bold', textAlign: 'left', marginLeft: 15, color: 'black' },
  showMoreText: { margin: 12, fontWeight: '500', padding: 5, textAlign: 'justify', fontSize: 14, color: 'gray' },
  directionText: { color: 'blue', fontWeight: '700', fontSize: 15, paddingTop: 10 },
  borderView: { flex: 0.70, flexDirection: 'row', borderBottomColor: '#D3D3D3', borderTopColor: '#D3D3D3', borderBottomWidth: 1, borderTopWidth: 1, marginHorizontal: 8 },
  rightBorderView: { width: '50%', alignItems: 'center', justifyContent: "center", },
  leftBorderView: { width: '50%', alignItems: 'center', justifyContent: "center", borderLeftWidth: 1, borderLeftColor: '#D3D3D3' },
})
