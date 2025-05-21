import { ReactNode } from 'react';

export interface Category {
  id: string;
  title: string;
  icon: ReactNode;
  count: number;
  bgColor?: string;
}