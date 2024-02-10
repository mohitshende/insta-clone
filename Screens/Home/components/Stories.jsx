import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { USERS } from "../../../data/users";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Stories = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.push("StoriesScreen")}>
              <LinearGradient
                colors={["#CA1D7E", "#E35157", "#F2703F"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={{
                  height: 83,
                  width: 83,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                  marginLeft: 6,
                }}
              >
                <Image
                  source={{ uri: story.image }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    alignSelf: "center",
                    borderColor: "#fff",
                    borderWidth: 3,
                  }}
                />
              </LinearGradient>
              {/* <Image source={{ uri: story.image }} style={styles.story} /> */}
              <Text style={{ color: "white" }}>{story.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});

export default Stories;
