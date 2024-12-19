import { memo } from 'react';
import { useComments } from '../../hooks/useComments.hook';
import CommentForm from './CommentForm/CommentForm.component';
import CommentsList from './CommentsList/CommentsList.component';

const Comments = () => {
  const { comments, isLoading, handleAddComment } = useComments();

  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Komentarze</h2>
      <div className="space-y-6">
        <CommentForm onSubmit={handleAddComment} />
        <CommentsList comments={comments} isLoading={isLoading} />
      </div>
    </section>
  );
};

export default memo(Comments); 