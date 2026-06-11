import Categories from "@/components/Categories";
import FlashSale from "@/components/FlashSale";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import { CategoryType, ProductType } from "@/types/type";
import axios from "axios";
import { Image } from "expo-image";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
type Props = {};

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [saleProducts, setSaleProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts();
    getCategories();
    getSaleProducts();
  }, []);

  const getSaleProducts = async () => {
    const URL = "http://192.168.0.92:8000/saleProducts";
    const response = await axios.get(URL);
    console.log(response.data);
    setSaleProducts(response.data);
    setLoading(false);
  };

  const getCategories = async () => {
    const URL = "http://192.168.0.92:8000/categories";
    const response = await axios.get(URL);
    console.log(response.data);
    setCategories(response.data);
  };

  const getProducts = async () => {
    const URL = "http://192.168.0.92:8000/products";
    const response = await axios.get(URL);
    console.log(response.data);
    setProducts(response.data);
    setLoading(false);
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: true, header: () => <Header /> }} />
      <ScrollView>
        <Categories categories={categories} />
        <FlashSale products={saleProducts} />
        <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
          <Image
            source={require("@/assets/images/sale-banner.jpg")}
            style={{ width: "100%", height: 150, borderRadius: 15 }}
          />
        </View>
        <ProductList products={products} flatlist={true} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
