import React from "react";
import { Text, Image, Spacer, Card, Row, Grid } from "@nextui-org/react";
import "../css/main_view.css";

import js_logo from "../assets/skills/js_logo.png";
import mongo_logo from "../assets/skills/mongo_logo.png";
import node_logo from "../assets/skills/node_logo.png";
import firebase_logo from "../assets/skills/firebase_logo.png";
import express_logo from "../assets/skills/express_logo.png";
import html_logo from "../assets/skills/html_logo.png";
import css_logo from "../assets/skills/css_logo.png";
import postgres_logo from "../assets/skills/postgres_logo.png";
import mysql_logo from "../assets/skills/mysql_logo.png";
import react_logo from "../assets/skills/react_logo.png";
import angular_logo from "../assets/skills/angular_logo.png";
import flutter_logo from "../assets/skills/flutter_logo.png";
import ruby_logo from "../assets/skills/ruby_logo.png";
import rails_logo from "../assets/skills/rails_logo.png";
import mypicture from "../assets/felix.jpg";
import tusasesorias from "../assets/projects/tus-asesorias.png";
import petauxilium from "../assets/projects/pet-auxilium.jpg";
class MainView extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <article id="header">
          <div id="container-title">
            <Text h1 id="title" weight="bold">
              Felix Jose Gutierrez Quijada
            </Text>
            <Text h2 id="subtitle">
              Software Developer{" "}
            </Text>
          </div>
        </article>
        <article id="grid_data">
          <section>
            <img src={mypicture} alt="js logo" id="mypic" />
          </section>
          <section>
            <article>
              <Text h3 className="subtitle">
                About Me
              </Text>
              <Spacer y={1} />
              <p id="container-text">
                Hello i´m Felix Gutierrez, A system engineer focused mainly on
                web and mobile development, and I like to learn different
                technologies, which gives me the ability to adapt to new
                projects.
              </p>
            </article>
            <article id="knowledge">
              <Text h3 className="subtitle">
                Knowledge
                <section id="flex-skills">
                  <img src={html_logo} alt="" srcset="" className="skill" />
                  <img src={css_logo} alt="" srcset="" className="skill" />
                  <img src={js_logo} alt="" srcset="" className="skill" />
                  <img src={node_logo} alt="" srcset="" className="skill" />
                  <img src={express_logo} alt="" srcset="" className="skill" />
                  <img src={mongo_logo} alt="" srcset="" className="skill" />
                  <img src={firebase_logo} alt="" srcset="" className="skill" />
                  <img src={postgres_logo} alt="" srcset="" className="skill" />
                  <img src={mysql_logo} alt="" srcset="" className="skill" />
                  <img src={react_logo} alt="" srcset="" className="skill" />
                  <img src={angular_logo} alt="" srcset="" className="skill" />
                  <img src={ruby_logo} alt="" srcset="" className="skill" />
                  <img src={rails_logo} alt="" srcset="" className="skill" />
                  <img src={flutter_logo} alt="" srcset="" className="skill" />
                </section>
              </Text>
              <Spacer y={1} />
            </article>
          </section>
        </article>
        <article id="projects">
          <Text h2 id="projects_tittle">
            {" "}
            My Projects
          </Text>
          <section id="grid_projects">
            <article className="project">
              <Card isPressable className="project-card">
                <Card.Header>
                  <img
                    alt="logo"
                    src={angular_logo}
                    width="34px"
                    height="34px"
                  />
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css={{ lineHeight: "$xs" }}>
                        Tus Asesorías
                      </Text>
                    </Grid>
                    <Grid xs={12}>
                      <Text css={{ color: "$accents8" }}>
                        Angular + Firebase
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image src={tusasesorias} objectFit="cover" />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Text>
                      It is a web application with the purpose of serving as a
                      tool to offer or access online advice on various topics.
                      In turn, it has a school material management system, and
                      makes calls
                    </Text>
                  </Row>
                </Card.Footer>
              </Card>
            </article>
            <article className="project">
              <Card isPressable className="project-card" href="google.com">
                <Card.Header>
                  <img
                    alt="logo"
                    src={flutter_logo}
                    width="34px"
                    height="34px"
                  />
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css={{ lineHeight: "$xs" }}>
                        Pet Auxilium
                      </Text>
                    </Grid>
                    <Grid xs={12}>
                      <Text css={{ color: "$accents8" }}>
                        Flutter + Firebase
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={petauxilium}
                    objectFit="cover"
                    height={350}
                  />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Text>
                      In an android application focused on serving as a social
                      network in support of the community related to pets, with
                      various services including giving animals up for adoption,
                      registering lost pets, interacting with other users, among
                      others
                    </Text>
                  </Row>
                </Card.Footer>
              </Card>
            </article>
            <article className="project">
              <Card isPressable className="project-card">
                <Card.Header>
                  <img alt="logo" src={react_logo} width="34px" height="34px" />
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css={{ lineHeight: "$xs" }}>
                        Sport Stats App
                      </Text>
                    </Grid>
                    <Grid xs={12}>
                      <Text css={{ color: "$accents8" }}>React</Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Text h2 className="text-card">
                    In progress
                  </Text>
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Text>
                      It is a web page under development in order to access
                      statistics in various sports leagues such as mlb, premier league, la liga, nba, etc
                     
                    </Text>
            
                  </Row>
                </Card.Footer>
              </Card>
            </article>
          </section>
        </article>
      </div>
    );
  }
}

export default MainView;
