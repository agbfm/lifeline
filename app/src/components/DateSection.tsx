"use client";

import { Post } from "@/types/post";
import { PostCard } from "./posts/PostCard";
import { useState } from "react";
import { getDayMonthLabel, isToday, isYesterday } from "@/utils/date";
import { GroupCard } from "./posts/GroupCard";

interface Props {
  date: string;
  posts: Post[];
}

export const DateSection = ({ date, posts }: Props) => {
  const [expanded, setExpanded] = useState(true);

  const dateLabel = isToday(date)
    ? "Today"
    : isYesterday(date)
    ? "Yesterday"
    : getDayMonthLabel(date);

  return (
    <>
      <div className="flex">
        <h2
          className="text-gray-500 text-md font-medium cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {dateLabel}
        </h2>
      </div>
      <div className="px-4">
        {expanded ? (
          <ol className="flex">
            <li className="flex flex-row py-2">
              <span className="flex min-h-full w-0.5 bg-gray-300" />
              <div className="ml-8 py-2">
                <div className="py-2">
                  <GroupCard posts={posts} />
                </div>
              </div>
            </li>
          </ol>
        ) : (
          <div className="py-2">
            <span className="flex h-4 w-0.5 bg-gray-300 py-2" />
          </div>
        )}
      </div>
    </>
  );
};
