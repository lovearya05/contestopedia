import React , {Component} from "react";
import { StyleSheet,Text,View,SafeAreaView,Image,ScrollView ,Button,Alert} from "react-native";
import { ImageBackground } from "react-native-web";
export default class Profile extends Component{
    render(){
        return(

          <ImageBackground source={{uri:"https://th.bing.com/th/id/R.d1b60184dd56372de3425f4f6949f51d?rik=sXWv6Fq4QlnWOg&riu=http%3a%2f%2fwww.solidbackgrounds.com%2fimages%2f2880x1800%2f2880x1800-black-solid-color-background.jpg&ehk=QBcU9Wm9jRp%2f5cI5coMNi6W70Ie48n4UvF4uWFi%2bRhk%3d&risl=&pid=ImgRaw&r=0"}} style={{ justifyContent: "center" , width: 1535, height: 1535, color:'#FA9DBD',}}>
          <ScrollView
            onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent)) {
                enableSomeButton();
              }
            }}
            scrollEventThrottle={400}>
          <Text style={{color:"#FFFFFF",marginLeft:670,fontSize:30,marginTop:50}}>--Name--</Text>
          <Text style={{color:"#FFFFFF" ,marginLeft:650,fontSize:30,marginTop:50}}>--Profession--</Text>
          <Image source={{uri: "https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835__340.jpg"}} style={{width: 200, height: 200, marginLeft:650,marginTop:20,borderRadius:1000,marginTop:50}} />
          
          <View style={{width:300, borderRadius:2000,marginLeft:600,marginTop:30,outlineColor: "#808080",
    outlineStyle: "solid",
    outlineWidth: 4,}}>
  
  
  <Button
                    style={{ 
                    borderColor:'#686868',
                    borderRadius:1000,
                    justifyContent: 'center', 
                    alignItems:'center',
                    width:100,
                    marginLeft:500}}
                    title="Edit Profile"
                    color="none"
                    type="clear"
                    onPress = { () => 
                    this.props.navigation.navigate('')}
  />
</View>


<Text>{'/n'}</Text>


<Text numberOfLines={1} style={{ color: '#808080',marginBottom:50}}>                                                                                                                            _____________________________________________________________________________________________</Text>

<View style={{width:250, borderRadius:2000,marginLeft:650,outlineColor: "#808080",marginBottom:30}}>
  
            
            <Button
            style={{ 
              borderColor:'#686868',
              borderRadius:1000,
              justifyContent: 'center', 
              alignItems:'center',
              width:100,
              marginLeft:500}}
              title="Settings"
              color="grey"
              type="clear"
              onPress = { () => 
              this.props.navigation.navigate('')}
            />
        </View>


        <View style={{width:250, borderRadius:2000,marginLeft:650,outlineColor: "#808080",marginBottom:30}}>
  
           
            <Button
  
               style={{ 
                    borderColor:'#686868',
                    borderRadius:1000,
                    justifyContent: 'center', 
                    alignItems:'center',
                    width:100,
                    marginLeft:500}}
                    title="Search"
                    color="grey"
                    type="clear"
                    onPress = { () => 
                    this.props.navigation.navigate('')}
            />
        </View>


        <View style={{width:250, borderRadius:2000,marginLeft:650,outlineColor: "#808080",marginBottom:30}}>
  
           
            <Button
             style={{ 
              borderColor:'#686868',
              borderRadius:1000,
              justifyContent: 'center', 
              alignItems:'center',
              width:100,
              marginLeft:500}}
              title="Change Picture"
              color="grey"
              type="clear"
              onPress = { () => 
              this.props.navigation.navigate('')}
            />
        </View>


        <View style={{width:250, borderRadius:2000,marginLeft:650,outlineColor: "#808080",marginBottom:30}}>
  
            
            <Button
             style={{ 
              borderColor:'#686868',
              borderRadius:1000,
              justifyContent: 'center', 
              alignItems:'center',
              width:100,
              marginLeft:500}}
              title="Placements"
              color="grey"
              type="clear"
              onPress = { () => 
              this.props.navigation.navigate('')}
            />
        </View>


        <View style={{width:250, borderRadius:2000,marginLeft:650,outlineColor: "#808080",marginBottom:30}}>
  
            
            <Button
             style={{ 
              borderColor:'#686868',
              borderRadius:1000,
              justifyContent: 'center', 
              alignItems:'center',
              width:100,
              marginLeft:500}}
              title="Contests"
              color="grey"
              type="clear"
              onPress = { () => 
              this.props.navigation.navigate('')}
            />
        </View>

        </ScrollView>
        </ImageBackground>
        );
}
}


const styles=StyleSheet.create({
    container:{flex:1,backgroundColor:"#000"},
    text:{fontFamily:"HelveticaNeue",color:"#525750"},
    image:{flex:1,width:undefined,height:undefined},
    titleBar:{flexDirecation:"row",
    justifyContent:"space-between",
     marginTop:24,
    marginHorizontal:16}
})