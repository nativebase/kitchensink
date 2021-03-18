import React from "react";
import {
  View,
  useColorModeValue,
  Text,
  AppBar,
  IconButton,
  Icon,
  VStack,
  useColorMode,
} from "native-base";

export const Wrapper = function ({ children, route, navigation }: any) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <View
      height="100%"
      width="100%"
      bg={useColorModeValue("gray.50", "gray.800")}
      safeArea
    >
      <AppBar style={{ backgroundColor: "transparent" }}>
        <AppBar.Left>
          <IconButton
            accessibilityLabel="Toggle Menu"
            pl={5}
            onPress={navigation.toggleDrawer}
            icon={<Icon name="md-menu" type="Ionicons" size={6} />}
          />
        </AppBar.Left>

        <AppBar.Content>
          {/* <VStack space={1}>
            <Text fontWeight="bold" fontSize="lg" isTruncated color="white">
              Title
            </Text>
            <Text isTruncated color="white">
              Subtitle
            </Text>
          </VStack> */}
        </AppBar.Content>

        <AppBar.Right space={2}>
          <IconButton
            pr={5}
            onPress={toggleColorMode}
            icon={
              <Icon
                name={colorMode === "dark" ? "md-sunny" : "md-moon"}
                type="Ionicons"
                size={6}
              />
            }
          />
        </AppBar.Right>
      </AppBar>
      <View
        display={"flex"}
        flex={1}
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
        bg={useColorModeValue("gray.50", "gray.800")}
        safeArea
      >
        {children}
      </View>
    </View>
  );
};
