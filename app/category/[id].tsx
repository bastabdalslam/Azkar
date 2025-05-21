import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '@/constants/theme';
import { Header } from '@/components/Header';
import { SupplicationCard } from '@/components/SupplicationCard';
import { EmptyState } from '@/components/EmptyState';
import { supplications } from '@/data/supplications';
import { categories } from '@/data/categories';

export default function CategoryScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  
  const category = categories.find(cat => cat.id === id);
  
  const categorySupplications = supplications.filter(
    supplication => supplication.category.toLowerCase() === category?.title.toLowerCase() || 
                   supplication.tags?.includes(id)
  );
  
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
      <Header 
        title={category?.title || 'Category'} 
        showBackButton
      />
      
      <View style={styles.contentContainer}>
        {categorySupplications.length === 0 ? (
          <EmptyState
            title="No Supplications Available"
            message="We're currently adding more content to this category."
          />
        ) : (
          <FlatList
            data={categorySupplications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <SupplicationCard
                supplication={item}
                isFavorite={favorites.includes(item.id)}
                isPlaying={playingAudio === item.id}
                onToggleFavorite={() => toggleFavorite(item.id)}
                onToggleAudio={
                  item.audioUrl
                    ? () => toggleAudio(item.id)
                    : undefined
                }
                onPress={() => {}}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.secondary,
  },
  contentContainer: {
    flex: 1,
    padding: Theme.spacing.md,
  },
  listContent: {
    paddingBottom: Theme.spacing.xxl,
  },
});