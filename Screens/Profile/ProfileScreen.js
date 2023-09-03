import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./components/Header";
import ProfileTopSection from "./components/ProfileTopSection";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ProfileTopSection />
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

export default ProfileScreen;
