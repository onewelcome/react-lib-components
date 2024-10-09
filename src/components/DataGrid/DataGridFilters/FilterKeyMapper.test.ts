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

import { FilterKeyMapper } from "./FilterKeyMapper";

describe("FilterKeyMapper", () => {
  const kvPairs1 = [
    { key: "k1", value: "v1" },
    { key: "k2", value: "v2" },
    { key: "k3", value: "v3" }
  ];
  const kvPairs2 = [
    { key: "K1", value: "V1" },
    { key: "K2", value: "V2" },
    { key: "K3", value: "V3" }
  ];

  let m: FilterKeyMapper;
  beforeEach(() => {
    m = new FilterKeyMapper();
  });

  it("should be initially empty", () => {
    expect(m.columnKvPairs.size).toEqual(0);
  });

  describe("with setting kv-pairs", () => {
    beforeEach(() => {
      m.setColumnKvPairs("col1", kvPairs1);
      m.setColumnKvPairs("col2", kvPairs2);
    });

    it("should contain the kv-pairs", () => {
      expect(m.columnKvPairs.size).toEqual(2);
      expect(m.columnKvPairs.get("col1")).toEqual(kvPairs1);
      expect(m.columnKvPairs.get("col2")).toEqual(kvPairs2);
    });

    it("should provide values", () => {
      expect(m.getValues("col1")).toEqual(["v1", "v2", "v3"]);
      expect(m.getValues("col2")).toEqual(["V1", "V2", "V3"]);
    });

    it("should provide values", () => {
      expect(m.getKeysForValues("col1", ["v1", "v3"])).toEqual(["k1", "k3"]);
      expect(m.getKeysForValues("col2", ["V1", "V3"])).toEqual(["K1", "K3"]);
    });

    describe("error scenarios", () => {
      it("should raise error on wrong column for getValues", () => {
        expect(() => m.getKvPairs("col3")).toThrow("Column 'col3' not found in FilterKeyMapper");
      });
      it("should raise error on wrong column for getValues", () => {
        expect(() => m.getValues("col3")).toThrow("Column 'col3' not found in FilterKeyMapper");
      });
      it("should raise error on wrong column for getKeys", () => {
        expect(() => m.getKeysForValues("col3", ["v1"])).toThrow(
          "Column 'col3' not found in FilterKeyMapper"
        );
      });
      it("should raise error on wrong value for getKeysForValues", () => {
        expect(() => m.getKeysForValues("col1", ["V1"])).toThrow(
          "Column 'col1' in FilterKeyMapper does not contain value 'V1'"
        );
      });
    });
  });
});
