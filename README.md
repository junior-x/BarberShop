# 💈 BarberShop 💈

Barber App development in React Native.

`Prototype`

![Video of App](/assets/vid/Barberapp-Prototype.mp4)

![Image of App](/src/assets/img/screen-mkb.png)

*...*

`v 0.0.0`

![Image of App](/src/assets/img/screen-v0.PNG)

---

    >_ npx react-native run-android

---

# Styled Components 

    >_ npm install --save styled-components

    >_ npm install styled-components --legacy-peer-deps


# React Navigation

    >_ npm install @react-navigation/native
    
    >_ npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

# ADD to:

`index.js`
    
  Then add the next command:

`import "react-native-gesture-handler";`

# Stack

    >_ npm install @react-navigation/stack

# Bottom Tabs

    >_ npm install @react-navigation/bottom-tabs

# Async Storage

    >_ npm install @react-native-community/async-storage

# Geolocation

    >_ npm install @react-native-community/geolocation

`ADD TO AndroidManifest.xml`

    <uses-permission android:name="android.permision.ACCESS_FINE_LOCATION" />

# Permissions

    >_ npm install react-native-permissions

# Swiper

    >_ npm install react-native-swiper

# SVG

    >_ npm install react-native-svg
    >_ npm install react-native-svg-transformer

`ADD TO metro.config.js`

    const { getDefaultConfig } = require('metro-config');

    module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts },
    } = await getDefaultConfig();
    return {
        transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
        },
        resolver: {
        assetExts: assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...sourceExts, 'svg'],
        },
    };
    })();

## Finally  Just run the AVD

    >_ npx react-native run-*device*