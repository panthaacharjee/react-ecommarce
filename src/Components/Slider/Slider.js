import React from 'react'
import Carousel from 'react-elastic-carousel'
import SliderData from './SliderData'
import SliderItem from './SliderItem'


const Slider = () => {
    const breakPoints=[
        {width: 1, itemToShow : 1},
        {width: 100, itemToShow : 2},
        {width: 768, itemToShow : 3},
    ]
   
    return (
        <div className="container">
            <div className="row">
                <div style={{padding: "120px 0px"}}>
                    <Carousel breakPoints={breakPoints}>
                        {SliderData.map((val)=>{
                            return <SliderItem key={val.id} val={val}/>
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Slider
