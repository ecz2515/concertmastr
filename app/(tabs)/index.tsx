import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useAppContext } from '@/AppStateProvider';
import { router } from 'expo-router';
import concertData from '@/concert.json';
import SilencePhonesModal from '../../components/SilencePhonesModal';

const imagesToPreload = [
  require('@/assets/images/default_event-image.jpg'),
  require('@/assets/images/default_musician.jpg'),
];

export default function HomeScreen() {
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Show the modal when the screen loads
    setModalVisible(true);
  }, []);

  return (
    <View style={styles.container}>
      <SilencePhonesModal
        visible={isModalVisible}
        onDismiss={() => setModalVisible(false)}
      />
      <View style={styles.imageContainer}>
        <Image
          source={
            concertData.image?.startsWith('http')
              ? { uri: concertData.image }
              : require('../../assets/images/default_event-image.jpg')
          }
          style={styles.eventImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.mainContent}>
        <Text style={[styles.eventTitle, { fontSize: fontSize * 1.6 }]}> {concertData.concertName} </Text>
        <Text style={[styles.eventDetails, { fontSize }]}> {concertData.date} | {concertData.venue} | {concertData.time} </Text>
        <Button
          mode="contained"
          style={[styles.button, enhancedContrast && styles.enhancedButton]}
          contentStyle={[
            styles.buttonContent,
            {
              minHeight: fontSize * 2.5,
              paddingVertical: Math.max(fontSize * 0.3, 8),
            },
          ]}
          labelStyle={[
            styles.buttonText,
            {
              fontSize,
              lineHeight: fontSize * 1.2,
              fontFamily: enhancedContrast ? 'DMSans-Bold' : undefined,
            },
          ]}
          onPress={() => router.push('/program')}
        >
          Concert Program
        </Button>
        <Button
          mode="contained"
          style={[styles.button, enhancedContrast && styles.enhancedButton]}
          contentStyle={[
            styles.buttonContent,
            {
              minHeight: fontSize * 2.5,
              paddingVertical: Math.max(fontSize * 0.3, 8),
            },
          ]}
          labelStyle={[
            styles.buttonText,
            {
              fontSize,
              lineHeight: fontSize * 1.2,
              fontFamily: enhancedContrast ? 'DMSans-Bold' : undefined,
            },
          ]}
          onPress={() => router.push('/biographies')}
        >
          Biographies
        </Button>
        <Button
          mode="contained"
          style={[styles.button, enhancedContrast && styles.enhancedButton]}
          contentStyle={[
            styles.buttonContent,
            {
              minHeight: fontSize * 2.5,
              paddingVertical: Math.max(fontSize * 0.3, 8),
            },
          ]}
          labelStyle={[
            styles.buttonText,
            {
              fontSize,
              lineHeight: fontSize * 1.2,
              fontFamily: enhancedContrast ? 'DMSans-Bold' : undefined,
            },
          ]}
          onPress={() => router.push('/program-notes')}
        >
          Program Notes
        </Button>
        <Button
          mode="contained"
          style={[styles.button, enhancedContrast && styles.enhancedButton]}
          contentStyle={[
            styles.buttonContent,
            {
              minHeight: fontSize * 2.5,
              paddingVertical: Math.max(fontSize * 0.3, 8),
            },
          ]}
          labelStyle={[
            styles.buttonText,
            {
              fontSize,
              lineHeight: fontSize * 1.2,
              fontFamily: enhancedContrast ? 'DMSans-Bold' : undefined,
            },
          ]}
          onPress={() => router.push('/meet-orchestra')}
        >
          Meet the Orchestra
        </Button>
      </View>
      {trueTone && <View style={styles.trueToneOverlay} />}
      {blueLight && <View style={styles.blueLightOverlay} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  eventImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mainContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
  eventTitle: {
    fontFamily: 'DMSans-Black',
    color: 'white',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  eventDetails: {
    fontFamily: 'DMSans-Medium',
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 25,
    marginBottom: 10,
    width: '100%',
  },
  buttonContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  enhancedButton: {
    backgroundColor: '#444',
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
  },
  trueToneOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 223, 186, 0.4)',
    zIndex: 1,
    pointerEvents: 'none',
  },
  blueLightOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 140, 0, 0.4)',
    zIndex: 1,
    pointerEvents: 'none',
  },
});
