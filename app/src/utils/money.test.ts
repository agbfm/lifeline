import { describe, expect, test } from "bun:test";
import { centsToCurrencyString } from "./money";

describe("centsToCurrencyString util method", () => {
  test("converts 123 cents to $1.23 string", () => {
    expect(centsToCurrencyString(123)).toBe("$1.23");
  });

  test("converts 1234 cents to $12.34 string", () => {
    expect(centsToCurrencyString(1234)).toBe("$12.34");
  });
});
