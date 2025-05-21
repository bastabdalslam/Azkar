import React from 'react';
import { 
  Sun, 
  Moon, 
  PrayingHands, 
  Bookmark,
  Alarm,
  UserCheck,
  Heart,
  Smile,
  Coffee,
  Cloud,
  Home,
  Book
} from 'lucide-react-native';
import { Theme } from '@/constants/theme';
import { Category } from '@/types/category';

export const categories: Category[] = [
  {
    id: 'morning',
    title: 'Morning Remembrance',
    icon: <Sun color="#FFFFFF" size={24} />,
    count: 20,
    bgColor: '#1D9BF0'
  },
  {
    id: 'evening',
    title: 'Evening Remembrance',
    icon: <Moon color="#FFFFFF" size={24} />,
    count: 20,
    bgColor: '#155B95'
  },
  {
    id: 'prayer',
    title: 'Prayer Related',
    icon: <PrayingHands color="#FFFFFF" size={24} />,
    count: 15,
    bgColor: '#0D6D6E'
  },
  {
    id: 'quran',
    title: 'Quranic Supplications',
    icon: <Book color="#FFFFFF" size={24} />,
    count: 25,
    bgColor: '#4C956C'
  },
  {
    id: 'protection',
    title: 'Protection',
    icon: <Bookmark color="#FFFFFF" size={24} />,
    count: 12,
    bgColor: '#AD343E'
  },
  {
    id: 'waking',
    title: 'Waking Up',
    icon: <Alarm color="#FFFFFF" size={24} />,
    count: 7,
    bgColor: '#F2A541'
  },
  {
    id: 'sleeping',
    title: 'Before Sleeping',
    icon: <Cloud color="#FFFFFF" size={24} />,
    count: 8,
    bgColor: '#274C77'
  },
  {
    id: 'forgiveness',
    title: 'Forgiveness',
    icon: <UserCheck color="#FFFFFF" size={24} />,
    count: 10,
    bgColor: '#6A994E'
  },
  {
    id: 'gratitude',
    title: 'Gratitude',
    icon: <Heart color="#FFFFFF" size={24} />,
    count: 8,
    bgColor: '#BC4749'
  },
  {
    id: 'happiness',
    title: 'Happiness & Joy',
    icon: <Smile color="#FFFFFF" size={24} />,
    count: 6,
    bgColor: '#F0A202'
  },
  {
    id: 'hardship',
    title: 'During Hardship',
    icon: <Coffee color="#FFFFFF" size={24} />,
    count: 12,
    bgColor: '#386641'
  },
  {
    id: 'home',
    title: 'Home & Family',
    icon: <Home color="#FFFFFF" size={24} />,
    count: 9,
    bgColor: '#9E2A2B'
  },
];