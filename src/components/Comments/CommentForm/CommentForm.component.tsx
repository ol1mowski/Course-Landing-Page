import { memo, useState } from 'react';

type CommentFormProps = {
  onSubmit: (content: string) => void;
  isSubmitting: boolean;
};

const CommentForm = memo(({ onSubmit, isSubmitting }: CommentFormProps) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() && !isSubmitting) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Dodaj komentarz..."
        disabled={isSubmitting}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50 min-h-[100px] resize-y"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!content.trim() || isSubmitting}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Wysyłanie...' : 'Dodaj komentarz'}
        </button>
      </div>
    </form>
  );
});

export default CommentForm; 