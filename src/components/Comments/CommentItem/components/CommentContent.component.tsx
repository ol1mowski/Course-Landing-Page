import { memo } from 'react';

type CommentContentProps = {
  content: string;
  wasEdited: boolean;
};

export const CommentContent = memo(({ content, wasEdited }: CommentContentProps) => (
  <div>
    <p className="text-gray-700 whitespace-pre-wrap">{content}</p>
    {wasEdited && (
      <span className="text-xs text-gray-500 italic ml-1">(edytowano)</span>
    )}
  </div>
)); 