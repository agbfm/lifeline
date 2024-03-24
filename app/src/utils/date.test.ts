import { describe, expect, test } from "bun:test";
import { getDate } from "./date";

describe("getDate util method", () => {
  test("converts YYYY-MM-DD date string to DD/MM/YYYY format", () => {
    expect(getDate("2003-02-01")).toBe("01/02/2003");
  });
});
