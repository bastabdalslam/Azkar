import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '@/constants/theme';
import { Header } from '@/components/Header';
import { SupplicationCard } from '@/components/SupplicationCard';
import { EmptyState } from '@/components/EmptyState';
import { supplications } from '@/data/supplications';
import { Heart } from 'lucide-react-native';

export default function FavoritesScreen() {
  const insets = useSafeAreaInsets();
  // This would normally come from persistent storage
  const [favorites, setFavorites] = useState<string[]>(['1', '4', '7']);
  
  const favoriteSupplications = supplications.filter(item => 
    favorites.includes(item.id)
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
  
  return (
    <View 
      style={[
        styles.container,
        { paddingTop: insets.top }
      ]}
    >
      <Header title="Favorites" />
      
      <View style={styles.contentContainer}>
        {favoriteSupplications.length === 0 ? (
          <EmptyState
            icon={<Heart color={Theme.colors.text.tertiary} size={48} />}
            title="No Favorites Yet"
            message="Save your favorite supplications for quick access by tapping the bookmark icon."
          />
        ) : (
          <FlatList
            data={favoriteSupplications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <SupplicationCard
                supplication={item}
                isFavorite={true}
                onToggleFavorite={() => toggleFavorite(item.id)}
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