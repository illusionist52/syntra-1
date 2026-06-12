import { Colors } from "@/constants/Colors";
import { CartItemType } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import axios from "axios";
import { Image } from "expo-image";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
type Props = {};

const CartScreen = (props: Props) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    const URL = "http://192.168.0.92:8000/cart";
    const response = await axios.get(URL);
    console.log(response.data);
    setCartItems(response.data);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => <CartItem item={item} />}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.priceInfoWrapper}>
          <Text style={styles.totalText}>Total: $100 </Text>
        </View>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutBtnText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const CartItem = ({ item }: { item: CartItemType }) => {
  return (
    <View style={styles.itemWrapper}>
      <Image source={{ uri: item.image }} style={styles.itemImg} />
      <View style={styles.itemInfoWrapper}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemText}>${item.price}</Text>
        <View style={styles.itemControlWrapper}>
          <TouchableOpacity>
            <Ionicons name="trash-outline" size={20} color={"red"} />
          </TouchableOpacity>
          <View style={styles.quantityControlWrapper}>
            <TouchableOpacity style={styles.quantityControl}>
              <Ionicons name="remove-outline" size={20} color={Colors.black} />
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity style={styles.quantityControl} >
              <Ionicons name="add-outline" size={20} color={Colors.black} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity >
            <Ionicons name="heart-outline" size={20} color={Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  itemInfoWrapper: {
    flex: 1,
    alignSelf: "flex-start",
    gap: 10,
  },
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.lightGray,
    borderRadius: 5,
  },
  itemImg: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  itemControlWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantityControlWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  quantityControl: {
    padding: 5,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 5,
  },
  footer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: Colors.white,
  },
  checkoutBtn: {
    flex: 1,
    backgroundColor: Colors.primary,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  checkoutBtnText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.white,
  },
  priceInfoWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  totalText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
});
