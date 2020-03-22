import React from "react";
import { connect } from "react-redux";
import CatCard from "./CatCard";
import fetchCat from "../store/cat";

// why are we exporting so much stuff you might ask?
// and I would say good question
// long story short, I need access to this stuff to test it
// so we export it
// by calling it disconnected (from the redux store), it's clear that
// this is not the correct import you want generally
// you want the default export
// don't worry about it too much
export class DisconnectedSingleCat extends React.Component {
  render() {
    return (
      <div className="single-cat">
        <h2>{this.props.name}</h2>
        <img src={this.props.imageUrl} />
        <ul className="toys">
          {this.props.toyRatings.map(toy => {
            return <li> {toy.name}</li>;
          })}
        </ul>
        <div className="friends">
          <h3>Friends</h3>
          {this.props.friends.map(friend => (
            <CatCard key={friend.id} />
          ))}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = ({ cat }) => {
  return { ...cat };
};

export const mapDispatchToProps = dispatch => {
  return {
    goGetCat: function() {
      dispatch(fetchCat);
    }
  };
};

// don't touch this line
// but this is the component you probably want in most cases
// so if you're using DisconnectedSingleCat somewhere else in your program
// you're gonna have a bad time
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectedSingleCat);
