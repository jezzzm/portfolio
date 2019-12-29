import React from "react";
import styled from "@emotion/styled";
import colors from "../styles/colors";

//icons
import Atom from "../images/atom.svg";
import Bash from "../images/bash.svg";
import Bootstrap from "../images/bootstrap.svg";
import Chrome from "../images/chrome.svg";
import Css from "../images/css.svg";
import Express from "../images/express.svg";
import Firebase from "../images/firebase.svg";
import Gatsby from "../images/gatsby.svg";
import Git from "../images/git.svg";
import Github from "../images/github.svg";
import Heroku from "../images/heroku.svg";
import Html from "../images/html.svg";
import Jquery from "../images/jquery.svg";
import Js from "../images/js.svg";
import Mongodb from "../images/mongodb.svg";
import Node from "../images/node.svg";
import Postgres from "../images/postgres.svg";
import Python from "../images/python.svg";
import Rails from "../images/rails.svg";
import RLogo from "../images/rlogo.svg";
import Redux from "../images/redux.svg";
import Ruby from "../images/ruby.svg";
import Sass from "../images/sass.svg";
import Slack from "../images/slack.svg";
import Svelte from "../images/svelte.svg";
import Tf from "../images/tf.svg";
import Trello from "../images/trello.svg";
import Ts from "../images/ts.svg";
import Vs from "../images/vs.svg";
import Vue from "../images/vue.svg";

const IconSection = styled.section`
  margin: 2em 0;
  svg {
    max-width: 120px;
    max-height: 70px;
    margin: 20px 20px 0 0;
    box-sizing: border-box;
  }
  div {
    margin: 0 auto;
    text-align: right;
  }
  h4 {
    color: ${colors.dark};
    font-weight: 600;
  }
`;

const Icons = () => (
  <>
    <IconSection>
      <h4>Things I Know</h4>
      <div>
        <Bootstrap />
        <Css />
        <Express />
        <Firebase />
        <Gatsby />
        <Heroku />
        <Html />
        <Jquery />
        <Js />
        <Mongodb />
        <Node />
        <Postgres />
        <Python />
        <Rails />
        <RLogo />
        <Redux />
        <Ruby />
      </div>
    </IconSection>
    <IconSection>
      <h4>Things I'm Learning</h4>
      <div>
        <Sass />
        <Svelte />
        <Tf />
        <Ts />
        <Vue />
      </div>
    </IconSection>
    <IconSection>
      <h4>Tools I Use</h4>
      <div>
        <Atom />
        <Bash />
        <Chrome />
        <Git />
        <Github />
        <Slack />
        <Trello />
        <Vs />
      </div>
    </IconSection>
  </>
);

export default Icons;
