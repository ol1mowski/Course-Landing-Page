import { formatDistanceToNow } from 'date-fns';
import { pl } from 'date-fns/locale';

export const formatTimeAgo = (date: string) => 
  formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: pl
  }); 