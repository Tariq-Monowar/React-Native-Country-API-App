import { FlatList, Image, SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
  import { useNavigation } from '@react-navigation/native'

const Home = () => {

  const navigation = useNavigation()

    const[data,setData] = useState("")
    const[isLodding,setIsLodding] = useState(true)
  
      
module.exports = {
  assets:['./assets/Fonts'],
}

    const getData = async()=>{
        const result = await fetch("https://restcountries.com/v3.1/all")
        const myData = await result.json()
        setData(myData)
        setIsLodding(false)
    }

    useEffect(() =>{ getData() }, [])
    
    //--------------FlatList render Item----------------
    const manipulate_Dataa =({item})=>{
        return <View >

           {
            data && <TouchableOpacity
              onPress={()=>navigation.navigate("About",{
                names: item.name,
                region: item.region,
                capital: item.capital,
                languages: item.languages,
                currencies: item.currencies,
                area: item.area,
                population: item.population,
                flags: item.flags,
                
               })}
             style={styles.buttonStylet}
             >          
              <View style={styles.buttonView}>
                <Image
                  style={styles.buttonFalgs}
                  source={{ uri: item.flags.png }}
                />
                <Text style={styles.buttontext}>{item.name.common.slice(0,28)}</Text>
              </View> 
           </TouchableOpacity>
           }

        </View>
    }

  return (
    <SafeAreaView style={styles.mainView}>
      {/*------------- searchBar ----------------*/}
      <View style={styles.HeaderView}>
        <Text style={styles.headerText}>Counter App</Text>
      </View>


      <View>
        <FlatList 
            keyExtractor={(item)=>item.name.common}
            data={data}
            renderItem={manipulate_Dataa}
        />
      </View>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  HeaderView:{
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: "#111b21",
    borderBottomEndRadius: 80
  },
  headerText:{
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",

  },
  mainView:{
    backgroundColor: "#202c33e8"  //#202c33
  },
  buttonStylet:{
    marginHorizontal: 10,
    backgroundColor: "#111b21",
    marginVertical: 4,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12
  },
  buttonView:{
    flexDirection:"row"
  },
  buttontext:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    paddingLeft: 10

  },
  buttonFalgs:{
    width: 37,
    height: 27,
    borderRadius: 6,
  }
})