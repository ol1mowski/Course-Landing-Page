import { useState, useCallback } from 'react';
import { Comment } from '../types';

const MOCK_COMMENTS: Comment[] = [
  {
    id: 1,
    content: "Świetne wyjaśnienie tematu!",
    author: {
      id: 1,
      name: "Jan Kowalski"
    },
    createdAt: new Date().toISOString()
  }
];

export const useComments = () => {
  const [comments, setComments] = useState<Comment[]>(MOCK_COMMENTS);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddComment = useCallback((content: string) => {
    const newComment: Comment = {
      id: Date.now(),
      content,
      author: {
        id: 1,
        name: "Jan Kowalski"
      },
      createdAt: new Date().toISOString()
    };

    setComments(prev => [newComment, ...prev]);
  }, []);

  return {
    comments,
    isLoading,
    handleAddComment
  };
}; 