import React, { Component } from 'react';
import { Text, View, TextInput, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import GeneralStar from '../components/Rating'
import { Actions } from 'react-native-router-flux';

var list = [
    {
        id: 1,
        name: 'Cardiology',
        image: "https://www.fortishealthcare.com/speciality_banner/mobile/Non-Invasive-Cardiology.jpg",
        doctors: [
            {
                id: 1,
                name: "Andrew Russel",
                specialist: "Cardiologist",
                location: "London",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf4YHS9sr3UW1-XdOx2pWry6DSrKcmDfLIYQ&usqp=CAU"
            },
            {
                id: 2,
                name: "Ria",
                specialist: "Cardiologist",
                location: "NewYork",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQv-48zug_ljyfq2gV_rJkxUbmbXGGwLv8S1A&usqp=CAU"
            },
            {
                id: 3,
                name: "Rock Singh",
                specialist: "Cardiologist",
                location: "Russia",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBvYM1uBz2gzlcOYWCZQYAJfUAvwZRO6d4SQ&usqp=CAU"
            },
            {
                id: 4,
                name: "Leesa",
                specialist: "Cardiologist",
                location: "Japan",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuSXUgsiF9ghHjOVgJ2Rx0Z5tqBcfWjnKldg&usqp=CAU"
            }
        ]
    },
    {
        id: 2,
        name: 'Oncology',
        image: "https://www.roche.com/dam/jcr:09838347-3503-4537-ab6b-fced79a25786/en/rd-oncology-cancer-stage.jpg",
        doctors: [
            {
                id: 1,
                name: "Shreya",
                specialist: "Oncologist",
                location: "London",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIZPo_EyvGjQcCKf9DzRb04GXXhvjqxgOWqg&usqp=CAU"
            },
            {
                id: 2,
                name: "Deepa",
                specialist: "Oncologist",
                location: "NewYork",
                hospital: "Medical Hospital",
                image: "https://thumbs.dreamstime.com/b/beautiful-arab-female-doctor-posing-isolated-white-background-34173775.jpg"
            },
            {
                id: 3,
                name: "Viraj",
                specialist: "Oncologist",
                location: "Russia",
                hospital: "Medical Hospital",
                image: "https://st.depositphotos.com/2702761/3304/i/450/depositphotos_33044395-stock-photo-doctor-smiling.jpg"
            },
            {
                id: 4,
                name: "Tesla",
                specialist: "Oncologist",
                location: "Japan",
                hospital: "Medical Hospital",
                image: "https://thumbs.dreamstime.com/b/beautiful-young-female-doctor-9182291.jpg"
            }
        ]
    },
    {
        id: 3,
        name: 'Neurology',
        image: "https://www.sevenhillshospital.com/images/medium/sevenhills-neurology.jpg",
        doctors: [
            {
                id: 1,
                name: "Regina",
                specialist: "Neurologist",
                location: "London",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ_8PcQ4Rz1huVC9oabk72QilJmvGdISsoEQ&usqp=CAU"
            },
            {
                id: 2,
                name: "Salma",
                specialist: "Neurologist",
                location: "NewYork",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4EhEjVASYRjn79ude_gKRX6nBGIbwSHa2FQ&usqp=CAU"
            },
            {
                id: 3,
                name: "Sujeeth",
                specialist: "Neurologist",
                location: "Russia",
                hospital: "Medical Hospital",
                image: "https://asset.for.myhealthcare.co/uploads/doctors/2018/7/1532350340DrAbhishekSinghal.jpg"
            },
            {
                id: 4,
                name: "Karan",
                specialist: "Neurologist",
                location: "Japan",
                hospital: "Medical Hospital",
                image: "https://indusbusinessjournal.com/wp-content/uploads/2016/09/Doctor-Indian-Dreamtime-e1472735031985.jpg"
            }
        ]
    },
    {
        id: 4,
        name: 'Urology',
        image: "https://cdn.healthcitycaymanislands.com/uploads/2017/07/urology-profile.jpg",
        doctors: [
            {
                id: 1,
                name: "Andrew Russel",
                specialist: "Cardiologist",
                location: "London",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf4YHS9sr3UW1-XdOx2pWry6DSrKcmDfLIYQ&usqp=CAU"
            },
            {
                id: 2,
                name: "Ria",
                specialist: "Cardiologist",
                location: "NewYork",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQv-48zug_ljyfq2gV_rJkxUbmbXGGwLv8S1A&usqp=CAU"
            },
            {
                id: 3,
                name: "Rock Singh",
                specialist: "Cardiologist",
                location: "Russia",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBvYM1uBz2gzlcOYWCZQYAJfUAvwZRO6d4SQ&usqp=CAU"
            },
            {
                id: 4,
                name: "Leesa",
                specialist: "Cardiologist",
                location: "Japan",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuSXUgsiF9ghHjOVgJ2Rx0Z5tqBcfWjnKldg&usqp=CAU"
            }
        ]
    },
    {
        id: 5,
        name: 'Surgical Gastroenterology',
        image: "https://www.fortishealthcare.com/speciality_banner/mobile/Non-Invasive-Cardiology.jpg",
        doctors: [
            {
                id: 1,
                name: "Shreya",
                specialist: "Surgical Gastroenterologist",
                location: "London",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIZPo_EyvGjQcCKf9DzRb04GXXhvjqxgOWqg&usqp=CAU"
            },
            {
                id: 2,
                name: "Deepa",
                specialist: "Surgical Gastroenterologist",
                location: "NewYork",
                hospital: "Medical Hospital",
                image: "https://thumbs.dreamstime.com/b/beautiful-arab-female-doctor-posing-isolated-white-background-34173775.jpg"
            },
            {
                id: 3,
                name: "Viraj",
                specialist: "Surgical Gastroenterologist",
                location: "Russia",
                hospital: "Medical Hospital",
                image: "https://st.depositphotos.com/2702761/3304/i/450/depositphotos_33044395-stock-photo-doctor-smiling.jpg"
            },
            {
                id: 4,
                name: "Tesla",
                specialist: "Surgical Gastroenterologist",
                location: "Japan",
                hospital: "Medical Hospital",
                image: "https://thumbs.dreamstime.com/b/beautiful-young-female-doctor-9182291.jpg"
            }
        ]
    },
    {
        id: 6,
        name: 'Medical Gastroenterology',
        image: "https://www.roche.com/dam/jcr:09838347-3503-4537-ab6b-fced79a25786/en/rd-oncology-cancer-stage.jpg",
        doctors: [
            {
                id: 1,
                name: "Regina",
                specialist: "Medical Gastroenterologist",
                location: "London",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ_8PcQ4Rz1huVC9oabk72QilJmvGdISsoEQ&usqp=CAU"
            },
            {
                id: 2,
                name: "Salma",
                specialist: "Medical Gastroenterologist",
                location: "NewYork",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4EhEjVASYRjn79ude_gKRX6nBGIbwSHa2FQ&usqp=CAU"
            },
            {
                id: 3,
                name: "Sujeeth",
                specialist: "Medical Gastroenterologist",
                location: "Russia",
                hospital: "Medical Hospital",
                image: "https://asset.for.myhealthcare.co/uploads/doctors/2018/7/1532350340DrAbhishekSinghal.jpg"
            },
            {
                id: 4,
                name: "Karan",
                specialist: "Medical Gastroenterologist",
                location: "Japan",
                hospital: "Medical Hospital",
                image: "https://indusbusinessjournal.com/wp-content/uploads/2016/09/Doctor-Indian-Dreamtime-e1472735031985.jpg"
            }
        ]
    },
    {
        id: 7,
        name: 'Obstetrics and Gynaecology',
        image: "https://www.sevenhillshospital.com/images/medium/sevenhills-neurology.jpg",
        doctors: [
            {
                id: 1,
                name: "Andrew Russel",
                specialist: "Cardiologist",
                location: "London",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf4YHS9sr3UW1-XdOx2pWry6DSrKcmDfLIYQ&usqp=CAU"
            },
            {
                id: 2,
                name: "Ria",
                specialist: "Cardiologist",
                location: "NewYork",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQv-48zug_ljyfq2gV_rJkxUbmbXGGwLv8S1A&usqp=CAU"
            },
            {
                id: 3,
                name: "Rock Singh",
                specialist: "Cardiologist",
                location: "Russia",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBvYM1uBz2gzlcOYWCZQYAJfUAvwZRO6d4SQ&usqp=CAU"
            },
            {
                id: 4,
                name: "Leesa",
                specialist: "Cardiologist",
                location: "Japan",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuSXUgsiF9ghHjOVgJ2Rx0Z5tqBcfWjnKldg&usqp=CAU"
            }
        ]
    },
    {
        id: 8,
        name: 'Bone Marrow Transplant',
        image: "https://cdn.healthcitycaymanislands.com/uploads/2017/07/urology-profile.jpg",
        doctors: [
            {
                id: 1,
                name: "Shreya",
                specialist: "Bone Marrow Transplant",
                location: "London",
                hospital: "Medical Hospital",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIZPo_EyvGjQcCKf9DzRb04GXXhvjqxgOWqg&usqp=CAU"
            },
            {
                id: 2,
                name: "Deepa",
                specialist: "Bone Marrow Transplant",
                location: "NewYork",
                hospital: "Medical Hospital",
                image: "https://thumbs.dreamstime.com/b/beautiful-arab-female-doctor-posing-isolated-white-background-34173775.jpg"
            },
            {
                id: 3,
                name: "Viraj",
                specialist: "Bone Marrow Transplant",
                location: "Russia",
                hospital: "Medical Hospital",
                image: "https://st.depositphotos.com/2702761/3304/i/450/depositphotos_33044395-stock-photo-doctor-smiling.jpg"
            },
            {
                id: 4,
                name: "Tesla",
                specialist: "Bone Marrow Transplant",
                location: "Japan",
                hospital: "Medical Hospital",
                image: "https://thumbs.dreamstime.com/b/beautiful-young-female-doctor-9182291.jpg"
            }
        ]
    },
];
export default class DoctorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorsArray: list[0].doctors,
            selectedIndex: 0
        };

        // console.log('jhgfhjgfhjghjfg983834384');
    }
    onItem(item, index) {
        this.setState({
            doctorsArray: item.doctors,
            selectedIndex: index
        })
    }
    _renderItem = ({ item, index }) => {
        const { selectedIndex } = this.state
        return (
            <TouchableOpacity
                style={{
                    width: 100,
                    marginRight: 10,
                    alignItems: 'center',
                    marginLeft: index === 0 ? 10 : 0
                }}
                onPress={this.onItem.bind(this, item, index)}
            >
                <Image source={{ uri: item.image }}
                    style={[styles.imageStyle, { borderWidth: index === selectedIndex ? 2 : 0 }]}
                />
                <Text style={{ marginTop: 5, fontSize: 18, textAlign: 'center' }}>{item.name}</Text>

            </TouchableOpacity>
        );
    };
    _renderData = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.row} onPress={() => Actions.DetailsPage({ item })}>
                <View style={{ flex: 0.4, }}>
                    <Image source={{ uri: item.image }}
                        style={styles.image}
                        resizeMode={"contain"}
                    />
                </View>

                <View style={{ flex: 0.6, }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ fontSize: 16, color: 'lightgrey', }}>{item.specialist}</Text>
                    <Text style={{ fontSize: 16, color: 'grey', marginTop: 10 }}>Professor in {item.location}</Text>
                    <Text style={{ fontSize: 16, color: 'grey', marginTop: 5 }}>{item.hospital}</Text>
                    <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <GeneralStar />
                        <Image source={require("../assets/heart.png")} style={{ height: 20, width: 20, tintColor: '#32b9cc' }} />
                    </View>

                </View>


            </TouchableOpacity>
        );
    }
    render() {
        const { doctorsArray } = this.state
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Text style={styles.headerText}>Doctors -----</Text>
                    <Text style={styles.header}>Specialist</Text>
                    <FlatList
                        style={styles.flatlistStyle}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        extraData={this.state}
                        data={list}
                        renderItem={this._renderItem}
                        keyExtractor={item => item.id}
                    />
                    <FlatList
                        style={{ marginTop: 10, }}
                        showsVerticalScrollIndicator={false}
                        extraData={this.state}
                        data={doctorsArray}
                        renderItem={this._renderData}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerText: {
        fontSize: 20,
        color: "black",
        marginTop: 20,
        marginLeft: 10
    },
    header: {
        fontSize: 25,
        color: "black",
        marginLeft: 10,
        fontWeight: "bold"
    },
    flatlistStyle: {
        marginTop: 20,
        // marginLeft: 20
    },
    imageStyle: {
        height: 100,
        width: "100%",
        borderRadius: 5,
        // borderWidth: 2,
        borderColor: 'blue'
    },
    image: {
        height: 125,
        width: 125,
        borderRadius: 5,
    },
    row: {
        marginBottom: 10,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: "grey",
        // borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 10,
        // elevation: 0.5,
        marginLeft: 10,
        marginRight: 10,
        padding: 10
    }
})