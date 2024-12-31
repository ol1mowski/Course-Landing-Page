import { memo } from 'react';

import { CharacterCounter } from './components/CharacterCounter.component';
import { CommentTextArea } from './components/CommentTextArea.component';
import { SubmitButton } from './components/SubmitButton.component';

import { useCommentForm } from './hooks/useCommentForm.hook';

type CommentFormProps = {
  initialContent?: string;
  onSubmit: (content: string) => Promise<void>;
  onCancel?: () => void;
  isSubmitting: boolean;
  submitLabel?: string;
  cancelLabel?: string;
};

const CommentForm = memo(({ 
  initialContent = '',
  onSubmit, 
  onCancel,
  isSubmitting,
  submitLabel = 'Dodaj komentarz',
  cancelLabel = 'Anuluj'
}: CommentFormProps) => {
  const { 
    content, 
    error, 
    handleSubmit, 
    handleChange, 
    MAX_COMMENT_LENGTH 
  } = useCommentForm(onSubmit, initialContent);

  const isDisabled = !content.trim() || content.length > MAX_COMMENT_LENGTH || isSubmitting;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <CommentTextArea
          value={content}
          onChange={handleChange}
          isDisabled={isSubmitting}
        />
        <CharacterCounter current={content.length} max={MAX_COMMENT_LENGTH} />
      </div>
      
      {error && (
        <p className="text-red-600 text-sm" data-testid="comment-error">
          {error}
        </p>
      )}

      <div className="flex justify-end space-x-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            {cancelLabel}
          </button>
        )}
        <SubmitButton 
          isDisabled={isDisabled} 
          isSubmitting={isSubmitting}
          label={submitLabel}
        />
      </div>
    </form>
  );
});

export default CommentForm; 