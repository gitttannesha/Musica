import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { setupPlayer , addTrack} from '../muiscPlayerServices';
import { ActivityIndicator } from 'react-native/types_generated/index';


function App() {
  
  const [isPlayerReady, setIsPlayerReady] =  useState(false)


  async function setup(){
    let isSetup = await setupPlayer()
    if (isSetup){
      await addTrack()
    }
    setIsPlayerReady(isSetup)

  }
  useEffect(() => {
    setup()
  }, [])

    if(!isPlayerReady)  {
      return (
        <SafeAreaView>
          <ActivityIndicator/>
        </SafeAreaView>
      )
    }
    return (
      <SafeAreaView>
        <StatusBar
        
        />
        <Text></Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
