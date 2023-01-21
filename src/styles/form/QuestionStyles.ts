import {StyleSheet} from 'react-native';
import {theme} from '../Theme';

export const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: theme.colors.brand[600],
    marginVertical: 2,
    padding: 15,
  },
  sectionTitle: {
    color: theme.colors.text.white,
    marginVertical: 5,
  },
  sectionDescription: {},
});
