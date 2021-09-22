import React from "react";

import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';

import { Button } from 'react-native-paper';

import CategoryProductsDetails from '../components/CategoryProductsDetails';
import ProductsMock from '../utils/productsMock'



const CategoryDetails = ({ route, navigation }) => {
    // const navigation = useNavigation();
    const { id } = route.params;


    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Button color="#5A9C54" icon="arrow-left" mode="text" onPress={() => navigation.goBack()}>Voltar</Button>

            </View>
            <ScrollView >
                <Text style={styles.TitleText}>{ProductsMock[id - 1].CategoryTitle}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }} >


                    <CategoryProductsDetails key={ProductsMock[id - 1].Products.keys} Products={ProductsMock[id - 1].Products}></CategoryProductsDetails>


                </View>
            </ScrollView >
        </View>



    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },

    content: {
        width: 200,

    },
    topContent: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        padding: 18,
    },

    TitleText: {
        fontFamily: 'NunitoRegular',
        marginLeft: 30,
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
    TitleContainer: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },
    CardContent: {
        flexDirection: "row",
        alignItems: "flex-start"
    }
});

export default CategoryDetails;
