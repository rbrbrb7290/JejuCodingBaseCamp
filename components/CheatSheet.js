import React from 'react'
import {useState, useEffect} from 'react';
import { View, Text, FlatList, Modal, StyleSheet,TouchableOpacity, Button, Dimensions} from 'react-native'
import ImageViewr from 'react-native-image-zoom-viewer'
import data from './tool/data';
import { createNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SheetMain from './SheetMain';
import Sheet from './Sheet'
const MainStack = createStackNavigator(
    {
        SheetMain:{
            screen:SheetMain
        },
        Sheet:{
            screen: Sheet
        }
    },
    {
        headerMode:"none"
    }
)


export default createAppContainer(MainStack);
