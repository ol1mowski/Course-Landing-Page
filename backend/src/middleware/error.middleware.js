export const errorHandler = (
  error,
  req,
  res,
  next
) => {
  console.error('Error:', error);

  res.status(500).json({
    success: false,
    error: 'Internal server error',
  });
};

export const notFound = (req, res) => {
  console.warn(`Not found: ${req.originalUrl}`);
  
  res.status(404).json({
    success: false,
    error: 'Route not found',
  });
}; 