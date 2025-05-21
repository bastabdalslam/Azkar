import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { BookmarkPlus, BookmarkCheck, Play, Pause } from 'lucide-react-native';
import { Theme } from '@/constants/theme';
import { Supplication } from '@/types/supplication';

interface SupplicationCardProps {
  supplication: Supplication;
  isFavorite: boolean;
  isPlaying?: boolean;
  onToggleFavorite: () => void;
  onToggleAudio?: () => void;
  onPress: () => void;
}

export function SupplicationCard({
  supplication,
  isFavorite,
  isPlaying = false,
  onToggleFavorite,
  onToggleAudio,
  onPress,
}: SupplicationCardProps) {
  const hasAudio = !!supplication.audioUrl;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Text style={styles.category}>{supplication.category}</Text>
        <TouchableOpacity 
          onPress={onToggleFavorite}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          {isFavorite ? (
            <BookmarkCheck color={Theme.colors.accent} size={20} />
          ) : (
            <BookmarkPlus color={Theme.colors.text.secondary} size={20} />
          )}
        </TouchableOpacity>
      </View>
      
      {supplication.title && (
        <Text style={styles.title}>{supplication.title}</Text>
      )}
      
      {supplication.arabicText && (
        <Text style={styles.arabicText}>{supplication.arabicText}</Text>
      )}
      
      <Text style={styles.translationText}>{supplication.translationText}</Text>
      
      {supplication.reference && (
        <Text style={styles.reference}>{supplication.reference}</Text>
      )}
      
      <View style={styles.footer}>
        {supplication.virtues && (
          <Text style={styles.virtues} numberOfLines={2}>
            Virtue: {supplication.virtues}
          </Text>
        )}
        
        {hasAudio && onToggleAudio && (
          <TouchableOpacity 
            style={styles.audioButton}
            onPress={onToggleAudio}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            {isPlaying ? (
              <Pause color={Theme.colors.text.inverse} size={16} />
            ) : (
              <Play color={Theme.colors.text.inverse} size={16} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.background.primary,
    borderRadius: Theme.borderRadius.md,
    padding: Theme.spacing.md,
    marginBottom: Theme.spacing.md,
    ...Theme.shadows.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.sm,
  },
  category: {
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.colors.primary,
  },
  title: {
    fontFamily: Theme.typography.fontFamilies.primaryBold,
    fontSize: Theme.typography.fontSize.lg,
    color: Theme.colors.text.primary,
    marginBottom: Theme.spacing.sm,
  },
  arabicText: {
    fontFamily: Theme.typography.fontFamilies.arabicBold,
    fontSize: Theme.typography.fontSize.xl,
    color: Theme.colors.text.primary,
    textAlign: 'right',
    lineHeight: Platform.OS === 'ios' ? 40 : 44,
    marginBottom: Theme.spacing.md,
  },
  translationText: {
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text.primary,
    lineHeight: Theme.typography.lineHeight.relaxed * Theme.typography.fontSize.md,
    marginBottom: Theme.spacing.md,
  },
  reference: {
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.sm,
    fontStyle: 'italic',
    color: Theme.colors.text.secondary,
    marginBottom: Theme.spacing.sm,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  virtues: {
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.colors.text.tertiary,
    flex: 1,
    marginRight: Theme.spacing.sm,
  },
  audioButton: {
    backgroundColor: Theme.colors.primary,
    width: 32,
    height: 32,
    borderRadius: Theme.borderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
  },
});