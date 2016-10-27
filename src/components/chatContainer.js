import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import InputContainer from './inputContainer';


class ChatContainer extends Component{
    constructor(){
        super();

    }

    render(){


        return(
           <View style={styles.container} >
              <View style={styles.messageContianer}>

              </View>
               <View style={styles.inputContainer}>
                   <InputContainer socket={ this.socket } />
               </View>
           </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#263238'
    },
    inputContainer:{
        flex:1,
    },
    messageContianer:{
        flex:9,
        borderColor:'yellow',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    }
});


function mapStateToProps(state){
    return{
        user:state.user,
        messages:state.messages
    };
}


export default connect(mapStateToProps)(ChatContainer);