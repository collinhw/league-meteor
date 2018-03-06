import React from 'react';
import { Container, Menu, Dropdown } from 'semantic-ui-react';

export default class Topmenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><a><i className="game icon"></i></a></Menu.Item>
            <Menu.Item><a>NEWS</a></Menu.Item>
            <Menu.Item><a>GAME</a></Menu.Item>
            <Menu.Item><a>UNIVERSE</a></Menu.Item>
            <Menu.Item><a>NEXUS</a></Menu.Item>
            <Menu.Item><a>COMMUNITY</a></Menu.Item>
            <Menu.Item><a>SUPPORT</a></Menu.Item>
            <Menu.Item><a>MERCHANDISE</a></Menu.Item>
            <Menu.Item><a>LOGIN</a></Menu.Item>
            <Menu.Item><a><i className="thumbs down icon"></i></a></Menu.Item>

            <Dropdown item text="PLAY NOW">
              <Dropdown.Menu>
                <Dropdown.Item>CREATE ACCOUNT</Dropdown.Item>
                <Dropdown.Item>LOST PASSWORD?</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    );
  }
}
