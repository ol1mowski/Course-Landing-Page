import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { API_CONFIG } from '../config/api.config';

export type Comment = {
  _id: string;
  content: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  replies: Array<{
    _id: string;
    content: string;
    author: {
      _id: string;
      firstName: string;
      lastName: string;
    };
    createdAt: string;
  }>;
  createdAt: string;
};

type CommentsResponse = {
  data: {
    comments: Comment[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      pages: number;
    };
  };
};

export const useComments = (videoId: string) => {
  const queryClient = useQueryClient();
  const COMMENTS_QUERY_KEY = ['comments', videoId];
  const COMMENTS_PER_PAGE = 10;

  const fetchComments = async ({ pageParam = 1 }): Promise<CommentsResponse> => {
    const token = localStorage.getItem('token');
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.COMMENTS}/video/${videoId}?page=${pageParam}&limit=${COMMENTS_PER_PAGE}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    if (!response.ok) {
      throw new Error('Nie udało się pobrać komentarzy');
    }

    return response.json();
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error
  } = useInfiniteQuery({
    queryKey: COMMENTS_QUERY_KEY,
    queryFn: fetchComments,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, pages } = lastPage.data.pagination;
      return page < pages ? page + 1 : undefined;
    },
    staleTime: 1000 * 60 * 5
  });

  const addCommentMutation = useMutation({
    mutationFn: async (content: string) => {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.COMMENTS}/video/${videoId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ content })
        }
      );
      if (!response.ok) {
        throw new Error('Nie udało się dodać komentarza');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: COMMENTS_QUERY_KEY });
    }
  });

  const addReplyMutation = useMutation({
    mutationFn: async ({ commentId, content }: { commentId: string; content: string }) => {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.COMMENTS}/${commentId}/reply`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ content })
        }
      );
      if (!response.ok) {
        throw new Error('Nie udało się dodać odpowiedzi');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: COMMENTS_QUERY_KEY });
    }
  });

  return {
    comments: data?.pages.flatMap(page => page.data.comments) ?? [],
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    addComment: addCommentMutation.mutate,
    isAddingComment: addCommentMutation.isPending,
    addReply: addReplyMutation.mutate,
    isAddingReply: addReplyMutation.isPending
  };
}; 