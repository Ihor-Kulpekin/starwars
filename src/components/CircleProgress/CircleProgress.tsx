import styled from 'styled-components';

export const CircleProgress = styled.div`
  border-radius: 50%;
  font-size: 11px;
  text-indent: -99999em;
  margin: 5em auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em black;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  :before,
  :after {
    border-radius: 50%;
    position: absolute;
    content: '';
  }

  :before {
    width: 5.2em;
    height: 10.2em;
    background: black;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    -webkit-transform-origin: 5.2em 5.1em;
    transform-origin: 5.2em 5.1em;
    -webkit-animation: load 2s infinite ease 1.5s;
    animation: load 2s infinite ease 1.5s;
  }

  :after {
    width: 5.2em;
    height: 10.2em;
    background: black;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    -webkit-transform-origin: 0 5.1em;
    transform-origin: 0 5.1em;
    -webkit-animation: load 2s infinite ease;
    animation: load 2s infinite ease;
  }

  @keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
