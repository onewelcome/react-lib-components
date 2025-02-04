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

import { act, renderHook } from "@testing-library/react";
import { useRefItems } from "./useRefItems";
import { MenuItem } from "./LeftNav.interfaces";
import { createElement } from "react";

describe("useRefItems()", () => {
  describe("should create linked map", () => {
    it("when items have only root lvl items", () => {
      const items: MenuItem[] = [
        { key: "key1", title: "title1" },
        { key: "key2", title: "title2" },
        { key: "key3", title: "title3" }
      ];

      const { result } = renderHook(() => useRefItems({ items }));

      expect(result.current.getItemMap()).toStrictEqual({
        key1: { item: items[0], level: 0, prev: undefined, next: items[1] },
        key2: { item: items[1], level: 0, prev: items[0], next: items[2] },
        key3: { item: items[2], level: 0, prev: items[1], next: undefined }
      });
    });

    it("when items have only one item", () => {
      const items: MenuItem[] = [{ key: "key1", title: "title1" }];

      const { result } = renderHook(() => useRefItems({ items }));

      expect(result.current.getItemMap()).toStrictEqual({
        key1: { item: items[0], level: 0, prev: undefined, next: items[1] }
      });
    });

    it("when items have an item with children with one element as first element of the list", () => {
      const items: MenuItem[] = [
        { key: "key1", title: "title1", items: [{ key: "key11", title: "title1.1" }] },
        { key: "key2", title: "title2" },
        { key: "key3", title: "title3" }
      ];

      const { result } = renderHook(() => useRefItems({ items }));

      const itemMap = result.current.getItemMap();
      expect(itemMap).toStrictEqual({
        key1: { item: items[0], level: 0, prev: undefined, next: items[0]?.items?.[0] },
        key11: { item: items[0]?.items?.[0], level: 1, prev: items[0], next: items[1] },
        key2: { item: items[1], level: 0, prev: items[0]?.items?.[0], next: items[2] },
        key3: { item: items[2], level: 0, prev: items[1], next: undefined }
      });
    });

    it("when items have an item with children with two elements as first element of the list", () => {
      const items: MenuItem[] = [
        {
          key: "key1",
          title: "title1",
          items: [
            { key: "key11", title: "title1.1" },
            { key: "key12", title: "title1.2" }
          ]
        },
        { key: "key2", title: "title2" },
        { key: "key3", title: "title3" }
      ];

      const { result } = renderHook(() => useRefItems({ items }));

      const itemMap = result.current.getItemMap();
      expect(itemMap).toStrictEqual({
        key1: { item: items[0], level: 0, prev: undefined, next: items[0]?.items?.[0] },
        key11: { item: items[0]?.items?.[0], level: 1, prev: items[0], next: items[0]?.items?.[1] },
        key12: { item: items[0]?.items?.[1], level: 1, prev: items[0]?.items?.[0], next: items[1] },
        key2: { item: items[1], level: 0, prev: items[0]?.items?.[1], next: items[2] },
        key3: { item: items[2], level: 0, prev: items[1], next: undefined }
      });
    });

    it("when items have an item with children with three elements as first element of the list", () => {
      const items: MenuItem[] = [
        {
          key: "key1",
          title: "title1",
          items: [
            { key: "key11", title: "title1.1" },
            { key: "key12", title: "title1.2" },
            { key: "key13", title: "title1.3" }
          ]
        },
        { key: "key2", title: "title2" },
        { key: "key3", title: "title3" }
      ];

      const { result } = renderHook(() => useRefItems({ items }));

      const itemMap = result.current.getItemMap();
      expect(itemMap).toStrictEqual({
        key1: { item: items[0], level: 0, prev: undefined, next: items[0]?.items?.[0] },
        key11: { item: items[0]?.items?.[0], level: 1, prev: items[0], next: items[0]?.items?.[1] },
        key12: {
          item: items[0]?.items?.[1],
          level: 1,
          prev: items[0]?.items?.[0],
          next: items[0]?.items?.[2]
        },
        key13: { item: items[0]?.items?.[2], level: 1, prev: items[0]?.items?.[1], next: items[1] },
        key2: { item: items[1], level: 0, prev: items[0]?.items?.[2], next: items[2] },
        key3: { item: items[2], level: 0, prev: items[1], next: undefined }
      });
    });

    it("when items have an item with children with three elements as middle element of the list", () => {
      const items: MenuItem[] = [
        {
          key: "key1",
          title: "title1"
        },
        {
          key: "key2",
          title: "title2",
          items: [
            { key: "key21", title: "title2.1" },
            { key: "key22", title: "title2.2" },
            { key: "key23", title: "title2.3" }
          ]
        },
        { key: "key3", title: "title3" }
      ];

      const { result } = renderHook(() => useRefItems({ items }));

      const itemMap = result.current.getItemMap();
      expect(itemMap).toStrictEqual({
        key1: { item: items[0], level: 0, prev: undefined, next: items[1] },
        key2: { item: items[1], level: 0, prev: items[0], next: items[1]?.items?.[0] },
        key21: { item: items[1]?.items?.[0], level: 1, prev: items[1], next: items[1]?.items?.[1] },
        key22: {
          item: items[1]?.items?.[1],
          level: 1,
          prev: items[1]?.items?.[0],
          next: items[1]?.items?.[2]
        },
        key23: { item: items[1]?.items?.[2], level: 1, prev: items[1]?.items?.[1], next: items[2] },
        key3: { item: items[2], level: 0, prev: items[1]?.items?.[2], next: undefined }
      });
    });

    it("when items have multiple items with multiple nested children", () => {
      const items: MenuItem[] = [
        {
          key: "key1",
          title: "title1",
          items: [
            { key: "key11", title: "title1.1" },
            {
              key: "key12",
              title: "title1.2",
              items: [
                {
                  key: "key121",
                  title: "title1.2.1",
                  items: [
                    { key: "key1211", title: "title1.2.1.1" },
                    { key: "key1212", title: "title1.2.1.2" }
                  ]
                },
                { key: "key122", title: "title1.2" }
              ]
            }
          ]
        },
        {
          key: "key2",
          title: "title2",
          items: [
            { key: "key21", title: "title2.1" },
            { key: "key22", title: "title2.2" },
            { key: "key23", title: "title2.3" }
          ]
        },
        { key: "key3", title: "title3", items: [{ key: "key31", title: "title3.1" }] }
      ];

      const { result } = renderHook(() => useRefItems({ items }));

      const itemMap = result.current.getItemMap();
      expect(itemMap).toStrictEqual({
        key1: { item: items[0], level: 0, prev: undefined, next: items[0]?.items?.[0] },
        key11: { item: items[0]?.items?.[0], level: 1, prev: items[0], next: items[0]?.items?.[1] },
        key12: {
          item: items[0]?.items?.[1],
          level: 1,
          prev: items[0]?.items?.[0],
          next: items[0]?.items?.[1]?.items?.[0]
        },
        key121: {
          item: items[0]?.items?.[1]?.items?.[0],
          level: 2,
          prev: items[0]?.items?.[1],
          next: items[0]?.items?.[1]?.items?.[0]?.items?.[0]
        },
        key1211: {
          item: items[0]?.items?.[1]?.items?.[0]?.items?.[0],
          level: 3,
          prev: items[0]?.items?.[1]?.items?.[0],
          next: items[0]?.items?.[1]?.items?.[0]?.items?.[1]
        },
        key1212: {
          item: items[0]?.items?.[1]?.items?.[0]?.items?.[1],
          level: 3,
          prev: items[0]?.items?.[1]?.items?.[0]?.items?.[0],
          next: items[0]?.items?.[1]?.items?.[1]
        },
        key122: {
          item: items[0]?.items?.[1]?.items?.[1],
          level: 2,
          prev: items[0]?.items?.[1]?.items?.[0]?.items?.[1],
          next: items[1]
        },
        key2: {
          item: items[1],
          level: 0,
          prev: items[0]?.items?.[1]?.items?.[1],
          next: items[1]?.items?.[0]
        },
        key21: {
          item: items[1]?.items?.[0],
          level: 1,
          prev: items[1],
          next: items[1]?.items?.[1]
        },
        key22: {
          item: items[1]?.items?.[1],
          level: 1,
          prev: items[1]?.items?.[0],
          next: items[1]?.items?.[2]
        },
        key23: {
          item: items[1]?.items?.[2],
          level: 1,
          prev: items[1]?.items?.[1],
          next: items[2]
        },
        key3: { item: items[2], level: 0, prev: items[1]?.items?.[2], next: items[2]?.items?.[0] },
        key31: { item: items[2]?.items?.[0], level: 1, prev: items[2], next: undefined }
      });
    });

    it("when items have many disabled items", () => {
      const items: MenuItem[] = [
        {
          key: "key1",
          title: "title1"
        },
        {
          key: "key2",
          title: "title2",
          disabled: true
        },
        {
          key: "key3",
          title: "title3",
          items: [
            { key: "key31", title: "title3.1" },
            { key: "key32", title: "title3.2" },
            {
              key: "key33",
              title: "title3.3",
              items: [
                {
                  key: "key331",
                  title: "title3.3.1",

                  items: [
                    { key: "key3311", title: "title3.3.1.1", disabled: true },
                    { key: "key3312", title: "title3.3.1.2" }
                  ]
                },
                { key: "key332", title: "title3.3.2", disabled: true }
              ]
            }
          ]
        },
        {
          key: "key4",
          title: "title4",
          disabled: true
        },
        {
          key: "key5",
          title: "title5",
          disabled: true
        },
        {
          key: "key6",
          title: "title6"
        }
      ];

      const { result } = renderHook(() => useRefItems({ items }));

      const itemMap = result.current.getItemMap();
      expect(itemMap).toStrictEqual({
        key1: { item: items[0], level: 0, prev: undefined, next: items[2] },
        key3: { item: items[2], level: 0, prev: items[0], next: items[2]?.items?.[0] },
        key31: { item: items[2]?.items?.[0], level: 1, prev: items[2], next: items[2]?.items?.[1] },
        key32: {
          item: items[2]?.items?.[1],
          level: 1,
          prev: items[2]?.items?.[0],
          next: items[2]?.items?.[2]
        },
        key33: {
          item: items[2]?.items?.[2],
          level: 1,
          prev: items[2]?.items?.[1],
          next: items[2]?.items?.[2]?.items?.[0]
        },
        key331: {
          item: items[2]?.items?.[2]?.items?.[0],
          level: 2,
          prev: items[2]?.items?.[2],
          next: items[2]?.items?.[2]?.items?.[0]?.items?.[1]
        },
        key3312: {
          item: items[2]?.items?.[2]?.items?.[0]?.items?.[1],
          level: 3,
          prev: items[2]?.items?.[2]?.items?.[0],
          next: items[5]
        },
        key6: {
          item: items[5],
          level: 0,
          prev: items[2]?.items?.[2]?.items?.[0]?.items?.[1],
          next: undefined
        }
      });
    });
  });

  describe("should get next element", () => {
    it("when items have only root lvl items", () => {
      const items: MenuItem[] = [
        { key: "key1", title: "title1" },
        { key: "key2", title: "title2" },
        { key: "key3", title: "title3" }
      ];
      const key2ItemEl = createElement("a") as unknown as HTMLElement;
      const { result } = renderHook(() => useRefItems({ items }));
      act(() => {
        result.current.addElementReference(key2ItemEl, "key2");
      });

      const nextElement = result.current.getNextElement("key1");

      expect(nextElement).toEqual(key2ItemEl);
    });

    it("when items have an item with children with two elements as first element of the list with one disabled element", () => {
      //given
      const items: MenuItem[] = [
        {
          key: "key1",
          title: "title1"
        },
        {
          key: "key2",
          title: "title2",
          items: [
            { key: "key21", title: "title2.1" },
            { key: "key22", title: "title2.2", disabled: true },
            { key: "key23", title: "title2.3" }
          ]
        },
        { key: "key3", title: "title3" }
      ];
      const key21ItemEl = createElement("a") as unknown as HTMLElement;
      const key23ItemEl = createElement("a") as unknown as HTMLElement;
      const key3ItemEl = createElement("a") as unknown as HTMLElement;
      const { result } = renderHook(() => useRefItems({ items }));
      act(() => {
        result.current.addElementReference(key21ItemEl, "key21");
        result.current.addElementReference(key23ItemEl, "key23");
        result.current.addElementReference(key3ItemEl, "key3");
      });
      //when
      let nextElement = result.current.getNextElement("key2");
      //then
      expect(nextElement).toEqual(key21ItemEl);
      //when
      nextElement = result.current.getNextElement("key21");
      //then
      expect(nextElement).toEqual(key23ItemEl);
      //when
      nextElement = result.current.getNextElement("key23");
      //then
      expect(nextElement).toEqual(key3ItemEl);
    });
  });

  describe("should get prev element on the same level", () => {
    it("when items have only root lvl items", () => {
      const items: MenuItem[] = [
        { key: "key1", title: "title1" },
        { key: "key2", title: "title2" },
        { key: "key3", title: "title3" }
      ];
      const key2ItemEl = createElement("a") as unknown as HTMLElement;
      const { result } = renderHook(() => useRefItems({ items }));
      act(() => {
        result.current.addElementReference(key2ItemEl, "key2");
      });

      const prevElement = result.current.getPrevElementOnSameLevel("key3");

      expect(prevElement).toEqual(key2ItemEl);
    });

    it("when items have an item with children with two elements as first element of the list with one disabled element", () => {
      //given
      const items: MenuItem[] = [
        {
          key: "key1",
          title: "title1"
        },
        {
          key: "key2",
          title: "title2",
          items: [
            { key: "key21", title: "title2.1" },
            { key: "key22", title: "title2.2", disabled: true },
            { key: "key23", title: "title2.3" }
          ]
        },
        { key: "key3", title: "title3" }
      ];
      const key2ItemEl = createElement("a") as unknown as HTMLElement;
      const key21ItemEl = createElement("a") as unknown as HTMLElement;
      const { result } = renderHook(() => useRefItems({ items }));
      act(() => {
        result.current.addElementReference(key2ItemEl, "key2");
        result.current.addElementReference(key21ItemEl, "key21");
      });
      //when
      let prevElement = result.current.getPrevElementOnSameLevel("key3");
      //then
      expect(prevElement).toEqual(key2ItemEl);
      //when
      prevElement = result.current.getPrevElementOnSameLevel("key21");
      //then
      expect(prevElement).toBeUndefined();
      //when
      prevElement = result.current.getPrevElementOnSameLevel("key23");
      //then
      expect(prevElement).toEqual(key21ItemEl);
    });
  });

  describe("should get next element on the same level", () => {
    it("when items have only root lvl items", () => {
      const items: MenuItem[] = [
        { key: "key1", title: "title1" },
        { key: "key2", title: "title2" },
        { key: "key3", title: "title3" }
      ];
      const key2ItemEl = createElement("a") as unknown as HTMLElement;
      const { result } = renderHook(() => useRefItems({ items }));
      act(() => {
        result.current.addElementReference(key2ItemEl, "key2");
      });

      const nextElement = result.current.getNextElementOnSameLevel("key1");

      expect(nextElement).toEqual(key2ItemEl);
    });

    it("when items have an item with children with two elements as first element of the list with one disabled element", () => {
      //given
      const items: MenuItem[] = [
        {
          key: "key1",
          title: "title1"
        },
        {
          key: "key2",
          title: "title2",
          items: [
            { key: "key21", title: "title2.1" },
            { key: "key22", title: "title2.2", disabled: true },
            { key: "key23", title: "title2.3" }
          ]
        },
        { key: "key3", title: "title3" }
      ];
      const key21ItemEl = createElement("a") as unknown as HTMLElement;
      const key23ItemEl = createElement("a") as unknown as HTMLElement;
      const key3ItemEl = createElement("a") as unknown as HTMLElement;
      const { result } = renderHook(() => useRefItems({ items }));
      act(() => {
        result.current.addElementReference(key21ItemEl, "key21");
        result.current.addElementReference(key23ItemEl, "key23");
        result.current.addElementReference(key3ItemEl, "key3");
      });
      //when
      let nextElement = result.current.getNextElementOnSameLevel("key2");
      //then
      expect(nextElement).toEqual(key3ItemEl);
      //when
      nextElement = result.current.getNextElementOnSameLevel("key21");
      //then
      expect(nextElement).toEqual(key23ItemEl);
      //when
      nextElement = result.current.getNextElementOnSameLevel("key23");
      //then
      expect(nextElement).toBeUndefined();
    });
  });

  describe("should get parent element", () => {
    it("when items have only root lvl items", () => {
      const items: MenuItem[] = [
        { key: "key1", title: "title1" },
        { key: "key2", title: "title2" },
        { key: "key3", title: "title3" }
      ];
      const key1ItemEl = createElement("a") as unknown as HTMLElement;
      const key2ItemEl = createElement("a") as unknown as HTMLElement;
      const key3ItemEl = createElement("a") as unknown as HTMLElement;
      const { result } = renderHook(() => useRefItems({ items }));
      act(() => {
        result.current.addElementReference(key1ItemEl, "key1");
        result.current.addElementReference(key2ItemEl, "key2");
        result.current.addElementReference(key3ItemEl, "key3");
      });

      const parentElement = result.current.getParentElement("key1");

      expect(parentElement).toBeUndefined();
    });

    it("when items have an item with children with two elements as first element of the list with one disabled element", () => {
      //given
      const items: MenuItem[] = [
        {
          key: "key1",
          title: "title1"
        },
        {
          key: "key2",
          title: "title2",
          items: [
            { key: "key21", title: "title2.1" },
            { key: "key22", title: "title2.2", disabled: true },
            { key: "key23", title: "title2.3" }
          ]
        },
        { key: "key3", title: "title3" }
      ];
      const key2ItemEl = createElement("a") as unknown as HTMLElement;
      const { result } = renderHook(() => useRefItems({ items }));
      act(() => {
        result.current.addElementReference(key2ItemEl, "key2");
      });
      //when
      let parentElement = result.current.getParentElement("key21");
      //then
      expect(parentElement).toEqual(key2ItemEl);
      //when
      parentElement = result.current.getParentElement("key23");
      //then
      expect(parentElement).toEqual(key2ItemEl);
      //when
      parentElement = result.current.getParentElement("key2");
      //then
      expect(parentElement).toBeUndefined();
    });
  });
});
