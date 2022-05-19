import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import 'react-native-gesture-handler';
// import { GestureHandlerRootView } from "react-native-gesture-handler";

 
import About from './About';
// import SignUp from './SignUp';
// import { NavigationContainer } from '@react-navigation/native';


export default function RootStack ({ navigation }){
        return(
                <>
                    <About/>
                </>
            );
        }
        
        
        
// const Stack = createStackNavigator();
        
// function RootStack() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={SignInScreen} />
//         <Stack.Screen name="Signup" component={SignUpScreen} />
//       </Stack.Navigator>
//     );
//   }

// const RootStack = () => (
// <NavigationContainer> 
//     <Stack.Navigator>
//         <Stack.Screen name="Login" component={SignInScreen}/>
//         <Stack.Screen name="Signup" component={SignUpScreen}/>
//     </Stack.Navigator>

// </NavigationContainer>
// );

// export default RootStack;