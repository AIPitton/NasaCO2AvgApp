import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRef } from 'react';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const Tab = createBottomTabNavigator();
export default function App() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 10,
          marginHorizontal: 10,
          height: 60,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 30,
        }
      }}>
        <Tab.Screen name={"Jan"} component={Jan} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <Text>1</Text>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"Feb"} component={Feb} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <Text>2</Text>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"Mar"} component={Mar} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <Text>3</Text>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 2,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"Apr"} component={Apr} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <Text>4</Text>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"May"} component={May} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <Text>5</Text>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"Jun"} component={Jun} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <Text>6</Text>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 5,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"Jul"} component={Jul} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <Text>7</Text>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 6,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"Aug"} component={Aug} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <Text>8</Text>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 7,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"Sep"} component={Sep} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <Text>9</Text>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 8,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"Oct"} component={Oct} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <Text>10</Text>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 9,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"Nov"} component={Nov} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <Text>11</Text>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 10,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"Dec"} component={Dec} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <Text>12</Text>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 11,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
      </Tab.Navigator>
      <Animated.View style={{
        width: getWidth() - 20,
        height: 2,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 98,
        left: 50,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>
      </Animated.View>
      <View style={styles.legend}>
        <Image source={require('./assets/legend.png')} />
      </View>
    </NavigationContainer>
  );
}
function getWidth() {
  let width = Dimensions.get("window").width
  width = width - 80
  return width / 12
}
function Dec() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/dec.png')} />
    </View>
  );
}
function Nov() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/nov.png')} />
    </View>
  );
}
function Oct() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/oct.png')} />
    </View>
  );
}
function Sep() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/sep.png')} />
    </View>
  );
}
function Aug() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/aug.png')} />
    </View>
  );
}
function Jul() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/jul.png')} />
    </View>
  );
}
function Jun() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/jun.png')} />
    </View>
  );
}
function May() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/may.png')} />
    </View>
  );
}
function Apr() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/apr.png')} />
    </View>
  );
}
function Mar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/mar.png')} />
    </View>
  );
}
function Feb() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/feb.png')} />
    </View>
  );
}
function Jan() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/jan.png')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  legend: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
