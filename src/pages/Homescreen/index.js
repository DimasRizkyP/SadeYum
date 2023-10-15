import React from 'react'
import { View } from 'react-native';
import {view,Image,Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker';
import Icon from "@expo/vector-icons/Entypo"
import Product from '../Artikel/Product'


export default class Homescreen extends React.Component {
  state={
    city:"Los Angeles"
    
  }
  render(){
    return(
        
      
       <ScrollView style={{backgroundColor:"#FFF"}}>
        
           <View style={{
               flexDirection:"row",
               alignItems:"center",
               marginTop:40,
               marginHorizontal:20,
               color: 'black'
               
           }}>
               <View style={{width:"10%"}}>
                   <Image
                        source={require('../Resep/image/1.png')}
                   />
               </View>
               <View style={{
                   width:"80%",
                   alignItems:"center",
                   color: 'black'
               }}>
                   <Picker
                    selectedValue={this.state.city}
                    style={{height:50,width:160}}
                    onValueChange={(itemValue,itemIndex)=>
                        this.setState({city:itemValue})
                    }
                   >
                       <Picker.Item
                        label="Los Angeles"
                        value="Los Angeles"
                        style={{fontWeight:"bold"}}
                       />
                        <Picker.Item
                        label="Mumbai"
                        value="Mumbai"
                        style={{fontWeight:"bold"}}
                       />
                        <Picker.Item
                        label="New Delhi"
                        value="New Delhi"
                        style={{fontWeight:"bold"}}
                       />
                   </Picker>
               </View>
               <View style={{width:"10%"}}>
                    <Icon name="magnifying-glass" size={30}/>
               </View>
           </View>
           <View style={{
               paddingHorizontal:20,
               marginTop:50
           }}>
               <Text style={{
                   fontSize:36,
                   fontWeight:"bold",
                   color: "#333"
               }}>Anake Resep</Text>
               <Text style={{
                   fontSize:36,
                   fontWeight:"bold",
                   color: "#333"
               }}>Makanan 
               </Text>
           </View>


           <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop:40}}
           >
               <View style={{
                   alignItems:"center",
                   flexDirection:"row",
                   backgroundColor:"#f9dd7a",
                   marginHorizontal:15,
                   borderRadius:25,
                   paddingVertical:5,
                   paddingHorizontal:15
               }}>
                   <Image
                    source={require('../Resep/image/5.png')}
                    style={{height:40,width:40}}
                   />
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:18,
                       paddingLeft:10,
                       color: "#333"
                   }}>
                       Burgers
                   </Text>
               </View>

               <View style={{
                   alignItems:"center",
                   flexDirection:"row",
                   backgroundColor:"#e5e4eb",
                   marginHorizontal:15,
                   borderRadius:25,
                   paddingVertical:5,
                   paddingHorizontal:15
               }}>
                   <Image
                    source={require('../Resep/image/10.png')}
                    style={{height:40,width:40}}
                   />
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:18,
                       paddingLeft:10,
                       
                       color: "#333"
                   }}>
                       Burrito
                   </Text>
               </View>

               <View style={{
                   alignItems:"center",
                   flexDirection:"row",
                   backgroundColor:"#e5e4eb",
                   marginHorizontal:15,
                   borderRadius:25,
                   paddingVertical:5,
                   paddingHorizontal:15
               }}>
                   <Image
                    source={require('../Resep/image/7.png')}
                    style={{height:40,width:40}}
                   />
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:18,
                       paddingLeft:10,
                       
                       color: "#333"
                   }}>
                       Salads
                   </Text>
               </View>

               <View style={{
                   alignItems:"center",
                   flexDirection:"row",
                   backgroundColor:"#e5e4eb",
                   marginHorizontal:15,
                   borderRadius:25,
                   paddingVertical:5,
                   paddingHorizontal:15
               }}>
                   <Image
                    source={require('../Resep/image/6.png')}
                    style={{height:40,width:40}}
                   />
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:18,
                       paddingLeft:10,
                       
                       color: "#333"
                   }}>
                       Pizza
                   </Text>
               </View>
        </ScrollView>
               <View style={{
                   alignItems:"center",
                   marginHorizontal:20,
                   flexDirection:"row",
                   marginTop:40
               }}>
                   <View style={{
                       width:"50%"
                   }}>
                       <Text style={{
                           fontSize:22,
                           fontWeight:"bold",
                           color: "#333"
                       }}>Jenis Makanan</Text>
                   </View>
                   <View style={{
                       width:"50%",
                       alignItems:"flex-end"
                   }}>
                       <Icon
                        name="dots-three-horizontal"
                        size={25}
                        color="#333"
                       />
                   </View>
               </View>
              
              
               <View style={{
                   flexDirection:"row",
                   marginHorizontal:15,
                   marginTop:30,
               }}>
                   <Product
                        image={require("../Resep/image/4.png")}
                        title="Smokehouse"
                        price="12.99"
                        onPress={() => this.props.navigation.navigate('Detail')}
                   />
                   <Product
                        image={require("../Resep/image/9.png")}
                        title="Honey Chilli"
                        price="10.99"
                        marginTop={25}
                   />
               </View>

               <View style={{
                   flexDirection:"row",
                   marginHorizontal:15,
                   marginTop:30,
               }}>
                   <Product
                        image={require("../Resep/image/6.png")}
                        title="Adios Pizza"
                        price="11.99"
                   />
                   <Product
                        image={require("../Resep/image/10.png")}
                        title="Burrito"
                        price="10.99"
                        marginTop={25}
                   />
                   
               </View>
               
       </ScrollView>
    )
}
}
