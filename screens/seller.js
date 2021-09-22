import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import SellerItem from '../components/sellerItem';
import PurchasesMock from '../utils/purchacesMock';

const Seller = ({ routes, navigation }) => {
  let itemIndex = 1;

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Button color="#5A9C54" icon="arrow-left" mode="text" onPress={() => navigation.goBack()}>Voltar</Button>
        <Button style={{ backgroundColor: "#5A9C54" }} mode="contained" onPress={() => navigation.navigate("NewItem")}>NOVO ITEM</Button>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Sou vendedor(a)</Text>
        <Text style={styles.myItensText}>Meus itens</Text>
        <View style={styles.itensContainer}>
          {PurchasesMock.map((purchace, index) => (
            <SellerItem
              key={index}
              customStyle={((itemIndex++ % 2) === 0) ? styles.rightItem : styles.leftItem}
              item={purchace}
            />
          ))}
        </View>
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
  topContent: {
    justifyContent: 'space-between',
    flexDirection: "row",
    alignItems: 'baseline',
    width: '100%',
    marginTop: 20,
    padding: 18,
  },
  content: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '87.20%'
  },
  leftItem: {
    marginRight: 10,
  },
  rightItem: {
    marginLeft: 10,
  },
  title: {
    fontFamily: 'NunitoRegular',
    fontSize: 24,
    color: '#264224',
    marginBottom: 20
  },
  myItensText: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
    color: '#264224',
    marginBottom: 120
  },
  itensContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%'
  }
});

export default Seller;
