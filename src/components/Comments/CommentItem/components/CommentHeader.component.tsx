import { memo } from 'react';

import { EditIcon } from '../../../UI/Icons/EditIcon.component';
import { TrashIcon } from '../../../UI/Icons/TrashIcon.component';
import { formatTimeAgo } from '../../../../utils/formatTimeAgo';


type CommentHeaderProps = {
  author: {
    firstName: string;
    lastName: string;
  };
  createdAt: string;
  isAuthor: boolean;
  onEdit: () => void;
  onDelete: () => void;
};

export const CommentHeader = memo(({ author, createdAt, isAuthor, onEdit, onDelete }: CommentHeaderProps) => (
  <header className="flex items-center justify-between mb-2">
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
        {author.firstName[0]}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">
          {author.firstName} {author.lastName}
        </h3>
        <time className="text-sm text-gray-500">{formatTimeAgo(createdAt)}</time>
      </div>
    </div>
    {isAuthor && (
      <div className="flex space-x-2">
        <button
          onClick={onEdit}
          data-testid="edit-comment-button"
          className="text-gray-400 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-blue-50"
        >
          <EditIcon />
        </button>
        <button
          onClick={onDelete}
          data-testid="delete-comment-button"
          className="text-gray-400 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50"
        >
          <TrashIcon />
        </button>
      </div>
    )}
  </header>
)); 