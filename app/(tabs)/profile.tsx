import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const ProfileScreen = (props: Props) => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <View style={{ alignItems: "center" }}>
          <Ionicons name="person" size={60} color={Colors.gray} />
          <Text>John Doe</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="person-outline" />
            <Text style={styles.buttonText}>Your orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="heart-outline" />
            <Text style={styles.buttonText}>Your Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="card-outline" />
            <Text style={styles.buttonText}>Payment History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="gift-outline" />
            <Text style={styles.buttonText}>Reward points</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="help-circle-outline" />
            <Text style={styles.buttonText}>Customer support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="pencil-outline" />
            <Text style={styles.buttonText}>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="settings-outline" />
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: Colors.black,
  },
  buttonWrapper: {
    marginTop: 20,
    gap: 10,
  },
  button: {
    padding: 10,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.black,
  },
});
