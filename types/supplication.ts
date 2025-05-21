export interface Supplication {
  id: string;
  category: string;
  title?: string;
  arabicText?: string;
  translationText: string;
  transliteration?: string;
  reference?: string;
  virtues?: string;
  audioUrl?: string;
  repeats?: number;
  timeOfDay?: 'morning' | 'evening' | 'any';
  tags?: string[];
}