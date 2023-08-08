/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import Images from '../asset';
import {Colors, GlobalStyle, Layout} from '../theme';
import Home from '../screen/Home/index';  
import {NavigationRoutes, Strings} from '../constant';
import {useSelector} from 'react-redux';

const HandleImage = ({image, tintColor, backgroundColor}) => {
  return (
    <Image
      resizeMode="contain"
      source={image}
      style={{tintColor: tintColor, backgroundColor: backgroundColor}}
    />
  );
};

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  const isLoggedIn = useSelector(state => state.authReducer.loggedIn);
  const navigation = useNavigation();
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          inactiveTintColor: Colors.color_E8F7F6,
          activeTintColor: Colors.white,
          tabStyle: {
            backgroundColor: Colors.color_008081,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          labelStyle: {
            marginBottom: Platform.OS === 'ios' ? 3 : 5,
          },
        }}
        screenOptions={({route}) => ({
          unmountOnBlur: true,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: Colors.color_008081,
            height:
              Layout.screen_height > 800
                ? Platform.OS === 'android'
                  ? 60
                  : 83
                : 58,
          },

          tabBarLabel: ({focused}) => {
            if (focused) {
              return (
                <Text
                  style={[GlobalStyle.caption11, {color: Colors.color_E8F7F6}]}>
                  {route.name}
                </Text>
              );
            }
            return null;
          },
        })}>
        <Tab.Screen
          name={NavigationRoutes.home}
          component={Home}
          options={{
            tabBarShowLabel: true,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <HandleImage
                image={focused ? Images.home_active : Images.home_inactive}
              />
            ),
          }}
        />

        <Tab.Screen
          name={NavigationRoutes.booking}
          component={Booking}
          options={{
            tabBarShowLabel: true,
            headerShown: false,
            tabBarIcon: ({focused, size}) => (
              <HandleImage
                image={
                  focused ? Images.booking_active : Images.booking_inactive
                }
              />
            ),
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                onPress={() =>
                  isLoggedIn
                    ? navigation.navigate(NavigationRoutes.booking)
                    : Toast.show(Strings.please_login)
                }
              />
            ),
          }}
        />

        {/* <Tab.Screen
          name={NavigationRoutes.chat}
          component={Chat}
          options={{
            tabBarShowLabel: true,
            headerShown: false,
            tabBarIcon: ({focused, size}) => (
              <HandleImage
                image={
                  focused ? Images.messages_inactive : Images.messages_inactive
                }
              />
            ),
          }}
        /> */}

        <Tab.Screen
          name={NavigationRoutes.profile}
          component={Profile}
          options={{
            tabBarShowLabel: true,
            headerShown: false,
            tabBarIcon: ({focused, size}) => (
              <HandleImage
                image={focused ? Images.profile_active : Images.user_icon}
                tintColor={focused ? null : Colors.white}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default BottomTabNavigation;
