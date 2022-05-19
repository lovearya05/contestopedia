import * as React from 'react';
import { ScrollView,View, Text } from 'react-native';
import PlacementCard from './PlacementCard';
// import {db} from './navigation/screens/firebase'
// import ReadData from './ReadData';

// import database from '@react-native-firebase/database';


export default function Placement({ navigation }) {

    // const [data, setData] = useState([])

    // const funC = async () =>{
        // try {
        //   const result =  db.collection("contests").doc("contest").get()
        //   console.log(result)
        //   setData([result])


        // } catch (error) {
          
        // }
    //   }
    
    //   useEffect(() =>{
    //     funC()
    //   },[])
    
    
    return (
    <>

        {/* <View>
            <Text>hiiiiiiiiiiiiiii</Text>
        </View> */}
       {/* getCities() */}
        {/* <ReadData/> */}
        
        {/* <View>
            <Text>placement card</Text>
        </View> */}
        <ScrollView>
            <PlacementCard/>
 
        </ScrollView>
    </>
    );
}

// async function getCities(db) {
//     const citiesCol = collection(db, 'name');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     consol.log(cityList);
//   }