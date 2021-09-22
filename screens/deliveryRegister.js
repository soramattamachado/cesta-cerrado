import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Picker } from 'react-native';
import ModalSelector from 'react-native-modal-selector'



import { Button } from 'react-native-paper';


const DeliveryRegister = ({ route, navigation }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("");
    let index = 0;
    const data = [
        { key: index++, section: true, label: 'Carro / Moto' },
        { key: index++, label: 'Bicicleta' },
        { key: index++, label: 'Entrega a pé' },
    ];
    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Button color="#5A9C54" icon="arrow-left" mode="text" onPress={() => navigation.goBack()}>Voltar</Button>
            </View>
            <View style={styles.TitleContainer} >
                <Text style={styles.title}>Cadastro de entregador(a)</Text>
            </View>
            <View style={styles.content}>
                <Text style={{ marginTop: -200, marginBottom: -120 }}>Tipo de veículo:</Text>
                <ModalSelector
                    style={{ width: 350, marginTop: -400 }}
                    data={data}
                    initValue="Tipo de Veículo"
                />

            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    content: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: -300,
        // padding: 14,
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '87.20%'
    },
    TitleContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: '87.20%'
    },
    title: {
        fontFamily: 'NunitoRegular',
        fontSize: 24,
        justifyContent: "flex-start",
        alignContent: "flex-start",
        color: '#264224',
        marginBottom: 18
    },
    myItensText: {
        fontFamily: 'NunitoBold',
        fontSize: 20,
        color: '#264224',

    },
    itensContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%'
    },
    topContent: {
        justifyContent: 'space-between',
        flexDirection: "row",
        alignContent: "space-between",
        alignItems: 'stretch',
        width: '100%',
        padding: 28,
    },
});

export default DeliveryRegister;
