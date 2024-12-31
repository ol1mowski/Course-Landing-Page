import { memo } from 'react';

import CommentItem from '../CommentItem/CommentItem.component';
import CommentSkeleton from '../CommentSkeleton/CommentSkeleton.component';
import { LoadMoreButton } from '../components/LoadMoreButton.component';

import type { Comment } from '../../../types/comment.types';

type CommentsListProps = {
  comments: Comment[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  onLoadMore: () => void;
  onReply: (commentId: string, content: string) => Promise<void>;
  isAddingReply: boolean;
  onDelete: (commentId: string) => Promise<void>;
  deletingCommentId: string | null;
  currentUserId: string;
  onUpdate: (commentId: string, content: string) => Promise<void>;
  isUpdating: boolean;
};

const CommentsList = memo(({
  comments,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  onLoadMore,
  ...commentItemProps
}: CommentsListProps) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <CommentSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!comments.length) {
    return (
      <p className="text-center text-gray-500">
        Brak komentarzy. Bądź pierwszy!
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <CommentItem
          key={comment._id}
          comment={comment}
          {...commentItemProps}
        />
      ))}
      
      {hasNextPage && (
        <LoadMoreButton
          onClick={onLoadMore}
          isLoading={isFetchingNextPage}
        />
      )}
    </div>
  );
});

export default CommentsList; 