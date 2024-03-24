import { centsToCurrencyString } from "@/utils/money";
import { PostCardProps } from "./PostCard";
import { isPast, timeSince } from "@/utils/date";

export const PaymentPostCardContent = ({ post }: PostCardProps) =>
  post.metadata ? (
    <div className="flex flex-col text-sm">
      <div className="flex flex-row items-center">
        <span className="w-20">Amount:</span>
        <span className="ml-2">
          {centsToCurrencyString(post.metadata.totalCents)}
        </span>
      </div>
      <div className="flex flex-row mt-2 items-center">
        <span className="w-20">Due:</span>
        {isPast(post.metadata.dueDate) ? (
          <span className="ml-2 bg-red-200 text-red-700 rounded-md px-2 py-1">
            {timeSince(post.metadata.dueDate)}
          </span>
        ) : (
          <span className="ml-2">{timeSince(post.metadata.dueDate)}</span>
        )}
      </div>
    </div>
  ) : (
    <span className="text-md">{post.body}</span>
  );
