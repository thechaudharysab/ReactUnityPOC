import React, {useEffect, useRef} from 'react';

import UnityView from '@azesmway/react-native-unity';
import {Button, View} from 'react-native';

const App = () => {
  const unityRef = useRef<UnityView>(null);

  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'xi-api-key': 'sk_d9c025e1cf5912ab20069e5e9a26d4ca0128f43bf23606cc',
  //     'Content-Type': 'application/json'
  //   },
  //   body: '{"voice_settings":{"stability":0.5,"similarity_boost":0.5}}'
  // };

  const options = {
    method: 'POST',
    headers: {
      'xi-api-key': 'sk_d9c025e1cf5912ab20069e5e9a26d4ca0128f43bf23606cc',
      'Content-Type': 'application/json',
    },
    body: '{"voice_settings":{"stability":0.5,"similarity_boost":0.5},"text":"Hello world"}',
  };

  fetch(
    'https://api.elevenlabs.io/v1/text-to-speech/9BWtsMINqrJLrRacOk9x?output_format=pcm_22050',
    options,
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  // uri	The target URI to which the string will be transmitted.
  // postData	Form body data. Will be converted to UTF-8 string.
  // contentType	Value for the Content-Type header, for example application/json.

  const data = {
    speechText: 'Welcome to Pailo!',
    voiceId: '21m00Tcm4TlvDq8ikWAM',
    elAPIKey: 'sk_d9c025e1cf5912ab20069e5e9a26d4ca0128f43bf23606cc',
  };

  const jsonString = JSON.stringify(data);

  return (
    <View style={{flex: 1}}>
      <UnityView
        ref={unityRef}
        style={{flex: 1}}
        onUnityMessage={result => {
          console.log('onUnityMessage', result.nativeEvent.message);
        }}
      />
      <View style={{position: 'absolute', top: 50}}>
        {/* Method to play Waving Animation : “PlayWaveAnim” with a boolean param which should be true
to play the animation. */}
        {/* Method to go back to Idle Animation : “PlayIdleAnim” with same param. */}

        {/* // This is the main function postMessage take 3 arguments ReacttoUnity is the game Object
    // GetDatas is the function name we will send the data to in Unity depends on hierarchy.
    // data is the data we will send.

    unityRef.current?.postMessage('ReactToUnity', 'GetDatas', data); */}
        {/*             unityRef.current?.postMessage('BananaMan', 'PlayWaveAnim', true) */}

        {/*  unityRef.current?.postMessage('BananaMan', 'PlayWaveAnim', "wave");
             unityRef.current?.postMessage('BananaMan', 'PlayWaveAnim', "idle"); */}

        {/* GO = "DataReceiver"
Method = "GetData"
Param = "JSONString" e.g. "{ \"speechText\": \"Hello World\", \"voiceId\": \"pqHfZKP75CvOlQylNhV4\", \"elAPIKey\": \"sk_d9c025e1cf5912ab20069e5e9a26d4ca0128f43bf23606cc\" }" */}

        {/* AnimationScene" and "SpeechScene" */}

        <Button
          title="Unity Action"
          onPress={() => {
            unityRef.current?.postMessage(
              'DataReceiver',
              'GetData',
              jsonString,
            );
          }}
        />
        {/* <Button
          title="Play Idle Anim"
          onPress={() => {
            unityRef.current?.postMessage('BananaMan', 'PlaySpeech', 'idle');
          }}
        /> */}
      </View>
    </View>
  );
};

export default App;
