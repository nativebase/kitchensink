import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LandingStack } from "./LandingStack";
// import { Drawer } from "./Drawer";
import { Image } from "native-base";

// const NextAsset = require("../../assets/Forward.png");

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="landingStack">
      <Stack.Screen
        options={{ headerShown: false }}
        name="landingStack"
        component={LandingStack}
      />
      {/* <Stack.Screen
        options={{ headerShown: false }}
        name="authenticatedStack"
        component={Drawer}
      /> */}

      {/* <Stack.Screen
        name="AddNote"
        options={{
          title: "Add Note",
          headerLeft: BackButton,
          headerRight: () => (
            <NextButton
              buttonText="Add"
              rightIcon={
                <Image source={NextAsset} style={{ height: 20, width: 20 }} />
              }
              nextTo="AlertDetails"
            />
          ),
        }}
        component={AddNoteScreen}
      />
      <Stack.Screen
        name="SendMessage"
        options={{
          title: "Send a message",
          headerLeft: BackButton,
          headerRight: () => (
            <NextButton
              buttonText="Send"
              rightIcon={
                <Image source={NextAsset} style={{ height: 20, width: 20 }} />
              }
              nextTo="AlertDetails"
            />
          ),
        }}
        component={SendMessageScreen}
      /> */}
    </Stack.Navigator>
  );
}
