export const validatePaymentSession = (req, res, next) => {
  const { paymentToken } = req.headers;
  
  if (!paymentToken) {
    return res.status(401).json({
      success: false,
      error: 'Brak tokenu płatności'
    });
  }
  next();
}; 