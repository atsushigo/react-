import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {gamesUrl} from '../Constants';


const CardsData = [{
    name:'0',          
    link: gamesUrl
  }, {
    name:'1',
    link: gamesUrl
  }, {
    name:'2',
    link: gamesUrl
  },  {
    name:'3',
    link: gamesUrl
  },  {
    name:'4',
    link: gamesUrl
  },{
    name:'5',          
    link: gamesUrl
  }, {
    name:'6',
    link: gamesUrl
  }, {
    name:'7',
    link: gamesUrl
  },  {
    name:'8',
    link: gamesUrl
  },  {
    name:'9',
    link: gamesUrl
  },{
    name:'10',          
    link: gamesUrl
  }, {
    name:'11',
    link: gamesUrl
  }, {
    name:'12',
    link: gamesUrl
  },  {
    name:'13',
    link: gamesUrl
  }, {
    name:'14',
    link: gamesUrl
  },{
    name:'15',
    link: gamesUrl
}];

class GameItems extends Component {   
    constructor(props) {
        super(props);
        this.showRate = '100%'; // 显示比例
        let num = props.isMobile ? 1 : 4;  
        this.settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: num,
            slidesToScroll: (num > 1 ? (num - 1) : 1)
        };
    };

    render() {     
        const lang = this.props.i18n.resolvedLanguage || 'en';
       
        return (
            <Slider {...this.settings}>
                {
                    CardsData.map((item, index) => 
                        <a href={item.link} key={index}>
                            <img src={`./img/${lang}/${item.name}.png`} alt={item.name} width={this.showRate} height={this.showRate} />
                        </a>
                    )
                }
            </Slider>                       
        );
    }
}

export default GameItems;
