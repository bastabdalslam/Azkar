import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { Theme } from '@/constants/theme';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
  placeholder?: string;
}

export function SearchInput({
  value,
  onChangeText,
  onClear,
  placeholder = 'Search supplications...',
}: SearchInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Search color={Theme.colors.text.tertiary} size={20} />
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Theme.colors.text.tertiary}
      />
      {value.length > 0 && (
        <TouchableOpacity
          style={styles.clearButton}
          onPress={onClear}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <X color={Theme.colors.text.tertiary} size={18} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.background.tertiary,
    borderRadius: Theme.borderRadius.md,
    paddingHorizontal: Theme.spacing.sm,
    height: 44,
    marginBottom: Theme.spacing.md,
  },
  iconContainer: {
    marginRight: Theme.spacing.sm,
  },
  input: {
    flex: 1,
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text.primary,
    paddingVertical: 8,
    height: '100%',
  },
  clearButton: {
    padding: 4,
  },
});