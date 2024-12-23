import { memo } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { pl } from 'date-fns/locale';
import type { Comment } from '../../../hooks/useComments.hook';

type CommentItemProps = {
  comment: Comment;
};

const CommentItem = memo(({ comment }: CommentItemProps) => {
  const formattedDate = formatDistanceToNow(new Date(comment.createdAt), {
    addSuffix: true,
    locale: pl
  });

  return (
    <article className="bg-white rounded-lg p-4 shadow-sm">
      <header className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
            {comment.author.firstName[0]}
          </div>
          <div>
            <h3 className="font-medium text-gray-900">
              {comment.author.firstName} {comment.author.lastName}
            </h3>
            <time className="text-sm text-gray-500">{formattedDate}</time>
          </div>
        </div>
      </header>
      
      <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>

      {comment.replies.length > 0 && (
        <div className="mt-4 space-y-4 pl-4 border-l-2 border-gray-100">
          {comment.replies.map((reply) => (
            <div key={reply._id} className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-sm">
                  {reply.author.firstName[0]}
                </div>
                <span className="font-medium text-sm text-gray-900">
                  {reply.author.firstName} {reply.author.lastName}
                </span>
                <time className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(reply.createdAt), {
                    addSuffix: true,
                    locale: pl
                  })}
                </time>
              </div>
              <p className="text-sm text-gray-700 pl-8">{reply.content}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
});

export default CommentItem; 