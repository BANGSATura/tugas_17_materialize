import React, {Component} from 'react';
import {Row,Col,Card,CardTitle} from 'react-materialize';
import CardContent from './libs/CardContent.js';

class CardComponent extends Component {
  render(){
    return(
      <>
        <Row>
          {CardContent.map((value,index) => {
            return(
              <Col m={3} key={index}>
                <Card
                  header={<CardTitle
                    image={value.imgSrc}>
                    {value.title}
                  </CardTitle>}>
                  {value.cardText}
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default CardComponent;
