import React, { Component } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Home from './containers/Home'
import DetailsPage from './containers/DetailsPage'
import DoctorList from './containers/DoctorList'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router>
          <Stack key="root">
            <Scene key="Home" component={Home} title="DoctorsArea" initial={true} />
            <Scene key="DetailsPage" component={DetailsPage} hideNavBar={false} title="Details Page" back={true}
              titleStyle={{
                // centering for Android
                flex: 1,
                textAlign: 'center'
              }} />
            <Scene key="DoctorList" component={DoctorList} hideNavBar={false} title="Search Results" back={true}
              titleStyle={{
                // centering for Android
                flex: 1,
                textAlign: 'center'
              }} />
          </Stack>
        </Router>
      </View>
    );
  }
}
