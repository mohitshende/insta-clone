import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const FriendProfileScreen = ({ route }) => {
  const { name, profileImage, follow, post, followers, folloing } =
    route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{name}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default FriendProfileScreen;
