import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FlatList } from 'react-native-web';

// import { useEffect } from 'react/cjs/react.production.min';



export default function ContestCard({ navigation }) {
    
    //loading screen
    // const[isLoaded, setIsLoaded] = useState(true);


    //API data fetch
    const [myData, setMyData] = useState([]);
    const getUserData= async ()=>{
    try{
            const response = await fetch("https://kontests.net/api/v1/all");
            
            const realData = await response.json();
            setMyData(realData);
            // setIsLoaded(false);
            // console.log(realData);

        }catch(error){
            // console.log(error);
        }
    };
    

    useEffect(() => getUserData(),[]);

    //Show placement data
    const showUserData = ({item})=>{
        
        return(
        <View style={styles.card}>
        <View style={styles.cardContainer}>
            <h1>          Contest Name : {item.name}</h1>
            <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , fontFamily: "serif",fontSize:'100'}}>   Start Time : {item.start_time}</Text>
            <Text  style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontFamily: "serif" }}>   End Time : {item.end_time}</Text>
            <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontFamily: "serif" }}>    Start in 24Hours : </Text>
            <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontFamily: "serif" }}>    URL : {item.url}</Text>

        </View>
            
        </View>
        )
    };


    return (
        // <SafeAreaView style={style.container}>
            //<ScrollView>
            //  {postMessage.map((HomeCards,index)=>(
                //      <Post HomeCards={HomeCards} key={index}/>
                //      
                //  ))}
                //<HomeCards/>
                //   </ScrollView>
                
                // {/* </SafeAreaView> */}
                //  <View >
                //      <Text>Latest Contests</Text>
                //  </View>
                
            <>
            {/* <Text style={styles.txt}>TRENDING CONTESTS</Text> */}
            <Text>TRENDING CONTESTS</Text>
            <ScrollView>
                <HomeCards/>
                {/* <HomeCards/>
                <HomeCards/>
                <HomeCards/>
                <HomeCards/> */}
            </ScrollView>
        </>
    );
}
// const styles = StyleSheet.create({
// txt:{
//     // backgroundColor:"white",
//     // borderRadius:10,
//     // width:115,
//     // padding:8,
//     // height:20,
//     // fontWeight:700,

// },

// });
