import { memo } from 'react';
import { useVideo } from '../../hooks/useVideo.hook';
import { useComments } from '../../hooks/useComments.hook';
import CommentsList from './CommentsList/CommentsList.component';
import CommentForm from './CommentForm/CommentForm.component';

const Comments = memo(() => {
  const { currentVideo } = useVideo();
  const {
    comments,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    addComment,
    isAddingComment
  } = useComments(currentVideo?._id || '');

  if (!currentVideo) return null;

  return (
    <section className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Komentarze ({comments.length})
        </h2>

        <CommentForm 
          onSubmit={addComment}
          isSubmitting={isAddingComment}
        />
      </div>

      <CommentsList
        comments={comments}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={!!hasNextPage}
        onLoadMore={fetchNextPage}
      />
    </section>
  );
});

export default Comments; 