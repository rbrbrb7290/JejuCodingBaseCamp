import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import * as env from '../env';
import {SafeAreaView} from 'react-navigation';

function Admob() {
  return (
    <SafeAreaView style={style.container}>
<<<<<<< HEAD
      <BannerAd
        // {...(Platform.OS === 'android'
        //   ? {
        //       unitId: env.AD_BANNER_ID,
        //     }
        //   : {
        //       unitId: TestIds.BANNER,
        //     })}
        unitId={TestIds.BANNER}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdFailedToLoad={error => {
          console.error('Advert failed to load: ', error);
        }}
      />
=======
    <BannerAd 
    // {
    //   ...( Platform.OS ==='android' ? {
    //     unitId: env.AD_BANNER_ID
    //   }: {
    //     unitId: TestIds.BANNER
    //   })
    // }
      unitId={TestIds.BANNER}
      size={BannerAdSize.BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
      onAdFailedToLoad={(error) => {
        console.error('Advert failed to load: ', error);
      }}
    />
>>>>>>> fa7e4a6b897f43924a1384c29b78125f84855368
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Admob;
