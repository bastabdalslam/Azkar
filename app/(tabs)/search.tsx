import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '@/constants/theme';
import { Header } from '@/components/Header';
import { SearchInput } from '@/components/SearchInput';
import { SupplicationCard } from '@/components/SupplicationCard';
import { EmptyState } from '@/components/EmptyState';
import { supplications } from '@/data/supplications';
import { Search } from 'lucide-react-native';

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(supplications);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    const timeoutId = setTimeout(() => {
      const results = supplications.filter(supplication => {
        const searchLower = searchQuery.toLowerCase();
        return (
          (supplication.title?.toLowerCase().includes(searchLower) || false) ||
          supplication.translationText.toLowerCase().includes(searchLower) ||
          (supplication.arabicText?.toLowerCase().includes(searchLower) || false) ||
          (supplication.category.toLowerCase().includes(searchLower)) ||
          (supplication.tags?.some(tag => tag.toLowerCase().includes(searchLower)) || false)
        );
      });
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);
  
  const handleClearSearch = () => {
    setSearchQuery('');
  };
  
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
      <Header title="Search" />
      
      <View style={styles.contentContainer}>
        <SearchInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={handleClearSearch}
        />
        
        {isSearching ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color={Theme.colors.primary} size="large" />
          </View>
        ) : searchQuery.trim() === '' ? (
          <EmptyState
            icon={<Search color={Theme.colors.text.tertiary} size={48} />}
            title="Search Supplications"
            message="Enter keywords to find supplications by text, category, or tag."
          />
        ) : searchResults.length === 0 ? (
          <EmptyState
            title="No Results Found"
            message={`No supplications found matching "${searchQuery}". Try a different search term.`}
          />
        ) : (
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <SupplicationCard
                supplication={item}
                isFavorite={favorites.includes(item.id)}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingBottom: Theme.spacing.xxl,
  },
});