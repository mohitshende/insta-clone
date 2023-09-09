import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import React from "react";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Post from "./components/Post";
import { POSTS } from "../../data/posts";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        pinchGestureEnabled={false}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <Header />
        <Stories />
        {POSTS.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
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

export default HomeScreen;
