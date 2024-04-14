import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import Formulario from './src/components/Formulario';
import axios from 'axios';
import Cotizacion from './src/components/Cotizacion';

const App = () => {
  const [moneda, setMoneda] = useState('');
  const [cripto, setCripto] = useState('');
  const [consultarAPI, setConsultarAPI] = useState(false);
  const [resultado, setResultado] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cotizarCriptoMoneda = async () => {
      if (consultarAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
        const res = await axios.get(url);
        //loadder
        setLoading(true)
      //hide loader
      setTimeout(() => {
        setResultado(res.data.DISPLAY[cripto] [moneda])
        setConsultarAPI(false)
        setLoading(false)
      }, 3000);

      }
    };
    cotizarCriptoMoneda();
  }, [consultarAPI]);

  //show loader or result
  const loader = loading ? <ActivityIndicator size={"large"} color="#5e49e2" /> :  <Cotizacion resultado={resultado} moneda={moneda} />

  return (
    <>
    <ScrollView>
      <Header />
      <Image
        style={styles.imagen}
        source={require('./img/cryptomonedas.png')}
      />

      <View style={styles.contenido}>
        <Formulario
          setConsultarAPI={setConsultarAPI}
          moneda={moneda}
          cripto={cripto}
          setMoneda={setMoneda}
          setCripto={setCripto}  
        />

         
      </View>
   <View style={{marginTop:40}}>
   {loader}
   </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});
export default App;
