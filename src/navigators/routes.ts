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
    NumberInputStack,
    OverlayStack,
    PinInputStack,
    PopoverStack,
    ProgressStack,
    RadioStack,
    ResponsiveStack,
    RowStack,
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
    ThemeStack,
    ToastStack,
    TransitionStack,
    UseHookStack,
    UseMediaQueryStack,
    VStackStack,
    WrapStack,
    ZStackStack,
  } from "./index";
export const routes = [
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
    {
      name: "numberinput",
      title: "NumberInput",
      variants: [
        { title: "NumberInput Usage", name: "numberInputUsage" },
        { title: "NumberInput DefaultValue", name: "numberInputDefaultValue" },
        { title: "NumberInput Min Max", name: "numberInputMinMax" },
        { title: "NumberInput Steps", name: "numberInputSteps" },
        {
          title: "NumberInput FormControlled",
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
        { title: "Overlay Usage", name: "overlayUsage" },
        { title: "Overlay Customized", name: "overlayCustomized" },
      ],
      screen: OverlayStack,
      icon: "view-carousel",
    },
    {
      name: "pininput",
      title: "PinInput",
      variants: [
        { title: "PinInput Usage", name: "pinInputUsage" },
        { title: "PinInput Size", name: "pinInputSize" },
        { title: "PinInput DefaultValue", name: "pinInputDefaultValue" },
        { title: "PinInput Placeholder", name: "pinInputPlaceholder" },
        { title: "PinInput Manage Focus", name: "pinInputManageFocus" },
        { title: "PinInput Variants", name: "pinInputVariant" },
        { title: "PinInput FormControlled", name: "pinInputFormControlled" },
      ],
      screen: PinInputStack,
      icon: "fiber-pin",
    },
    {
      name: "popover",
      title: "Popover",
      variants: [
        { title: "Popover Usage", name: "popoverUsage" },
        { title: "Popover Size", name: "popoverSize" },
        { title: "Popover Focus on Open", name: "popoverRef" },
      ],
      screen: PopoverStack,
      icon: "filter-frames",
    },
    {
      name: "progress",
      title: "Progress",
      variants: [
        { title: "Progress Usage", name: "progressUsage" },
        { title: "Progress Color", name: "progressColor" },
        { title: "Progress Rounded", name: "progressRounded" },
        { title: "Progress Custom BgColor", name: "progressBgColor" },
        { title: "Progress Composition", name: "progressComposition" },
      ],
      screen: ProgressStack,
      icon: "timeline",
    },
    {
      name: "radio",
      title: "Radio",
      variants: [
        {
          title: "Controlled Radio",
          name: "radioControlled",
        },
        {
          title: "Uncontrolled Radio",
          name: "radioUncontrolled",
        },
        {
          title: "Radio Disabled",
          name: "radioDisabled",
        },
        {
          title: "Radio Invalid",
          name: "radioInvalid",
        },
        {
          title: "Radio Size",
          name: "radioSize",
        },
        {
          title: "Radio Color",
          name: "radioColor",
        },
        {
          title: "Radio Icon",
          name: "radioIcon",
        },
        {
          title: "Radio Form Controlled",
          name: "radioFormControlled",
        },
        {
          title: "Radio With Ref",
          name: "radioWithRef",
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
          title: "Responsive Basic",
          name: "responsiveUsage",
        },
        {
          title: "Responsive FontSize",
          name: "responsiveFontSize",
        },
        {
          title: "Responsive More",
          name: "responsiveMore",
        },
        {
          title: "Responsive Demo",
          name: "responsiveDemo",
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
          title: "Row Basic",
          name: "rowUsage",
        },
      ],
      screen: RowStack,
      icon: "more-horiz",
    },
    {
      name: "simplegrid",
      title: "SimpleGrid",
      variants: [
        {
          title: "SimpleGrid using Columns",
          name: "simpleGridColumns",
        },
        {
          title: "SimpleGrid using minChildWidth",
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
          title: "Skeleton Usage",
          name: "skeletonUsage",
        },
        {
          title: "Skeleton Wrapper",
          name: "skeletonWrapper",
        },
        {
          title: "Skeleton Circle",
          name: "skeletonCircle",
        },
        {
          title: "Skeleton Text",
          name: "skeletonText",
        },
        {
          title: "Skeleton Color",
          name: "skeletonColor",
        },
        {
          title: "Skeleton Loaded",
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
          title: "Slider Usage",
          name: "sliderUsage",
        },
        {
          title: "Slider Size",
          name: "sliderSize",
        },
        {
          title: "Slider Color",
          name: "sliderColor",
        },
        {
          title: "Slider Value",
          name: "sliderValue",
        },
        {
          title: "Slider Customized",
          name: "sliderCustomized",
        },
        {
          title: "Slider Form Controlled",
          name: "sliderFormControlled",
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
          title: "Snackbar Usage",
          name: "snackbarUsage",
        },
        {
          title: "Snackbar Hook",
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
          title: "Spinner Usage",
          name: "spinnerUsage",
        },
        {
          title: "Spinner Color",
          name: "spinnerColor",
        },
        {
          title: "Spinner Size",
          name: "spinnerSize",
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
          title: "Stack Usage",
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
          title: "Stat Default",
          name: "statDefault",
        },
        {
          title: "Stat with Indicator",
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
          title: "Switch Usage",
          name: "switchUsage",
        },
        {
          title: "Switch Sizes",
          name: "switchSize",
        },
        {
          title: "Switch BgColor",
          name: "switchBgColor",
        },
      ],
      screen: SwitchStack,
      icon: "toll",
    },
    {
      name: "tab",
      title: "Tab",
      variants: [
        {
          title: "Tab Usage",
          name: "tabsUsage",
        },
        {
          title: "Tab Composition",
          name: "tabsComposition",
        },
        {
          title: "Tab Variants",
          name: "tabsVariant",
        },
        {
          title: "Tab Alignment",
          name: "tabsAlignment",
        },
        {
          title: "Tab Colors",
          name: "tabsColor",
        },
        {
          title: "Tab Size",
          name: "tabsSize",
        },
        {
          title: "Tab isFitted",
          name: "tabsFitted",
        },
        {
          title: "Tab Bar Only",
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
          title: "Tag Usage",
          name: "tagUsage",
        },
        {
          title: "Tag Sizes",
          name: "tagSize",
        },
        {
          title: "Tag LeftIcon",
          name: "tagLeftIcon",
        },
        {
          title: "Tag RightIcon",
          name: "tagRightIcon",
        },
        {
          title: "Tag CloseButton",
          name: "tagCloseButton",
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
          title: "Text Usage",
          name: "textUsage",
        },
        {
          title: "Text Changing FontSize",
          name: "textFontSize",
        },
        {
          title: "Text Truncated",
          name: "textTruncated",
        },
        {
          title: "Text Overriden",
          name: "textUsage",
        },
        {
          title: "Text Nested",
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
          title: "TextArea Usage",
          name: "textAreaUsage",
        },
        {
          title: "TextArea Invalid and Disabled",
          name: "textAreaInvalidDisabled",
        },
        {
          title: "TextArea Sizes",
          name: "textAreaSize",
        },
        {
          title: "TextArea Value Controlled",
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
          title: "Toast Usage",
          name: "toastUsage",
        },
        {
          title: "Toast Position",
          name: "toastPosition",
        },
        {
          title: "Toast Offset",
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
          title: "Transition Fade",
          name: "transitionFade",
        },
        {
          title: "Transition Scale Fade",
          name: "transitionScaleFade",
        },
        {
          title: "Transition Slide",
          name: "transitionSlide",
        },
        {
          title: "Transition Slide Wrapped inside Parent",
          name: "transitionSlideWrapped",
        },
        {
          title: "Transition Slide Composition",
          name: "transitionSlideComposition",
        },
        {
          title: "Transition Slide Fade",
          name: "transitionSlideFade",
        },
      ],
      screen: TransitionStack,
      icon: "leak-add",
    },
    {
      name: "usebreakpointvalue",
      title: "useBreakpointValue",
      variants: [
        {
          title: "useBreakpointValue Usage",
          name: "useBreakpointValue",
        },
      ],
      screen: UseHookStack,
      icon: "linear-scale",
    },
    {
      name: "useclipboard",
      title: "useClipboard",
      variants: [
        {
          title: "useClipboard Usage",
          name: "useClipboard",
        },
      ],
      screen: UseHookStack,
      icon: "linear-scale",
    },
    {
      name: "usedisclose",
      title: "useDisclose",
      variants: [
        {
          title: "useDisclose Usage",
          name: "useDisclose",
        },
      ],
      screen: UseHookStack,
      icon: "linear-scale",
    },
    {
      name: "usemediaquery",
      title: "useMediaQuery",
      variants: [
        {
          title: "useMediaQuery MinWidth",
          name: "useMediaQueryMinWidth",
        },
        {
          title: "useMediaQuery MaxHeight",
          name: "useMediaQueryMaxHeight",
        },
        {
          title: "useMediaQuery Orientation",
          name: "useMediaQueryOrientation",
        },
      ],
      screen: UseMediaQueryStack,
      icon: "linear-scale",
    },
    {
      name: "vstack",
      title: "VStack",
      variants: [
        {
          title: "VStack Usage",
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
          title: "Wrap Usage",
          name: "wrapUsage",
        },
        {
          title: "Wrap Spacing",
          name: "wrapSpacing",
        },
        {
          title: "Wrap Alignment Align",
          name: "wrapAlignmentAlign",
        },
        {
          title: "Wrap Alignment Justify",
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
          title: "ZStack Usage",
          name: "zstackUsage",
        },
        {
          title: "ZStack items Centered",
          name: "zstackCentered",
        },
      ],
      screen: ZStackStack,
      icon: "nfc",
    },
  ];