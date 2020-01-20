import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import React from 'react'

function Admob() {
  return (
    <BannerAd
      unitId={TestIds.BANNER}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
      onAdFailedToLoad={(error) => {
        console.error('Advert failed to load: ', error);
      }}
    />
  );
}
export default Admob