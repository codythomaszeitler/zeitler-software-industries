import { StatusBar } from "expo-status-bar";
import React from "react";
import { Icon } from "react-native-elements";
import { StyleSheet, Text, View, Image } from "react-native";

const FontFamily = "lucida grande";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignSelf: "stretch",
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            flex: 0,
            flexBasis: 5,
          }}
        ></View>
        <View
          style={{
            flex: 0,
            flexBasis: 60,
            backgroundColor: "#35b4de",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 1.5,
          }}
        >
          <View
            style={{
              flex: 0.05,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          ></View>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                flex: 1,
              }}
              source={require("./roofing-24px.png")}
            ></Image>
          </View>
          <View
            style={{
              flex: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                fontFamily: FontFamily,
                fontSize: 17,
                letterSpacing: 3,
              }}
            >
              ZEITLER SOFTWARE INDUSTRIES
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                flex: 1,
              }}
              source={require("./snippet_folder-24px.png")}
            ></Image>
          </View>
          <View
            style={{
              flex: 0.05,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          ></View>
        </View>
        <View
          style={{
            flex: 0,
            flexBasis: 5,
          }}
        ></View>

        <View
          style={{
            flex: 0,
            flexBasis: 500,
            borderColor: "black",
            borderWidth: 3,
            borderRadius: 5,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flex: 0,
              flexBasis: 10,
            }}
          ></View>

          <View
            style={{
              justifyContent: "flex-start",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily,
                fontSize: 18,
                letterSpacing : 5,
              }}
            >
              OUR PRODUCTS
            </Text>
          </View>
          <View
            style={{
              flex: 0,
              flexBasis: 10,
            }}
          ></View>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View
          style={{
            flex: 0,
            flexBasis: 5,
          }}
        ></View>
        <View
          style={{
            flex: 0,
            flexBasis: 500,
            borderColor: "black",
            borderWidth: 3,
            borderRadius: 5,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flex: 0,
              flexBasis: 10,
            }}
          ></View>

          <View
            style={{
              justifyContent: "flex-start",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily,
                fontSize: 18,
                letterSpacing : 5,
              }}
            >
              OUR BUSINESS MODEL
            </Text>
          </View>
          <View
            style={{
              flex: 0,
              flexBasis: 10,
            }}
          ></View>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />
          <View
            style={{
              flex: 0,
              flexBasis: 5,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              flex: 0,
            }}
          >
            <View
              style={{
                flex: 0,
                flexBasis: 15,
              }}
            ></View>
            <View>
              <Text
                style={{
                  fontFamily: FontFamily,
                  fontStyle: "italic",
                }}
              >
                An Agile Process
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0,
              flexBasis: 2.5,
            }}
          ></View>

          <Text
            style={{
              marginHorizontal: 50,
              fontFamily: FontFamily,
            }}
          >
            We want to deliver software that delights you. We want to ensure that its what you want, and what your business needs. 
            In order to ensure this, we will meet every week in order to ensure that we are moving in the right direction.  
            Our first goal is to create what is known as a minimum viable product, the bare minimum in order to accomplish your buisness process.
            From there, we will iterate every week and add on what's important to you!
            This will be charged on an hourly basis.
          </Text> 

          <View
            style={{
              flex: 0,
              flexBasis: 5,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              flex: 0,
            }}
          >
            <View
              style={{
                flex: 0,
                flexBasis: 15,
              }}
            ></View>
            <View>
              <Text
                style={{
                  fontFamily: FontFamily,
                  fontStyle: "italic",
                }}
              >
                All About You
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0,
              flexBasis: 5,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              flex: 0,
            }}
          >
            <View
              style={{
                flex: 0,
                flexBasis: 15,
              }}
            ></View>
            <View>
              <Text
                style={{
                  fontFamily: FontFamily,
                  fontStyle: "italic",
                }}
              >
                An Incremental Process
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 0,
            flexBasis: 500,
            borderColor: "black",
            borderWidth: 3,
            borderRadius: 5,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flex: 0,
              flexBasis: 10,
            }}
          ></View>

          <View
            style={{
              justifyContent: "flex-start",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily,
                fontSize: 18,
              }}
            >
              What it means for you!
            </Text>
          </View>
          <View
            style={{
              flex: 0,
              flexBasis: 10,
            }}
          ></View>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555",
    alignItems: "center",
    justifyContent: "center",
  },
});
