import React from 'react';
import { Grid, List } from 'semantic-ui-react';

export default class Footer extends React.Component {
  render() {
    const playnow = { color: 'orange', fontSize: '30px' };
    const textColor = { color: 'lightblue' };
    return (
        <div className="background">
          <Grid textAlign="center">
            <Grid.Row centered>
              <List.Item style={textColor}><i className="text"> ABOUT LEAGUE OF LEGENDS | </i></List.Item>
              &nbsp;
              &nbsp;
              <List.Item style={textColor}><i className="text"> PREPAID CARDS | </i></List.Item>
              &nbsp;
              &nbsp;
              <List.Item style={textColor}><i className="text"> HELP US IMRPOVE | </i></List.Item>
              &nbsp;
              &nbsp;
              <List.Item style={textColor}><i className="text"> SERVICE STATUS | </i></List.Item>
              &nbsp;
              &nbsp;
              <List.Item style={textColor}><i className="text"> SUPPORT | </i></List.Item>
              &nbsp;
              &nbsp;
              <List.Item style={textColor}><i className="text"> ESPORTS PRO SITE</i></List.Item>
            </Grid.Row>
          </Grid>

          <Grid textAlign="center">
            <Grid.Row>
              <List.Item style={playnow}>PLAY NOW</List.Item>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

