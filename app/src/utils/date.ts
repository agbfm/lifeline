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

  const now = new Date();
  if (now.getTime() < date.getTime()) {
    // date is in the future
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const years = Math.floor(seconds / 31536000);
    if (years > 1) {
      return `in ${years} years`;
    }
    if (years === 1) {
      return `in ${years} year`;
    }

    const months = Math.floor(seconds / 2628000);
    if (months > 1) {
      return `in ${months} months`;
    }
    if (months === 1) {
      return `in ${months} month`;
    }

    const weeks = Math.floor(seconds / 604800);
    if (weeks > 1) {
      return `in ${weeks} weeks`;
    }
    if (weeks === 1) {
      return `in ${weeks} week`;
    }

    const days = Math.floor(seconds / 86400);
    if (days > 1) {
      return `in ${days} days`;
    }
    if (days === 1) {
      return `in ${days} day`;
    }

    const hours = Math.floor(seconds / 3600);
    if (hours > 1) {
      return `in ${hours} hours`;
    }
    if (hours === 1) {
      return `in ${hours} hour`;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes > 1) {
      return `in ${minutes} minutes`;
    }
    if (minutes === 1) {
      return `in ${minutes} minute`;
    }

    return "just now";
  } else {
    // date is in the past
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years ago";
    }
    if (interval === 1) {
      return interval + " year ago";
    }

    const months = Math.floor(seconds / 2628000);
    if (months > 1) {
      return months + " months ago";
    }
    if (months === 1) {
      return months + " month ago";
    }

    const weeks = Math.floor(seconds / 604800);
    if (weeks > 1) {
      return weeks + " weeks ago";
    }
    if (weeks === 1) {
      return weeks + " week ago";
    }

    const days = Math.floor(seconds / 86400);
    if (days > 1) {
      return days + " days ago";
    }
    if (days === 1) {
      return days + " day ago";
    }

    const hours = Math.floor(seconds / 3600);
    if (hours > 1) {
      return hours + " hours ago";
    }
    if (hours === 1) {
      return hours + " hour ago";
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes > 1) {
      return minutes + " minutes ago";
    }
    if (minutes === 1) {
      return minutes + " minute ago";
    }

    return "just now";
  }
};
