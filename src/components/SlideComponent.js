import React, {Component} from 'react';
import {Slider, Slide, Caption} from 'react-materialize';
import SliderContent from './libs/SliderContent.js';

class SlideComponent extends Component {
  render() {
    return(
      <>
        <Slider
          fullscreen={false}
          options={{duration: 500, height: 500, indicators: true, interval: 6000}}>
          {SliderContent.map((value,index)=>{
            return(
              <Slide image={<img alt={value.alternate} src={value.imgSrc}/>}>
                <Caption>
                  <h3>{value.header1}</h3>
                  <h4>{value.header2}</h4>
                </Caption>
              </Slide>
            );
            }
          )}
        </Slider>
      </>
    );
  }
}
export default SlideComponent;
