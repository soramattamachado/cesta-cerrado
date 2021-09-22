import React, { useState, useEffect } from 'react';

import { StyleSheet, ActivityIndicator, View, Dimensions, } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import { Button } from 'react-native-paper';

const ActualLocation = ({ routes, navigation }) => {

    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(location.coords);
            setLongitude(location.coords.longitude);
            setLatitude(location.coords.latitude);
            setLoading(false);

        })();
    }, []);

    return (

        < View style={styles.container} >
            <>
                {loading ? (<ActivityIndicator size="large" color="#5A9C54" />) : (
                    <>
                        <View style={styles.topContent}>
                            <Button color="#5A9C54" icon="arrow-left" mode="text" onPress={() => navigation.goBack()}>Voltar</Button>
                        </View>
                        <View>
                            <View style={styles.mapContainer}>
                                <MapView style={styles.map}
                                    initialRegion={{
                                        latitude: latitude,
                                        longitude: longitude,
                                        latitudeDelta: 0.1,
                                        longitudeDelta: 0.1,
                                    }} >
                                    <Marker
                                        coordinate={{ latitude: latitude, longitude: longitude }}

                                    />
                                </MapView>
                            </View>
                        </View>
                    </>)
                }
            </>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '87.20%',
        height: '100%',
        left: 0,
        right: 0,
        margin: 'auto'
    },
    topContent: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        padding: 18,
    },

    TitleText: {
        fontFamily: 'NunitoRegular',
        fontSize: 20,
        flex: 1,
    },

    LocalizationBtn: {
        width: '100%',
        backgroundColor: '#5A9C54',
        paddingVertical: 16,
        paddingHorizontal: 6,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,

    },
    mapContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default ActualLocation;