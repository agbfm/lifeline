import { Post } from "@/types/post";
import { getDate } from "@/utils/date";
import { DateSection } from "../DateSection";
import { EmptyTimelineSection } from "./EmptyTimelineSection";

export interface TimelineProps {
  posts: Post[];
}

export const Timeline = ({ posts }: TimelineProps) => {
  const dates = posts.reduce((result, p) => {
    const date = getDate(p.timestamp);
    let parent = result.get(date);
    if (!parent) {
      parent = [];
    }

    parent.push(p);
    result.set(date, parent);

    return result;
  }, new Map<string, Post[]>());

  const data = Array.from(dates);

  if (data.length === 0) {
    return <EmptyTimelineSection />;
  }

  return (
    <ol>
      {data
        .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime())
        .map(([date, data]) => (
          <li key={date}>
            <DateSection date={date} posts={data} />
          </li>
        ))}
    </ol>
  );
};
