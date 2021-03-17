import { ButtonGroup } from "native-base";
import {
  AccordionAccessingInternalState,
  AccordionDefaultIndex,
  AccordionExpandedStyle,
  AccordionMultiple,
  AccordionToggle,
  AccordionUsage,
  ActionsheetDisableOverlay,
  ActionsheetUsage,
  AlertComposition,
  AlertDialogTransition,
  AlertDialogUsage,
  AlertStatus,
  AlertUsage,
  AlertVariants,
  AppbarExamples,
  AspectRatioEmbedImage,
  AspectRatioUsage,
  AvatarBadgeExample,
  AvatarFallback,
  AvatarGroupExample,
  AvatarSizes,
  AvatarUsage,
  BadgeColor,
  BadgeUsage,
  BadgeVariants,
  BoxComposite,
  BoxCompositeCard,
  BoxCompositeShoeCard,
  BoxUsage,
  BreadCrumbComponentSeparator,
  BreadCrumbComposition,
  BreadCrumbSeparators,
  BreadCrumbUsage,
  ButtonComposition,
  ButtonGroupExample,
  ButtonIcon,
  ButtonLoading,
  ButtonSize,
  ButtonUsage,
  ButtonVariant,
  CenterSquareCircle,
  CenterUsage,
  CenterWithIcons,
  CheckboxColor,
  CheckboxControlled,
  CheckboxDisabled,
  CheckboxFormControlled,
  CheckboxGroupExample,
  CheckboxIcon,
  CheckboxInvalid,
  CheckboxSize,
  CheckboxUncontrolled,
  CheckboxUsage,
  CircularProgressColor,
  CircularProgressIndeterminate,
  CircularProgressLabelExample,
  CircularProgressMinMax,
  CircularProgressSize,
  CircularProgressThickness,
  CircularProgressTrackColor,
  CircularProgressUsage,
  CloseButtonSize,
  CloseButtonUsage,
  CodeColor,
  CodeUsage,
  CollapseCallbacks,
  CollapseDuration,
  CollapseUsage,
  ColumnUsage,
  ContainerCentering,
  ContainerUsage,
  DividerComposition,
  DividerOrientation,
  DividerUsage,
  FabBasic,
  FlexSpacer,
  FlexUsage,
  FormControlFormik,
  FormControlStyle,
  FormControlUsage,
  HeadingComposition,
  HeadingSize,
  HeadingTruncate,
  HeadingUsage,
  HStackUsage,
  IconButtonSize,
  IconButtonSVGIcon,
  IconButtonUsage,
  IconButtonVariant,
  IconCustom,
  IconUsage,
  ImageBR,
  ImageFallback,
  ImageSize,
  ImageUsage,
  InputAddons,
  InputControlled,
  InputElements,
  InputFocusError,
  InputPassword,
  InputSize,
  InputUsage,
  InputVariant,
  KbdUsage,
  LinkComposite,
  LinkExternal,
  LinkNotUnderlined,
  LinkOnpress,
  LinkUsage,
  ListBasic,
  ListIcons,
  ListOrdered,
  ListStyled,
  ListUnordered,
  ListVirtualized,
  MenuGroupExample,
  MenuOGExample,
  MenuUsage,
  ModalKeyboardAvoid,
  ModalRef,
  ModalSize,
  ModalUsage,
  ModeUsage,
  NumberInpDefaultValue,
  NumberInpFormControlled,
  NumberInpMinMax,
  NumberInpSteps,
  NumberInpUsage,
  OverlayCustomized,
  OverlayUsage,
  PinInputDefaultValue,
  PinInputFormControlled,
  PinInputManageFocus,
  PinInputPlaceholder,
  PinInputSize,
  PinInputUsage,
  PinInputVariant,
  PopoverRef,
  PopoverSize,
  PopoverUsage,
  ProgressBgColor,
  ProgressColor,
  ProgressComposition,
  ProgressRounded,
  ProgressUsage,
  RadioColor,
  RadioControlled,
  RadioDisabled,
  RadioFormControlled,
  RadioIcon,
  RadioInvalid,
  RadioSize,
  RadioUnControlled,
  ResponsiveMore,
  ResponsiveUsage,
  ResposiveFontSize,
  RowUsage,
  SelectBasic,
  SelectNative,
  SelectStyled,
  SimpleGridColumns,
  SimpleGridMinChildWidth,
  SkeletonColor,
  SkeletonLoaded,
  SkeletonUsage,
  SliderBasic,
  SliderColor,
  SliderCustomized,
  SliderFormControlled,
  SliderSize,
  SliderValue,
  SliderVertical,
  SnackbarHook,
  SnackbarUsage,
  SpinnerColor,
  SpinnerDuration,
  SpinnerSize,
  SpinnerUsage,
  SpinnerVariant,
  StackUsage,
  StatDefault,
  StatIndicator,
  SwitchAccessibility,
  SwitchBgColor,
  SwitchSize,
  SwitchUsage,
  TabsAlignment,
  TabsBarOnly,
  TabsColor,
  TabsComposition,
  TabsFitted,
  TabsSize,
  TabsUsage,
  TabsVariant,
  TagCustom,
  TagSize,
  TagUsage,
  TagVariantsExample,
  TagWithIconExample,
  TextAreaInvalidDisabled,
  TextAreaSize,
  TextAreaUsage,
  TextAreaValueControlled,
  TextBasic,
  TextFontSize,
  TextNested,
  TextOverriden,
  TextTruncated,
  ToastOffset,
  ToastPosition,
  ToastUsage,
  TransitionFade,
  TransitionScaleFade,
  TransitionSlide,
  TransitionSlideComposition,
  TransitionSlideFade,
  TransitionSlideWrapped,
  TypeaheadBasic,
  TypeaheadHook,
  TypeaheadRenderItem,
  ViewBasic,
  VStackUsage,
  WrapAlignmentAlign,
  WrapAlignmentJustify,
  WrapSpacing,
  WrapUsage,
  ZStackCentered,
  ZStackUsage,
} from "./src/screens";

const ScreenMap = [
  // AppBar
  { screen: AppbarExamples, name: "appbarExamples" },

  // Accordion
  {
    name: "accordionUsage",
    screen: AccordionUsage,
  },
  { name: "accordionMultiple", screen: AccordionMultiple },
  { name: "accordionDefaultIndex", screen: AccordionDefaultIndex },
  { name: "accordionToggle", screen: AccordionToggle },
  { name: "accordionExpandedStyle", screen: AccordionExpandedStyle },
  {
    name: "accordionAccessingInternalState",
    screen: AccordionAccessingInternalState,
  },

  // Action Sheet
  { screen: ActionsheetUsage, name: "actionsheetUsage" },
  {
    screen: ActionsheetDisableOverlay,
    name: "actionsheetDisableOverlay",
  },

  // Alert
  { name: "alertUsage", screen: AlertUsage },
  {
    name: "alertStatus",
    screen: AlertStatus,
  },
  {
    name: "alertVariants",
    screen: AlertVariants,
  },
  { name: "alertComposition", screen: AlertComposition },

  // Alert Dialog
  { name: "alertDialogUsage", screen: AlertDialogUsage },
  {
    name: "alertDialogTransition",
    screen: AlertDialogTransition,
  },

  // Aspect Ratio
  { name: "aspectRatioUsage", screen: AspectRatioUsage },
  {
    name: "aspectRatioEmbedImage",
    screen: AspectRatioEmbedImage,
  },

  // Avatar
  { name: "avatarUsage", screen: AvatarUsage },
  {
    name: "avatarSize",
    screen: AvatarSizes,
  },
  {
    name: "avatarFallback",
    screen: AvatarFallback,
  },
  {
    name: "avatarBadge",
    screen: AvatarBadgeExample,
  },
  {
    name: "avatarGroup",
    screen: AvatarGroupExample,
  },

  // Badge
  { screen: BadgeUsage, name: "badgeUsage" },
  {
    screen: BadgeColor,
    name: "badgeColor",
  },
  {
    screen: BadgeVariants,
    name: "badgeVariant",
  },

  // Box
  { screen: BoxUsage, name: "boxUsage" },
  {
    screen: BoxComposite,
    name: "boxComposite",
  },
  {
    screen: BoxCompositeCard,
    name: "boxCompositeCard",
  },
  {
    screen: BoxCompositeShoeCard,
    name: "boxCompositeShoeCard",
  },

  // Breadcrumb
  { screen: BreadCrumbUsage, name: "breadCrumbUsage" },
  {
    screen: BreadCrumbSeparators,
    name: "breadCrumbSeparator",
  },
  {
    screen: BreadCrumbComponentSeparator,
    name: "breadCrumbComponentSeparator",
  },
  {
    screen: BreadCrumbComposition,
    name: "breadCrumbComposition",
  },

  // Button
  { screen: ButtonUsage, name: "buttonUsage" },
  {
    name: "buttonSize",
    screen: ButtonSize,
  },
  {
    name: "buttonVariant",
    screen: ButtonVariant,
  },
  {
    name: "buttonLoading",
    screen: ButtonLoading,
  },
  {
    name: "buttonIcon",
    screen: ButtonIcon,
  },
  {
    name: "buttonGroupExample",
    screen: ButtonGroupExample,
  },
  {
    name: "buttonComposition",
    screen: ButtonComposition,
  },

  // Center
  {
    name: "centerUsage",
    screen: CenterUsage,
  },
  {
    name: "centerWithIcons",
    screen: CenterWithIcons,
  },
  {
    name: "centerSquareCircle",
    screen: CenterSquareCircle,
  },

  // Checkbox
  {
    name: "checkboxUsage",
    screen: CheckboxUsage,
  },
  {
    name: "checkboxControlled",
    screen: CheckboxControlled,
  },
  {
    name: "checkboxUncontrolled",
    screen: CheckboxUncontrolled,
  },
  {
    name: "checkboxDisabled",
    screen: CheckboxDisabled,
  },
  {
    name: "checkboxInvalid",
    screen: CheckboxInvalid,
  },
  {
    name: "checkboxSize",
    screen: CheckboxSize,
  },
  {
    name: "checkboxColor",
    screen: CheckboxColor,
  },
  {
    name: "checkboxIcon",
    screen: CheckboxIcon,
  },
  {
    name: "checkboxGroupExample",
    screen: CheckboxGroupExample,
  },
  {
    name: "checkboxFormControlled",
    screen: CheckboxFormControlled,
  },

  // Circular Progress
  {
    name: "circularProgressUsage",
    screen: CircularProgressUsage,
  },
  {
    name: "circularProgressSize",
    screen: CircularProgressSize,
  },
  {
    name: "circularProgressColor",
    screen: CircularProgressColor,
  },
  {
    name: "circularProgressThickness",
    screen: CircularProgressThickness,
  },
  {
    name: "circularProgressTrackColor",
    screen: CircularProgressTrackColor,
  },
  {
    name: "circularProgressLabel",
    screen: CircularProgressLabelExample,
  },
  {
    name: "circularProgressMinMax",
    screen: CircularProgressMinMax,
  },
  {
    name: "circularProgressIndeterminate",
    screen: CircularProgressIndeterminate,
  },

  // Close Button
  { name: "closeButtonUsage", screen: CloseButtonUsage },
  {
    name: "closeButtonSize",
    screen: CloseButtonSize,
  },

  // Code
  { name: "codeUsage", screen: CodeUsage },
  { name: "codeColor", screen: CodeColor },

  // Collapse
  {
    name: "collapseUsage",
    screen: CollapseUsage,
  },
  {
    name: "collapseDuration",
    screen: CollapseDuration,
  },
  {
    name: "collapseCallbacks",
    screen: CollapseCallbacks,
  },

  // Column
  {
    name: "columnUsage",
    screen: ColumnUsage,
  },

  // Container
  {
    name: "containerUsage",
    screen: ContainerUsage,
  },
  {
    name: "containerCentering",
    screen: ContainerCentering,
  },

  // Divider
  {
    name: "dividerUsage",
    screen: DividerUsage,
  },
  {
    name: "dividerOrientation",
    screen: DividerOrientation,
  },
  {
    name: "dividerComposition",
    screen: DividerComposition,
  },

  // Fab
  {
    name: "fabBasic",
    screen: FabBasic,
  },

  // Flex
  {
    name: "flexUsage",
    screen: FlexUsage,
  },
  {
    name: "flexSpacer",
    screen: FlexSpacer,
  },

  // Form control
  {
    name: "formControlUsage",
    screen: FormControlUsage,
  },
  {
    name: "formControlFormik",
    screen: FormControlFormik,
  },
  {
    name: "formControlStyle",
    screen: FormControlStyle,
  },

  // Heading
  {
    name: "headingUsage",
    screen: HeadingUsage,
  },
  {
    name: "headingSize",
    screen: HeadingSize,
  },
  {
    name: "headingTruncate",
    screen: HeadingTruncate,
  },
  {
    name: "headingComposition",
    screen: HeadingComposition,
  },

  // HStack
  {
    name: "hstackUsage",
    screen: HStackUsage,
  },

  // Icon
  {
    name: "iconUsage",
    screen: IconUsage,
  },
  {
    name: "iconCustom",
    screen: IconCustom,
  },

  // IconButton
  {
    name: "iconButtonUsage",
    screen: IconButtonUsage,
  },
  {
    name: "iconButtonSize",
    screen: IconButtonSize,
  },
  {
    name: "iconButtonSVGIcon",
    screen: IconButtonSVGIcon,
  },
  {
    name: "iconButtonVariant",
    screen: IconButtonVariant,
  },

  // Image
  {
    name: "imageUsage",
    screen: ImageUsage,
  },
  {
    name: "imageSize",
    screen: ImageSize,
  },
  {
    name: "imageBorderRadius",
    screen: ImageBR,
  },
  {
    name: "imageFallback",
    screen: ImageFallback,
  },

  // Input
  { name: "inputUsage", screen: InputUsage },
  { name: "inputSize", screen: InputSize },
  { name: "inputVariant", screen: InputVariant },
  { name: "inputAddon", screen: InputAddons },
  { name: "inputElement", screen: InputElements },
  { name: "inputPassword", screen: InputPassword },
  { name: "inputControlled", screen: InputControlled },
  { name: "inputFocusError", screen: InputFocusError },

  // Kbd
  { name: "kbdUsage", screen: KbdUsage },

  // Link
  { name: "linkUsage", screen: LinkUsage },
  { name: "linkExternal", screen: LinkExternal },
  { name: "linkNotUnderlined", screen: LinkNotUnderlined },
  { name: "linkOnpress", screen: LinkOnpress },
  { name: "linkComposite", screen: LinkComposite },

  // List
  { name: "listBisic", screen: ListBasic },
  { name: "listOrdered", screen: ListOrdered },
  { name: "listUnordered", screen: ListUnordered },
  { name: "listStyled", screen: ListStyled },
  { name: "listIcons", screen: ListIcons },
  { name: "listVirtualized", screen: ListVirtualized },

  // Menu
  { name: "menuUsage", screen: MenuUsage },
  { name: "menuGroup", screen: MenuGroupExample },
  { name: "menuOptionGroup", screen: MenuOGExample },

  // Model
  { name: "modalUsage", screen: ModalUsage },
  { name: "modalSize", screen: ModalSize },
  { name: "modalRef", screen: ModalRef },
  { name: "modalKeyboardAvoid", screen: ModalKeyboardAvoid },

  // Mode
  { name: "modeUsage", screen: ModeUsage },

  // Number Input
  { name: "numberInputUsage", screen: NumberInpUsage },
  { name: "numberInputDefaultValue", screen: NumberInpDefaultValue },
  { name: "numberInputMinMax", screen: NumberInpMinMax },
  { name: "numberInputSteps", screen: NumberInpSteps },
  {
    name: "numberInputFormControlled",
    screen: NumberInpFormControlled,
  },

  // Overlay
  { name: "overlayUsage", screen: OverlayUsage },
  { name: "overlayCustomized", screen: OverlayCustomized },

  // Pin Input
  { name: "pinInputUsage", screen: PinInputUsage },
  { name: "pinInputSize", screen: PinInputSize },
  { name: "pinInputDefaultValue", screen: PinInputDefaultValue },
  { name: "pinInputPlaceholder", screen: PinInputPlaceholder },
  { name: "pinInputManageFocus", screen: PinInputManageFocus },
  { name: "pinInputVariant", screen: PinInputVariant },
  { name: "pinInputFormControlled", screen: PinInputFormControlled },

  // Popver
  { name: "popoverUsage", screen: PopoverUsage },
  { name: "popoverSize", screen: PopoverSize },
  { name: "popoverRef", screen: PopoverRef },

  // Progress
  { name: "progressUsage", screen: ProgressUsage },
  { name: "progressColor", screen: ProgressColor },
  { name: "progressRounded", screen: ProgressRounded },
  { name: "progressBgColor", screen: ProgressBgColor },
  { name: "progressComposition", screen: ProgressComposition },

  // Radio
  {
    name: "radioControlled",
    screen: RadioControlled,
  },
  {
    name: "radioUncontrolled",
    screen: RadioUnControlled,
  },
  {
    name: "radioDisabled",
    screen: RadioDisabled,
  },
  {
    name: "radioInvalid",
    screen: RadioInvalid,
  },
  {
    name: "radioSize",
    screen: RadioSize,
  },
  {
    name: "radioColor",
    screen: RadioColor,
  },
  {
    name: "radioIcon",
    screen: RadioIcon,
  },
  {
    name: "radioFormControlled",
    screen: RadioFormControlled,
  },

  // Responsive
  {
    name: "responsiveUsage",
    screen: ResponsiveUsage,
  },
  {
    name: "responsiveFontSize",
    screen: ResposiveFontSize,
  },
  {
    name: "responsiveMore",
    screen: ResponsiveMore,
  },

  // Row
  {
    name: "rowUsage",
    screen: RowUsage,
  },

  // Select
  {
    name: "selectBasic",
    screen: SelectBasic,
  },
  {
    name: "selectNative",
    screen: SelectNative,
  },
  {
    name: "selectStyled",
    screen: SelectStyled,
  },

  // Simple Grid
  {
    name: "simpleGridColumns",
    screen: SimpleGridColumns,
  },
  {
    name: "simpleGridMinChildWidth",
    screen: SimpleGridMinChildWidth,
  },

  // Skeleton
  {
    name: "skeletonUsage",
    screen: SkeletonUsage,
  },
  {
    name: "skeletonColor",
    screen: SkeletonColor,
  },
  {
    name: "skeletonLoaded",
    screen: SkeletonLoaded,
  },

  // Slider
  {
    name: "sliderUsage",
    screen: SliderBasic,
  },
  {
    name: "sliderSize",
    screen: SliderSize,
  },
  {
    name: "sliderColor",
    screen: SliderColor,
  },
  {
    name: "sliderValue",
    screen: SliderValue,
  },
  {
    name: "sliderCustomized",
    screen: SliderCustomized,
  },
  {
    name: "sliderFormControlled",
    screen: SliderFormControlled,
  },
  {
    name: "sliderVertical",
    screen: SliderVertical,
  },

  // Snackbar
  {
    name: "snackbarUsage",
    screen: SnackbarUsage,
  },
  {
    name: "snackbarHook",
    screen: SnackbarHook,
  },

  // Spinner
  {
    name: "spinnerUsage",
    screen: SpinnerUsage,
  },
  {
    name: "spinnerColor",
    screen: SpinnerColor,
  },
  {
    name: "spinnerSize",
    screen: SpinnerSize,
  },
  {
    name: "spinnerDuration",
    screen: SpinnerDuration,
  },
  {
    name: "spinnerVariant",
    screen: SpinnerVariant,
  },

  // Stack
  {
    name: "stackUsage",
    screen: StackUsage,
  },

  // Stat
  {
    name: "statDefault",
    screen: StatDefault,
  },
  {
    name: "statIndicator",
    screen: StatIndicator,
  },

  // Switch
  {
    name: "switchUsage",
    screen: SwitchUsage,
  },
  {
    name: "switchSize",
    screen: SwitchSize,
  },
  {
    name: "switchBgColor",
    screen: SwitchBgColor,
  },
  {
    name: "switchAccessibility",
    screen: SwitchAccessibility,
  },

  // Tabs
  {
    name: "tabsUsage",
    screen: TabsUsage,
  },
  {
    name: "tabsComposition",
    screen: TabsComposition,
  },
  {
    name: "tabsVariant",
    screen: TabsVariant,
  },
  {
    name: "tabsAlignment",
    screen: TabsAlignment,
  },
  {
    name: "tabsColor",
    screen: TabsColor,
  },
  {
    name: "tabsSize",
    screen: TabsSize,
  },
  {
    name: "tabsFitted",
    screen: TabsFitted,
  },
  {
    name: "tabsBarOnly",
    screen: TabsBarOnly,
  },

  // Tag
  {
    name: "tagUsage",
    screen: TagUsage,
  },
  {
    name: "tagSize",
    screen: TagSize,
  },
  {
    name: "tagVariants",
    screen: TagVariantsExample,
  },
  {
    name: "tagWithIcon",
    screen: TagWithIconExample,
  },
  {
    name: "tagCustom",
    screen: TagCustom,
  },

  // Text
  {
    name: "textUsage",
    screen: TextBasic,
  },
  {
    name: "textFontSize",
    screen: TextFontSize,
  },
  {
    name: "textTruncated",
    screen: TextTruncated,
  },
  {
    name: "textOverriden",
    screen: TextOverriden,
  },
  {
    name: "textNested",
    screen: TextNested,
  },

  // TextArea
  {
    name: "textAreaUsage",
    screen: TextAreaUsage,
  },
  {
    name: "textAreaInvalidDisabled",
    screen: TextAreaInvalidDisabled,
  },
  {
    name: "textAreaSize",
    screen: TextAreaSize,
  },
  {
    name: "textAreaValueControlled",
    screen: TextAreaValueControlled,
  },

  // Toast
  {
    name: "toastUsage",
    screen: ToastUsage,
  },
  {
    name: "toastPosition",
    screen: ToastPosition,
  },
  {
    name: "toastOffset",
    screen: ToastOffset,
  },

  // Transition
  {
    name: "transitionFade",
    screen: TransitionFade,
  },
  {
    name: "transitionScaleFade",
    screen: TransitionScaleFade,
  },
  {
    name: "transitionSlide",
    screen: TransitionSlide,
  },
  {
    name: "transitionSlideWrapped",
    screen: TransitionSlideWrapped,
  },
  {
    name: "transitionSlideComposition",
    screen: TransitionSlideComposition,
  },
  {
    name: "transitionSlideFade",
    screen: TransitionSlideFade,
  },

  // Typeahead
  {
    name: "typeaheadBasic",
    screen: TypeaheadBasic,
  },
  {
    name: "typeaheadHook",
    screen: TypeaheadHook,
  },
  {
    name: "typeaheadRenderItem",
    screen: TypeaheadRenderItem,
  },

  // View
  {
    name: "viewBasic",
    screen: ViewBasic,
  },

  // VStack
  {
    name: "vstackUsage",
    screen: VStackUsage,
  },

  // Wrap
  {
    name: "wrapUsage",
    screen: WrapUsage,
  },
  {
    name: "wrapSpacing",
    screen: WrapSpacing,
  },
  {
    name: "wrapAlignmentAlign",
    screen: WrapAlignmentAlign,
  },
  {
    name: "wrapAlignmentJustify",
    screen: WrapAlignmentJustify,
  },

  // ZStack
  {
    name: "zstackUsage",
    screen: ZStackUsage,
  },
  {
    name: "zstackCentered",
    screen: ZStackCentered,
  },
];

export default ScreenMap;
