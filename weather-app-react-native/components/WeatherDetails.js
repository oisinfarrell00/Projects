import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {colors} from '../utils/index'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'

const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors

export default function WeatherDetails({currentWeather, unitsSystem}) {
    const {
        main: {feels_like, humidity, pressure, temp_min, temp_max},
        sys: {sunrise, sunset},
        clouds: {all},
        wind: {speed, deg},
    }= currentWeather

    const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`
    var windSpeedInKnots = speed*1.9438
    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsRow}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
                    <View style={styles.weatherDetailsRow}>
                        <FontAwesome5 name="temperature-low" size={25} color='blue' />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Feels like:</Text>
                            <Text style={styles.textSecondary}>{feels_like}°</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <MaterialCommunityIcons name="water" size={30} color='blue' />
                    <View style={styles.weatherDetailsRow}>
                        <Text>Humidity:</Text>
                        <Text style={styles.textSecondary}>{humidity}%</Text>
                    </View>
                </View>
            </View>
            <View style={{ ...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR }}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name="weather-windy" size={30} color='blue' />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Wind Speed :</Text>
                            <Text style={styles.textSecondary}>{windSpeed}</Text>
                            <Text style={styles.textSecondary}>{windSpeedInKnots} knots</Text>
                            {(() => {
                                if (windSpeedInKnots >= 0 && windSpeedInKnots <= 12){
                                    return <Text>Sailing Level: beginner </Text>
                                }else if(windSpeedInKnots > 12 && windSpeedInKnots <= 15){
                                    return <Text>Sailing Level: Intermediate </Text>
                                }else if(windSpeedInKnots > 15 && windSpeedInKnots <= 20){
                                    return <Text>Sailing Level: Expert </Text>
                                }else{
                                    return <Text>Sail at own risk </Text>
                                }
                            })()}
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name="weather-windy" size={30} color='blue' />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Wind Direction :</Text>
                            <Text style={styles.textSecondary}>{deg}°</Text>
                            {(() => {
                                if (deg >= 0 && deg <= 45){
                                    return <Text>North</Text>
                                }else if(deg > 45 && deg <=90){
                                    return <Text>North East</Text>
                                }else if(deg > 90 && deg <=135){
                                    return <Text>East</Text>
                                }else if(deg > 135 && deg <=180){
                                    return <Text>South East</Text>
                                }else if(deg > 180 && deg <=225){
                                    return <Text>South West</Text>
                                }else if(deg > 225 && deg <=270){
                                    return <Text>West</Text>
                                }else if(deg > 270 && deg <=315){
                                    return <Text>North West</Text>
                                }else if(deg > 315 && deg <=360){
                                    return <Text>North</Text>
                                }
                            })()}
                            
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ ...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR }}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
                    <View style={styles.weatherDetailsRow}>
                        <FontAwesome5 name="temperature-low" size={25} color='blue' />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Min Temp :</Text>
                            <Text style={styles.textSecondary}>{temp_min} °</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.weatherDetailsRow}>
                        <FontAwesome5 name="temperature-high" size={25} color='blue' />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Max Temp :</Text>
                            <Text style={styles.textSecondary}>{temp_max} °</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ ...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR }}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
                    <View style={styles.weatherDetailsRow}>
                        <FontAwesome5 name="sun" size={25} color='blue' />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Cloud Cover:</Text>
                            <Text style={styles.textSecondary}>{all} %</Text>
                                {all <= 30 ? <Text>Good Visibility</Text> : <Text>Poor Visibility</Text>}
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name="speedometer" size={30} color='blue' />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Pressure:</Text>
                            <Text style={styles.textSecondary}>{pressure} hPa</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
        margin: 10,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20,
    },
    WeatherDetailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textSecondary: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7,
    }
})