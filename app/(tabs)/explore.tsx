import { Colors } from "@/constants/Colors";
import { CategoryType } from "@/types/type";
import { useHeaderHeight } from "@react-navigation/elements";
import axios from "axios";
import { Image } from "expo-image";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
type Props = {};

const ExploreScreen = (props: Props) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const headerHeight = useHeaderHeight();
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const URL = "http://192.168.0.92:8000/categories";
    const response = await axios.get(URL);
    console.log(response.data);
    setCategories(response.data);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <FlatList
          data={categories}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.itemWrapper}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Image
                source={{ uri: item.image }}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
            </View>
          )}
        />
      </View>
    </>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.extraLightGray,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
});
