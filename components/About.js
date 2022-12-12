import { StyleSheet, Text, View, Image, SafeArray, ScrollView } from 'react-native'
import React from 'react'

const About = ({route}) => {
 
  return (
    <ScrollView style={styles.aboutContanner}>
      <View style={styles.aboutInnarContanner}>
        <Text style={styles.elementsAbout1}>{route.params.names.common}</Text>
        <Image
          style={styles.aboutFalgs}
          source={{ uri: route.params.flags.png}}
        />
        <Text style={styles.elementsAbout}>official Name:   {route.params.names.official}</Text>
        <Text style={styles.elementsAbout}>capital:   {route.params.capital}</Text>
        <Text style={styles.elementsAbout}>region:   {route.params.region}</Text>
        <Text style={styles.elementsAbout}>area:   {route.params.area} ㎢</Text>
        <Text style={styles.elementsAbout}>population:   {route.params.population}</Text>
        
    </View>
    </ScrollView>
    
  )
}

export default About

const styles = StyleSheet.create({
  aboutContanner:{
    backgroundColor: "#111b21"
  },
  aboutInnarContanner:{
    paddingHorizontal: 10
  },
  aboutFalgs:{
    width: "100%",
    height: 240,
    borderRadius: 6,
    merginHorizontal: 20,
    marginVertical: 20
  },
  elementsAbout1:{
    color: "#fff",
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 15
  },
  elementsAbout:{
    color: "#fff",
    fontSize: 17,
    fontWeight: 'bold',
    
  }
})