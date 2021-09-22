import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { Card, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import RatingStars from './ratingStars';

const CategoryProducts = (props) => {
    const { Products } = props;
    const [starCount, setStarCount] = useState(4);
    const navigation = useNavigation();

    return (
        <>
            {Products.map((product) =>
                <TouchableOpacity key={product.id} onPress={() => {
                    navigation.navigate('ItemDetailsStack', {
                        ProductImage: product.ProductImage,
                        ProductTitle: product.ProductTitle,
                        ProductValue: product.ProductValue
                    })
                }}>
                    <Card key={product.id} style={styles.card} >
                        <Card.Content style={styles.CardContent}>
                            <Image style={{ width: 140, height: 100 }} source={{ uri: `${product.ProductImage}` }}></Image>
                            <Text style={styles.CardTitleText}>{product.ProductTitle}</Text>
                        </Card.Content>
                        <RatingStars customStyle={styles.start} disabled={true} starSize={18} count={starCount} setter={setStarCount} />
                    </Card >
                </TouchableOpacity>
            )}
        </>

    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        elevation: 8,
        borderColor: "#3e3e3e",
        width: 300,
        height: 140,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 2,
    },
    start: {
        width: 70,
        marginTop: -14,
        marginLeft: 180
    },
    CardTitleText: {
        fontFamily: 'NunitoRegular',
        flexWrap: "wrap",
        fontSize: 16.2,
        color: "#000000",
        marginRight: 140,
        marginLeft: 10,
    },
    CardContent: {
        flexDirection: "row",
        alignItems: "flex-start",

    }
});

export default CategoryProducts