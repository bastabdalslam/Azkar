import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '@/constants/theme';
import { Category } from '@/types/category';

interface CategoryCardProps {
  category: Category;
  onPress: () => void;
}

export function CategoryCard({ category, onPress }: CategoryCardProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: category.bgColor || Theme.colors.primary }]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        {category.icon}
      </View>
      <Text style={styles.title}>{category.title}</Text>
      <Text style={styles.count}>{category.count} items</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Theme.borderRadius.md,
    padding: Theme.spacing.md,
    marginBottom: Theme.spacing.md,
    width: '48%',
    aspectRatio: 1,
    justifyContent: 'space-between',
    ...Theme.shadows.small,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: Theme.borderRadius.round,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },
  title: {
    fontFamily: Theme.typography.fontFamilies.primaryBold,
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text.inverse,
    marginBottom: Theme.spacing.xs,
  },
  count: {
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.sm,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});