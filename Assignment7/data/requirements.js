import * as FileSystem from 'expo-file-system';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

export const fetchFonts = () => {
    try {
      return Font.loadAsync({
        'Swifted Regular': require('../assets/fonts/Swifted DEMO.otf'),
      });
    } catch (error) {
      console.error('Error in fetchFonts:', error);
      throw error;
    }
  };