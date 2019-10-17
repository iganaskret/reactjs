import React from "react";
import Profile from "./Profile.js";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Header(props) {
  return (
    <header className="App-header">
      <h1>This is the header {props.name || <Skeleton />}</h1>
      <Profile name={props.name} />
    </header>
  );
}
