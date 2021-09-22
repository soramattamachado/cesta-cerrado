import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Button, Avatar } from 'react-native-paper';

import RatingStars from '../components/ratingStars';

const ItemDetails = ({ route, navigation }) => {
    const { ProductImage, ProductTitle, ProductValue } = route.params;
    console.log(ProductTitle)
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Image style={{ width: 420, height: 250 }} source={{ uri: `${ProductImage}` }}></Image>
                    <Text style={styles.TitleText}>{ProductTitle}</Text>
                    <Text style={styles.TitleContainer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada dictum varius. Vestibulum viverra vulputate ultrices. Aliquam non ex et dolor vulputate bibendum dapibus ut augue.</Text>
                    <View style={styles.buttonContainer}>
                        <Button style={{ width: 350, backgroundColor: "#5A9C54" }} icon="cart" mode="contained" onPress={() => console.log("pressed")}>COMPRAR POR: R$ ${ProductValue}</Button>
                    </View>
                    <View style={{ backgroundColor: "light-grey", height: 1, width: 380, marginLeft: 15, marginTop: 20 }}></View>
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <Avatar.Image style={{ marginLeft: 20 }} size={80} source={{ uri: 'https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-woman.png' }} />
                            <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 20 }}>Suzana Souza de Freitas</Text>
                        </View>
                        <View>
                            <RatingStars customStyle={styles.start} starSize={16} count={5} />
                            <Text style={styles.date}>11/02/2021</Text>
                            <Text style={styles.ReviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada dictum varius. Vestibulum viverra vulputate ultrices. Aliquam non ex et dolor vulputate bibendum dapibus ut augue.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    start: {
        width: 60,
        marginTop: -18,
        marginLeft: 115
    },
    date: {
        width: 80,
        marginTop: -18,
        marginLeft: 280
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
        alignItems: 'center',
        width: '100%',
        padding: 18,
    },

    TitleText: {
        fontFamily: 'NunitoRegular',
        fontSize: 30,
        color: "#000000",
        flex: 1,
        flexDirection: "row",
        padding: 18,
        alignItems: "center"
    },
    ReviewText: {
        fontFamily: 'NunitoRegular',
        fontSize: 16,
        color: "#000000",
        flex: 1,
        flexDirection: "row",
        padding: 30,
        alignItems: "center"
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
        padding: 18,
        flexWrap: 'wrap',
        color: "#3e3e3e",
        alignItems: "center"
    },
    CardContent: {
        flexDirection: "row",
        alignItems: "flex-start"
    }
});

export default ItemDetails;