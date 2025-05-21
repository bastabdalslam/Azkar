import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { RotateCcw } from 'lucide-react-native';
import { Theme } from '@/constants/theme';

interface DhikrCounterProps {
  targetCount?: number;
  title: string;
  subtitle?: string;
}

export function DhikrCounter({ 
  targetCount = 33, 
  title, 
  subtitle 
}: DhikrCounterProps) {
  const [count, setCount] = useState(0);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  
  const progress = count / targetCount;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    if (count < targetCount) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const resetCounter = () => {
    setCount(0);
  };

  const progressInterpolate = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
        <TouchableOpacity 
          onPress={resetCounter}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={styles.resetButton}
        >
          <RotateCcw color={Theme.colors.text.secondary} size={18} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.counterContainer}>
        <TouchableOpacity 
          activeOpacity={0.9}
          onPress={handlePress}
        >
          <Animated.View 
            style={[
              styles.counter, 
              { transform: [{ scale: scaleAnim }] }
            ]}
          >
            <Text style={styles.counterText}>{count}</Text>
            <Text style={styles.targetText}>/ {targetCount}</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.progressContainer}>
        <Animated.View 
          style={[
            styles.progressBar, 
            { width: progressInterpolate }
          ]} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.background.primary,
    borderRadius: Theme.borderRadius.md,
    padding: Theme.spacing.md,
    marginBottom: Theme.spacing.md,
    ...Theme.shadows.small,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },
  title: {
    fontFamily: Theme.typography.fontFamilies.primaryBold,
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text.primary,
  },
  subtitle: {
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.colors.text.secondary,
    marginTop: 2,
  },
  resetButton: {
    padding: 8,
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Theme.spacing.md,
  },
  counter: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...Theme.shadows.medium,
  },
  counterText: {
    fontFamily: Theme.typography.fontFamilies.primaryBold,
    fontSize: 40,
    color: Theme.colors.text.inverse,
  },
  targetText: {
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.sm,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  progressContainer: {
    height: 6,
    backgroundColor: Theme.colors.background.tertiary,
    borderRadius: Theme.borderRadius.round,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: Theme.colors.accent,
  },
});