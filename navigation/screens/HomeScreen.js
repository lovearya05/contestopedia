import * as React from 'react';
import { ScrollView,View, Text } from 'react-native';
import HomeCards from './HomeCards';

export default function HomeScreen({ navigation }) {
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
