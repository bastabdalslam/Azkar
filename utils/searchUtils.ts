import { Supplication } from '@/types/supplication';

export const searchSupplications = (
  supplications: Supplication[],
  query: string
): Supplication[] => {
  if (!query.trim()) return [];
  
  const searchLower = query.toLowerCase();
  
  return supplications.filter((supplication) => {
    return (
      (supplication.title?.toLowerCase().includes(searchLower) || false) ||
      supplication.translationText.toLowerCase().includes(searchLower) ||
      (supplication.arabicText?.toLowerCase().includes(searchLower) || false) ||
      (supplication.category.toLowerCase().includes(searchLower)) ||
      (supplication.tags?.some(tag => tag.toLowerCase().includes(searchLower)) || false)
    );
  });
};