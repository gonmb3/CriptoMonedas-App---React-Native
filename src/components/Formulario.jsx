import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = ({
  moneda,
  cripto,
  setMoneda,
  setCripto,
  setConsultarAPI,
}) => {
  const [criptoMonedas, setCriptoMonedas] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const res = await axios.get(url);
      setCriptoMonedas(res.data.Data);
    };
    consultarAPI();
  }, []);

  //  save currency
  const obtenerMoneda = moneda => {
    setMoneda(moneda);
  };
  //  save cryptocurrency
  const obtenerCriptoMoneda = cripto => {
    setCripto(cripto);
  };

  const cotizarPrecio = () => {
    //validation
    if (moneda.trim() === '' || cripto.trim() === '') {
      mostrarAlerta();
      return;
    }
    //api state
    setConsultarAPI(true)
  };

  const mostrarAlerta = () => {
    Alert.alert('Error..', 'Ambos campos son obligatorios', [{text: 'OK'}]);
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      {/* picker - currency */}
      <Picker
        onValueChange={moneda => obtenerMoneda(moneda)}
        selectedValue={moneda}>
        <Picker.Item label="-- Seleccione --" value="" />
        <Picker.Item label="Dolar" value="USD" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>

      <Text style={styles.label}>CriptoMoneda</Text>
      {/* picker - cryptocurrency */}
      <Picker
        onValueChange={cripto => obtenerCriptoMoneda(cripto)}
        selectedValue={cripto}>
        <Picker.Item label="-- Seleccione --" value="" />
        {criptoMonedas.map(cripto => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>

      {/* btn*/}
      <TouchableHighlight
        style={styles.btnCotizar}
        onPress={() => cotizarPrecio()}>
        <Text style={styles.textoCotizar}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
    color: '#000',
  },
  btnCotizar: {
    backgroundColor: '#5e49e2',
    padding: 10,
    marginTop: 20,
  },
  textoCotizar: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Formulario;
