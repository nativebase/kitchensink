import React from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {
  Box,
  VStack,
  Text,
  Button,
  HStack,
  Heading,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "native-base";
import {
  AppbarStack,
  AccordionStack,
  ActionsheetStack,
  AlertStack,
  AlertDialogStack,
  AspectRatioStack,
  AvatarStack,
  BadgeStack,
  BoxStack,
  BreadCrumbStack,
  ButtonStack,
  CenterStack,
  CheckboxStack,
  CircularProgressStack,
  CloseButtonStack,
  CodeStack,
} from "./index";
// Drawer Needs stack navigator to display headers
// https://github.com/react-navigation/react-navigation/issues/1632
const routes = [
  {
    name: "appbar",
    title: "App Bar",
    variants: [{ title: "Examples", name: "appbarExamples" }],
    screen: AppbarStack,
    icon: "credit-card",
  },
  {
    name: "accordion",
    title: "Accordion",
    variants: [
      { title: "Accordion Usage", name: "accordionUsage" },
      { title: "Accordion Multiple", name: "accordionMultiple" },
      { title: "Accordion DefaultIndex", name: "accordionDefaultIndex" },
      { title: "Accordion Toggle", name: "accordionToggle" },
      { title: "Accordion Expanded Style", name: "accordionExpandedStyle" },
      {
        title: "Accordion Accessing Internal State",
        name: "accordionAccessingInternalState",
      },
    ],
    screen: AccordionStack,
    icon: "menu",
  },
  {
    name: "actionsheet",
    title: "Actionsheet",
    variants: [
      { title: "Actionsheet Usage", name: "actionsheetUsage" },
      {
        title: "Actionsheet DisableOverlay",
        name: "actionsheetDisableOverlay",
      },
      { title: "Actionsheet Composition", name: "actionsheetComposition" },
    ],
    screen: ActionsheetStack,
    icon: "more-vert",
  },
  {
    name: "alert",
    title: "Alert",
    variants: [
      { title: "Alert Usage", name: "alertUsage" },
      {
        title: "Alert Status",
        name: "alertStatus",
      },
      {
        title: "Alert Variants",
        name: "alertVariants",
      },
      { title: "Alert Composition", name: "alertComposition" },
    ],
    screen: AlertStack,
    icon: "alarm",
  },
  {
    name: "alertdialog",
    title: "Alert Dialog",
    variants: [
      { title: "AlertDialog Usage", name: "alertDialogUsage" },
      {
        title: "AlertDialog Transition",
        name: "alertDialogTransition",
      },
    ],
    screen: AlertDialogStack,
    icon: "assignment-late",
  },
  {
    name: "aspectratio",
    title: "AspectRatio",
    variants: [
      { title: "AspectRatio Usage", name: "aspectRatioUsage" },
      {
        title: "AspectRatio Embed Image",
        name: "aspectRatioEmbedImage",
      },
    ],
    screen: AspectRatioStack,
    icon: "aspect-ratio",
  },
  {
    name: "avatar",
    title: "Avatar",
    variants: [
      { title: "Avatar Usage", name: "avatarUsage" },
      {
        title: "Avatar Size",
        name: "avatarSize",
      },
      {
        title: "Avatar Fallback",
        name: "avatarFallback",
      },
      {
        title: "Avatar Badge",
        name: "avatarBadge",
      },
      {
        title: "Avatar Group",
        name: "avatarGroup",
      },
    ],
    screen: AvatarStack,
    icon: "person",
  },
  {
    name: "badge",
    title: "Badge",
    variants: [
      { title: "Badge Usage", name: "badgeUsage" },
      {
        title: "Badge Color",
        name: "badgeColor",
      },
      {
        title: "Badge Variants",
        name: "badgeVariant",
      },
    ],
    screen: BadgeStack,
    icon: "looks-one",
  },
  {
    name: "box",
    title: "Box",
    variants: [
      { title: "Box Usage", name: "boxUsage" },
      {
        title: "Box Composite",
        name: "boxComposite",
      },
      {
        title: "Box with Refs",
        name: "boxRef",
      },
    ],
    screen: BoxStack,
    icon: "crop-square",
  },
  {
    name: "breadcrumb",
    title: "BreadCrumb",
    variants: [
      { title: "BreadCrumb Usage", name: "breadCrumbUsage" },
      {
        title: "BreadCrumb Separator",
        name: "breadCrumbSeparator",
      },
      {
        title: "BreadCrumb Component Separator",
        name: "breadCrumbComponentSeparator",
      },
      {
        title: "BreadCrumb Composition",
        name: "breadCrumbComposition",
      },
    ],
    screen: BreadCrumbStack,
    icon: "power-input",
  },
  {
    name: "button",
    title: "Button",
    variants: [
      { title: "Button Usage", name: "buttonUsage" },
      {
        title: "Button Sizes",
        name: "buttonSize",
      },
      {
        title: "Button Variants",
        name: "buttonVariant",
      },
      {
        title: "Button Loading",
        name: "buttonLoading",
      },
      {
        title: "Button Icons",
        name: "buttonIcon",
      },
      {
        title: "Button Group",
        name: "buttonGroupExample",
      },
      {
        title: "Button Composition",
        name: "buttonComposition",
      },
      {
        title: "Button With Ref",
        name: "buttonWithRef",
      },
    ],
    screen: ButtonStack,
    icon: "drag-handle",
  },
  {
    name: "center",
    title: "Center",
    variants: [
      { title: "Center Usage", name: "centerUsage" },
      {
        title: "Center With Icons",
        name: "centerWithIcons",
      },
      {
        title: "Center Square Circle",
        name: "centerSquareCircle",
      },
    ],
    screen: CenterStack,
    icon: "fullscreen",
  },
  {
    name: "checkbox",
    title: "Checkbox",
    variants: [
      { title: "Checkbox Usage", name: "checkboxUsage" },
      {
        title: "Controlled Checkbox",
        name: "checkboxControlled",
      },
      {
        title: "Uncontrolled Checkbox",
        name: "checkboxUncontrolled",
      },
      {
        title: "Checkbox Disabled",
        name: "checkboxDisabled",
      },
      {
        title: "Checkbox Invalid",
        name: "checkboxInvalid",
      },
      {
        title: "Checkbox Size",
        name: "checkboxSize",
      },
      {
        title: "Checkbox Color",
        name: "checkboxColor",
      },
      {
        title: "Checkbox Icon",
        name: "checkboxIcon",
      },
      {
        title: "Checkbox Group",
        name: "checkboxGroupExample",
      },
      {
        title: "Checkbox Form Controlled",
        name: "checkboxFormControlled",
      },
      {
        title: "Checkbox With Ref",
        name: "checkboxWithRef",
      },
    ],
    screen: CheckboxStack,
    icon: "check-box",
  },
  {
    name: "circularProgress",
    title: "Circular Progress",
    variants: [
      { title: "CircularProgress Usage", name: "circularProgressUsage" },
      {
        title: "CircularProgress Size",
        name: "circularProgressSize",
      },
      {
        title: "CircularProgress Colors",
        name: "circularProgressColor",
      },
      {
        title: "CircularProgress Thickness",
        name: "circularProgressThickness",
      },
      {
        title: "CircularProgress Track Color",
        name: "circularProgressTrackColor",
      },
      {
        title: "CircularProgress Label",
        name: "circularProgressLabel",
      },
      {
        title: "CircularProgress Min and Max",
        name: "circularProgressMinMax",
      },
      {
        title: "CircularProgress Indeterminate",
        name: "circularProgressIndeterminate",
      },
    ],
    screen: CircularProgressStack,
    icon: "data-usage",
  },
  {
    name: "closeButton",
    title: "CloseButton",
    variants: [
      { title: "CloseButton Usage", name: "closeButtonUsage" },
      {
        title: "CloseButton Size",
        name: "closeButtonSize",
      },
    ],
    screen: CloseButtonStack,
    icon: "close",
  },
  {
    name: "code",
    title: "Code",
    variants: [
      { title: "Code Usage", name: "codeUsage" },
      {
        title: "Code Colors",
        name: "codeColor",
      },
    ],
    screen: CodeStack,
    icon: "code",
  },
];

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  return (
    <DrawerContentScrollView {...props}>
      <Box py={8}>
        <VStack>
          <Box pl={8}>
            <Heading>Nativebase V3</Heading>
          </Box>

          <Box pl={8}>
            <Heading>KitchenSink</Heading>
          </Box>
          <Box p={4} />

          {routes.map((item, index) => {
            return (
              <Accordion>
                <AccordionItem>
                  <AccordionButton>
                    <Box>
                      <HStack
                        key={index}
                        py={2}
                        pl={0}
                        space={3}
                        alignItems="center"
                      >
                        <Icon name={item.icon} type="MaterialIcons" />
                        <Text fontSize="lg">{item.title}</Text>
                      </HStack>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel borderWidth={0}>
                    {item.variants.map((variant, ind) => {
                      return (
                        <Button
                          pl={8}
                          justifyContent="space-between"
                          onPress={() =>
                            props.navigation.navigate(variant.name)
                          }
                          variant="ghost"
                        >
                          <Text fontSize="lg">{variant.title}</Text>
                        </Button>
                      );
                    })}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            );
          })}
        </VStack>
      </Box>
    </DrawerContentScrollView>
  );
}
