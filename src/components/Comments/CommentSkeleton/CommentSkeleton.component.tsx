const CommentSkeleton = () => (
  <div className="bg-white rounded-lg p-4 shadow-sm animate-pulse">
    <div className="flex items-center space-x-2 mb-4">
      <div className="w-8 h-8 bg-gray-200 rounded-full" />
      <div className="space-y-2">
        <div className="h-4 w-32 bg-gray-200 rounded" />
        <div className="h-3 w-24 bg-gray-200 rounded" />
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-4 w-full bg-gray-200 rounded" />
      <div className="h-4 w-3/4 bg-gray-200 rounded" />
    </div>
  </div>
);

export default CommentSkeleton; 