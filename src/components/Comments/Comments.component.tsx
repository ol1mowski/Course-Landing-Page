import { memo } from 'react';
import { useComments } from '../../hooks/useComments.hook';
import CommentsList from './CommentsList/CommentsList.component';
import { useVideo } from '../../routes/Learning/hooks/useVideo.hook';
import CommentForm from './CommentForm/CommentForm.component';


const Comments = memo(() => {
  const { currentVideo } = useVideo();
  console.log('currentVideo:', currentVideo);

  const {
    comments,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    addComment,
    isAddingComment
  } = useComments(currentVideo?.id.toString() || '');

  const handleAddComment = async (content: string) => {
    console.log('Próba dodania komentarza:', content);
    try {
      await addComment(content);
    } catch (error) {
      console.error('Błąd dodawania komentarza:', error);
    }
  };

  if (!currentVideo) return null;

  return (
    <section className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Komentarze ({comments.length})
        </h2>

        <CommentForm 
          onSubmit={handleAddComment}
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