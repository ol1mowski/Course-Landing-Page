import { memo, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { pl } from 'date-fns/locale';
import type { Comment } from '../../../hooks/useComments.hook';
import DeleteCommentModal from '../DeleteCommentModal/DeleteCommentModal.component';

type CommentItemProps = {
  comment: Comment;
  onReply: (commentId: string, content: string) => void;
  isAddingReply: boolean;
  onDelete: (commentId: string) => void;
  isDeletingComment: boolean;
  currentUserId: string;
};

const CommentItem = memo(({ comment, onReply, isAddingReply, onDelete, isDeletingComment, currentUserId }: CommentItemProps) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const isAuthor = currentUserId === comment.author._id;

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (replyContent.trim()) {
      onReply(comment._id, replyContent);
      setReplyContent('');
      setIsReplying(false);
    }
  };

  const formattedDate = formatDistanceToNow(new Date(comment.createdAt), {
    addSuffix: true,
    locale: pl
  });

  return (
    <article className="bg-white rounded-lg p-4 shadow-sm">
      <header className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
            {comment.author.firstName[0]}
          </div>
          <div>
            <h3 className="font-medium text-gray-900">
              {comment.author.firstName} {comment.author.lastName}
            </h3>
            <time className="text-sm text-gray-500">{formattedDate}</time>
          </div>
        </div>
        {isAuthor && (
          <button
            onClick={() => setShowDeleteModal(true)}
            className="text-gray-400 hover:text-red-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </header>
      
      <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>

      {comment.replies.length > 0 && (
        <div className="mt-4 space-y-4 pl-4 border-l-2 border-gray-100">
          {comment.replies.map((reply: Comment['replies'][0]) => (
            <div key={reply._id} className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-sm">
                  {reply.author.firstName[0]}
                </div>
                <span className="font-medium text-sm text-gray-900">
                  {reply.author.firstName} {reply.author.lastName}
                </span>
                <time className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(reply.createdAt), {
                    addSuffix: true,
                    locale: pl
                  })}
                </time>
              </div>
              <p className="text-sm text-gray-700 pl-8">{reply.content}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4">
        {!isReplying ? (
          <button
            onClick={() => setIsReplying(true)}
            className="text-sm text-primary hover:text-primary-dark transition-colors"
          >
            Odpowiedz
          </button>
        ) : (
          <form onSubmit={handleSubmitReply} className="space-y-3">
            <textarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Napisz odpowiedź..."
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              disabled={isAddingReply}
            />
            <div className="flex space-x-2">
              <button
                type="submit"
                disabled={!replyContent.trim() || isAddingReply}
                className="px-3 py-1 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {isAddingReply ? 'Wysyłanie...' : 'Odpowiedz'}
              </button>
              <button
                type="button"
                onClick={() => setIsReplying(false)}
                className="px-3 py-1 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Anuluj
              </button>
            </div>
          </form>
        )}
      </div>

      <DeleteCommentModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          onDelete(comment._id);
          setShowDeleteModal(false);
        }}
        isDeleting={isDeletingComment}
      />
    </article>
  );
});

export default CommentItem; 