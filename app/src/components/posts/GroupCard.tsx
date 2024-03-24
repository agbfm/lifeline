import { Post } from "@/types/post";
import { Card } from "../common/Card";
import {
  CreditCardIcon,
  DocumentIcon,
  DocumentPlusIcon,
  HomeIcon,
  RectangleStackIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import { PostCard } from "./PostCard";

export interface GroupProps {
  posts: Post[];
}

export const GroupCard = ({ posts }: GroupProps) => {
  const [expanded, setExpanded] = useState(false);

  if (posts.length === 1 || expanded) {
    return posts.map((post) => (
      <div className="py-2">
        <PostCard key={post.id} post={post} />
      </div>
    ));
  }

  return (
    <Card onClick={() => setExpanded(true)}>
      <div id="card-header" className="flex flex-row items-center">
        <span className="flex items-center justify-center bg-gray-300 h-9 w-9 rounded-full">
          <RectangleStackIcon className="h-6 w-6 text-white" />
        </span>
        <div className="flex flex-col ml-4">
          <h3 className="text-md font-medium">{posts.length} entries</h3>
          <p className="text-sm font-light text-gray-700">
            Click to show each entry
          </p>
        </div>
      </div>
    </Card>
  );
};
