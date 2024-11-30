import React, {useEffect, useRef} from 'react';

import UnityView from '@azesmway/react-native-unity';
import {Button, View} from 'react-native';

const App = () => {
  const unityRef = useRef<UnityView>(null);

  const unityData = {
    name: "I'm Stepa",
    age: 25,
  };

  const jsonedData = JSON.stringify(unityData);

  return (
    <View style={{flex: 1}}>
      <UnityView
        ref={unityRef}
        style={{flex: 1}}
        onUnityMessage={result => {
          console.log('onUnityMessage', result.nativeEvent.message);
        }}
      />
      <View style={{position: 'absolute', bottom: 50}}>
        <Button
          title="Unity Action"
          onPress={() => {
            unityRef.current?.postMessage(
              'DataReceiver',
              'GetData',
              jsonedData,
            );
          }}
        />
      </View>
    </View>
  );
};

export default App;
