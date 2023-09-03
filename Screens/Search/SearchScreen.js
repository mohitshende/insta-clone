import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Image,
} from "react-native";
import React from "react";
import SearchBox from "./components/SearchBox";
import SearchContent from "./components/SearchContent";

const SearchScreen = () => {
  const [image, setImage] = React.useState(null);

  const getData = (data) => {
    setImage(data);
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchBox />
          <SearchContent getData={getData} />
        </ScrollView>
        {image ? (
          <View
            style={{
              position: "absolute",
              zIndex: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(52,52,52,0.8)",
            }}
          >
            <View
              style={{
                position: "absolute",
                top: windowHeight / 6,
                left: windowWidth / 18,
                backgroundColor: "white",
                width: 350,
                height: 465,
                borderRadius: 15,
                zIndex: 1,
                elevation: 50,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                }}
              >
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                  }}
                />
              </View>
              <Image
                source={{ uri: image }}
                style={{
                  width: "100%",
                  height: "80%",
                }}
              />
            </View>
          </View>
        ) : null}
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
export default SearchScreen;
