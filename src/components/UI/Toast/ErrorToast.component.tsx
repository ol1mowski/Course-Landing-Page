import { Toaster } from 'react-hot-toast';

export const ErrorToast = () => (
  <Toaster
    position="bottom-right"
    toastOptions={{
      error: {
        duration: 4000,
        style: {
          background: '#EF4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500'
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#EF4444',
        },
        className: 'error-toast',
      },
    }}
  />
); 