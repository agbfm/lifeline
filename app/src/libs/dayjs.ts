import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "just now",
    ss: "just now",
    m: "1 minute",
    mm: "%d minutes",
    h: "1 hour",
    hh: "%d hours",
    d: "1 day",
    dd: function (number: number) {
      if (number >= 14) {
        return `${Math.round(number / 7)} weeks`;
      } else if (number >= 7) {
        return `${Math.round(number / 7)} week`;
      }
      return `${number} days`;
    },
    M: "1 month",
    MM: "%d months",
    y: "1 year",
    yy: "%d years",
  },
});

export default dayjs;
