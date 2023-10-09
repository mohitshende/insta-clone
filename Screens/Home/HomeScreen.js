import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import React from "react";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Post from "./components/Post";
import StoryViewer from "./components/StoryViewer";
import { POSTS } from "../../data/posts";

const HomeScreen = ({ navigation }) => {
  return (
    <StoryViewer
      stories={[
        "https://unsplash.com/photos/9YdePM6BrO4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Njd8fGJsdWUlMjBza3l8ZW58MHx8fHwxNjk2NzcwODI2fDA&force=true&w=640",
        "https://unsplash.com/photos/AYPGMMtWVIY/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk2NzczODE3fA&force=true&w=640",
        "https://unsplash.com/photos/KJKgvXUMr2U/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE2OTY3NzM4OTJ8&force=true&w=640",
        "https://unsplash.com/photos/JuSkqCim-Jw/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE2OTY3NjgzNzN8&force=true&w=640",
      ]}
    />
  );

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
