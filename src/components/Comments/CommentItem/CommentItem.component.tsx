import { memo, useState } from "react";
import { useCommentItem } from './hooks/useCommentItem.hook';
import { CommentHeader } from './components/CommentHeader.component';
import { CommentContent } from './components/CommentContent.component';

import type { Comment } from '../../../types/comment.types';
import CommentForm from "../CommentForm/CommentForm.component";
import DeleteCommentModal from "../DeleteCommentModal/DeleteCommentModal.component";
import { formatTimeAgo } from "../../../utils/formatTimeAgo";

type CommentItemProps = {
  comment: Comment;
  onReply: (commentId: string, content: string) => Promise<void>;
  isAddingReply: boolean;
  onDelete: (commentId: string) => Promise<void>;
  deletingCommentId: string | null;
  currentUserId: string;
  onUpdate: (commentId: string, content: string) => Promise<void>;
  isUpdating: boolean;
};

const CommentItem = memo(({
  comment,
  onReply,
  isAddingReply,
  onDelete,
  deletingCommentId,
  currentUserId,
  onUpdate,
  isUpdating,
}: CommentItemProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const isAuthor = comment.author._id === currentUserId;
  const isDeleting = deletingCommentId === comment._id;

  const {
    isEditing,
    setIsEditing,
    isReplying,
    setIsReplying,
    editedContent,
    replyContent,
    handleEditSubmit,
    handleSubmitReply,
    handleCancelEdit,
  } = useCommentItem({
    initialContent: comment.content,
    onUpdate,
    onReply,
    commentId: comment._id,
  });

  return (
    <article className="bg-white rounded-lg p-4 shadow-sm">
      <CommentHeader
        author={comment.author}
        createdAt={comment.createdAt}
        isAuthor={isAuthor}
        onEdit={() => setIsEditing(true)}
        onDelete={() => setShowDeleteModal(true)}
      />

      {isEditing ? (
        <CommentForm
          initialContent={editedContent}
          onSubmit={handleEditSubmit}
          onCancel={handleCancelEdit}
          isSubmitting={isUpdating}
          submitLabel="Zapisz"
          cancelLabel="Anuluj"
        />
      ) : (
        <CommentContent
          content={comment.content}
          wasEdited={comment.updatedAt !== comment.createdAt}
        />
      )}

      <div className="mt-4">
        {!isReplying ? (
          <button
            onClick={() => setIsReplying(true)}
            data-testid="reply-button"
            className="text-sm text-primary hover:text-primary-dark transition-colors"
          >
            Odpowiedz
          </button>
        ) : (
          <CommentForm
            initialContent={replyContent}
            onSubmit={handleSubmitReply}
            onCancel={() => setIsReplying(false)}
            isSubmitting={isAddingReply}
            submitLabel="Odpowiedz"
            cancelLabel="Anuluj"
          />
        )}
      </div>

      {comment.replies.length > 0 && (
        <div className="mt-4 space-y-4 pl-4 border-l-2 border-gray-100">
          {comment.replies.map((reply) => (
            <div key={reply._id} className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-sm">
                  {reply.author.firstName[0]}
                </div>
                <span className="font-medium text-sm text-gray-900">
                  {reply.author.firstName} {reply.author.lastName}
                </span>
                <time className="text-xs text-gray-500">
                  {formatTimeAgo(reply.createdAt)}
                </time>
              </div>
              <p className="text-sm text-gray-700 pl-8">{reply.content}</p>
            </div>
          ))}
        </div>
      )}

      <DeleteCommentModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          onDelete(comment._id);
          setShowDeleteModal(false);
        }}
        isDeleting={isDeleting}
      />
    </article>
  );
});

export default CommentItem;
