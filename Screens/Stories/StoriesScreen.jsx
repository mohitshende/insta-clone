import React from "react";
import StoryViewer from "./components/StoryViewer";

const StoriesScreen = ({ navigation }) => {
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
};
export default StoriesScreen;
