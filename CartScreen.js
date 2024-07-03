import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,} from 'react-native';
import { CartContext } from './src/context/CartContext';

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const renderProduct = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartImage} />
      <View style={styles.cartDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => removeFromCart(item.id)}>
        <Image source={require('./assets/remove.png')} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text> </Text>
        <Image
          source={require('./assets/Logo.png')}
          style={{ resizeMode: 'contain', marginLeft: 40,
            }}
        />
        <Image source={require('./assets/Search.png')} style={styles.icon}  />
      </View>

      <View style={{ alignItems: 'center', paddingHorizontal: 60, width:'100%',}}>
        <Image source={require('./assets/checkout.png')} style={{resizeMode: 'contain',
            height: 100,
            width: 200,}} />
      </View>

      <FlatList
        data={cart}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cartList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  icon: { marginHorizontal: 10 },

  cartList: { 
    paddingHorizontal: 30,
    marginTop : 10
    },
  cartItem: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 10,
   
  },
  cartImage: { 
    width: 120, 
    height: 140, 
  },
  cartDetails: { 
    flex: 1, 
    marginHorizontal: 10 ,
    marginVertical: 30 
  },
  productName: { 
    fontSize: 16, 
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
  deleteButton: {
     position: 'absolute', 
    bottom: 10, 
    right: 5,  
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    
    borderRadius: 15,
    
  },
});

export default CartScreen;
