import { View, Button, StyleSheet, Alert, TextInput } from 'react-native';
import * as SMS from 'expo-sms';
import {Link} from 'expo-router';
import React from 'react';

export default function HomeScreen() {
  const id = ['0413528347'];
  const [text, onChangeText] = React.useState('Hello: This is Matina');

  function askToSend() {
    Alert.alert("SMS Send", 'Send: '+id, [
      {
        text: 'Cancel',
      },
      {
        text: 'OK', onPress: ()=> handlePressButtonAsync()
      }
    ])
  }

  async function handlePressButtonAsync(){
    const { result } = await SMS.sendSMSAsync(
      id,
      text,
      // {
      //   attachments: {
      //     uri: 'https://www.latrobe.edu.au/__data/assets/file/0010/796393/logo-white.svg',
      //     mimeType: 'image/png',
      //     filename: 'myfile.png',
      //   },
      // }
    );

    console.log(result)
    if(result === 'sent') {
      alert("Sent");
    } else {
      alert(result)
    }
  }

  return (
   <View style = {styles.header}>
      <View style = {styles.containerRow}>
        <Button title = "Send SMS" onPress={() => askToSend()}/>
        <Link href="./contacts" asChild>
          <Button title = "Contacts"/>
        </Link>
      </View>
      <TextInput onChangeText={onChangeText} value={text}/>
   </View>
  );
}

const styles = StyleSheet.create({
  header:{
    padding: 40
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
