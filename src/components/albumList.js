import React from 'react';
import {
	Text,
	View
} from 'react-native';
import axios from 'axios';


class AlbumList extends React.Component {
	

	state = { albums:[] };
	
	componentWillMount() {
		var self = this;
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(function(response){
				self.setState({albums: response.data });
			})
			.catch(function(error){
				console.log(error);
			});
	}

	renderAlbums() {
		return this.state.albums.map(album => <Text>{album.title} </Text>);
	}



	render(){
		console.log(this.state);
		return(
			<View>
				{this.renderAlbums()}
			</View>
		);	
	};

};


export default AlbumList;