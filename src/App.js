import firebase from "@firebase/app"
require('firebase/auth')
import React, { Component } from "react"
import { View } from "react-native"
import { Header, Button, Spinner } from "./components/common"
import LoginForm from "./components/LoginForm"



class App extends Component {

    state = { loggedIn: null }

    // it would be better to make the connection with the firebase right before the App component renders
    componentWillMount() {
        firebase.initializeApp({
            // Initialize Firebase
            apiKey: "AIzaSyDCfQu-7UUSRS_6N-aA7yxwpFZtZst-6vs",
            authDomain: "authentication-2b3f1.firebaseapp.com",
            databaseURL: "https://authentication-2b3f1.firebaseio.com",
            projectId: "authentication-2b3f1",
            storageBucket: "authentication-2b3f1.appspot.com",
            messagingSenderId: "355735686847"
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (<Button onPress={() => firebase.auth().signOut()}> Log Out </Button>)
            case false:
                return <LoginForm />
            default:
                return <Spinner size="large" />
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <View>
                    {this.renderContent()}
                </View>
            </View>
        )
    }
}


export default App