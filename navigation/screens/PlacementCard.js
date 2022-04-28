import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';


export default function PlacementCard({ navigation }) {
    return (
        <View style={styles.cardContainer}>
            <Text>Company Name :</Text>
            <Text>Eligibility :</Text>
            <Text>Last Date to Apply :</Text>
            <Text>URL :</Text>
            <Text>Description :</Text>
        </View>
    );
}
// const deviceWidth = Math.round(Dimensions.get('window'.width))
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    cardContainer: { width: deviceWidth-25,
    backgroundColor: '#ff714e',
    height:200,
    borderRadius:20,
    // alignItems:'center',
    // alignContent: 'center',
    marginLeft:12,
    marginTop:30,

    shadowColor: '#000',
    shadowOffset: {
        width:5,
        height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius:5,
    elevation: 9,
},
});