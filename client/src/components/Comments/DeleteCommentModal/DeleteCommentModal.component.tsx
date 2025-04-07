import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type DeleteCommentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isDeleting: boolean;
};

const DeleteCommentModal = memo(({ isOpen, onClose, onConfirm, isDeleting }: DeleteCommentModalProps) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Potwierdź usunięcie
            </h3>
            <p className="text-gray-600 mb-6">
              Czy na pewno chcesz usunąć ten komentarz? Tej operacji nie można cofnąć.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                data-testid="cancel-delete-button"
                onClick={onClose}
                disabled={isDeleting}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Anuluj
              </button>
              <button
                data-testid="confirm-delete-button"
                onClick={onConfirm}
                disabled={isDeleting}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {isDeleting ? 'Usuwanie...' : 'Usuń'}
              </button>
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
));

export default DeleteCommentModal; 