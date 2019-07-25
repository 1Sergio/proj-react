import React from 'react';
import Post from './Post';

export default class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Hello Word</h1>
                <Post title= "Aprendendo ReactJS com a RocketSeat"/>
                <Post title= "ReactJS é de mais!"/>
                <Post title= "Em breve mais vídeos de ReactJS"/>
            </div>
        );
    }

}