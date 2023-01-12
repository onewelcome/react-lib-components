/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

/* Components */
export { BaseStyling } from "./_BaseStyling_/BaseStyling";
export { Button, Props as ButtonProps } from "./Button/Button";
export { Breadcrumbs, Props as BreadcrumbsProps } from "./Breadcrumbs/Breadcrumbs";
export { ContextMenu, Props as ContextMenuProps } from "./ContextMenu/ContextMenu";
export { ContextMenuItem, Props as ContextMenuItemProps } from "./ContextMenu/ContextMenuItem";
export { Link, Props as LinkProps, AnchorType } from "./Link/Link";
export { Icon, Icons, Props as IconProps } from "./Icon/Icon";
export { IconButton, Props as IconButtonProps } from "./Button/IconButton";
export { Tab, Props as TabProps } from "./Tabs/Tab";
export { Tabs, Props as TabsProps } from "./Tabs/Tabs";
export { TextEllipsis, Props as TextEllipsisProps } from "./TextEllipsis/TextEllipsis";
export { Tile, Props as TileProps } from "./Tiles/Tile";
export { Tiles, Props as TilesProps } from "./Tiles/Tiles";
export { Tooltip, Props as TooltipProps } from "./Tooltip/Tooltip";
export { Typography, Variant, Props as TypographyProps } from "./Typography/Typography";
export { ProgressBar, Props as ProgressBarProps } from "./ProgressBar/ProgressBar";
export { Skeleton, Props as SkeletonProps } from "./Skeleton/Skeleton";
export { StatusIndicator, Props as StatusIndicatorProps } from "./StatusIndicator/StatusIndicator";
export {
  Pagination,
  Props as PaginationProps,
  PageChangeLabels,
  PaginationTranslations,
  PageSize
} from "./Pagination/Pagination";

/* Utils */
export { useRepeater } from "./hooks/useRepeater";
export { useDebouncedCallback } from "./hooks/useDebouncedCallback";
export { generateID, debounce, throttle } from "./util/helper";

/* Notifications */
export { Modal, Props as ModalProps } from "./Notifications/Modal/Modal";
export { useSnackbar } from "./Notifications/Snackbar/useSnackbar";
export {
  Dialog,
  Props as DialogProps,
  Action as DialogAction
} from "./Notifications/Dialog/Dialog";
export {
  DiscardChangesModal,
  Props as DiscardChangesModalProps
} from "./Notifications/DiscardChangesModal/DiscardChangesModal";
export {
  ModalActions,
  Props as ModalActionsProps
} from "./Notifications/Modal/ModalActions/ModalActions";
export {
  ModalContent,
  Props as ModalContentProps
} from "./Notifications/Modal/ModalContent/ModalContent";
export {
  ModalHeader,
  Props as ModalHeaderProps
} from "./Notifications/Modal/ModalHeader/ModalHeader";
export {
  SlideInModal,
  Props as SlideInModalProps
} from "./Notifications/SlideInModal/SlideInModal";
export {
  SnackbarProvider,
  Props as SnackbarProviderProps
} from "./Notifications/Snackbar/SnackbarProvider/SnackbarProvider";

/** Form components */
export { Checkbox, Props as CheckboxProps } from "./Form/Checkbox/Checkbox";
export { Fieldset, Props as FieldsetProps } from "./Form/Fieldset/Fieldset";
export { Form, Props as FormProps } from "./Form/Form";
export { FormControl, Props as FormControlProps } from "./Form/FormControl/FormControl";
export { FormGroup, Props as FormGroupProps } from "./Form/FormGroup/FormGroup";
export { FormHelperText, Props as FormHelperTextProps } from "./Form/FormHelperText/FormHelperText";
export { Input, Props as InputProps, Type as InputType } from "./Form/Input/Input";
export { InputWrapper, Props as InputWrapperProps } from "./Form/Wrapper/InputWrapper/InputWrapper";
export { Label, Props as LabelProps } from "./Form/Label/Label";
export { Option, Props as OptionProps } from "./Form/Select/Option";
export { Radio, Props as RadioProps } from "./Form/Radio/Radio";
export { RadioWrapper, Props as RadioWrapperProps } from "./Form/Wrapper/RadioWrapper/RadioWrapper";
export { Select, Props as SelectProps } from "./Form/Select/Select";
export { Textarea, Props as TextareaProps } from "./Form/Textarea/Textarea";
export { Toggle, Props as ToggleProps } from "./Form/Toggle/Toggle";
export {
  CheckboxWrapper,
  Props as CheckboxWrapperProps
} from "./Form/Wrapper/CheckboxWrapper/CheckboxWrapper";
export {
  TextareaWrapper,
  Props as TextareaWrapperProps
} from "./Form/Wrapper/TextareaWrapper/TextareaWrapper";
export {
  SelectWrapper,
  Props as SelectWrapperProps
} from "./Form/Wrapper/SelectWrapper/SelectWrapper";

/** Wizard */
export { Wizard, Props as WizardProps } from "./Wizard/Wizard";
export { WizardActions, Props as WizardActionsProps } from "./Wizard/WizardActions/WizardActions";
export { WizardSteps, Props as WizardStepsProps } from "./Wizard/WizardSteps/WizardSteps";
export {
  BaseWizardSteps,
  Props as BaseWizardStepsProps,
  Step as WizardStep
} from "./Wizard/BaseWizardSteps/BaseWizardSteps";

/** DataGrid */
export { HeaderCell } from "./DataGrid/datagrid.interfaces";
export { DataGrid, Props as DataGridProps } from "./DataGrid/DataGrid";
export { DataGridRow, Props as DataGridRowProps } from "./DataGrid/DataGridBody/DataGridRow";
export { DataGridCell, Props as DataGridCellProps } from "./DataGrid/DataGridBody/DataGridCell";
export { Banner, Props as BannerProps } from "./Notifications/Banner/Banner";
