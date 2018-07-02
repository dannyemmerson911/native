import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Button } from 'react-native'; 
import t from 'tcomb-form-native';

const Form = t.form.Form;
const User = t.struct({
    email: t.String,
    username: t.maybe(t.String),
    password: t.String,
    terms: t.Boolean
});
const options = {
    fields: {
        email: {
            error: "Dude, just enter your email. I promise the NSA ain't watching."
        },
        password: {
            error: "Choose something you use for a dozen other accounts. Or risk forgetting"
        },
        terms: {
            label: "Agree to Terms",
        },
    },
};

export default class Input extends Component {
    handleSubmit = () => {
        const value = this._form.getValue(); 
        console.log('value: ', value); 
    }
    render() {
        return (
            <View style={styles.container}>
                <Form 
                    type={User}
                    ref={c => this._form = c}
                    options={options} />
                    <Button 
                    title="Sign up!"
                    onPress={this.handleSubmit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 70,
        padding: 20,
        backgroundColor: '#ffffff',
    },
})


AppRegistry.registerComponent('testApp', ()=> Input);