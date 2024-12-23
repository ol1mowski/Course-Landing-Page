import { memo, useCallback, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CommentItem from './CommentItem/CommentItem.component';
import CommentSkeleton from './CommentSkeleton/CommentSkeleton.component';
import type { Comment } from '../../../hooks/useComments.hook';

type CommentsListProps = {
  comments: Comment[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  onLoadMore: () => void;
};

const CommentsList = memo(({ 
  comments, 
  isLoading, 
  isFetchingNextPage,
  hasNextPage,
  onLoadMore 
}: CommentsListProps) => {
  const { ref, inView } = useInView();
  const prevCommentsLength = useRef(comments.length);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      onLoadMore();
    }
  }, [inView, hasNextPage, isFetchingNextPage, onLoadMore]);

  useEffect(() => {
    if (comments.length !== prevCommentsLength.current) {
      prevCommentsLength.current = comments.length;
    }
  }, [comments.length]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <CommentSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!comments.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        Brak komentarzy. Bądź pierwszy!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <CommentItem 
          key={comment._id} 
          comment={comment} 
        />
      ))}
      
      {isFetchingNextPage && (
        <div className="space-y-4">
          {[...Array(2)].map((_, i) => (
            <CommentSkeleton key={i} />
          ))}
        </div>
      )}

      <div ref={ref} className="h-4" />
    </div>
  );
});

export default CommentsList; 