import { Supplication } from '@/types/supplication';

export const supplications: Supplication[] = [
  {
    id: '1',
    category: 'Morning Remembrance',
    arabicText: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
    translationText: 'O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the Resurrection.',
    reference: 'At-Tirmidhi, Abu Dawud',
    timeOfDay: 'morning',
    tags: ['morning', 'daily'],
    repeats: 1
  },
  {
    id: '2',
    category: 'Evening Remembrance',
    arabicText: 'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ',
    translationText: 'O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the Return.',
    reference: 'At-Tirmidhi, Abu Dawud',
    timeOfDay: 'evening',
    tags: ['evening', 'daily'],
    repeats: 1
  },
  {
    id: '3',
    category: 'Morning Remembrance',
    arabicText: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَـهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    translationText: 'We have entered the morning and the kingdom of Allah has entered the morning. All praise is for Allah. None has the right to be worshipped except Allah, alone, without any partner. To Him belongs the dominion and to Him belongs all praise, and He is over all things Omnipotent.',
    virtues: 'Whoever says this in the morning has indeed acquired the reward of the day',
    reference: 'Abu Dawud',
    timeOfDay: 'morning',
    tags: ['morning', 'daily'],
    repeats: 1
  },
  {
    id: '4',
    category: 'Protection',
    arabicText: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    translationText: 'In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing.',
    virtues: 'Whoever recites it three times in the morning and in the evening, nothing will harm him.',
    reference: 'Abu Dawud, At-Tirmidhi, Ibn Majah',
    timeOfDay: 'any',
    tags: ['protection', 'daily'],
    repeats: 3
  },
  {
    id: '5',
    category: 'Prayer Related',
    title: 'Supplication before prayer',
    arabicText: 'اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ ، اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ',
    translationText: 'O Allah, distance me from my sins as You have distanced the east from the west. O Allah, cleanse me of my sins as a white garment is cleansed from dirt.',
    reference: 'Bukhari and Muslim',
    tags: ['prayer'],
    repeats: 1,
    audioUrl: 'https://example.com/audio/prayer-opening.mp3'
  },
  {
    id: '6',
    category: 'Forgiveness',
    arabicText: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
    translationText: 'I seek forgiveness from Allah, the Mighty, whom there is none worthy of worship except Him, the Living, the Eternal, and I repent unto Him.',
    virtues: 'Whoever says it with certainty during the day and dies that day before evening, will be among the people of Paradise.',
    reference: 'Abu Dawud, At-Tirmidhi, Al-Hakim',
    tags: ['forgiveness', 'repentance'],
    repeats: 1
  },
  {
    id: '7',
    category: 'Quranic Supplications',
    title: 'Dua from Surah Al-Baqarah (2:201)',
    arabicText: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    translationText: 'Our Lord, give us in this world good and in the Hereafter good and protect us from the punishment of the Fire.',
    reference: 'Quran 2:201',
    tags: ['quran', 'comprehensive'],
    repeats: 1,
    audioUrl: 'https://example.com/audio/rabbana-atina.mp3'
  },
  {
    id: '8',
    category: 'Hardship',
    title: 'Supplication during distress',
    arabicText: 'لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ',
    translationText: 'There is none worthy of worship except Allah, the Mighty, the Forbearing. There is none worthy of worship except Allah, Lord of the magnificent throne. There is none worthy of worship except Allah, Lord of the heavens, Lord of the earth, and Lord of the noble throne.',
    virtues: 'The Prophet would say this during times of distress.',
    reference: 'Bukhari and Muslim',
    tags: ['distress', 'hardship'],
    repeats: 1
  }
];