export type Post = {
  id: string;
  timestamp: string;
  title: string;
  body?: string;
  type: string;
  tags: string[];
  metadata?: PaymentPostMetadata | null;
};

export type PaymentPostMetadata = {
  totalCents: number;
  dueDate: string;
};
