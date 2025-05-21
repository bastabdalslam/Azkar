import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '@/constants/theme';
import { Header } from '@/components/Header';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { useRouter } from 'expo-router';

export default function CollectionScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  
  const handleCategoryPress = (categoryId: string) => {
    router.push(`/category/${categoryId}`);
  };
  
  return (
    <View 
      style={[
        styles.container,
        { paddingTop: insets.top }
      ]}
    >
      <Header title="Collection" />
      
      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>
          Browse through different categories of supplications and remembrances
        </Text>
        
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryCard
              category={item}
              onPress={() => handleCategoryPress(item.id)}
            />
          )}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
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
  subtitle: {
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text.secondary,
    marginBottom: Theme.spacing.lg,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  listContent: {
    paddingBottom: Theme.spacing.xxl,
  },
});