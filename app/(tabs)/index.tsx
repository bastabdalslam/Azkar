import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '@/constants/theme';
import { Header } from '@/components/Header';
import { DhikrCounter } from '@/components/DhikrCounter';
import { SupplicationCard } from '@/components/SupplicationCard';
import { searchSupplications } from '@/utils/searchUtils';
import { supplications } from '@/data/supplications';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  
  // Filter supplications for morning remembrance
  const morningSupplications = supplications.filter(
    s => s.timeOfDay === 'morning'
  ).slice(0, 3);
  
  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const toggleAudio = (id: string) => {
    setPlayingAudio((prev) => (prev === id ? null : id));
  };

  return (
    <View 
      style={[
        styles.container,
        { paddingTop: insets.top }
      ]}
    >
      <Header title="Remembrance" />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.greeting}>As-salamu alaykum</Text>
        <Text style={styles.date}>
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
        
        <View style={styles.counterSection}>
          <Text style={styles.sectionTitle}>Dhikr Counters</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.counterContainer}
          >
            <View style={styles.counterWrapper}>
              <DhikrCounter title="Subhanallah" targetCount={33} />
            </View>
            <View style={styles.counterWrapper}>
              <DhikrCounter title="Alhamdulillah" targetCount={33} />
            </View>
            <View style={styles.counterWrapper}>
              <DhikrCounter title="Allahu Akbar" targetCount={34} />
            </View>
          </ScrollView>
        </View>
        
        <View style={styles.morningSection}>
          <Text style={styles.sectionTitle}>Morning Remembrance</Text>
          <Text style={styles.sectionSubtitle}>
            Start your day with these important remembrances
          </Text>
          
          {morningSupplications.map((supplication) => (
            <SupplicationCard
              key={supplication.id}
              supplication={supplication}
              isFavorite={favorites.includes(supplication.id)}
              isPlaying={playingAudio === supplication.id}
              onToggleFavorite={() => toggleFavorite(supplication.id)}
              onToggleAudio={
                supplication.audioUrl
                  ? () => toggleAudio(supplication.id)
                  : undefined
              }
              onPress={() => {}}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.secondary,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: Theme.spacing.md,
    paddingBottom: Theme.spacing.xxl,
  },
  greeting: {
    fontFamily: Theme.typography.fontFamilies.primaryBold,
    fontSize: Theme.typography.fontSize.xl,
    color: Theme.colors.text.primary,
    marginBottom: Theme.spacing.xs,
  },
  date: {
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text.secondary,
    marginBottom: Theme.spacing.lg,
  },
  counterSection: {
    marginBottom: Theme.spacing.lg,
  },
  sectionTitle: {
    fontFamily: Theme.typography.fontFamilies.primaryBold,
    fontSize: Theme.typography.fontSize.lg,
    color: Theme.colors.text.primary,
    marginBottom: Theme.spacing.sm,
  },
  sectionSubtitle: {
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.colors.text.secondary,
    marginBottom: Theme.spacing.md,
  },
  counterContainer: {
    paddingRight: Theme.spacing.md,
  },
  counterWrapper: {
    width: 200,
    marginRight: Theme.spacing.md,
  },
  morningSection: {
    marginBottom: Theme.spacing.lg,
  },
});