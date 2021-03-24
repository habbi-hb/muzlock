import React, {useState} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';
const FooterApp = ({navigation, selected}) => {
  const [ActiveScreen, setActiveScreen] = useState('Home');
  return (
    <Footer>
      <FooterTab style={{backgroundColor: 'white'}}>
        <Button vertical onPress={() => navigation.navigate('HomeUsersScreen')}>
          <MaterialCommunityIcons
            name={'cards'}
            size={35}
            color={selected == 'Home' ? '#f01f3e' : 'lightgrey'}
          />
        </Button>
        <Button vertical onPress={() => navigation.navigate('Likeyou')}>
          <MaterialCommunityIcons
            name={'binoculars'}
            size={35}
            color={selected == 'Bino' ? '#f01f3e' : 'lightgrey'}
          />
        </Button>

        <Button vertical onPress={() => navigation.navigate('ChatScreen')}>
          <MaterialCommunityIcons
            name={'chat-processing-outline'}
            size={35}
            color={selected == 'Chat' ? '#f01f3e' : 'lightgrey'}
          />
        </Button>

        <Button vertical onPress={() => navigation.navigate('Settings')}>
          <Ionicons
            name={'settings'}
            size={35}
            color={selected == 'Settings' ? '#f01f3e' : 'lightgrey'}
          />
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default FooterApp;
