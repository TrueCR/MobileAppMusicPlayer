import React from 'react';
import { PermissionsAndroid } from 'react-native';

const RquestPermission = async () => {
  try {
      const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
      {
          title: 'Music Player Media Permission',
          message:
          'Allow Music Player to access photos and media on your device?',
          buttonNegative: 'Deny',
          buttonPositive: 'Allow',
      },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permission Granted');
      } else {
      console.log('Permission Denied');
      }
  } catch (err) {
      console.warn(err);
  }
  };

export default RquestPermission