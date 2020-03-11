import React, { useState, useEffect } from 'react'
import {  FontAwesome, Ionicons} from '@expo/vector-icons'
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native'

const cora = '#2D2A8C',
    corb = '#2A398C',
    corc = '#048ABF',
    cord = '#F2AB6D',
    core = '#F27649',
    sizeSVG = 150;



const styles = StyleSheet.create({
    body: { flex: 1, zIndex: 0 },
    status: {
        backgroundColor: corc,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.3,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingBottom: 10,
    },
    statusHeader: {
        fontSize: 50,
        fontFamily: 'monospace',
        color: cord,
        textAlign: 'center'
    },
    content: {
        backgroundColor: cora,
        flex: 0.7
    },
    fontContent: {
        fontSize: 25,
        textAlign: 'center',
        margin: 5,
        color: 'white',
        fontFamily: 'monospace'
    },
    cityFonte: {
        fontSize: 15,
        color: cora,
        fontFamily: 'monospace'
    }

})

// Para usar a weather api é necessário remover .dada. em #22 - #27 e usar a URI
const city = 'itaquaquecetuba'
const URI = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=59758d6dbe3d6316a9605c8c08b5233b'
const URI2 = 'https://oseiasnascimento.ml/file.json'

const MainActivity = ({navigation}) => {
    const [status, setstatus] = useState('...')
    const [maxTemp, setmaxTemp] = useState('...')
    const [minTem, setminTem] = useState('...')
    const [state, setstate] = useState('')
    const [umidity, setumidity] = useState('...')
    const [wind, setwind] = useState('...')
    
    function fetchWheater() {
        fetch(URI)
            .then((response) => response.json())
            .then((responseJson) => {

                setstatus(responseJson.weather[0].main)
                setmaxTemp(Math.round(responseJson.main.temp_max - 273.15))
                setminTem(Math.round(responseJson.main.temp_min - 273.15))
                setumidity(responseJson.main.humidity)
                setwind(Math.round(responseJson.wind.speed))
                setstate(responseJson.name)
            })
            .catch((error) => {
                console.error(error);
                setstate("Erro")
            });

    }

    function changeHeaderIcon(param) {
        switch (param) {
            case 'Rain':
                return <FontAwesome name='umbrella' size={50} />

            case 'Clouds':
                return <FontAwesome name='cloud' size={50}  />

            case 'Clear':
                return <FontAwesome name='star-half-alt' size={50}  />

            default:
                return <Text>{param}</Text>;
        }
    }
    


    useEffect(() => {
        fetchWheater()
    })

    return (

        <>

            <View style={styles.body}>

                <View style={styles.status}>
                    {changeHeaderIcon(status)}
                    <Text style={styles.cityFonte}>{state}</Text>
                </View>
                <View style={styles.content}>

                    <Text style={styles.fontContent}> Máx.: {maxTemp} </Text>
                    <Text style={styles.fontContent}> Mín.: {minTem}</Text>
                    <Text style={styles.fontContent}>Umidade: {umidity}%</Text>
                    <Text style={styles.fontContent}>Vento: {wind}km/h</Text>
                    
                </View>

                <View>
                    <Button
                        title="Configurações"
                        onPress={() => navigation.navigate('Config')}
                    />
                </View>

            </View>


        </>
    )
}

export default MainActivity