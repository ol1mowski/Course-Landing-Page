import { memo } from 'react';


import { useCommentsSection } from './hooks/useCommentsSection.hook';
import { CommentErrorBoundary } from './ErrorBoundary/CommentErrorBoundary.component';
import { CommentsHeader } from './components/CommentsHeader.component';

import CommentForm from './CommentForm/CommentForm.component';
import CommentsList from './CommentsList/CommentsList.component';

import { SuccessToast } from '../UI/Toast/SuccessToast.component';
import { ErrorToast } from '../UI/Toast/ErrorToast.component';
import { useVideo } from '../Learning/hooks/useVideo.hook';

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

  const { length } = comments;
  const { id } = currentUser;
  const { handleAddComment, handleAddReply, handleDeleteComment, handleUpdateComment } = handlers;

  return (
    <CommentErrorBoundary>
      <section className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <CommentsHeader count={length} />
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
          currentUserId={id}
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