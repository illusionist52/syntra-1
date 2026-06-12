import { Colors } from "@/constants/Colors";
import { NotificationType } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import axios from "axios";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
type Props = {};

const NotificationsScreen = (props: Props) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async () => {
    const URL = "http://192.168.0.92:8000/notifications";
    const response = await axios.get(URL);
    console.log(response.data);
    setNotifications(response.data);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />

      <View style={[styles.container, { marginTop: headerHeight }]}>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.notificationWrapper}>
              <View style={styles.notificationIcon}>
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color={Colors.black}
                />
              </View>
              <View style={styles.notificationInfo}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.notificationTitle}>{item.title}</Text>
                  <Text style={styles.notificationMessage}>{item.timestamp}</Text>
                </View>
                <Text style={styles.notificationMessage}>{item.message}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  notificationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.lightGray,
    backgroundColor: Colors.extraLightGray,
    borderRadius: 5,
  },
  notificationInfo: {
    flex: 1,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  notificationMessage: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 5,
    lineHeight: 20,
  },
});
