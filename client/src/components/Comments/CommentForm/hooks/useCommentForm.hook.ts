import { useState, useCallback } from 'react';

const MAX_COMMENT_LENGTH = 1000;

export const useCommentForm = (onSubmit: (content: string) => Promise<void>, initialContent = '') => {
  const [content, setContent] = useState(initialContent);
  const [error, setError] = useState<string | null>(null);

  const validateContent = useCallback((text: string) => {
    if (text.length > MAX_COMMENT_LENGTH) {
      return `Komentarz może mieć maksymalnie ${MAX_COMMENT_LENGTH} znaków`;
    }
    return null;
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
    await onSubmit(content);
    setContent('');
  }, [content, onSubmit]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    setError(validateContent(newContent));
  }, [validateContent]);

  return {
    content,
    error,
    handleSubmit,
    handleChange,
    MAX_COMMENT_LENGTH,
  };
}; 