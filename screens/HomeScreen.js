import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
    render(){
        return(
          <View style={styles.container}>
              <Text style={{textAlign: 'center', marginTop: 400}}>HomeScreen!</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
});