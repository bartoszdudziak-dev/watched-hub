import { format } from 'date-fns';

export const formatDate = (date: string | Date | null) => {
  if (!date) return;

  return format(String(date), 'PP');
};
