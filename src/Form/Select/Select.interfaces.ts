export type Position = {
  top: 0 | "initial";
  bottom: 0 | "initial";
};

export interface useArrowNavigationParams {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setFocusedSelectItem: React.Dispatch<React.SetStateAction<number>>;
  childrenCount: number;
  customSelectButtonRef: React.RefObject<HTMLButtonElement>;
  setShouldClick: React.Dispatch<React.SetStateAction<boolean>>;
  searchInputRef: React.RefObject<HTMLInputElement>;
  renderSearchCondition: number;
}

export interface useSelectPositionListParams {
  expanded: boolean;
  optionListReference: React.RefObject<HTMLDivElement>;
  containerReference: React.RefObject<HTMLDivElement>;
}
