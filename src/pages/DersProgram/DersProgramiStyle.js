import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-paper';

const scheduleData = [
  { day: 'Monday', time: '09:00 - 10:30', subject: 'Mathematics' },
  { day: 'Monday', time: '11:00 - 12:30', subject: 'Physics' },
  { day: 'Tuesday', time: '09:00 - 10:30', subject: 'Chemistry' },
  { day: 'Wednesday', time: '11:00 - 12:30', subject: 'Biology' },
  { day: 'Thursday', time: '09:00 - 10:30', subject: 'History' },
  { day: 'Friday', time: '11:00 - 12:30', subject: 'English' },
];

const ScheduleScreen = () => {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.dayText}>{item.day}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
        <Text style={styles.subjectText}>{item.subject}</Text>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={scheduleData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 10,
  },
  cardContent: {
    padding: 16,
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  timeText: {
    fontSize: 16,
    color: '#666',
  },
  subjectText: {
    fontSize: 16,
    color: '#000',
  },
});

export default ScheduleScreen;


