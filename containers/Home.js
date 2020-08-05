import React, { Component } from 'react';
import { Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Actions } from "react-native-router-flux"
import filters from '../components/filter.png';

var items = [
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Java',
  },
  {
    id: 3,
    name: 'Ruby',
  },
  {
    id: 4,
    name: 'React Native',
  },
  {
    id: 5,
    name: 'PHP',
  },
  {
    id: 6,
    name: 'Python',
  },
  {
    id: 7,
    name: 'Go',
  },
  {
    id: 8,
    name: 'Swift',
  },
];
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      selectedItems: [
        {
          id: 7,
          name: 'Go',
        },
        {
          id: 8,
          name: 'Swift',
        }
      ]
    };

    // console.log('jhgfhjgfhjghjfg983834384');
  }
  render() {
    return (

      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            height: 50,

            alignItems: 'center',
            marginHorizontal: 5,
          }}>
          <Text
            style={{
              flex: 0.55,
              marginRight: 5,
              textAlign: 'left',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#32b9cc',
            }}>
            FIND THE NEAREST DOCTOR
          </Text>
          <View style={{ flex: 0.2 }}></View>
          <View
            style={{
              height: 35,
              flexDirection: 'row',
              padding: 8,
              borderWidth: 1,
              flex: 0.2,
              borderRadius: 100,
              marginLeft: 10,
              borderColor: '#ddd',
              // shadowColor: '#ddd',
              // shadowOffset: {
              //   width: 10,
              //   height: 19,
              // },
              // shadowOpacity: 0.68,
              // shadowRadius: 15.95,
              // alignContent: 'flex-end',
              alignItems: 'center',
              color: '#32b9cc',
            }}>
            <Image
              source={filters}
              style={{ width: 20, height: 20, tintColor: '#32b9cc' }}
            />
            <Text
              style={{
                textAlign: 'center',
              }}>
              Filters
            </Text>
          </View>

        </View>
        <View style={{ justifyContent: 'center', flex: 0.8 }}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              marginTop: 5,
              marginHorizontal: 5,
              alignItems: 'center',
            }}>
            <TextInput
              onChangeText={(empcode) => this.setState({ empcode })}
              style={{
                flex: 1,
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
              }}
              placeholder="Search"></TextInput>
          </View>
          {/* <SearchableDropdown
              onTextChange={(text) => console.log(text)}
              onItemSelect={(item) => console.log(JSON.stringify(item))}
              containerStyle={{ padding: 5 }}
              textInputStyle={{
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
              }}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#ddd',
                borderColor: '#bbb',
                borderWidth: 1,
                borderRadius: 5,
              }}
              itemTextStyle={{ color: '#222' }}
              itemsContainerStyle={{ maxHeight: 140 }}
              items={items}
              defaultIndex={2}
              placeholder="placeholder"
              resetValue={false}
              underlineColorAndroid="transparent"
            /> */}
          <SearchableDropdown
            onItemSelect={(item) => {
              const items = this.state.selectedItems;
              items.push(item)
              this.setState({ selectedItems: items });
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: items });
            }}
            // itemStyle={{
            //   padding: 10,
            //   marginTop: 2,
            //   backgroundColor: '#ddd',
            //   borderColor: '#bbb',
            //   borderWidth: 1,
            //   borderRadius: 5,
            // }}
            // itemTextStyle={{ color: '#222' }}
            // itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            // defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                  padding: 12,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 5,
                },
                onTextChange: text => this.setState({
                  selected: text
                })
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
          />

          <View
            style={{
              flexDirection: 'row',
              height: 50,
              marginTop: 10,
              marginHorizontal: 5,
            }}>
            <TextInput
              onChangeText={(empcode) => this.setState({ empcode })}
              style={{
                flex: 1,
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
              }}
              placeholder="Doctor-Specialist"></TextInput>
          </View>
          <View
            style={{
              flexDirection: 'row',
              // height: 50,
              // marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center'
              // marginHorizontal: 5,
            }}>
            <TouchableOpacity style={{
              height: 40,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 5,
            }} onPress={() => Actions.DoctorList()}>
              <Text
                style={{
                  flex: 1,
                  padding: 12,
                  borderWidth: 1,
                  backgroundColor: '#32b9cc',
                  borderRadius: 5,
                  marginRight: 5,
                  textAlign: 'center',
                  borderColor: '#32b9cc',
                  color: 'white',
                }}>
                Search Now
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              height: 40,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 5,
            }} onPress={() => Actions.DoctorList()}>
              <Text
                style={{
                  flex: 1,
                  padding: 12,
                  borderWidth: 1,
                  backgroundColor: '#32b9cc',
                  borderRadius: 5,
                  marginLeft: 3,
                  textAlign: 'center',
                  borderColor: '#32b9cc',
                  color: 'white',
                }}>
                RESET FILTER
            </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              marginTop: 10,
              alignItems: 'center',
              marginHorizontal: 5,
            }}>
            <Text
              style={{
                flex: 1,
                padding: 12,
                borderWidth: 1,

                borderRadius: 5,
                marginLeft: 3,
                textAlign: 'center',
                borderColor: '#32b9cc',
                color: '#32b9cc',
              }}>
              Advance Search
            </Text>
          </View>
        </View>
      </View>

    );
  }
}
