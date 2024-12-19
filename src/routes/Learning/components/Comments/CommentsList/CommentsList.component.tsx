import { memo } from 'react';
import { Comment } from '../../../types';
import CommentItem from './CommentItem/CommentItem.component';

type CommentsListProps = {
  comments: Comment[];
  isLoading: boolean;
};

const CommentsList = memo(({ comments, isLoading }: CommentsListProps) => {
  if (isLoading) {
    return <div className="text-center text-gray-500">Ładowanie komentarzy...</div>;
  }

  if (comments.length === 0) {
    return <div className="text-center text-gray-500">Brak komentarzy</div>;
  }

  return (
    <div className="space-y-4">
      {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
});

export default CommentsList; 