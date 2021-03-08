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
  FabStack,
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
  NumberInputStack,
  OverlayStack,
  PinInputStack,
  PopoverStack,
  ProgressStack,
  RadioStack,
  ResponsiveStack,
  RowStack,
  SelectStack,
  SimpleGridStack,
  SkeletonStack,
  SliderStack,
  SnackbarStack,
  SpinnerStack,
  StackStack,
  StatStack,
  SwitchStack,
  TabsStack,
  TagStack,
  TextAreaStack,
  TextStack,
  ToastStack,
  TransitionStack,
  TypeaheadStack,
  ViewStack,
  VStackStack,
  WrapStack,
  ZStackStack,
} from "./NBComponentStack";
export const routes = [
  {
    name: "appbar",
    title: "App Bar",
    variants: [{ title: "Basic", name: "appbarExamples" }],
    screen: AppbarStack,
    icon: "credit-card",
  },
  {
    name: "accordion",
    title: "Accordion",
    variants: [
      { title: "Basic", name: "accordionUsage" },
      { title: "Multiple", name: "accordionMultiple" },
      { title: "DefaultIndex", name: "accordionDefaultIndex" },
      { title: "Toggle", name: "accordionToggle" },
      { title: "Expanded Style", name: "accordionExpandedStyle" },
      {
        title: "Accessing Internal State",
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
      { title: "Basic", name: "actionsheetUsage" },
      {
        title: "DisableOverlay",
        name: "actionsheetDisableOverlay",
      },
    ],
    screen: ActionsheetStack,
    icon: "more-vert",
  },
  {
    name: "alert",
    title: "Alert",
    variants: [
      { title: "Basic", name: "alertUsage" },
      {
        title: "Status",
        name: "alertStatus",
      },
      {
        title: "Variants",
        name: "alertVariants",
      },
      { title: "Composition", name: "alertComposition" },
    ],
    screen: AlertStack,
    icon: "alarm",
  },
  {
    name: "alertdialog",
    title: "Alert Dialog",
    variants: [
      { title: "Basic", name: "alertDialogUsage" },
      {
        title: "Transition",
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
      { title: "Basic", name: "aspectRatioUsage" },
      {
        title: "Embed Image",
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
      { title: "Basic", name: "avatarUsage" },
      {
        title: "Size",
        name: "avatarSize",
      },
      {
        title: "Fallback",
        name: "avatarFallback",
      },
      {
        title: "Badge",
        name: "avatarBadge",
      },
      {
        title: "Group",
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
      { title: "Basic", name: "badgeUsage" },
      {
        title: "Color",
        name: "badgeColor",
      },
      {
        title: "Variants",
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
      { title: "Basic", name: "boxUsage" },
      {
        title: "Composite",
        name: "boxComposite",
      },
    ],
    screen: BoxStack,
    icon: "crop-square",
  },
  {
    name: "breadcrumb",
    title: "BreadCrumb",
    variants: [
      { title: "Basic", name: "breadCrumbUsage" },
      {
        title: "Separator",
        name: "breadCrumbSeparator",
      },
      {
        title: "Component Separator",
        name: "breadCrumbComponentSeparator",
      },
      {
        title: "Composition",
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
      { title: "Basic", name: "buttonUsage" },
      {
        title: "Sizes",
        name: "buttonSize",
      },
      {
        title: "Variants",
        name: "buttonVariant",
      },
      {
        title: "Loading",
        name: "buttonLoading",
      },
      {
        title: "Icons",
        name: "buttonIcon",
      },
      {
        title: "Group",
        name: "buttonGroupExample",
      },
      {
        title: "Composition",
        name: "buttonComposition",
      },
    ],
    screen: ButtonStack,
    icon: "drag-handle",
  },
  {
    name: "center",
    title: "Center",
    variants: [
      { title: "Basic", name: "centerUsage" },
      {
        title: "With Icons",
        name: "centerWithIcons",
      },
      {
        title: "Square Circle",
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
      { title: "Basic", name: "checkboxUsage" },
      {
        title: "Controlled",
        name: "checkboxControlled",
      },
      {
        title: "Uncontrolled",
        name: "checkboxUncontrolled",
      },
      {
        title: "Disabled",
        name: "checkboxDisabled",
      },
      {
        title: "Invalid",
        name: "checkboxInvalid",
      },
      {
        title: "Size",
        name: "checkboxSize",
      },
      {
        title: "Color",
        name: "checkboxColor",
      },
      {
        title: "Icon",
        name: "checkboxIcon",
      },
      {
        title: "Group",
        name: "checkboxGroupExample",
      },
      {
        title: "Form Controlled",
        name: "checkboxFormControlled",
      },
    ],
    screen: CheckboxStack,
    icon: "check-box",
  },
  {
    name: "circularProgress",
    title: "Circular Progress",
    variants: [
      { title: "Basic", name: "circularProgressUsage" },
      {
        title: "Size",
        name: "circularProgressSize",
      },
      {
        title: "Colors",
        name: "circularProgressColor",
      },
      {
        title: "Thickness",
        name: "circularProgressThickness",
      },
      {
        title: "Track Color",
        name: "circularProgressTrackColor",
      },
      {
        title: "Label",
        name: "circularProgressLabel",
      },
      {
        title: "Min and Max",
        name: "circularProgressMinMax",
      },
      {
        title: "Indeterminate",
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
      { title: "Basic", name: "closeButtonUsage" },
      {
        title: "Size",
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
      { title: "Basic", name: "codeUsage" },
      {
        title: "Colors",
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
      { title: "Basic", name: "collapseUsage" },
      {
        title: "Animation Duration (Web Support not Available)",
        name: "collapseDuration",
      },
      {
        title: "onAnimationStart and onAnimationEnd",
        name: "collapseCallbacks",
      },
    ],
    screen: CollapseStack,
    icon: "expand-more",
  },
  {
    name: "column",
    title: "Column",
    variants: [{ title: "Basic", name: "columnUsage" }],
    screen: ColumnStack,
    icon: "clear-all",
  },
  {
    name: "container",
    title: "Container",
    variants: [
      { title: "Basic", name: "containerUsage" },
      {
        title: "Centering Children",
        name: "containerCentering",
      },
    ],
    screen: ContainerStack,
    icon: "settings-overscan",
  },
  {
    name: "divider",
    title: "Divider",
    variants: [
      { title: "Basic", name: "dividerUsage" },
      { title: "Orientation", name: "dividerOrientation" },
      { title: "Composition", name: "dividerComposition" },
    ],
    screen: DividerStack,
    icon: "remove",
  },
  {
    name: "fab",
    title: "Fab",
    variants: [{ title: "Basic", name: "fabBasic" }],
    screen: FabStack,
    icon: "play-circle-filled",
  },
  {
    name: "flex",
    title: "Flex",
    variants: [
      { title: "Basic", name: "flexUsage" },
      { title: "Spacer Example", name: "flexSpacer" },
    ],
    screen: FlexStack,
    icon: "reorder",
  },
  {
    name: "formcontrol",
    title: "FormControl",
    variants: [
      { title: "Basic", name: "formControlUsage" },
      { title: "Formik Example", name: "formControlFormik" },
      { title: "Custom Style Example", name: "formControlStyle" },
    ],
    screen: FormControlStack,
    icon: "receipt",
  },
  {
    name: "heading",
    title: "Heading",
    variants: [
      { title: "Basic", name: "headingUsage" },
      { title: "Sizes", name: "headingSize" },
      { title: "Truncate", name: "headingTruncate" },
      { title: "Composition", name: "headingComposition" },
    ],
    screen: HeadingStack,
    icon: "title",
  },
  {
    name: "hstack",
    title: "HStack",
    variants: [{ title: "Basic", name: "hstackUsage" }],
    screen: HstackStack,
    icon: "pause",
  },
  {
    name: "icon",
    title: "Icon",
    variants: [
      { title: "Basic", name: "iconUsage" },
      { title: "Custom Icon", name: "iconCustom" },
    ],
    screen: IconStack,
    icon: "warning",
  },
  {
    name: "iconbutton",
    title: "IconButton",
    variants: [
      { title: "Basic", name: "iconButtonUsage" },
      { title: "Sizes", name: "iconButtonSize" },
      { title: "SVG Icon", name: "iconButtonSVGIcon" },
      { title: "Variants", name: "iconButtonVariant" },
    ],
    screen: IconButtonStack,
    icon: "play-circle-filled",
  },
  {
    name: "image",
    title: "Image",
    variants: [
      { title: "Basic", name: "imageUsage" },
      { title: "Sizes", name: "imageSize" },
      { title: "Border Radius", name: "imageBorderRadius" },
      { title: "Fallback Support", name: "imageFallback" },
    ],
    screen: ImageStack,
    icon: "photo",
  },
  {
    name: "input",
    title: "Input",
    variants: [
      { title: "Basic", name: "inputUsage" },
      { title: "Sizes", name: "inputSize" },
      { title: "Variants", name: "inputVariant" },
      { title: "Addons", name: "inputAddon" },
      { title: "Elements", name: "inputElement" },
      { title: "Password", name: "inputPassword" },
      { title: "Controlled", name: "inputControlled" },
      { title: "Focus and Error borders", name: "inputFocusError" },
    ],
    screen: InputStack,
    icon: "edit",
  },
  {
    name: "kbd",
    title: "Kbd",
    variants: [{ title: "Basic", name: "kbdUsage" }],
    screen: KbdStack,
    icon: "explicit",
  },
  {
    name: "link",
    title: "Link",
    variants: [
      { title: "Basic", name: "linkUsage" },
      { title: "External", name: "linkExternal" },
      { title: "Not Underlined", name: "linkNotUnderlined" },
      { title: "custom onPress", name: "linkOnpress" },
      { title: "Composition", name: "linkComposite" },
    ],
    screen: LinkStack,
    icon: "open-in-new",
  },
  {
    name: "list",
    title: "List",
    variants: [
      { title: "Basic", name: "listBisic" },
      { title: "Ordered", name: "listOrdered" },
      { title: "Unordered", name: "listUnordered" },
      { title: "Styled", name: "listStyled" },
      { title: "with Icons", name: "listIcons" },
      { title: "Virtualized", name: "listVirtualized" },
    ],
    screen: ListStack,
    icon: "format-list-bulleted",
  },
  {
    name: "menu",
    title: "Menu",
    variants: [
      { title: "Basic", name: "menuUsage" },
      { title: "Group", name: "menuGroup" },
      { title: "Options Group", name: "menuOptionGroup" },
    ],
    screen: MenuStack,
    icon: "menu",
  },
  {
    name: "modal",
    title: "Modal",
    variants: [
      { title: "Basic", name: "modalUsage" },
      { title: "Size", name: "modalSize" },
      { title: "Ref Example", name: "modalRef" },
      { title: "with Keyboard Avoid View", name: "modalKeyboardAvoid" },
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
  {
    name: "numberinput",
    title: "NumberInput",
    variants: [
      { title: "Basic", name: "numberInputUsage" },
      { title: "DefaultValue", name: "numberInputDefaultValue" },
      { title: "Min Max", name: "numberInputMinMax" },
      { title: "Steps", name: "numberInputSteps" },
      {
        title: "FormControlled",
        name: "numberInputFormControlled",
      },
    ],
    screen: NumberInputStack,
    icon: "unfold-more",
  },
  {
    name: "overlay",
    title: "Overlay",
    variants: [
      { title: "Basic", name: "overlayUsage" },
      { title: "Customized", name: "overlayCustomized" },
    ],
    screen: OverlayStack,
    icon: "view-carousel",
  },
  {
    name: "pininput",
    title: "PinInput",
    variants: [
      { title: "Basic", name: "pinInputUsage" },
      { title: "Size", name: "pinInputSize" },
      { title: "DefaultValue", name: "pinInputDefaultValue" },
      { title: "Placeholder", name: "pinInputPlaceholder" },
      { title: "Manage Focus", name: "pinInputManageFocus" },
      { title: "Variants", name: "pinInputVariant" },
      { title: "FormControlled", name: "pinInputFormControlled" },
    ],
    screen: PinInputStack,
    icon: "fiber-pin",
  },
  {
    name: "popover",
    title: "Popover",
    variants: [
      { title: "Basic", name: "popoverUsage" },
      { title: "Size", name: "popoverSize" },
      { title: "Focus on Open", name: "popoverRef" },
    ],
    screen: PopoverStack,
    icon: "filter-frames",
  },
  {
    name: "progress",
    title: "Progress",
    variants: [
      { title: "Basic", name: "progressUsage" },
      { title: "Color", name: "progressColor" },
      { title: "Rounded", name: "progressRounded" },
      { title: "Custom BgColor", name: "progressBgColor" },
      { title: "Composition", name: "progressComposition" },
    ],
    screen: ProgressStack,
    icon: "timeline",
  },
  {
    name: "radio",
    title: "Radio",
    variants: [
      {
        title: "Controlled",
        name: "radioControlled",
      },
      {
        title: "Uncontrolled",
        name: "radioUncontrolled",
      },
      {
        title: "Disabled",
        name: "radioDisabled",
      },
      {
        title: "Invalid",
        name: "radioInvalid",
      },
      {
        title: "Size",
        name: "radioSize",
      },
      {
        title: "Color",
        name: "radioColor",
      },
      {
        title: "Icon",
        name: "radioIcon",
      },
      {
        title: "Form Controlled",
        name: "radioFormControlled",
      },
    ],
    screen: RadioStack,
    icon: "radio-button-checked",
  },
  {
    name: "responsive",
    title: "Responsive",
    variants: [
      {
        title: "Basic",
        name: "responsiveUsage",
      },
      {
        title: "FontSize",
        name: "responsiveFontSize",
      },
      {
        title: "More",
        name: "responsiveMore",
      },
    ],
    screen: ResponsiveStack,
    icon: "border-clear",
  },
  {
    name: "row",
    title: "Row",
    variants: [
      {
        title: "Basic",
        name: "rowUsage",
      },
    ],
    screen: RowStack,
    icon: "more-horiz",
  },
  {
    name: "select",
    title: "Select",
    variants: [
      {
        title: "Basic",
        name: "selectBasic",
      },
      {
        title: "Native",
        name: "selectNative",
      },
      {
        title: "Styled",
        name: "selectStyled",
      },
    ],
    screen: SelectStack,
    icon: "more-horiz",
  },
  {
    name: "simplegrid",
    title: "SimpleGrid",
    variants: [
      {
        title: "using Columns",
        name: "simpleGridColumns",
      },
      {
        title: "using minChildWidth",
        name: "simpleGridMinChildWidth",
      },
    ],
    screen: SimpleGridStack,
    icon: "view-comfy",
  },
  {
    name: "skeleton",
    title: "Skeleton",
    variants: [
      {
        title: "Basic",
        name: "skeletonUsage",
      },
      {
        title: "Color",
        name: "skeletonColor",
      },
      {
        title: "Loaded",
        name: "skeletonLoaded",
      },
    ],
    screen: SkeletonStack,
    icon: "texture",
  },
  {
    name: "slider",
    title: "Slider",
    variants: [
      {
        title: "Basic",
        name: "sliderUsage",
      },
      {
        title: "Size",
        name: "sliderSize",
      },
      {
        title: "Color",
        name: "sliderColor",
      },
      {
        title: "Value",
        name: "sliderValue",
      },
      {
        title: "Customized",
        name: "sliderCustomized",
      },
      {
        title: "Form Controlled",
        name: "sliderFormControlled",
      },
      {
        title: "Vertical",
        name: "sliderVertical",
      },
    ],
    screen: SliderStack,
    icon: "tune",
  },
  {
    name: "snackbar",
    title: "Snackbar",
    variants: [
      {
        title: "Basic",
        name: "snackbarUsage",
      },
      {
        title: "Hook",
        name: "snackbarHook",
      },
    ],
    screen: SnackbarStack,
    icon: "payment",
  },
  {
    name: "spinner",
    title: "Spinner",
    variants: [
      {
        title: "Basic",
        name: "spinnerUsage",
      },
      {
        title: "Color",
        name: "spinnerColor",
      },
      {
        title: "Size",
        name: "spinnerSize",
      },
      {
        title: "Duration",
        name: "spinnerDuration",
      },
      {
        title: "Variant",
        name: "spinnerVariant",
      },
    ],
    screen: SpinnerStack,
    icon: "donut-large",
  },
  {
    name: "stack",
    title: "Stack",
    variants: [
      {
        title: "Basic",
        name: "stackUsage",
      },
    ],
    screen: StackStack,
    icon: "clear-all",
  },
  {
    name: "stat",
    title: "Stat",
    variants: [
      {
        title: "Default",
        name: "statDefault",
      },
      {
        title: "with Indicator",
        name: "statIndicator",
      },
    ],
    screen: StatStack,
    icon: "assessment",
  },
  {
    name: "switch",
    title: "Switch",
    variants: [
      {
        title: "Basic",
        name: "switchUsage",
      },
      {
        title: "Sizes",
        name: "switchSize",
      },
      {
        title: "BgColor",
        name: "switchBgColor",
      },
      {
        title: "Accessibility",
        name: "switchAccessibility",
      },
    ],
    screen: SwitchStack,
    icon: "toll",
  },
  {
    name: "tab",
    title: "Tabs",
    variants: [
      {
        title: "Basic",
        name: "tabsUsage",
      },
      {
        title: "Composition",
        name: "tabsComposition",
      },
      {
        title: "Variants",
        name: "tabsVariant",
      },
      {
        title: "Alignment",
        name: "tabsAlignment",
      },
      {
        title: "Colors",
        name: "tabsColor",
      },
      {
        title: "Size",
        name: "tabsSize",
      },
      {
        title: "isFitted",
        name: "tabsFitted",
      },
      {
        title: "Bar Only",
        name: "tabsBarOnly",
      },
    ],
    screen: TabsStack,
    icon: "view-compact",
  },
  {
    name: "tag",
    title: "Tag",
    variants: [
      {
        title: "Basic",
        name: "tagUsage",
      },
      {
        title: "Sizes",
        name: "tagSize",
      },
      {
        title: "variants",
        name: "tagVariants",
      },
      {
        title: "withIcon",
        name: "tagWithIcon",
      },
      {
        title: "Custom Tag",
        name: "tagCustom",
      },
    ],
    screen: TagStack,
    icon: "label",
  },
  {
    name: "text",
    title: "Text",
    variants: [
      {
        title: "Basic",
        name: "textUsage",
      },
      {
        title: "Changing FontSize",
        name: "textFontSize",
      },
      {
        title: "Truncated",
        name: "textTruncated",
      },
      {
        title: "Overriden",
        name: "textOverriden",
      },
      {
        title: "Nested",
        name: "textNested",
      },
    ],
    screen: TextStack,
    icon: "assignment",
  },
  {
    name: "textarea",
    title: "TextArea",
    variants: [
      {
        title: "Basic",
        name: "textAreaUsage",
      },
      {
        title: "Invalid and Disabled",
        name: "textAreaInvalidDisabled",
      },
      {
        title: "Sizes",
        name: "textAreaSize",
      },
      {
        title: "Value Controlled",
        name: "textAreaValueControlled",
      },
    ],
    screen: TextAreaStack,
    icon: "library-books",
  },
  {
    name: "toast",
    title: "Toast",
    variants: [
      {
        title: "Basic",
        name: "toastUsage",
      },
      {
        title: "Position",
        name: "toastPosition",
      },
      {
        title: "Offset",
        name: "toastOffset",
      },
    ],
    screen: ToastStack,
    icon: "remove-from-queue",
  },
  {
    name: "transition",
    title: "Transition",
    variants: [
      {
        title: "Fade",
        name: "transitionFade",
      },
      {
        title: "Scale Fade",
        name: "transitionScaleFade",
      },
      {
        title: "Slide",
        name: "transitionSlide",
      },
      {
        title: "Slide Wrapped inside Parent",
        name: "transitionSlideWrapped",
      },
      {
        title: "Slide Composition",
        name: "transitionSlideComposition",
      },
      {
        title: "Slide Fade",
        name: "transitionSlideFade",
      },
    ],
    screen: TransitionStack,
    icon: "leak-add",
  },
  {
    name: "typeahead",
    title: "Typeahead",
    variants: [
      {
        title: "Basic",
        name: "typeaheadBasic",
      },
      {
        title: "Hook",
        name: "typeaheadHook",
      },
      {
        title: "Render Item",
        name: "typeaheadRenderItem",
      },
    ],
    screen: TypeaheadStack,
    icon: "edit",
  },

  // NOTE: These examples are removed becasue they're functional not visual
  // {
  //   name: "usebreakpointvalue",
  //   title: "useBreakpointValue",
  //   variants: [
  //     {
  //       title: "useBreakpointValue Usage",
  //       name: "useBreakpointValue",
  //     },
  //   ],
  //   screen: UseHookStack,
  //   icon: "linear-scale",
  // },
  // {
  //   name: "useclipboard",
  //   title: "useClipboard",
  //   variants: [
  //     {
  //       title: "Basic",
  //       name: "useClipboard",
  //     },
  //   ],
  //   screen: UseHookStack,
  //   icon: "linear-scale",
  // },
  // {
  //   name: "usedisclose",
  //   title: "useDisclose",
  //   variants: [
  //     {
  //       title: "Basic",
  //       name: "useDisclose",
  //     },
  //   ],
  //   screen: UseHookStack,
  //   icon: "linear-scale",
  // },
  // {
  //   name: "usemediaquery",
  //   title: "useMediaQuery",
  //   variants: [
  //     {
  //       title: "MinWidth",
  //       name: "useMediaQueryMinWidth",
  //     },
  //     {
  //       title: "MaxHeight",
  //       name: "useMediaQueryMaxHeight",
  //     },
  //     {
  //       title: "Orientation",
  //       name: "useMediaQueryOrientation",
  //     },
  //   ],
  //   screen: UseMediaQueryStack,
  //   icon: "linear-scale",
  // },
  {
    name: "view",
    title: "View",
    variants: [
      {
        title: "Basic",
        name: "viewBasic",
      },
    ],
    screen: ViewStack,
    icon: "crop-square",
  },
  {
    name: "vstack",
    title: "VStack",
    variants: [
      {
        title: "Basic",
        name: "vstackUsage",
      },
    ],
    screen: VStackStack,
    icon: "layers",
  },
  {
    name: "wrap",
    title: "Wrap",
    variants: [
      {
        title: "Basic",
        name: "wrapUsage",
      },
      {
        title: "Spacing",
        name: "wrapSpacing",
      },
      {
        title: "Alignment Align",
        name: "wrapAlignmentAlign",
      },
      {
        title: "Alignment Justify",
        name: "wrapAlignmentJustify",
      },
    ],
    screen: WrapStack,
    icon: "fullscreen",
  },
  {
    name: "zstack",
    title: "ZStack",
    variants: [
      {
        title: "Basic",
        name: "zstackUsage",
      },
      {
        title: "items Centered",
        name: "zstackCentered",
      },
    ],
    screen: ZStackStack,
    icon: "nfc",
  },
];
