import { memo } from 'react';
import { Comment } from '../../../../types';
import { formatDate } from '../../../../utils/formatDate';

type CommentItemProps = {
  comment: Comment;
};

const CommentItem = memo(({ comment }: CommentItemProps) => (
  <div className="border-b pb-4">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          {comment.author.name[0].toUpperCase()}
        </div>
        <span className="font-medium text-gray-900">{comment.author.name}</span>
      </div>
      <span className="text-sm text-gray-500">{formatDate(comment.createdAt)}</span>
    </div>
    <p className="text-gray-700">{comment.content}</p>
  </div>
));

export default CommentItem; 