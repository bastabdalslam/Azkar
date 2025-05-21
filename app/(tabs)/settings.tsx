import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '@/constants/theme';
import { Header } from '@/components/Header';
import { 
  Moon, 
  Bell, 
  Languages, 
  Info, 
  Share, 
  Gift, 
  Heart,
  ChevronRight
} from 'lucide-react-native';

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  
  const toggleDarkMode = () => {
    setIsDarkMode(previous => !previous);
  };
  
  const toggleNotifications = () => {
    setNotifications(previous => !previous);
  };
  
  return (
    <View 
      style={[
        styles.container,
        { paddingTop: insets.top }
      ]}
    >
      <Header title="Settings" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appearance</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Moon size={20} color={Theme.colors.text.primary} />
              <Text style={styles.settingText}>Dark Mode</Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleDarkMode}
              trackColor={{ 
                false: '#D1D1D6', 
                true: Theme.colors.primaryLight 
              }}
              thumbColor={isDarkMode ? Theme.colors.primary : '#FFFFFF'}
            />
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Bell size={20} color={Theme.colors.text.primary} />
              <Text style={styles.settingText}>Prayer Time Reminders</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={toggleNotifications}
              trackColor={{ 
                false: '#D1D1D6', 
                true: Theme.colors.primaryLight 
              }}
              thumbColor={notifications ? Theme.colors.primary : '#FFFFFF'}
            />
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Application</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Languages size={20} color={Theme.colors.text.primary} />
              <Text style={styles.settingText}>Language</Text>
            </View>
            <View style={styles.settingAction}>
              <Text style={styles.settingValue}>English</Text>
              <ChevronRight size={20} color={Theme.colors.text.tertiary} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Info size={20} color={Theme.colors.text.primary} />
              <Text style={styles.settingText}>About</Text>
            </View>
            <ChevronRight size={20} color={Theme.colors.text.tertiary} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Share size={20} color={Theme.colors.text.primary} />
              <Text style={styles.settingText}>Share App</Text>
            </View>
            <ChevronRight size={20} color={Theme.colors.text.tertiary} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Gift size={20} color={Theme.colors.text.primary} />
              <Text style={styles.settingText}>Donate</Text>
            </View>
            <ChevronRight size={20} color={Theme.colors.text.tertiary} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Heart size={20} color={Theme.colors.text.primary} />
              <Text style={styles.settingText}>Rate App</Text>
            </View>
            <ChevronRight size={20} color={Theme.colors.text.tertiary} />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.versionText}>Version 1.0.0</Text>
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
  section: {
    marginBottom: Theme.spacing.lg,
    backgroundColor: Theme.colors.background.primary,
    borderRadius: Theme.borderRadius.md,
    overflow: 'hidden',
    ...Theme.shadows.small,
  },
  sectionTitle: {
    fontFamily: Theme.typography.fontFamilies.primaryBold,
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text.primary,
    padding: Theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.divider,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.divider,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text.primary,
    marginLeft: Theme.spacing.md,
  },
  settingAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text.secondary,
    marginRight: Theme.spacing.sm,
  },
  versionText: {
    fontFamily: Theme.typography.fontFamilies.primary,
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.colors.text.tertiary,
    textAlign: 'center',
    marginTop: Theme.spacing.lg,
  },
});