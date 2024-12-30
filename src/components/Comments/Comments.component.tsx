import { memo } from 'react';
import { useVideo } from '../../routes/Learning/hooks/useVideo.hook';
import { useCommentsSection } from './hooks/useCommentsSection.hook';
import { CommentErrorBoundary } from './ErrorBoundary/CommentErrorBoundary.component';
import { CommentsHeader } from './components/CommentsHeader.component';
import CommentForm from './CommentForm/CommentForm.component';
import CommentsList from './CommentsList/CommentsList.component';
import { SuccessToast } from '../UI/Toast/SuccessToast.component';
import { ErrorToast } from '../UI/Toast/ErrorToast.component';

const Comments = memo(() => {
  const { currentVideo } = useVideo();
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  
  const {
    comments,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isAddingComment,
    isAddingReply,
    deletingCommentId,
    isUpdating,
    handlers
  } = useCommentsSection(currentVideo?._id || '');

  if (!currentVideo) return null;

  return (
    <CommentErrorBoundary>
      <section className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <CommentsHeader count={comments.length} />
          <CommentForm 
            onSubmit={handlers.handleAddComment}
            isSubmitting={isAddingComment}
          />
        </div>

        <CommentsList
          comments={comments}
          isLoading={isLoading}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={!!hasNextPage}
          onLoadMore={fetchNextPage}
          onReply={handlers.handleAddReply}
          isAddingReply={isAddingReply}
          onDelete={handlers.handleDeleteComment}
          deletingCommentId={deletingCommentId || null}
          currentUserId={currentUser.id}
          onUpdate={handlers.handleUpdateComment}
          isUpdating={isUpdating}
        />
      </section>
      <SuccessToast />
      <ErrorToast />
    </CommentErrorBoundary>
  );
});

export default Comments; 