import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class Welcome extends Component {


    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.texts}> Welcome </Text>
                <View><Image
                    source={require("../assets/main.jpg")}
                    style={{ width: 500, height: 500 }}
                /> </View>
                <TouchableOpacity
                style={styles.btn}
                    onPress={() => {
                        this.props.navigation.navigate("Message")
                    }}
                ><Text style={styles.texts}>Click Here</Text></TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        justifyContent:"center",
        alignItems:'center',
        
        
    },
    texts: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
        marginBottom:10
    },
    btn:{
        width:200,
        height:50,
        backgroundColor:"pink",
        borderRadius:10,
        marginTop:10,
        justifyContent:"center",
        alignItems:'center'

    }
})
export default Welcome;
