import { Colors } from "@/constants/Colors";
import { ProductType } from "@/types/type";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductItem from "./ProductItem";

type Props = {
  products: ProductType[];
  flatlist: boolean;
};

export default function ProductList({ products, flatlist = true }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>For you</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See all</Text>
        </TouchableOpacity>
      </View>
      {flatlist ? (
        <FlatList
          data={products}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 20,
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ index, item }) => (
            <ProductItem item={item} index={index} productType="regular" />
          )}
        />
      ) : (
        <View style={styles.itemWrapper}>
          {products.map((item, index) => (
            <View style={styles.productWrapper} key={index}>
              <ProductItem item={item} index={index} productType="regular" />
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  productImg: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.black,
    letterSpacing: 0.6,
  },
  productWrapper: {
    width: "50%",
    paddingLeft: 5,
    marginBottom: 20,
  },
  itemWrapper: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
  },
});
