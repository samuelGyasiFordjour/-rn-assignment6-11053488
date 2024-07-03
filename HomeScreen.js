import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,ScrollView } from 'react-native';
import { CartContext } from './src/context/CartContext';

const products = [
  { id: '1', name: 'Office Wear', description: 'reversible angora cardigan', price: '$10', image: require('./assets/dress1.png') },
  { id: '2', name: 'Black', description: 'reversible angora cardigan', price: '$20', image: require('./assets/dress2.png') },
  { id: '3', name: 'Church Wear', description: 'reversible angora cardigan', price: '$30', image: require('./assets/dress3.png') },
  { id: '4', name: 'Lamerei', description: 'reversible angora cardigan', price: '$40', image: require('./assets/dress4.png') },
  { id: '5', name: '21WN', description: 'reversible angora cardigan', price: '$50', image: require('./assets/dress5.png') },
  { id: '6', name: 'Lopo', description: 'reversible angora cardigan', price: '$60', image: require('./assets/dress6.png') },
  { id: '7', name: '21WN', description: 'reversible angora cardigan', price: '$70', image: require('./assets/dress7.png') },
  { id: '8', name: 'Lame', description: 'reversible angora cardigan', price: '$80', image: require('./assets/dress3.png') },
];

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <TouchableOpacity  onPress={() => addToCart(item)}>
        <Image source={require("./assets/add_circle.png")} style={styles.addButton}/>
      </TouchableOpacity>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}  >
      <View style={styles.header} >

        <Image source={require("./assets/Menu.png")}/>
        <View >
        <Image source={require("./assets/Logo.png")} style={{marginLeft: 50,}}/>
        </View>
        <View style={styles.headerIcons}>
          <Image source={require("./assets/Search.png")} style={styles.icon}/>
          <TouchableOpacity onPress={() => navigation.navigate(' ')}>
          <Image source={require("./assets/shoppingBag.png")} style={styles.icon}/>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>OUR STORY</Text>

        <View style={styles.subHeaderIcons}>
          <View style={styles.iconbg}>
            <Image source={require("./assets/Listview.png")} style={styles.icon}/>
          </View>
          <View style={styles.iconbg}>
            <Image source={require("./assets/Filter.png")} style={styles.icon}/>
          </View>
        </View>

      </View>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
   flex: 1,
   backgroundColor: '#fff' ,
   paddingHorizontal: 20,
   },
  header: {
   flexDirection: 'row', 
   justifyContent: 'space-between', 
   alignItems: 'center', 
   padding: 10, 
   },
   headerIcons: {
   flexDirection: 'row', 
   justifyContent: 'space-between', 
   },
   icon: { 
     marginHorizontal: 10 
     }, 
  subHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 10, 
    },
  subHeaderText: { 
    fontSize: 24,
    fontFamily:'san-serif',
    },
  iconbg: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#f9f9f9',
    marginLeft: 10,

  },
  subHeaderIcons: { 
    flexDirection: 'row',
    justifyContent: 'space-between ',
    },
  productList: { 
    paddingHorizontal: 0 
    },
  card: { 
    flex: 1, 
    margin: 0, 
    backgroundColor: '#fff',  
    padding: 10, 
    },
  image: { 
    width: '100%', 
    height: 270,  
    },
  addButton: { 
    position: 'absolute', 
    bottom: 10, 
    right: 5,  
    padding: 5 },
  productName: { 
    fontSize: 16, 
    marginVertical: 5,
    fontFamily: 'san-serif'
    },
  productDescription: { 
    fontSize: 14, 
    color: '#666' 
    },
  productPrice: { 
    fontSize: 14, 
    color: '#de8863', 
    fontWeight: 'bold' 
    },
});

export default HomeScreen;
