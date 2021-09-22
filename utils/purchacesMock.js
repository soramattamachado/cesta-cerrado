
import PaymentTypes from './paymentTypes';

const Purchases = [
  {
    img: 'chapada_diamantina_3',
    date: '23/04/2021 - 19:00',
    title: 'Belezas naturais da Chapada Diamantina',
    subtotal: 24.00,
    deliverTax: 0,
    totalPrice: 24.00,
    paymentType: PaymentTypes.MONEY,
    deliverAddress: 'Retirar no local',
    rating: 4
  },
  {
    img: 'camarao_costa_negra_2',
    date: '19/12/2021 - 19:10',
    title: 'Camarão da Costa Negra fresquinho',
    subtotal: 50.00,
    deliverTax: 10,
    totalPrice: 60.00,
    paymentType: PaymentTypes.MONEY,
    deliverAddress: 'Av. Me. Benvenuta,  1000',
    rating: 5
  }
];

export default Purchases;
