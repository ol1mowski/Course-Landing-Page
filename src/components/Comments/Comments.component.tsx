import { memo } from 'react';
import { useComments } from '../../hooks/useComments.hook';
import CommentsList from './CommentsList/CommentsList.component';
import { useVideo } from '../../routes/Learning/hooks/useVideo.hook';
import CommentForm from './CommentForm/CommentForm.component';


const Comments = memo(() => {
  const { currentVideo } = useVideo();

  const {
    comments,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    addComment,
    isAddingComment,
    addReply,
    isAddingReply
  } = useComments(currentVideo?._id || '');

  const handleAddComment = async (content: string) => {
    try {
      await addComment(content);
    } catch (error) {
        throw error;
    }
  };

  const handleAddReply = async (commentId: string, content: string) => {
    try {
      await addReply({ commentId, content });
    } catch (error) {
      throw error;
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
        onReply={handleAddReply}
        isAddingReply={isAddingReply}
      />
    </section>
  );
});

export default Comments; 