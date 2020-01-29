import React from 'react';
import {View, StyleSheet} from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import * as env from '../env';

function Admob() {
  return (
    <View style={style.container}>
    <BannerAd 
      unitId={TestIds.BANNER}
      // unitId={env.AD_BANNER_ID}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
      onAdFailedToLoad={(error) => {
        console.error('Advert failed to load: ', error);
      }}
    />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'center',
  }
})
export default Admob