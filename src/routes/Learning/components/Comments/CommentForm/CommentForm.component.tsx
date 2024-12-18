import { memo, useState } from 'react';
import { Comment } from '../../../types';

type CommentFormProps = {
  onSubmit: (content: string) => void;
};

const CommentForm = memo(({ onSubmit }: CommentFormProps) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
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
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary min-h-[100px]"
      />
      <button
        type="submit"
        disabled={!content.trim()}
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Dodaj komentarz
      </button>
    </form>
  );
});

export default CommentForm; 