import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Cotizacion = ({resultado, moneda}) => {

  if(Object.keys(resultado).length === 0) return null;

  return (
   
      <View style={styles.resultado}  >
        <Text style={[styles.texto, styles.precio]}>
          <Text style={styles.span}>
           {resultado.PRICE}
          </Text>
        </Text>

        <Text style={styles.texto}>El precio mas alto del dia: {" "}
          <Text style={styles.span}>
            {resultado.HIGHDAY}
          </Text>
        </Text>

        <Text style={styles.texto}> El precio mas bajo del dia: {" "}
          <Text style={styles.span}>
            {resultado.LOWDAY}
          </Text>
        </Text>

        <Text style={styles.texto}>Variación de últimas 24 horas:{" "}
          <Text style={styles.span}>
            {resultado.CHANGEPCT24HOUR}%
          </Text>
        </Text>

        <Text style={styles.texto}>Actualización:{" "}
          <Text style={styles.span}>
            {resultado.LASTUPDATE}
          </Text>
        </Text>
      </View>

  )
}

const styles = StyleSheet.create({
  resultado:{
    backgroundColor:"#5e49e2",
    padding:20,
    marginTop:20

  },
  texto:{
    color:"#fff",
    fontWeight:"400",
    fontSize:18,
    marginBottom:10
  },
  precio:{
    fontSize:38
  },
  span:{
    fontWeight:"bold"
  }
});
export default Cotizacion