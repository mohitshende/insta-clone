import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { FriendsProfileData } from "../../data/notifications";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const NotificationsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          padding: 10,
        }}
      >
        Notifications
      </Text>
      <ScrollView style={{ margin: 10 }} showsVerticalScrollIndicator={false}>
        <Text style={{ fontWeight: "bold" }}>This Week</Text>
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          {FriendsProfileData.slice(0, 3).map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.push("FriendProfile")}
                key={index}
              >
                <Text>{data.name},</Text>
              </TouchableOpacity>
            );
          })}
          <Text> Started following you</Text>
        </View>
        <Text style={{ fontWeight: "bold" }}>Earlier</Text>
        {FriendsProfileData.slice(3, 6).map((data, index) => {
          const [follow, setFollow] = React.useState(data.follow);
          return (
            <View key={index} style={{ width: "100%" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 20,
                  width: "100%",
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "64%",
                  }}
                >
                  <Image
                    source={{ uri: data.profileImage }}
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 100,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{ fontSize: 15 }}>
                    <Text style={{ fontWeight: "bold" }}>{data.name}</Text>, who
                    you might know, is on instagram
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFollow(!follow)}
                  style={{ width: follow ? 72 : 68 }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: 30,
                      borderRadius: 5,
                      backgroundColor: follow ? "#efefef" : "#3493d9",
                      borderWidth: follow ? 1 : 0,
                      borderColor: follow ? "#dedede" : null,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>{follow ? "Following" : "Follow"}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
          Suggested for you
        </Text>
        {FriendsProfileData.slice(6, 12).map((data, index) => {
          const [follow, setFollow] = React.useState(data.follow);
          const [close, setClose] = React.useState(false);
          return (
            <View key={index} style={{ width: "100%" }}>
              {close ? null : (
                <View
                  style={{
                    paddingVertical: 10,
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    // alignItems: "center",
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        maxWidth: "74%",
                      }}
                    >
                      <Image
                        source={{ uri: data.profileImage }}
                        style={{
                          width: 45,
                          height: 45,
                          borderRadius: 100,
                          marginRight: 10,
                        }}
                      />
                      <View style={{ width: "100%" }}>
                        <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                          {data.name}
                        </Text>
                        <Text style={{ fontSize: 12, opacity: 0.5 }}>
                          {data.accountName}
                        </Text>
                        <Text style={{ fontSize: 12, opacity: 0.5 }}>
                          Suggested for you
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        {follow ? (
                          <TouchableOpacity
                            onPress={() => setFollow(!follow)}
                            style={{ width: follow ? 90 : 68 }}
                          >
                            <View
                              style={{
                                width: "100%",
                                height: 30,
                                borderRadius: 5,
                                backgroundColor: follow ? null : "#3493D9",
                                borderWidth: follow ? 1 : 0,
                                borderColor: "#dedede",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Text
                                style={{ color: follow ? "black" : "white" }}
                              >
                                {follow ? "following" : "follow"}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        ) : (
                          <>
                            <TouchableOpacity
                              onPress={() => setFollow(!follow)}
                              style={{ width: follow ? 90 : 68 }}
                            >
                              <View
                                style={{
                                  width: "100%",
                                  height: 30,
                                  borderRadius: 5,
                                  backgroundColor: follow ? null : "#3493D9",
                                  borderWidth: follow ? 1 : 0,
                                  borderColor: "#dedede",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Text
                                  style={{ color: follow ? "black" : "white" }}
                                >
                                  {follow ? "following" : "follow"}
                                </Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => setClose(true)}
                              style={{ paddingHorizontal: 10 }}
                            >
                              <AntDesign
                                name="close"
                                style={{
                                  fontSize: 14,
                                  color: "black",
                                  opacity: 0.8,
                                }}
                              />
                            </TouchableOpacity>
                          </>
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          );
        })}
        <View style={{ padding: 20 }}>
          <Text style={{ color: "#3493d9" }}>See all Suggestions</Text>
        </View>
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

export default NotificationsScreen;
