import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const SearchContent = ({ getData }) => {
  const imageURI = "https://picsum.photos/id";

  const searchData = [
    {
      id: 0,
      images: [
        `${imageURI}/10/900/1000`,
        `${imageURI}/12/900/1000`,
        `${imageURI}/13/900/1000`,
        `${imageURI}/14/900/1000`,
        `${imageURI}/15/900/1000`,
        `${imageURI}/16/900/1000`,
      ],
    },
    {
      id: 1,
      images: [
        `${imageURI}/28/900/1000`,
        `${imageURI}/29/900/1000`,
        `${imageURI}/30/900/1000`,
        `${imageURI}/49/900/1000`,
        `${imageURI}/32/900/1000`,
        `${imageURI}/74/900/1000`,
      ],
    },
    {
      id: 2,
      images: [
        `${imageURI}/89/900/1000`,
        `${imageURI}/90/900/1000`,
        `${imageURI}/1/900/1000`,
      ],
    },
  ];

  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <React.Fragment key={index}>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      style={{ paddingBottom: 2 }}
                      delayLongPress={200}
                      onLongPress={() => getData(imageData)}
                      onPressOut={() => getData(null)}
                    >
                      <Image
                        source={{ uri: imageData }}
                        style={{ width: 129, height: 150 }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: 261,
                    justifyContent: "space-between",
                  }}
                >
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        style={{ paddingBottom: 2 }}
                        delayLongPress={200}
                        onLongPress={() => getData(imageData)}
                        onPressOut={() => getData(null)}
                      >
                        <Image
                          source={{ uri: imageData }}
                          style={{ width: 129, height: 150 }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  delayLongPress={200}
                  onLongPress={() => getData(data.images[5])}
                  onPressOut={() => getData(null)}
                >
                  <Image
                    source={{ uri: data.images[5] }}
                    style={{ width: 129, height: 300 }}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{ paddingRight: 2 }}
                  delayLongPress={200}
                  onLongPress={() => getData(data.images[2])}
                  onPressOut={() => getData(null)}
                >
                  <Image
                    source={{ uri: data.images[2] }}
                    style={{ width: 260, height: 300 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: 130,
                    justifyContent: "space-between",
                  }}
                >
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        style={{ paddingBottom: 2 }}
                        delayLongPress={200}
                        onLongPress={() => getData(imageData)}
                        onPressOut={() => getData(null)}
                      >
                        <Image
                          source={{ uri: imageData }}
                          style={{ width: 129, height: 150 }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({});
