import React from "react";
import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";

// View = div
// Text = p

class App extends React.Component {
  render() {
    return (
      <ScrollView
        style={{
          flex: 1, // Permet d'occuper tout l'espace disponible
          backgroundColor: "#191919"
        }}
      >
        <View
          style={{
            backgroundColor: "#393939",
            padding: 10,
            marginBottom: 15
          }}
        >
          <Image
            style={{ height: 50, width: 60 }}
            source={require("./img/imdbLogoBlanc.png")}
          />
        </View>

        <View
          style={{
            backgroundColor: "#212121",
            padding: 15
          }}
        >
          <Text style={{ fontSize: 40, color: "#E8E8E8", marginBottom: 15 }}>
            Interstellar
          </Text>
          <View style={{ flexDirection: "row", paddingBottom: 30 }}>
            <Text style={{ color: "#AFAFAF" }}>2014</Text>
            <Text style={{ color: "#AFAFAF" }}>PG-13</Text>
            <Text style={{ color: "#AFAFAF" }}>2h 49min</Text>
            <Text style={{ color: "#AFAFAF" }}>Adventure, Drama, Sci-Fi </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ height: 150, width: 100 }}
              source={require("./img/158828.jpg")}
            />
            <View style={{ flexDirection: "column", flex: 1, paddingLeft: 20 }}>
              <Text
                style={{ fontSize: 15, color: "#E8E8E8", paddingBottom: 15 }}
              >
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  alert("clicked");
                }}
                style={{
                  backgroundColor: "#0277BD",
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "90%"
                }}
              >
                <Text
                  style={{
                    color: "#E8E8E8",

                    fontWeight: "bold"
                  }}
                >
                  + ADD TO WATCHLIST
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20
            }}
          >
            <View
              style={{
                alignItems: "center"
              }}
            >
              <Image
                style={{ height: 40, width: 40 }}
                source={require("./img/star-yellow.png")}
              />
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "#E8E8E8", fontSize: 20 }}>8.6</Text>
                <Text style={{ color: "#E8E8E8" }}>/10</Text>
              </View>

              <Text
                style={{ color: "#E8E8E8", fontSize: 11, color: "#AFAFAF" }}
              >
                1.1 M
              </Text>
            </View>
            <View
              style={{
                alignItems: "center"
              }}
            >
              <Image
                style={{ height: 40, width: 40 }}
                source={require("./img/imdbStarBlanche.png")}
              />
              <Text style={{ color: "#E8E8E8", marginTop: 5 }}>RATE THIS</Text>
            </View>
            <View
              style={{
                alignItems: "center"
              }}
            >
              <Image
                style={{ height: 20, width: 20, marginTop: 10 }}
                source={require("./img/imdbMetaScore.png")}
              />
              <Text style={{ color: "#E8E8E8", marginTop: 10 }}>Metascore</Text>
              <Text
                style={{ color: "#E8E8E8", fontSize: 11, color: "#AFAFAF" }}
              >
                46 critic reviews
              </Text>
            </View>
          </View>
        </View>

        <ScrollView horizontal={true}>
          <View style={{ backgroundColor: "#212121", marginTop: 15 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10
              }}
            >
              <Text style={{ fontSize: 22, color: "#E8E8E8", marginLeft: 10 }}>
                Top Billed Cast
              </Text>
              <Text
                style={{ color: "#0277BD", fontWeight: "bold", paddingTop: 10 }}
              >
                SEE ALL
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "#2A2A2A",
                  marginRight: 15,
                  marginLeft: 15
                }}
              >
                <Image
                  style={{ height: 200, width: 150 }}
                  source={require("./img/Matthew.jpg")}
                />
                <Text
                  style={{
                    color: "#E8E8E8",
                    fontSize: 13,
                    fontWeight: "bold",
                    paddingLeft: 5,
                    paddingTop: 10
                  }}
                >
                  Matthew McCon...
                </Text>
                <Text
                  style={{
                    color: "#E8E8E8",
                    fontSize: 12,
                    color: "#AFAFAF",
                    paddingLeft: 5,
                    paddingBottom: 5
                  }}
                >
                  Cooper
                </Text>
              </View>
              <View style={{ backgroundColor: "#2A2A2A", marginRight: 15 }}>
                <Image
                  style={{ height: 200, width: 150 }}
                  source={require("./img/Anne.jpg")}
                />
                <Text
                  style={{
                    color: "#E8E8E8",
                    fontSize: 13,
                    fontWeight: "bold",
                    paddingLeft: 5,
                    paddingTop: 10
                  }}
                >
                  Anne Hathaway
                </Text>
                <Text
                  style={{
                    color: "#E8E8E8",
                    fontSize: 12,
                    color: "#AFAFAF",
                    paddingLeft: 5
                  }}
                >
                  Cooper
                </Text>
              </View>
              <View style={{ backgroundColor: "#2A2A2A", marginRight: 15 }}>
                <Image
                  style={{ height: 200, width: 150 }}
                  source={require("./img/Jessica.jpg")}
                />
                <Text
                  style={{
                    color: "#E8E8E8",
                    fontSize: 13,
                    fontWeight: "bold",
                    paddingLeft: 5,
                    paddingTop: 10
                  }}
                >
                  Jessica Chastain
                </Text>

                <Text
                  style={{
                    color: "#E8E8E8",
                    fontSize: 12,
                    color: "#AFAFAF",
                    paddingLeft: 5
                  }}
                >
                  Murph
                </Text>
              </View>

              <View style={{ backgroundColor: "#2A2A2A", marginRight: 15 }}>
                <Image
                  style={{ height: 200, width: 150 }}
                  source={require("./img/Ellen.jpg")}
                />
                <Text
                  style={{
                    color: "#E8E8E8",
                    fontSize: 13,
                    fontWeight: "bold",
                    paddingLeft: 5,
                    paddingTop: 10
                  }}
                >
                  Ellen Burstyn
                </Text>
                <Text
                  style={{ fontSize: 12, color: "#AFAFAF", paddingLeft: 5 }}
                >
                  Murph (Older)
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ marginTop: 20, marginLeft: 15 }}>
          <Text style={{ color: "#E8E8E8", fontSize: 13, fontWeight: "bold" }}>
            Director
          </Text>
          <Text style={{ fontSize: 12, color: "#AFAFAF", fontWeight: "bold" }}>
            Christopher Nolan
          </Text>

          <Text
            style={{
              color: "#E8E8E8",
              fontSize: 13,
              fontWeight: "bold",
              marginTop: 15
            }}
          >
            Writer
          </Text>
          <Text style={{ fontSize: 12, color: "#AFAFAF", fontWeight: "bold" }}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default App;
