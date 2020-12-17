import React from "react";
import { View } from "native-base";

export const Wrapper = function ({ children }: any) {
  return (
    <View
      flex={1}
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      bg="gray.50"
    >
      {children}
    </View>
  );
};
