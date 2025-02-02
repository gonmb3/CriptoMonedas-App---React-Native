import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Header = () => {
  return (
    <>
        <Text style={styles.encabezado}>CriptoMonedas</Text>
    </>
  )
}


const styles = StyleSheet.create({
  encabezado:{
    paddingTop:10,
    fontWeight:"bold",
    backgroundColor:"#5e49e2",
    paddingBottom:10,
    textAlign:"center",
    textTransform:"uppercase",
    fontSize:20,
    color:"#fff",
    marginBottom:30
  }
})
export default Header