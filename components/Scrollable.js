import React from 'react';
import { Platform, ScrollView } from 'react-native';

/**
 * Cross-platform scroll container. On web we sometimes hit issues where
 * ScrollView with flex styles doesn't trigger native scrolling due to parent layout.
 * This component falls back to a plain div with overflow-y auto to guarantee scroll.
 */
export default function Scrollable({ children, style, contentContainerStyle, showsVerticalScrollIndicator = true }) {
  if (Platform.OS === 'web') {
    return (
      <div style={{ ...style, overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <div style={{ ...contentContainerStyle, display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </div>
    );
  }
  return (
    <ScrollView
      style={style}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    >
      {children}
    </ScrollView>
  );
}
