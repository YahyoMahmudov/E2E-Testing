import { format } from 'date-fns';

export const dataUtil = {
  getTodayFormatted: (): string => {
    const today = new Date();
    const formattedDate = format(today, 'MMM d, yyyy');
    return formattedDate;
  }
};
