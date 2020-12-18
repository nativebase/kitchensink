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
  useColorModeValue,
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
  CollapseStack,
  ColumnStack,
  ContainerStack,
  DividerStack,
  FlexStack,
  FormControlStack,
  HeadingStack,
  HstackStack,
  IconStack,
  IconButtonStack,
  ImageStack,
  InputStack,
  KbdStack,
  LinkStack,
  ListStack,
  MenuStack,
  ModalStack,
  ModeStack,
  ThemeStack,
} from "./index";
// Drawer Needs stack navigator to display headers
// https://github.com/react-navigation/react-navigation/issues/1632
const DrawerNavigator = createDrawerNavigator();
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
  {
    name: "collapse",
    title: "Collapse",
    variants: [
      { title: "Collapse Usage", name: "collapseUsage" },
      {
        title: "Collapse Animation Duration (Web Support not Available)",
        name: "collapseDuration",
      },
      {
        title: "Collapse onAnimationStart and onAnimationEnd",
        name: "collapseCallbacks",
      },
    ],
    screen: CollapseStack,
    icon: "expand-more",
  },
  {
    name: "column",
    title: "Column",
    variants: [{ title: "Column Usage", name: "columnUsage" }],
    screen: ColumnStack,
    icon: "clear-all",
  },
  {
    name: "container",
    title: "Container",
    variants: [
      { title: "Container Usage", name: "containerUsage" },
      {
        title: "Container Centering Children",
        name: "containerCentering",
      },
    ],
    screen: ContainerStack,
    icon: "settings-overscan",
  },
  {
    name: "customtheme",
    title: "Custom Theme",
    variants: [{ title: "Custom Theme Example", name: "customThemeUsage" }],
    screen: ThemeStack,
    icon: "settings",
  },
  {
    name: "divider",
    title: "Divider",
    variants: [
      { title: "Divider Usage", name: "dividerUsage" },
      { title: "Divider Orientation", name: "dividerOrientation" },
      { title: "Divider Composition", name: "dividerComposition" },
    ],
    screen: DividerStack,
    icon: "remove",
  },
  {
    name: "flex",
    title: "Flex",
    variants: [
      { title: "Flex Usage", name: "flexUsage" },
      { title: "Flex Spacer Example", name: "flexSpacer" },
    ],
    screen: FlexStack,
    icon: "reorder",
  },
  {
    name: "formcontrol",
    title: "FormControl",
    variants: [
      { title: "FormControl Usage", name: "formControlUsage" },
      { title: "FormControl Formik Example", name: "formControlFormik" },
      { title: "FormControl Custom Style Example", name: "formControlStyle" },
    ],
    screen: FormControlStack,
    icon: "receipt",
  },
  {
    name: "heading",
    title: "Heading",
    variants: [
      { title: "Heading Usage", name: "headingUsage" },
      { title: "Heading Sizes", name: "headingSize" },
      { title: "Heading Truncate", name: "headingTruncate" },
      { title: "Heading Overriden Style", name: "headingOverriden" },
      { title: "Heading Composition", name: "headingComposition" },
    ],
    screen: HeadingStack,
    icon: "title",
  },
  {
    name: "hstack",
    title: "HStack",
    variants: [{ title: "HStack Usage", name: "hstackUsage" }],
    screen: HstackStack,
    icon: "pause",
  },
  {
    name: "icon",
    title: "Icon",
    variants: [
      { title: "Icon Usage", name: "iconUsage" },
      { title: "Custom Icon", name: "iconCustom" },
      { title: "Create Icon", name: "iconCreate" },
    ],
    screen: IconStack,
    icon: "warning",
  },
  {
    name: "iconbutton",
    title: "IconButton",
    variants: [
      { title: "Icon Button Usage", name: "iconButtonUsage" },
      { title: "Icon Button Sizes", name: "iconButtonSize" },
      { title: "Icon Button Variants", name: "iconButtonVariant" },
    ],
    screen: IconButtonStack,
    icon: "play-circle-filled",
  },
  {
    name: "image",
    title: "Image",
    variants: [
      { title: "Image Usage", name: "imageUsage" },
      { title: "Image Sizes", name: "imageSize" },
      { title: "Image Border Radius", name: "imageBorderRadius" },
      { title: "Image Fallback Support", name: "imageFallback" },
      { title: "Image With Ref", name: "imageRef" },
    ],
    screen: ImageStack,
    icon: "photo",
  },
  {
    name: "input",
    title: "Input",
    variants: [
      { title: "Input Usage", name: "inputUsage" },
      { title: "Input Sizes", name: "inputSize" },
      { title: "Input Variants", name: "inputVariant" },
      { title: "Input Addons", name: "inputAddon" },
      { title: "Input Elements", name: "inputElement" },
      { title: "Input Password", name: "inputPassword" },
      { title: "Value Controlled Input", name: "inputControlled" },
      { title: "Input Focus and Error borders", name: "inputFocusError" },
    ],
    screen: InputStack,
    icon: "edit",
  },
  {
    name: "kbd",
    title: "Kbd",
    variants: [{ title: "Kbd Usage", name: "kbdUsage" }],
    screen: KbdStack,
    icon: "explicit",
  },
  {
    name: "link",
    title: "Link",
    variants: [
      { title: "Link Usage", name: "linkUsage" },
      { title: "Link External", name: "linkExternal" },
      { title: "Link Not Underlined", name: "linkNotUnderlined" },
      { title: "Link custom onPress", name: "linkOnpress" },
      { title: "Link Composition", name: "linkComposite" },
    ],
    screen: LinkStack,
    icon: "open-in-new",
  },
  {
    name: "list",
    title: "List",
    variants: [
      { title: "List Usage", name: "listUsage" },
      { title: "List with Icons", name: "listIcons" },
    ],
    screen: ListStack,
    icon: "format-list-bulleted",
  },
  {
    name: "menu",
    title: "Menu",
    variants: [
      { title: "Menu Usage", name: "menuUsage" },
      { title: "Menu Group", name: "menuGroup" },
      { title: "Menu Options Group", name: "menuOptionGroup" },
    ],
    screen: MenuStack,
    icon: "menu",
  },
  {
    name: "modal",
    title: "Modal",
    variants: [
      { title: "Modal Usage", name: "modalUsage" },
      { title: "Modal Size", name: "modalSize" },
      { title: "Modal Ref Example", name: "modalRef" },
      { title: "Modal with Keyboard Avoid View", name: "modalKeyboardAvoid" },
    ],
    screen: ModalStack,
    icon: "picture-in-picture",
  },
  {
    name: "mode",
    title: "Mode",
    variants: [{ title: "Mode Usage", name: "modeUsage" }],
    screen: ModeStack,
    icon: "brightness-3",
  },
];

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const selectedIndex = props.state.index;

  return (
    <DrawerContentScrollView {...props}>
      <Box py={8} bg={useColorModeValue("gray.50", "gray.800")}>
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
                        <Icon
                          color={useColorModeValue("black", "gray.100")}
                          name={item.icon}
                          type="MaterialIcons"
                        />
                        <Text fontSize="lg">{item.title}</Text>
                      </HStack>
                    </Box>
                    <AccordionIcon
                      color={useColorModeValue("black", "gray.100")}
                    />
                  </AccordionButton>
                  <AccordionPanel borderWidth={0}>
                    {item.variants.map((variant, ind) => {
                      const isSelected = selectedIndex === ind;
                      return (
                        <Button
                          pl={8}
                          justifyContent="space-between"
                          onPress={() =>
                            props.navigation.navigate(item.name, {
                              screen: variant.name,
                            })
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

export function Drawer() {
  return (
    <DrawerNavigator.Navigator
      initialRouteName="accordion"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {routes.map((route) => {
        return (
          <DrawerNavigator.Screen
            name={route.name}
            key={route.name}
            component={route.screen}
          />
        );
      })}
    </DrawerNavigator.Navigator>
  );
}
