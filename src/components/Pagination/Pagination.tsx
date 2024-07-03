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

import React, {
  ForwardRefRenderFunction,
  ComponentPropsWithRef,
  Fragment,
  useState,
  useEffect
} from "react";
import classes from "./Pagination.module.scss";
import readyclasses from "../../readyclasses.module.scss";
import { IconButton } from "../Button/IconButton";
import { Icons, Icon } from "../Icon/Icon";
import { Select } from "../Form/Select/SingleSelect/Select";
import { Option } from "../Form/Select/SingleSelect/Option";
import { Label } from "../Form/Label/Label";

export type PaginationTranslations = {
  totalItems: string;
  itemsPerPage: string;
  itemsPerPageLabel: string;
  currentPage: string;
  currentPageLabel: string;
};

export type PageChangeLabels = "next" | "previous" | "first" | "last";

enum DefaultTranslations {
  totalItems = "items in total",
  itemsPerPage = "Items per page",
  currentPage = "of %1 pages",
  itemsPerPageLabel = "Select how many items per page you want to see.",
  currentPageLabel = "What page you are currently on."
}

export type PageSize = 10 | 25 | 50;

export interface Props extends Omit<ComponentPropsWithRef<"div">, "translate"> {
  currentPage: number;
  totalElements?: number;
  pageSize?: PageSize;
  translate?: PaginationTranslations;
  onPageChange: (pageToGoTo: number) => void;
  onPageSizeChange: (pageSize: PageSize) => void;
}

const PaginationComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    totalElements,
    pageSize = 10,
    translate = DefaultTranslations,
    currentPage,
    className,
    onPageChange,
    onPageSizeChange,
    ...rest
  }: Props,
  ref
) => {
  const calculateAmountOfPages = () => {
    if (!totalElements) return 1;

    if (Math.ceil(totalElements / pageSize) < 1) {
      return 1;
    }

    return Math.ceil(totalElements / pageSize);
  };
  const pagesAmount = calculateAmountOfPages();
  const [resetPageNoSelect, setResetPageNoSelect] = useState(false);

  const onPageSizeChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const pageSizeNumber = Number(event.target.value) as PageSize;
    setResetPageNoSelect(true);
    onPageSizeChange(pageSizeNumber);
  };

  const onPageChangeHandler = (pageToGoTo: number) => {
    onPageChange(pageToGoTo);
  };

  useEffect(() => {
    resetPageNoSelect && setResetPageNoSelect(false);
  }, [resetPageNoSelect]);

  return (
    <div {...rest} ref={ref} className={`${classes["pagination-wrapper"]} ${className ?? ""}`}>
      <div className={classes["left"]}>
        {pageSize && (
          <div className={classes["per-page"]}>
            <Label
              id="page-size-select-label"
              htmlFor="page-size-select"
              className={classes["label"]}
            >
              {translate.itemsPerPage}
            </Label>
            <Select
              name="page-size-select"
              id="page-size-select"
              labeledBy="page-size-select-label"
              className={`${classes["form-element"]} ${classes["page-size-select"]}`}
              value={pageSize.toString()}
              onChange={onPageSizeChangeHandler}
            >
              <Option value="10">10</Option>
              <Option value="25">25</Option>
              <Option value="50">50</Option>
            </Select>
          </div>
        )}
        {totalElements && (
          <div className={classes["total"]}>
            <span tabIndex={0}>
              {totalElements}&nbsp;{translate.totalItems}
            </span>
          </div>
        )}
      </div>
      <div className={classes["pagination"]}>
        <Fragment>
          {totalElements && !!pagesAmount && (
            <div className={classes["page"]}>
              <Label
                id="current-value-input-label"
                htmlFor="current-value-input"
                className={`${readyclasses["sr-only"]} ${classes["current-value-select-label"]}`}
              >
                {translate.currentPageLabel}
              </Label>
              <Select
                labeledBy="current-value-input-label"
                key="input"
                id="current-value-input"
                size={currentPage.toString().length}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  onPageChangeHandler(Number(e.target.value))
                }
                name="current-value-input"
                value={currentPage.toString()}
                className={`${classes["form-element"]} ${classes["current-page-select"]}`}
                search={{
                  enabled: true,
                  searchInputProps: {
                    wrapperProps: { className: classes["search-input-wrapper"] },
                    reset: resetPageNoSelect ? resetPageNoSelect : undefined,
                    autoComplete: "off"
                  }
                }}
              >
                {Array.from(Array(pagesAmount).keys()).map(page => (
                  <Option key={page} value={(page + 1).toString()}>
                    {(page + 1).toString()}
                  </Option>
                ))}
              </Select>
              <span className={classes["page-total"]}>
                {translate.currentPage.replace(
                  "%1",
                  Math.ceil(totalElements / pageSize).toString()
                )}
              </span>
            </div>
          )}
          {!!currentPage && (
            <div className={classes["previous"]}>
              {
                <IconButton
                  disabled={currentPage <= 1}
                  title="first"
                  onClick={() => onPageChangeHandler(1)}
                  data-paginate="first"
                >
                  <Icon icon={Icons.NavigationFirst} />
                </IconButton>
              }
              {
                <IconButton
                  disabled={currentPage <= 1}
                  title="previous"
                  onClick={() => onPageChangeHandler(currentPage - 1)}
                  data-paginate="previous"
                >
                  <Icon icon={Icons.ChevronLeft} />
                </IconButton>
              }
            </div>
          )}
          <div className={classes["next"]}>
            {(currentPage !== undefined || false) && (
              <IconButton
                disabled={currentPage >= pagesAmount}
                title="next"
                onClick={() => onPageChangeHandler(currentPage + 1)}
                data-paginate="next"
              >
                <Icon icon={Icons.ChevronRight} />
              </IconButton>
            )}
            {!!(currentPage && totalElements) && (
              <IconButton
                disabled={currentPage >= pagesAmount}
                title="last"
                onClick={() => onPageChangeHandler(Math.ceil(totalElements / pageSize))}
                data-paginate="last"
              >
                <Icon icon={Icons.NavigationLast} />
              </IconButton>
            )}
          </div>
        </Fragment>
      </div>
    </div>
  );
};

export const Pagination = React.forwardRef(PaginationComponent);
