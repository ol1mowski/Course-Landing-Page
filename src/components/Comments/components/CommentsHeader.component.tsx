import { memo } from 'react';

type CommentsHeaderProps = {
  count: number;
};

export const CommentsHeader = memo(({ count }: CommentsHeaderProps) => (
  <h2 className="text-xl font-bold text-gray-900 mb-6">
    Komentarze ({count})
  </h2>
)); 