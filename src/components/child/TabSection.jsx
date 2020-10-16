import React from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap'

const TabSection = () => {
    return ( <Tab.Container id="left-tabs-example" defaultActiveKey="third" >
    <Row className="tabs-container">
      <Col lg="3">
        <Nav variant="pills" className="flex-column tabs-column">
            <h1>Tabs</h1>
          <Nav.Item>
            <Nav.Link eventKey="first">Tab 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Tab 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Tab 3</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col lg="9" className="tabs-content">
        <Tab.Content>
        <Tab.Pane eventKey="first">
        <p>Voor een uitgebreide beschrijving, download onze luxebrochure op www.copandi.be voor meer informatie.
Dit appartement gelegen op de bovenste verdieping van een prachtig gebouw (bouwjaar 2011) met drie slaapkamers zoekt een nieuwe eigenaar. Het appartement is centraal gelegen op wandelafstand van het centrum van Brecht winkels, scholen en openbaar vervoer. 
</p>          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod, aperiam quidem ut tempora ipsam dignissimos minima blanditiis. Harum ratione blanditiis, est impedit voluptatibus officia repellat sequi quas aliquid non. Enim dolor in harum quo cumque cum, ratione odio possimus molestiae nihil vero at hic aperiam nulla, laudantium velit adipisci!</p>
          </Tab.Pane>          
          <Tab.Pane eventKey="third">
            <p>Voor een uitgebreide beschrijving, download onze luxebrochure op www.copandi.be voor meer informatie.
Dit appartement gelegen op de bovenste verdieping van een prachtig gebouw (bouwjaar 2011) met drie slaapkamers zoekt een nieuwe eigenaar. Het appartement is centraal gelegen op wandelafstand van het centrum van Brecht winkels, scholen en openbaar vervoer. 
</p>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod, aperiam quidem ut tempora ipsam dignissimos minima blanditiis. Harum ratione blanditiis, est impedit voluptatibus officia repellat sequi quas aliquid non. Enim dolor in harum quo cumque cum, ratione odio possimus molestiae nihil vero at hic aperiam nulla, laudantium velit adipisci!</p>
          </Tab.Pane>
          <Tab.Pane eventKey="fifth">
          <p>Voor een uitgebreide beschrijving, download onze luxebrochure op www.copandi.be voor meer informatie.
Dit appartement gelegen op de bovenste verdieping van een prachtig gebouw (bouwjaar 2011) met drie slaapkamers zoekt een nieuwe eigenaar. Het appartement is centraal gelegen op wandelafstand van het centrum van Brecht winkels, scholen en openbaar vervoer. 
</p>          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container> );
}
 
export default TabSection;