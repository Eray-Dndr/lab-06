import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        <ProfileCard
          name="Messi"
          role="Forvet"
          imageSource={require('./assets/messi.png')}
        />
        
        <ProfileCard
          name="Ronaldo"
          role="Forvet"
          imageSource={require('./assets/ronaldo.png')}
        />
        
        <ProfileCard
          name="İcardi"
          role="Stoper"
          imageSource={require('./assets/icardi.png')}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  scrollView: {
    padding: 20,
  },
});