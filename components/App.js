import React, { useState, useEffect } from 'react'
import { Text, View, StatusBar, Button } from 'react-native'
import MainActivity from './components/MainActivity'
import ConfigActivity from './components/ConfigActivity'
const URI = 'https://api.openweathermap.org/data/2.5/weather?q=guarulhos&appid=59758d6dbe3d6316a9605c8c08b5233b'

function App() {
  const [tela, settela] = useState(1)
  return (
    <>
      <StatusBar backgroundColor='#556688' barStyle='dark-content' />
      {tela == 1 ? <MainActivity /> : <ConfigActivity />}

      <View>
        <Button title="Troca Tela" onPress={() => {
          if (tela == 1) {
            settela(2)
          }

          if (tela == 2) {
            settela(1)
          }


        }}
        />
      </View>
    </>
  )
}

export default App
