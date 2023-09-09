import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import IonicIcon from "react-native-vector-icons/Ionicons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import React, { useState } from "react";
import {
  Gesture,
  GestureDetector,
  PinchGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";

const { width: SIZE } = Dimensions.get("window");

const Post = ({ post }) => {
  return (
    <View
      style={{
        marginVertical: 10,
        borderTopWidth: 0.5,
        borderTopColor: "#a9a9a9",
      }}
    >
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 5,
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>
    <Text
      style={{
        color: "white",
        fontSize: 20,
        fontWeight: "700",
        transform: [{ rotate: "90deg" }],
      }}
    >
      ...
    </Text>
  </View>
);

const AnimatedImage = Animated.createAnimatedComponent(Image);

const PostImage = ({ post }) => {
  const scale = useSharedValue(1);

  const pinchHandler = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = event.scale;
    })
    .onEnd(() => {
      scale.value = withSpring(1, { damping: 50 });
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      zIndex: 999,
    };
  });

  const scaleHeart = useSharedValue(0);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .maxDelay(250)
    .onStart(() => {
      scaleHeart.value = withSpring(1, undefined, (isFinished) => {
        if (isFinished) {
          scaleHeart.value = withDelay(100, withSpring(0));
        }
      });
    });

  const heartStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: Math.max(scaleHeart.value, 0) }],
    };
  });

  const composedGestureHandlers = Gesture.Exclusive(doubleTap, pinchHandler);

  return (
    <GestureDetector gesture={composedGestureHandlers}>
      <View>
        <AnimatedImage
          source={{ uri: post.imgUrl }}
          style={[
            {
              width: SIZE,
              height: SIZE,
              resizeMode: "cover",
            },
            rStyle,
          ]}
        />

        <Animated.View
          style={[
            {
              width: SIZE,
              height: SIZE,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              zIndex: 1000,
            },
            heartStyle,
          ]}
        >
          <AntDesignIcon name="heart" size={100} />
        </Animated.View>
      </View>
    </GestureDetector>
  );
};

const PostFooter = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.leftFooterIcons}>
        <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
          {isLiked ? (
            <AntDesignIcon
              name="heart"
              style={[styles.footerIcon, { color: "red" }]}
              size={25}
            />
          ) : (
            <Icon name="heart" style={styles.footerIcon} size={25} />
          )}
        </TouchableOpacity>
        <TouchableOpacity>
          <IonicIcon
            name="md-chatbubble-outline"
            style={styles.footerIcon}
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="send" style={styles.footerSendIcon} size={25} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Icon name="bookmark" style={styles.footerIcon} size={25} />
      </TouchableOpacity>
    </View>
  );
};

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>
          <Text> {comment.comment}</Text>
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  footerSendIcon: {
    width: 33,
    height: 33,
    transform: [{ rotate: "20deg" }],
  },
  leftFooterIcons: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});

export default Post;
