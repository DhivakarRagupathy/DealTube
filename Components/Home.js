import React, { Component } from 'react';
import { getAPI } from './../services/getAPI'
import { Text, ScrollView, StyleSheet, TextInput, View, Button } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import SearchResults from './SearchResults'

class Home extends Component {

    static navigationOptions = {
        drawerLabel: 'Dashboard',
        drawerIcon: () => (
            <Icon type="FontAwesome" name='th-list' style={{ fontSize: 25, alignItems: 'flex-start' }}

                style={{
                    width: 18,
                    height: 18, tintColor: '#000000'
                }}
            />
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            playingURL: "https://www.youtube.com/watch?v=4NXb_RG9Gu0",
            filteredListOfURLs: []

        }
    }



    componentDidMount() {
        this.fetchResult();

    }

    fetchResult = () => {

        var URL = "https://www.googleapis.com/youtube/v3/search?part=id&q=tuto&type=video&key={AIzaSyAI92uO54uudfwFnRilEB2ebh4ZICZVa3E}"

        //getAPI(URL,{},this.setDashboardFeed(),this.onFetchFailure)
    }

    onFetchFailure = (response) => {
        console.log(response)
        alert("Error Occurs ! Please contact admin !")
    }

    setDashboardFeed = (responseJson) => {

        //   this.filteredListOfURLs=responseJson

    }




    renderFeed = () => {


    }

    onBuffer = () => {
        console.log("loading video")
    }
    videoError = () => {
        console.log("please try again")
    }
    triggerSearch = () => {
        this.fetchResult();
    }
    setQuery = (query) => {
        this.SearchQuery = query;
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <TextInput onBlur={this.triggerSearch} onChangeText={this.setQuery} />
                <Button title={"search"} onPress={this.triggerSearch} />

                <VideoPlayer
                    endWithThumbnail
                    thumbnail={{ uri: this.state.thumbnailUrl }}
                    video={{ uri: this.state.videoUrl }}
                    videoWidth={400}
                    videoHeight={400}
                    duration={100000}
                    ref={r => this.player = r}
                />

                <SearchResults Results={this.state.filteredListOfURLs} />
            </View>



        );
    }

}
var styles = StyleSheet.create({
    backgroundVideo: {

        height: 400,
        width: 400,
        borderWidth: 1,
        borderColor: 'black'
    },
});



export default Home;