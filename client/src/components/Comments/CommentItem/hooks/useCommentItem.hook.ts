import { useState, useCallback } from 'react';

type UseCommentItemProps = {
  initialContent: string;
  onUpdate: (commentId: string, content: string) => Promise<void>;
  onReply: (commentId: string, content: string) => Promise<void>;
  commentId: string;
};

export const useCommentItem = ({ initialContent, onUpdate, onReply, commentId }: UseCommentItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [editedContent, setEditedContent] = useState(initialContent);
  const [replyContent, setReplyContent] = useState('');

  const handleEditSubmit = useCallback(async (content: string) => {
    if (content.trim() && content !== initialContent) {
      await onUpdate(commentId, content);
      setIsEditing(false);
    }
  }, [initialContent, commentId, onUpdate]);

  const handleSubmitReply = useCallback(async (content: string) => {
    if (content.trim()) {
      await onReply(commentId, content);
      setIsReplying(false);
      setReplyContent('');
    }
  }, [commentId, onReply]);

  const handleCancelEdit = useCallback(() => {
    setIsEditing(false);
    setEditedContent(initialContent);
  }, [initialContent]);

  return {
    isEditing,
    setIsEditing,
    isReplying,
    setIsReplying,
    editedContent,
    setEditedContent,
    replyContent,
    setReplyContent,
    handleEditSubmit,
    handleSubmitReply,
    handleCancelEdit,
  };
}; 