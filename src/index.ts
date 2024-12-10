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
export { BaseStyling } from "./components/_BaseStyling_/BaseStyling";
export type { Props as BaseStylingProps } from "./components/_BaseStyling_/BaseStyling";
export { Button } from "./components/Button/Button";
export type { Props as ButtonProps } from "./components/Button/Button";
export { Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";
export type { Props as BreadcrumbsProps } from "./components/Breadcrumbs/Breadcrumbs";
export { ContextMenu } from "./components/ContextMenu/ContextMenu";
export type { Props as ContextMenuProps } from "./components/ContextMenu/ContextMenu";
export { ContextMenuItem } from "./components/ContextMenu/ContextMenuItem";
export type { Props as ContextMenuItemProps } from "./components/ContextMenu/ContextMenuItem";
export { Link } from "./components/Link/Link";
export type { Props as LinkProps, AnchorType } from "./components/Link/Link";
export { Icon, Icons } from "./components/Icon/Icon";
export type { Props as IconProps } from "./components/Icon/Icon";
export { IconButton } from "./components/Button/IconButton";
export type { Props as IconButtonProps } from "./components/Button/IconButton";
export { Tab } from "./components/Tabs/Tab";
export type { Props as TabProps } from "./components/Tabs/Tab";
export { Tabs } from "./components/Tabs/Tabs";
export type { Props as TabsProps } from "./components/Tabs/Tabs";
export { Tag } from "./components/Tag/Tag";
export type { Props as TagProps } from "./components/Tag/Tag";
export { TextEllipsis } from "./components/TextEllipsis/TextEllipsis";
export type { Props as TextEllipsisProps } from "./components/TextEllipsis/TextEllipsis";
export { Tile } from "./components/Tiles/Tile";
export type { Props as TileProps } from "./components/Tiles/Tile";
export { Tiles } from "./components/Tiles/Tiles";
export type { Props as TilesProps } from "./components/Tiles/Tiles";
export { Tooltip } from "./components/Tooltip/Tooltip";
export type { Props as TooltipProps } from "./components/Tooltip/Tooltip";
export { Typography } from "./components/Typography/Typography";
export type { Props as TypographyProps, Variant } from "./components/Typography/Typography";
export { ProgressBar } from "./components/ProgressBar/ProgressBar";
export type { Props as ProgressBarProps } from "./components/ProgressBar/ProgressBar";
export { Skeleton } from "./components/Skeleton/Skeleton";
export type { Props as SkeletonProps } from "./components/Skeleton/Skeleton";
export { Spinner } from "./components/Spinner/Spinner";
export type { SpinnerProps } from "./components/Spinner/Spinner";
export { Stepper } from "./components/Stepper/Stepper";
export type { Props as StepperProps } from "./components/Stepper/Stepper";
export type { Props as StepProps } from "./components/Stepper/Step";
export { Pagination } from "./components/Pagination/Pagination";
export type {
  Props as PaginationProps,
  PageChangeLabels,
  PaginationTranslations,
  PageSize
} from "./components/Pagination/Pagination";

/* Utils */
export { useRepeater } from "./hooks/useRepeater";
export * from "./hooks/useClickOutside";
export { useFullHeightCollapse } from "./hooks/useFullHeightCollapse";
export { usePosition } from "./hooks/usePosition";
export type { Placement } from "./hooks/usePosition";
export { useDebouncedCallback } from "./hooks/useDebouncedCallback";
export { useUploadFile } from "./hooks/useUploadFile";
export type {
  UploadResponseStatus,
  UploadResponseJson,
  UploadResponseType,
  UseUploadFileCallback,
  UploadFileRequestParams
} from "./hooks/useUploadFile";
export { generateID, debounce, throttle } from "./util/helper";

/* Notifications */
export { Modal } from "./components/Notifications/Modal/Modal";
export type { Props as ModalProps } from "./components/Notifications/Modal/Modal";
export { useAlert } from "./components/Notifications/Alert/useAlert";
export { AlertProvider } from "./components/Notifications/Alert/AlertProvider/AlertProvider";
export {
  AlertItem,
  Props as AlertItemProps
} from "./components/Notifications/Alert/AlertItem/AlertItem";
export type { Props as AlertProviderProps } from "./components/Notifications/Alert/AlertProvider/AlertProvider";
export { Dialog } from "./components/Notifications/Dialog/Dialog";
export type {
  Props as DialogProps,
  Action as DialogAction
} from "./components/Notifications/Dialog/Dialog";
export { DiscardChangesModal } from "./components/Notifications/DiscardChangesModal/DiscardChangesModal";
export type { Props as DiscardChangesModalProps } from "./components/Notifications/DiscardChangesModal/DiscardChangesModal";
export { ModalActions } from "./components/Notifications/Modal/ModalActions/ModalActions";
export type { Props as ModalActionsProps } from "./components/Notifications/Modal/ModalActions/ModalActions";
export { ModalContent } from "./components/Notifications/Modal/ModalContent/ModalContent";
export type { Props as ModalContentProps } from "./components/Notifications/Modal/ModalContent/ModalContent";
export { ModalHeader } from "./components/Notifications/Modal/ModalHeader/ModalHeader";
export type { Props as ModalHeaderProps } from "./components/Notifications/Modal/ModalHeader/ModalHeader";
export {
  NotificationProvider,
  useNotificationContext
} from "./components/Notifications/NotificationProvider/NotificationContext";
export type { Props as NotificationProviderProps } from "./components/Notifications/NotificationProvider/NotificationContext";
export type {
  AddNotification,
  RemoveNotification,
  Translations
} from "./components/Notifications/NotificationProvider/notification.interfaces";
export { SlideInModal } from "./components/Notifications/SlideInModal/SlideInModal";
export type { Props as SlideInModalProps } from "./components/Notifications/SlideInModal/SlideInModal";

/** SideSheet */
export { SideSheet } from "./components/Notifications/SideSheet/SideSheet";
export type { Props as SideSheetProps } from "./components/Notifications/SideSheet/SideSheet";
export { SideSheetActions } from "./components/Notifications/SideSheet/SideSheetActions/SideSheetActions";
export type { Props as SideSheetActionsProps } from "./components/Notifications/SideSheet/SideSheetActions/SideSheetActions";
export { SideSheetContent } from "./components/Notifications/SideSheet/SideSheetContent/SideSheetContent";
export type { Props as SideSheetContentProps } from "./components/Notifications/SideSheet/SideSheetContent/SideSheetContent";
export { SideSheetHeader } from "./components/Notifications/SideSheet/SideSheetHeader/SideSheetHeader";
export type { Props as SideSheetHeaderProps } from "./components/Notifications/SideSheet/SideSheetHeader/SideSheetHeader";

/** Form components */
export { Checkbox } from "./components/Form/Checkbox/Checkbox";
export type { Props as CheckboxProps } from "./components/Form/Checkbox/Checkbox";
export { Fieldset } from "./components/Form/Fieldset/Fieldset";
export type { Props as FieldsetProps } from "./components/Form/Fieldset/Fieldset";
export { Form } from "./components/Form/Form";
export type { Props as FormProps } from "./components/Form/Form";
export { FormControl } from "./components/Form/FormControl/FormControl";
export type { Props as FormControlProps } from "./components/Form/FormControl/FormControl";
export { FormGroup } from "./components/Form/FormGroup/FormGroup";
export type { Props as FormGroupProps } from "./components/Form/FormGroup/FormGroup";
export { FormHelperText } from "./components/Form/FormHelperText/FormHelperText";
export type { Props as FormHelperTextProps } from "./components/Form/FormHelperText/FormHelperText";
export { Input } from "./components/Form/Input/Input";
export type { Props as InputProps, Type as InputType } from "./components/Form/Input/Input";
export { InputWrapper } from "./components/Form/Wrapper/InputWrapper/InputWrapper";
export type { Props as InputWrapperProps } from "./components/Form/Wrapper/InputWrapper/InputWrapper";
export { Label } from "./components/Form/Label/Label";
export type { Props as LabelProps } from "./components/Form/Label/Label";
export { Radio } from "./components/Form/Radio/Radio";
export type { Props as RadioProps } from "./components/Form/Radio/Radio";
export { RadioWrapper } from "./components/Form/Wrapper/RadioWrapper/RadioWrapper";
export type { Props as RadioWrapperProps } from "./components/Form/Wrapper/RadioWrapper/RadioWrapper";
export { Select } from "./components/Form/Select/SingleSelect/Select";
export { MultiSelect } from "./components/Form/Select/MultiSelect/MultiSelect";
export type {
  SingleSelectProps,
  MultiSelectProps,
  SingleSelectProps as SelectProps
} from "./components/Form/Select/Select.interfaces";
export { Option } from "./components/Form/Select/SingleSelect/Option";
export type { Props as OptionProps } from "./components/Form/Select/SingleSelect/Option";
export { MultiOption } from "./components/Form/Select/MultiSelect/MultiOption";
export type { Props as MultiOptionProps } from "./components/Form/Select/MultiSelect/MultiOption";
export { Textarea } from "./components/Form/Textarea/Textarea";
export type { Props as TextareaProps } from "./components/Form/Textarea/Textarea";
export { Toggle } from "./components/Form/Toggle/Toggle";
export type { Props as ToggleProps } from "./components/Form/Toggle/Toggle";
export { CheckboxWrapper } from "./components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper";
export type { Props as CheckboxWrapperProps } from "./components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper";
export { TextareaWrapper } from "./components/Form/Wrapper/TextareaWrapper/TextareaWrapper";
export type { Props as TextareaWrapperProps } from "./components/Form/Wrapper/TextareaWrapper/TextareaWrapper";
export { SelectWrapper } from "./components/Form/Wrapper/SelectWrapper/SelectWrapper";
export type { Props as SelectWrapperProps } from "./components/Form/Wrapper/SelectWrapper/SelectWrapper";

/* FileUpload */
export { FileUpload } from "./components/Form/FileUpload/FileUpload";
export type { Props as FileUploadProps, FileType } from "./components/Form/FileUpload/FileUpload";
export { FILE_ACTION, ACTION_STATUS } from "./components/Form/FileUpload/FileItem/FileItem";

export { MultiSelectWrapper } from "./components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper";
export type { Props as MultiSelectWrapperProps } from "./components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper";
export { useMultiSelect } from "./components/Form/Select/MultiSelect/useMultiSelect";
export { ContentHeader } from "./components/Layout/ContentHeader/ContentHeader";
export type { Props as ContentHeaderProps } from "./components/Layout/ContentHeader/ContentHeader";
export { FormStepper } from "./components/Layout/FormPage/FormWithStepper/FormStepper/FormStepper";
export type {
  Props as FormStepperProps,
  FormStepProps
} from "./components/Layout/FormPage/FormWithStepper/FormStepper/FormStepper";
export { FormSection } from "./components/Layout/FormPage/FormWithStepper/FormSection/FormSection";
export type { Props as FormSectionProps } from "./components/Layout/FormPage/FormWithStepper/FormSection/FormSection";
export { FormWithStepper } from "./components/Layout/FormPage/FormWithStepper/FormWithStepper";
export type { Props as FormWithStepperProps } from "./components/Layout/FormPage/FormWithStepper/FormWithStepper";

/** DataGrid */
export type { HeaderCell } from "./components/DataGrid/datagrid.interfaces";
export { DataGrid } from "./components/DataGrid/DataGrid";
export type { Props as DataGridProps } from "./components/DataGrid/DataGrid";
export { DataGridRow } from "./components/DataGrid/DataGridBody/DataGridRow/DataGridRow";
export type { Props as DataGridRowProps } from "./components/DataGrid/DataGridBody/DataGridRow/DataGridRow";
export { DataGridDrawerItem } from "./components/DataGrid/DataGridBody/DataGridDrawer/DataGridDrawerItem";
export type { Props as DataGridDrawerItemProps } from "./components/DataGrid/DataGridBody/DataGridDrawer/DataGridDrawerItem";
export { DataGridCell } from "./components/DataGrid/DataGridBody/DataGridCell/DataGridCell";
export type { Props as DataGridCellProps } from "./components/DataGrid/DataGridBody/DataGridCell/DataGridCell";
export { Filter } from "./components/DataGrid/DataGridFilters/DataGridFilters.interfaces";
export { FilterKeyMapper } from "./components/DataGrid/DataGridFilters/FilterKeyMapper";
export { useFiltersReducer } from "./components/DataGrid/DataGridFilters/useFiltersReducer";

/** Banner */
export { Banner } from "./components/Notifications/Banner/Banner";
export type { Props as BannerProps } from "./components/Notifications/Banner/Banner";

/** DatePicker */
export { DatePicker } from "./components/DatePicker/DatePicker";
export type { Props as DatePickerProps } from "./components/DatePicker/DatePicker";

/** Admin */
export { MicrofrontendContainer } from "./components/admin/layout/MicrofrontendContainer/MicrofrontendContainer";
export type { Props as MicrofrontendContainerProps } from "./components/admin/layout/MicrofrontendContainer/MicrofrontendContainer";
