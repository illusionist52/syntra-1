import { Colors } from "@/constants/Colors";
import { ProductType } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
type Props = {
  item: ProductType;
  index: number;
};

const width = Dimensions.get("window").width - 40;

export default function ProductItem({ item, index }: Props) {
  return (
    <Link href={`/product-details/${item.id}` as any} asChild>
      <TouchableOpacity>
        <Animated.View
          entering={FadeInDown.delay(300 + index * 100).duration(500)}
          style={styles.container}
        >
          <Image source={{ uri: item.images[0] }} style={styles.productImg} />
          <TouchableOpacity style={styles.bookmarkBtn}>
            <Ionicons name="heart-outline" size={22} color="black" />
          </TouchableOpacity>
          <View style={styles.productInfo}>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          </View>
          <View style={styles.ratingWrapper}>
            <Ionicons name="star" size={20} color={"#D4AF37"} />
            <Text style={styles.rating}>4.7</Text>
          </View>

          <Text style={styles.title}>{item.title}</Text>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
  },
  productImg: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  bookmarkBtn: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: 5,
    borderRadius: 30,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    letterSpacing: 1.1,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.primary,
  },
  rating: {
    fontSize: 14,
    color: Colors.gray,
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
