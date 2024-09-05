import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    if (task.length > 0) {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Belgeler</Text>
      <TextInput
        style={styles.input}
        placeholder="Bir not girin..."
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Kaydet" onPress={handleAddTask} />
      <FlatList
        data={taskList}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#178A91',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  taskItem: {
    padding: 15,
    backgroundColor: '#e1e1e1',
    borderRadius: 5,
    marginVertical: 5,
  },
  taskText: {
    fontSize: 18,
  },
});

export default App;
