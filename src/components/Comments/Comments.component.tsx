import { memo } from 'react';
import { useComments } from '../../hooks/useComments.hook';
import { useToast } from '../../hooks/useToast.hook';
import CommentsList from './CommentsList/CommentsList.component';
import { useVideo } from '../../routes/Learning/hooks/useVideo.hook';
import CommentForm from './CommentForm/CommentForm.component';
import { CommentErrorBoundary } from './ErrorBoundary/CommentErrorBoundary.component';
import { ErrorToast } from '../UI/Toast/ErrorToast.component';
import { SuccessToast } from '../UI/Toast/SuccessToast.component';



const Comments = memo(() => {
  const { currentVideo } = useVideo();
  
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  const currentUserId = currentUser.id;

  const { showSuccess, showError } = useToast();

  const {
    comments,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    addComment,
    isAddingComment,
    addReply,
    isAddingReply,
    deleteComment,
    deletingCommentId,
    updateComment,
    isUpdating
  } = useComments(currentVideo?._id || '');

  const handleAddComment = async (content: string) => {
    try {
      await addComment(content);
      showSuccess('Komentarz został dodany');
    } catch (error) {
      showError('Nie udało się dodać komentarza');
    }
  };

  const handleAddReply = async (commentId: string, content: string) => {
    try {
      await addReply({ commentId, content });
      showSuccess('Odpowiedź została dodana');
    } catch (error) {
      showError('Nie udało się dodać odpowiedzi');
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    try {
      await deleteComment(commentId);
      showSuccess('Komentarz został usunięty');
    } catch (error) {
      showError('Nie udało się usunąć komentarza');
    }
  };

  const handleUpdateComment = async (commentId: string, content: string) => {
    try {
      await updateComment({ commentId, content });
      showSuccess('Komentarz został zaktualizowany');
    } catch (error) {
      showError('Nie udało się zaktualizować komentarza');
    }
  };

  if (!currentVideo) return null;

  return (
    <CommentErrorBoundary>
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
          onDelete={handleDeleteComment}
          deletingCommentId={deletingCommentId || null}
          currentUserId={currentUserId}
          onUpdate={handleUpdateComment}
          isUpdating={isUpdating}
        />
      </section>
      <SuccessToast />
      <ErrorToast />
    </CommentErrorBoundary>
  );
});

export default Comments; 