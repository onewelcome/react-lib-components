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

import React, { useEffect, useRef } from "react";
import { DataGridBody, Props } from "./DataGridBody";
import { render, getAllByRole } from "@testing-library/react";
import { DataGridRow } from "./DataGridRow/DataGridRow";
import { DataGridCell } from "./DataGridCell/DataGridCell";
import { ContextMenu } from "../../ContextMenu/ContextMenu";
import { IconButton } from "../../Button/IconButton";
import { Icon, Icons } from "../../Icon/Icon";
import { ContextMenuItem } from "../../ContextMenu/ContextMenuItem";

type DataType = { firstName: string; lastName: string; date: string };

const defaultParams: Props<DataType> = {
  children: ({ item }) => (
    <DataGridRow key={item.firstName}>
      <DataGridCell>{item.firstName}</DataGridCell>
      <DataGridCell>{item.lastName}</DataGridCell>
      <DataGridCell>{item.date}</DataGridCell>
      <DataGridCell>
        <ContextMenu
          id={`consent_menu_${item.firstName}`}
          trigger={
            <IconButton title={`Actions for ${item.firstName}`} color="default">
              <Icon icon={Icons.EllipsisAlt} />
            </IconButton>
          }
        >
          <ContextMenuItem>Item 1</ContextMenuItem>
        </ContextMenu>
      </DataGridCell>
    </DataGridRow>
  ),
  headers: [
    { name: "firstName", headline: "First name" },
    { name: "lastName", headline: "Last name" },
    { name: "date", headline: "Date" }
  ],
  data: [
    { firstName: "Paweł", lastName: "Napieracz", date: "12.12.1990" },
    { firstName: "Michał", lastName: "Górski", date: "12.12.1994" },
    { firstName: "Daniel", lastName: "Velden", date: "12.12.199x" },
    { firstName: "Jasha", lastName: "Joachimsthal", date: "12.12.198x" }
  ]
};

const createDataGridBody = (params?: (defaultParams: Props<DataType>) => Props<DataType>) => {
  let parameters = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const container = document.createElement("table");
  const queries = render(<DataGridBody {...parameters} data-testid="dataGridBody" />, {
    container
  });
  const dataGridBody = queries.getByTestId("dataGridBody");

  return {
    ...queries,
    dataGridBody
  };
};

describe("DataGridBody should render", () => {
  it("renders without crashing", () => {
    const { dataGridBody } = createDataGridBody();

    expect(dataGridBody).toBeDefined();
    const rows = getAllByRole(dataGridBody, "row");

    expect(rows).toMatchSnapshot();
  });

  it("renders loading state with only visible columns", () => {
    const headers = [...defaultParams.headers];
    headers[0] = { ...headers[0], hidden: true };
    const { dataGridBody } = createDataGridBody(params => ({ ...params, headers }));

    expect(dataGridBody).toBeDefined();
    const rows = getAllByRole(dataGridBody, "row");
    const firstRowCells = getAllByRole(rows[0], "cell");
    expect(firstRowCells).toHaveLength(3);
    expect(firstRowCells[0]).toHaveTextContent(defaultParams.data?.[0].lastName!);
  });

  it("renders empty state", () => {
    const emptyLabel = "emptyLabel";
    const { dataGridBody } = createDataGridBody(params => ({
      ...params,
      emptyLabel,
      data: undefined
    }));

    const rows = getAllByRole(dataGridBody, "row");
    const firstRowCells = getAllByRole(rows[0], "cell");
    expect(firstRowCells).toHaveLength(1);
    expect(firstRowCells[0]).toHaveAttribute("colspan", `${defaultParams.headers.length + 1}`);
    expect(firstRowCells[0]).toHaveTextContent(emptyLabel);
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        propagateRef(ref);
      }, [ref]);

      return <DataGridBody {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    const container = document.createElement("table");
    render(<ExampleComponent propagateRef={refCheck} />, { container });
  });
});
