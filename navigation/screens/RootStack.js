import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import 'react-native-gesture-handler';
// import { GestureHandlerRootView } from "react-native-gesture-handler";


import Login from './Login';
// import SignUp from './SignUp';
// import { NavigationContainer } from '@react-navigation/native';


export default function RootStack ({ navigation }){
        return(
                <>
                    <Login />
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