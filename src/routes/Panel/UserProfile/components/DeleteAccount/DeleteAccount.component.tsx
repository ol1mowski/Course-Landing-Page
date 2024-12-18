import { memo } from 'react';

type DeleteAccountProps = {
  showConfirmation: boolean;
  onShowConfirmation: () => void;
  onHideConfirmation: () => void;
  onDelete: () => void;
};

const DeleteAccount = memo(({ 
  showConfirmation, 
  onShowConfirmation, 
  onHideConfirmation, 
  onDelete 
}: DeleteAccountProps) => (
  <div className="mt-8">
    <h3 className="text-xl font-bold text-gray-900 mb-4">Usuwanie konta</h3>
    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
      <p className="text-red-800 mb-4">
        Usunięcie konta spowoduje utratę dostępu do wszystkich zakupionych kursów i materiałów. 
        Ta operacja jest nieodwracalna.
      </p>
      {!showConfirmation ? (
        <button
          onClick={onShowConfirmation}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
        >
          Usuń konto
        </button>
      ) : (
        <div className="space-y-4">
          <p className="font-medium text-red-800">
            Czy na pewno chcesz usunąć swoje konto?
          </p>
          <div className="space-x-4">
            <button
              onClick={onDelete}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
            >
              Tak, usuń konto
            </button>
            <button
              onClick={onHideConfirmation}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Anuluj
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
));

export default DeleteAccount; 