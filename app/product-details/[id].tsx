import ImageSLider from "@/components/ImageSLider";
import { Colors } from "@/constants/Colors";
import { ProductType } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useGlobalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Prop = {};

export default function ProductDetails() {
  const { id } = useGlobalSearchParams();
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const URL = `http://192.168.0.92:8000/saleProducts/${id}`;
    const response = await axios.get(URL);
    console.log(response.data);
    setProduct(response.data);
  };

  return (
    <View>
      {product && <ImageSLider imageList={product.images} />}
      {product && (
        <View style={styles.container}>
          <View>
            <View>
              <Ionicons name="star" size={18} color={"#D4AF37"} />
              <Text style={styles.rating}>
                4.7
                <Text>{136}</Text>
              </Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={20} color={Colors.black} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{product.title} </Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{product.price}</Text>
            <View style={styles.priceDiscount}>
              <Text style={styles.priceDiscountText}>6% Off</Text>
            </View>
            <Text style={styles.oldPrice}>{product.price + 2}</Text>
          </View>
          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.productVariationWrapper}>
            <View style={styles.productVariationType}>
              <Text style={styles.productVariationTitle}></Text>
            </View>
            <View>
              <Text></Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  ratingWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "400",
    color: Colors.gray,
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: Colors.black,
    lineHeight: 32,
    letterSpacing: 0.6,
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.black,
  },
  priceDiscount: {
    backgroundColor: Colors.extraLightGray,
    padding: 5,
    borderRadius: 5,
  },
  priceDiscountText: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.primary,
  },
  oldPrice: {
    fontSize: 16,
    fontWeight: "400",
    textDecorationLine: "line-through",
    color: Colors.gray,
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "400",
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: 24,
  },
  productVariationWrapper:{
    flexDirection:"row",
    marginTop:20,
    flexWrap:"wrap"
  },
  productVariationType:{
    width:"50%",
    gap:5,
    marginBottom:10

  },
  productVariationTitle:{
    fontSize:10,
    fontWeight:'500',
    color: Colors.black
  }
});
