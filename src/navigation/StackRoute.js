import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PhoneNumber from '../Screen/PhoneNumber';
import SelfieVerify from '../Screen/SelfieVerify';
import VideoSelfie from '../Screen/VideoSelfie';
import Discover from '../Screen/Discover';
import Match from '../Screen/Match';
import AudioVideo from '../Screen/AudioVideo';
import Premium from '../Screen/Premium';
import Gender from '../Screen/Gender';
import DateOfBirth from '../Screen/DateOfBirth';
import EnableLocation from '../Screen/EnableLocation';
import Verifyphone from '../Screen/Verifyphone';
import ProfileScreen from '../Screen/ProfileScreen';
import SliderTest from '../Screen/SliderTest';

import Settings from '../Screen/Settings';
import HomeUsersScreen from '../Screen/HomeUsersScreen';
import Likeyou from '../Screen/Likeyou';
import ChatScreen from '../Screen/ChatScreen';
import MuzMessage from '../Screen/MuzMessage';
import FilterList from '../Screen/FilterList';
import MoveAbroad from '../Screen/MoveAbroad';
import Married from '../Screen/Married';
import Children from '../Screen/Children';
import MartialStatus from '../Screen/MartialStatus';
import Tall from '../Screen/Tall';

import Smoke from '../Screen/Smoke';
import Alcohol from '../Screen/Alcohol';
import Halal from '../Screen/Halal';
import Pray from '../Screen/Pray';
import Religious from '../Screen/Religious';
import Revert from '../Screen/Revert';
import Sect from '../Screen/Sect';
import Languages from '../Screen/Languages';
import Origin from '../Screen/Origin';

import Company from '../Screen/Company';
import JobTitle from '../Screen/JobTitle';
import NickName from '../Screen/NickName';
import MoreAboutYou from '../Screen/MoreAboutYou';
import Status from '../Screen/Status';
import Living from '../Screen/Living';
import UserMessages from '../Screen/UserMessages';
import Login from '../Screen/Login';

// import Home from '../Screen/Home';

import {navOptionHandler} from '../constants/functions';

const Stack = createStackNavigator();

function StackRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="PhoneNumber"
          component={PhoneNumber}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="VideoSelfie"
          component={VideoSelfie}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="SelfieVerify"
          component={SelfieVerify}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Match"
          component={Match}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="AudioVideo"
          component={AudioVideo}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Premium"
          component={Premium}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="DateOfBirth"
          component={DateOfBirth}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="EnableLocation"
          component={EnableLocation}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Verifyphone"
          component={Verifyphone}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="SliderTest"
          component={SliderTest}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="HomeUsersScreen"
          component={HomeUsersScreen}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Likeyou"
          component={Likeyou}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="MuzMessage"
          component={MuzMessage}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="FilterList"
          component={FilterList}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="MoveAbroad"
          component={MoveAbroad}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Married"
          component={Married}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Children"
          component={Children}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="MartialStatus"
          component={MartialStatus}
          options={navOptionHandler}
        />
        <Stack.Screen name="Tall" component={Tall} options={navOptionHandler} />
        <Stack.Screen
          name="Smoke"
          component={Smoke}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Alcohol"
          component={Alcohol}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Halal"
          component={Halal}
          options={navOptionHandler}
        />
        <Stack.Screen name="Pray" component={Pray} options={navOptionHandler} />
        <Stack.Screen
          name="Religious"
          component={Religious}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Revert"
          component={Revert}
          options={navOptionHandler}
        />
        <Stack.Screen name="Sect" component={Sect} options={navOptionHandler} />
        <Stack.Screen
          name="Languages"
          component={Languages}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Origin"
          component={Origin}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Company"
          component={Company}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="NickName"
          component={NickName}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="JobTitle"
          component={JobTitle}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="MoreAboutYou"
          component={MoreAboutYou}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Status"
          component={Status}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Living"
          component={Living}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="UserMessages"
          component={UserMessages}
          options={navOptionHandler}
        />
        {/* <Stack.Screen name="Home" component={Home} options={navOptionHandler} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoute;
