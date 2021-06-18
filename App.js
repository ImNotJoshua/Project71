import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {CreateAppContainer} from 'react-navigation';
import {CreateBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreens'

export default function App() {
    return (
      <View style={styles.container}>
        <AppContainer>x</AppContainer>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3399FF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  const TabNavigator=createBottomTabNavigator({
    WriteStory:{screen:WriteStoryScreen},
    ReadStory:{screen:ReadStoryScreen},
  })
  
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon:({}) => {
      const routeName=navigation.state.routeName
      if(routeName === 'WriteStory')
      {

  
      }else if (routeName === 'ReadStory')
      {
      }
    }
  })
  
  const AppContainer=createAppContainer(
    TabNavigator
  )
  /* Ma'am I think I was able to complete this entire project but if you find anything wrong or incomplete we'll
  solve in next class */
  