import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { USERS } from "../../../data/users";
import Icon from "react-native-vector-icons/Feather";

const ProfileTopSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.userImage} source={{ uri: USERS[0].image }} />
        <View style={styles.profileStats}>
          <View style={styles.profileStat}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statName}>Posts</Text>
          </View>
          <View style={styles.profileStat}>
            <Text style={styles.statNumber}>1.6M</Text>
            <Text style={styles.statName}>Followers</Text>
          </View>
          <View style={styles.profileStat}>
            <Text style={styles.statNumber}>27</Text>
            <Text style={styles.statName}>Following</Text>
          </View>
        </View>
      </View>
      <Text style={styles.userName}>Mack</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.btn, { width: "90%" }]}>
          <Text style={styles.btnText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { width: "9%", height: "100%" }]}>
          <Icon name="user-plus" size={16} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  topContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 40,
  },
  profileStats: {
    flexDirection: "row",
  },
  profileStat: {
    alignItems: "center",
    marginLeft: 20,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "800",
  },
  statName: {
    fontSize: 15,
  },
  userName: {
    marginTop: 5,
    fontWeight: "600",
  },
  buttons: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    borderRadius: 8,
    backgroundColor: "#efefef",
    padding: 5,
    alignItems: "center",
  },
  btnText: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default ProfileTopSection;
