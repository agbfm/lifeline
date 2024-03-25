import dayjs from "@/libs/dayjs";

export const getDate = (date: string | Date) => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  return date.toLocaleDateString("en-GB");
};

export const getDayMonthLabel = (date: string | Date) => {
  if (typeof date === "string") {
    date = dayjs(date, "DD/MM/YYYY", true).toDate();
  }

  return date.toLocaleString("en-US", { day: "numeric", month: "short" });
};

export const isPast = (date: string | Date) => {
  if (typeof date === "string") {
    date = dayjs(date, "DD/MM/YYYY", true).toDate();
  }

  const now = new Date();
  return date.getTime() < now.getTime();
};

export const isToday = (date: string | Date) => {
  if (typeof date === "string") {
    date = dayjs(date, "DD/MM/YYYY", true).toDate();
  }

  const now = new Date();
  return (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
};

export const isYesterday = (date: string | Date) => {
  if (typeof date === "string") {
    date = dayjs(date, "DD/MM/YYYY", true).toDate();
  }

  const now = new Date();
  return (
    date.getDate() === now.getDate() - 1 &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
};

export const timeSince = (date: string | Date) => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  return dayjs(date).fromNow();
};
