import { useCallback } from 'react';
import { useComments } from '../../../hooks/useComments.hook';
import { useToast } from '../../../hooks/useToast.hook';

export const useCommentsSection = (videoId: string) => {
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
  } = useComments(videoId);

  const handleAddComment = useCallback(async (content: string) => {
    try {
      await addComment(content);
      showSuccess('Komentarz został dodany');
    } catch (error) {
      showError('Nie udało się dodać komentarza');
    }
  }, [addComment, showSuccess, showError]);

  const handleAddReply = useCallback(async (commentId: string, content: string) => {
    try {
      await addReply({ commentId, content });
      showSuccess('Odpowiedź została dodana');
    } catch (error) {
      showError('Nie udało się dodać odpowiedzi');
    }
  }, [addReply, showSuccess, showError]);

  const handleDeleteComment = useCallback(async (commentId: string) => {
    try {
      await deleteComment(commentId);
      showSuccess('Komentarz został usunięty');
    } catch (error) {
      showError('Nie udało się usunąć komentarza');
    }
  }, [deleteComment, showSuccess, showError]);

  const handleUpdateComment = useCallback(async (commentId: string, content: string) => {
    try {
      await updateComment({ commentId, content });
      showSuccess('Komentarz został zaktualizowany');
    } catch (error) {
      showError('Nie udało się zaktualizować komentarza');
    }
  }, [updateComment, showSuccess, showError]);

  return {
    comments,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isAddingComment,
    isAddingReply,
    deletingCommentId,
    isUpdating,
    handlers: {
      handleAddComment,
      handleAddReply,
      handleDeleteComment,
      handleUpdateComment
    }
  };
}; 