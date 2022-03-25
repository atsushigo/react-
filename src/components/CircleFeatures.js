import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Row, Col } from 'antd';
import "./styles/CircleFeatures.css";
import { withTranslation } from 'react-i18next'; 
import {isMobile} from '../Constants';


const renderGames = (dimension, time) => {
    return (
      <div className="timer">
        <div className="time" style={{fontSize:'1.8rem'}}>{time}+</div>
        <div style={{fontSize:'1.3rem'}}>{dimension}</div>
      </div>
    );
};

const renderTime = (dimension, time) => {
  return (
    <div className="timer">
      <div className="time" style={{fontSize:'1.8rem'}}>{time}%</div>
      <div style={{fontSize:'1.3rem', width:isMobile?'100px':'180px'}}>{dimension}</div>
    </div>
  );
};


const RenderSlide = (GameKinds, remainingTime) => {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to tirgger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
        {GameKinds[remainingTime]}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time ${!isTimeUp ? "down" : ""}`}
        >
          {GameKinds[prevTime.current]}
        </div>
      )}
    </div>
  );
};

const CircleFeatures = props =>  {
    const {t} = props; 
    const GameKinds = [t("home.slot"), 
                       t("home.poker"), 
                       t("home.roulette"), 
                       t("home.nn"), 
                       t("home.multi")];

    return (
      <div className="timer-wrapper">        
        <Row gutter={ {xs: 8, sm: 16, md: 24, lg:64, xl:80}}>
            <Col xs={{ span: 24, offset: 6 }} lg={{ span: 1, offset: 0 }}>
                <CountdownCircleTimer
                    isPlaying
                    trailColor='#edc42e'
                    duration={5}
                    colors={['#907354', '#e2c09b', '#f4dabb', '#deba94']}
                    colorsTime={[5, 3, 1, 0]}
                    onComplete = {() => {return { shouldRepeat: true, delay: 1 }}}
                    >
                    {({ remainingTime, color }) => (
                        <span style={{ color }}>
                            {RenderSlide(GameKinds, remainingTime)}
                        </span>
                    )}
                </CountdownCircleTimer>
            </Col>
            <Col xs={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 6 }}>
                <CountdownCircleTimer
                    isPlaying
                    trailColor='#edc42e'
                    duration={5}
                    colors={['#907354', '#e2c09b', '#f4dabb', '#deba94']}
                    colorsTime={[5, 3, 1, 0]}
                    onComplete = {() => {return { shouldRepeat: true, delay: 1 }}}
                    >
                    {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderGames(t("home.games"), (16 + elapsedTime).toFixed(0))}
                    </span>
                    )}
                </CountdownCircleTimer> 
            </Col>
            <Col xs={{ span: 10, offset: 8 }} lg={{ span: 4, offset: 5 }}>
                <CountdownCircleTimer
                    isPlaying
                    trailColor='#edc42e'
                    duration={5}
                    colors={['#907354', '#e2c09b', '#f4dabb', '#deba94']}
                    colorsTime={[5, 3, 1, 0]}
                    onComplete = {() => {return { shouldRepeat: true, delay: 1 }}}
                    >
                    {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime(t("home.safe"), (95 + elapsedTime).toFixed(0))}
                    </span>
                    )}
                </CountdownCircleTimer> 
            </Col>            
        </Row>        
      </div>
    );
}

export default withTranslation() (CircleFeatures);
