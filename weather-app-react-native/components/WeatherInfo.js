import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { colors } from '../utils/index'

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors

export default function WeatherInfo({currentWeather}){
    const { 
        main: {temp}, 
        weather: [details],
        name,
    } = currentWeather
    const {icon, main, description} = details

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInfo}>
        <Text>{name}</Text>
        <Image style={styles.weatherIcon} source ={{ uri: iconUrl}}/>
            <Text style={styles.textPrimary}>{temp}°</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.textSecondary}>{main}</Text>
            <ScrollView>
            <Text style={styles.textTipsheading}> Helpful Tips for astronomers: </Text>
            <Text style={styles.textTips}> - Below 30% cloud cover is good for astronomy viewing! </Text>
            <Text style={styles.textTips}> - The best time to go stargazing is the days before, during and soon after each new moon.</Text>
            <Text style={styles.textTips}> - Avoid artificial light such as street lights.</Text>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center'
    },
    weatherDescription: {
        textTransform: 'capitalize'
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    textPrimary: {
        fontSize: 40,
        color: PRIMARY_COLOR,
    },
    textSecondary:{
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 10,
    },
    textTipsheading:{
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: '200',
        alignItems: 'center',
        textAlign: 'center',
    },
    textTips:{
        fontSize: 12,
        alignItems: 'center',
        textAlign: 'center',
    }
})