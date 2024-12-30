import React, { memo } from 'react';

type CommentTextAreaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isDisabled: boolean;
};

export const CommentTextArea = memo(({ value, onChange, isDisabled }: CommentTextAreaProps) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder="Dodaj komentarz..."
    disabled={isDisabled}
    data-testid="comment-input"
    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50 min-h-[100px] resize-y"
  />
)); 