/*
  CPRG303 Phase 4

  Input:
    - No explicit input parameters for the `RquestPermission` function.

  Processing:
    - The code defines a functional component named `RquestPermission`.
    - It uses React and the `PermissionsAndroid` module from 'react-native' for handling Android permissions.
    - The function requests permissions for reading external storage and media audio.
    - It displays a permission request dialog with a title, message, and buttons for Allow and Deny.
    - The result of the permission request is logged to the console.

  Output:
    - The function does not directly render UI but handles the permission request process.

  Note: 
    - The `RquestPermission` component is designed to be called to request specific permissions.
    - This version is part of the CPRG304 Phase X project.

  Authors: Tyler Gettle
  Version: 2023-12-07
*/

// Import necessary modules and components from React and 'react-native'.
import React from "react";
import { PermissionsAndroid } from "react-native";

// Define the functional component named RquestPermission.
const RquestPermission = async () => {
  try {
    // Request permissions for reading external storage and media audio.
    const granted = await PermissionsAndroid.requestMultiple(
      [
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
      ],
      {
        title: "Music Player Media Permission",
        message:
          "Allow Music Player to access photos and media on your device?",
        buttonNegative: "Deny",
        buttonPositive: "Allow",
      }
    );

    // Check if the requested permissions are granted or denied.
    if (
      granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted[PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO] ===
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log("Permission Granted");
    } else {
      console.log("Permission Denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

// Export the RquestPermission component as the default export.
export default RquestPermission;
