import { Toaster } from 'react-hot-toast';

export const SuccessToast = () => (
  <Toaster
    position="bottom-right"
    toastOptions={{
      success: {
        duration: 3000,
        style: {
          background: '#10B981',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500'
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#10B981',
        },
      },
    }}
  />
); 