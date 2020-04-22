import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';
import ioClient from 'socket.io-client';

import Quote from './src/pages/quote';

const App: () => React$Node = () => {

  const socket = ioClient('http://localhost:3001', { forceNode: true } )

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Quote socket={socket}></Quote>
      </SafeAreaView>
    </>
  );
};

export default App;
