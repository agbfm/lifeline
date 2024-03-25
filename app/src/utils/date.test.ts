import { describe, expect, test } from "bun:test";
import { getDate, timeSince } from "./date";
import dayjs from "dayjs";

const now = dayjs();

describe("getDate util method", () => {
  test("converts YYYY-MM-DD date string to DD/MM/YYYY format", () => {
    expect(getDate("2003-02-01")).toBe("01/02/2003");
  });
});

describe("timeSince util method", () => {
  test("adding 1 minute renders 'in 1 minute' correctly", () => {
    const date = now.add(1, "minute");
    expect(timeSince(date.toDate())).toBe("in 1 minute");
  });
  test("adding 2 minutes renders 'in 2 minutes' correctly", () => {
    const date = now.add(2, "minutes");
    expect(timeSince(date.toDate())).toBe("in 2 minutes");
  });
  test("adding 1 hour renders 'in 1 hour' correctly", () => {
    const date = now.add(1, "hour");
    expect(timeSince(date.toDate())).toBe("in 1 hour");
  });
  test("adding 2 hours renders 'in 2 hours' correctly", () => {
    const date = now.add(2, "hours");
    expect(timeSince(date.toDate())).toBe("in 2 hours");
  });
  test("adding 24 hours renders 'in 1 day' correctly", () => {
    const date = now.add(24, "hours");
    expect(timeSince(date.toDate())).toBe("in 1 day");
  });
  test("adding 2 days renders 'in 2 days' correctly", () => {
    const date = now.add(2, "days");
    expect(timeSince(date.toDate())).toBe("in 2 days");
  });
  test("adding 8 days renders 'in 1 week' correctly", () => {
    const date = now.add(8, "days");
    expect(timeSince(date.toDate())).toBe("in 1 week");
  });
  test("adding 2 weeks renders 'in 2 weeks' correctly", () => {
    const date = now.add(2, "weeks");
    expect(timeSince(date.toDate())).toBe("in 2 weeks");
  });
  test("adding 31 days renders 'in 1 month' correctly", () => {
    const date = now.add(31, "days");
    expect(timeSince(date.toDate())).toBe("in 1 month");
  });
  test("adding 2 months renders 'in 2 months' correctly", () => {
    const date = now.add(2, "months");
    expect(timeSince(date.toDate())).toBe("in 2 months");
  });
  test("adding 12 months renders 'in 1 year' correctly", () => {
    const date = now.add(12, "months");
    expect(timeSince(date.toDate())).toBe("in 1 year");
  });
  test("adding 2 years renders 'in 2 years' correctly", () => {
    const date = now.add(2, "years");
    expect(timeSince(date.toDate())).toBe("in 2 years");
  });

  test("subtracting 1 minute renders '1 minute ago' correctly", () => {
    const date = now.subtract(1, "minute");
    expect(timeSince(date.toDate())).toBe("1 minute ago");
  });
  test("subtracting 2 minutes renders '2 minutes ago' correctly", () => {
    const date = now.subtract(2, "minutes");
    expect(timeSince(date.toDate())).toBe("2 minutes ago");
  });
  test("subtracting 1 hour renders '1 hour ago' correctly", () => {
    const date = now.subtract(1, "hour");
    expect(timeSince(date.toDate())).toBe("1 hour ago");
  });
  test("subtracting 2 hours renders '2 hours ago' correctly", () => {
    const date = now.subtract(2, "hours");
    expect(timeSince(date.toDate())).toBe("2 hours ago");
  });
  test("subtracting 24 hours renders '1 day ago' correctly", () => {
    const date = now.subtract(24, "hours");
    expect(timeSince(date.toDate())).toBe("1 day ago");
  });
  test("subtracting 2 days renders '2 days ago' correctly", () => {
    const date = now.subtract(2, "days");
    expect(timeSince(date.toDate())).toBe("2 days ago");
  });
  test("subtracting 8 days renders '1 week ago' correctly", () => {
    const date = now.subtract(8, "days");
    expect(timeSince(date.toDate())).toBe("1 week ago");
  });
  test("subtracting 2 weeks renders '2 weeks ago' correctly", () => {
    const date = now.subtract(2, "weeks");
    expect(timeSince(date.toDate())).toBe("2 weeks ago");
  });
  test("subtracting 31 days renders '1 month ago' correctly", () => {
    const date = now.subtract(31, "days");
    expect(timeSince(date.toDate())).toBe("1 month ago");
  });
  test("subtracting 2 months renders '2 months ago' correctly", () => {
    const date = now.subtract(2, "months");
    expect(timeSince(date.toDate())).toBe("2 months ago");
  });
  test("subtracting 12 months renders '1 year ago' correctly", () => {
    const date = now.subtract(12, "months");
    expect(timeSince(date.toDate())).toBe("1 year ago");
  });
  test("subtracting 2 years renders '2 years ago' correctly", () => {
    const date = now.subtract(2, "years");
    expect(timeSince(date.toDate())).toBe("2 years ago");
  });
});
