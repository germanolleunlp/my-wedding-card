import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import Images from './Images';
import Fonts from './Fonts';
import useCountdown from './useCountdown';

function Countdown({ className }) {
  const countdown = useCountdown('2022-10-08');

  return (
    <section id="#/countdown" className={className}>
      <h3>Te estamos esperando...</h3>
      {!!countdown && (
        <div className="timer">
          <div>
            <span>{countdown?.days}</span>
            <small>dias</small>
          </div>
          <div>
            <span>{countdown?.hours}</span>
            <small>horas</small>
          </div>
          <div>
            <span>{countdown?.minutes}</span>
            <small>minutos</small>
          </div>
          <div>
            <span>{countdown?.seconds}</span>
            <small>segundos</small>
          </div>
        </div>
      )}
    </section>
  );
}

const StyledCountdown = styled(Countdown)`
  text-align: center;
  margin: 2rem 0;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 400px;
  background-image: url(${Images.terraza1});
  background-attachment: fixed;
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${Colors.blackAlphaDark};
  }
  h3 {
    color: ${Colors.white};
    font-size: 3.5rem;
    margin: 1rem;
    z-index: 2;
  }
  .timer {
    color: ${Colors.black};
    font-family: ${Fonts.primary};
    margin: 1rem 0;
    z-index: 2;
    > div {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 5px;
      background-color: ${Colors.lightgray2};
      width: 125px;
      height: 100px;
      border: 1px solid ${Colors.black};
      border-radius: 4px;
      span {
        font-size: 3rem;
      }
      small {
        font-size: 1.15rem;
      }
    }
  }
`;

export default React.memo(StyledCountdown);
