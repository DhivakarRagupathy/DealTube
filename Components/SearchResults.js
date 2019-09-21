import React, { Component } from 'react';

import { Text, ScrollView, StyleSheet, TextInput, View, Button } from 'react-native';


export default class SearchResults extends Component {

    constructor(props) {
        super(props);
    }

    renderCards = () => {
        var list = this.props.Results.map((item) => {
            return (
                <Text>{item.URL}</Text>
            )
        })

        return list;
    }

    render() {
        return (

            this.renderCards()

        )

    }
}