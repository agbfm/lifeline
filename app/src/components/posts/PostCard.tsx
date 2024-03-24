"use client";

import { Post } from "@/types/post";
import { timeSince } from "@/utils/date";
import {
  CreditCardIcon,
  DocumentIcon,
  HomeIcon,
} from "@heroicons/react/16/solid";
import { PaymentPostCardContent } from "./PaymentPostCardContent";
import { useState } from "react";
import { centsToCurrencyString } from "@/utils/money";
import { Card } from "../common/Card";

export interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const iconColour =
    post.type === "payment_overdue" ? "bg-red-300" : "bg-gray-300";

  const icon = post.type.startsWith("payment") ? (
    <CreditCardIcon className="h-6 w-6 text-white" />
  ) : post.type.startsWith("property") ? (
    <HomeIcon className="h-6 w-6 text-white" />
  ) : (
    <DocumentIcon className="h-6 w-6 text-white" />
  );

  if (!expanded) {
    return (
      <Card>
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => setExpanded(true)}
        >
          <div id="card-header" className="flex flex-row items-center">
            <span
              className={`flex items-center justify-center ${iconColour} h-9 w-9 rounded-full`}
            >
              {icon}
            </span>
            <div className="flex flex-col ml-4">
              <h3 className="text-md font-medium">{post.title}</h3>
              <p className="text-sm font-light text-gray-700">
                {post.type.startsWith("payment") &&
                  centsToCurrencyString(post.metadata?.totalCents || 0)}
              </p>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  const body = post.type.startsWith("payment") ? (
    <PaymentPostCardContent post={post} />
  ) : (
    <span className="text-md">{post.body}</span>
  );

  return (
    <Card>
      <div
        className="flex flex-col cursor-pointer"
        onClick={() => setExpanded(false)}
      >
        <div
          id="card-header"
          className="flex flex-row items-center border-b border-gray-200 pb-4"
        >
          <span
            className={`flex items-center justify-center ${iconColour} h-9 w-9 rounded-full`}
          >
            {icon}
          </span>
          <div className="flex flex-col ml-4">
            <h3 className="text-md font-medium">{post.title}</h3>
            <p className="text-sm font-light text-gray-700">
              {timeSince(post.timestamp)}
            </p>
          </div>
        </div>
        <div id="card-content" className="flex flex-col mt-4">
          {body}
        </div>
        <div
          id="card-footer"
          className="flex flex-col mt-4 border-t border-gray-200 pt-4"
        >
          <div className="flex flex-row">
            {post.tags.map((tag) => (
              <div
                key={tag}
                className="bg-gray-100 text-gray-500 rounded-md px-2 py-1 text-sm font-medium mr-2"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
