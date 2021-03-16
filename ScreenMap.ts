import { AvatarBadge, AvatarGroup, ButtonGroup } from "native-base";
import {
  AccordionAccessingInternalState,
  AccordionDefaultIndex,
  AccordionExpandedStyle,
  AccordionMultiple,
  AccordionToggle,
  AccordionUsage,
  ActionsheetComposition,
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
  AvatarFallback,
  AvatarSizes,
  AvatarUsage,
  BadgeColor,
  BadgeUsage,
  BadgeVariants,
  BoxComposite,
  BoxRef,
  BoxUsage,
  BreadCrumbComponentSeparator,
  BreadCrumbComposition,
  BreadCrumbSeparators,
  BreadCrumbUsage,
  ButtonComposition,
  ButtonIcon,
  ButtonLoading,
  ButtonSize,
  ButtonUsage,
  ButtonVariant,
  ButtonWithRef,
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
  { screen: ActionsheetComposition, name: "actionsheetComposition" },

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
    screen: AvatarBadge,
  },
  {
    name: "avatarGroup",
    screen: AvatarGroup,
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
    screen: BoxRef,
    name: "boxRef",
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
    screen: ButtonSize,
    name: "buttonSize",
  },
  {
    screen: ButtonVariant,
    name: "buttonVariant",
  },
  {
    screen: ButtonLoading,
    name: "buttonLoading",
  },
  {
    screen: ButtonIcon,
    name: "buttonIcon",
  },
  {
    screen: ButtonGroup,
    name: "buttonGroupExample",
  },
  {
    screen: ButtonComposition,
    name: "buttonComposition",
  },
  {
    screen: ButtonWithRef,
    name: "buttonWithRef",
  },
];

export default ScreenMap;
