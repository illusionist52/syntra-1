import { NotificationType } from "@/types/type";
import { useHeaderHeight } from "@react-navigation/elements";
import axios from "axios";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
type Props = {};

const NotificationsScreen = (props: Props) => {
  const [notification, setNotifications] = useState<NotificationType[]>([]);
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async () => {
    const URL = "http://192.168.0.92:8000/notifcations";
    const response = await axios.get(URL);
    console.log(response.data);
    setNotifications(response.data);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />

      <View style={[styles.container, { marginTop: headerHeight }]}>
        <Text>Notifications Screen</Text>
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
});
