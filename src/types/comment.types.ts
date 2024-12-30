export type Comment = {
  _id: string;
  content: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt: string;
  updatedAt?: string;
  replies: Array<{
    _id: string;
    content: string;
    author: {
      _id: string;
      firstName: string;
      lastName: string;
    };
    createdAt: string;
  }>;
}; 