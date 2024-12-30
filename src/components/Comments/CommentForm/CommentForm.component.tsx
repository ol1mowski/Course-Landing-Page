import { memo, useState } from 'react';

type CommentFormProps = {
  onSubmit: (content: string) => void;
  isSubmitting: boolean;
};

const MAX_COMMENT_LENGTH = 1000;

const CommentForm = memo(({ onSubmit, isSubmitting }: CommentFormProps) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      setError('Treść komentarza jest wymagana');
      return;
    }

    if (content.length > MAX_COMMENT_LENGTH) {
      setError(`Komentarz może mieć maksymalnie ${MAX_COMMENT_LENGTH} znaków`);
      return;
    }

    setError(null);
    onSubmit(content);
    setContent('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    
    if (newContent.length > MAX_COMMENT_LENGTH) {
      setError(`Komentarz może mieć maksymalnie ${MAX_COMMENT_LENGTH} znaków`);
    } else {
      setError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <textarea
          value={content}
          onChange={handleChange}
          placeholder="Dodaj komentarz..."
          disabled={isSubmitting}
          data-testid="comment-input"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50 min-h-[100px] resize-y"
        />
        <div className="absolute bottom-2 right-2 text-sm text-gray-500">
          {content.length}/{MAX_COMMENT_LENGTH}
        </div>
      </div>
      
      {error && (
        <p className="text-red-600 text-sm" data-testid="comment-error">
          {error}
        </p>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!content.trim() || content.length > MAX_COMMENT_LENGTH || isSubmitting}
          data-testid="submit-comment-button"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Wysyłanie...' : 'Dodaj komentarz'}
        </button>
      </div>
    </form>
  );
});

export default CommentForm; 