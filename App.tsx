import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text, View } from 'react-native'

import bgBlur from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={bgBlur}
      className="flex-1 items-center justify-center bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <Stripes />
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
