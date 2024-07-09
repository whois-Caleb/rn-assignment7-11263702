import { StyleSheet } from 'react-native';
import { fetchFonts } from '../data/requirements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'Swifted Regular'
  },
  product: {
    fontSize: 18,
    marginBottom: 8,
  },
  productContainer: {
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  material: {
    fontSize: 16,
    marginBottom: 8,
  },
  delivery: {
    fontSize: 16,
    marginBottom: 16,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  navbarIconsContainer: {
    flexDirection: 'row'
  }
});

export default styles;
