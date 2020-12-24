import React, { useEffect, useRef, useState } from 'react';
import { Spring, config } from 'react-spring/renderprops';
import styled from 'styled-components';

const SvgStyles = styled.svg`
  width: clamp(20em, 61%, 30em);
  margin: 0 auto;
`;

const Container = styled.div`
  display: grid;
  place-content: center;
`;

export default function Logo2() {
  const pathRef1 = useRef();
  const pathRef2 = useRef();
  const pathRef3 = useRef();
  const pathRef4 = useRef();
  const pathRef5 = useRef();
  const pathRef6 = useRef();
  const pathRef7 = useRef();
  const pathRef8 = useRef();

  const [offset1, setOffset1] = useState(null);
  const [offset2, setOffset2] = useState(null);
  const [offset3, setOffset3] = useState(null);
  const [offset4, setOffset4] = useState(null);
  const [offset5, setOffset5] = useState(null);
  const [offset6, setOffset6] = useState(null);
  const [offset7, setOffset7] = useState(null);
  const [offset8, setOffset8] = useState(null);

  useEffect(() => {
    setOffset1(pathRef1.current.getTotalLength());
    setOffset2(pathRef2.current.getTotalLength());
    setOffset3(pathRef3.current.getTotalLength());
    // setOffset4(pathRef4.current.getTotalLength());
    // setOffset5(pathRef5.current.getTotalLength());
    // setOffset6(pathRef6.current.getTotalLength());
    // setOffset7(pathRef7.current.getTotalLength());
    // setOffset8(pathRef8.current.getTotalLength());
  }, [offset1, offset2, offset3, offset4, offset5, offset6, offset7, offset8]);
  return (
    <Container>
      {offset1 ? (
        <Spring
          from={{ a: offset1, n: offset2, d: offset3, fill: 'transparent' }}
          to={{ a: 0, n: 0, d: 0, fill: '#FDFFF7' }}
          config={(key) =>
            key === 'fill'
              ? { ...config.molasses, delay: 2000 }
              : { friction: 130, tension: 250 }
          }
        >
          {(props) => (
            <SvgStyles viewBox="0 0 484 97" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeDashoffset={props.a}
                strokeDasharray={offset1}
                ref={pathRef1}
                strokeWidAth="1px"
                stroke="white"
                fill={props.fill}
                d="M59.3125 72H50.2188L45.9531 58.6406H20.4531L16.1406 72H7.46875L27.8125 10.7344H39.25L59.3125 72ZM43.5625 51.1875L33.2031 18.4219L22.8438 51.1875H43.5625Z"
              />
              <path
                strokeDashoffset={props.n}
                strokeDasharray={offset2}
                ref={pathRef2}
                strokeWidAth="1px"
                stroke="white"
                fill={props.fill}
                d="M67.2812 24.9375H74.5469L74.875 32.5312C76.25 30.9062 77.5781 29.5625 78.8594 28.5C80.1406 27.4062 81.3906 26.5312 82.6094 25.875C83.8594 25.2188 85.125 24.7656 86.4062 24.5156C87.6875 24.2344 89.0156 24.0938 90.3906 24.0938C95.2344 24.0938 98.8906 25.5312 101.359 28.4062C103.859 31.25 105.109 35.5469 105.109 41.2969V72H96.9531V41.9531C96.9531 38.2656 96.2656 35.5469 94.8906 33.7969C93.5156 32.0156 91.4688 31.125 88.75 31.125C87.75 31.125 86.7656 31.2812 85.7969 31.5938C84.8594 31.875 83.875 32.3906 82.8438 33.1406C81.8125 33.8594 80.6875 34.8438 79.4688 36.0938C78.2812 37.3438 76.9375 38.9062 75.4375 40.7812V72H67.2812V24.9375Z"
              />
              <path
                strokeDashoffset={props.n}
                strokeDasharray={offset2}
                ref={pathRef3}
                strokeWidAth="1px"
                stroke="white"
                fill={props.fill}
                d="M117.672 49.4531C117.672 45.4531 118.219 41.9062 119.312 38.8125C120.406 35.6875 121.953 33.0625 123.953 30.9375C125.984 28.7812 128.406 27.1562 131.219 26.0625C134.062 24.9375 137.219 24.375 140.688 24.375C142.188 24.375 143.656 24.4688 145.094 24.6562C146.562 24.8438 148 25.1406 149.406 25.5469V5.76562H157.609V72H150.297L150.016 63.0938C147.734 66.4062 145.266 68.8594 142.609 70.4531C139.953 72.0469 137.078 72.8438 133.984 72.8438C131.297 72.8438 128.922 72.2812 126.859 71.1562C124.828 70.0312 123.125 68.4531 121.75 66.4219C120.406 64.3594 119.391 61.8906 118.703 59.0156C118.016 56.1406 117.672 52.9531 117.672 49.4531ZM126.016 48.9375C126.016 54.625 126.844 58.875 128.5 61.6875C130.188 64.4688 132.562 65.8594 135.625 65.8594C137.688 65.8594 139.859 64.9375 142.141 63.0938C144.453 61.25 146.875 58.5156 149.406 54.8906V33.0469C148.062 32.4219 146.578 31.9531 144.953 31.6406C143.328 31.2969 141.719 31.125 140.125 31.125C135.688 31.125 132.219 32.5625 129.719 35.4375C127.25 38.3125 126.016 42.8125 126.016 48.9375Z"
              />
            </SvgStyles>
          )}
        </Spring>
      ) : (
        <SvgStyles viewBox="0 0 484 97" xmlns="http://www.w3.org/2000/svg">
          <path
            ref={pathRef1}
            strokeWidAth="1px"
            stroke="none"
            fill="transparent"
            d="M59.3125 72H50.2188L45.9531 58.6406H20.4531L16.1406 72H7.46875L27.8125 10.7344H39.25L59.3125 72ZM43.5625 51.1875L33.2031 18.4219L22.8438 51.1875H43.5625Z"
          />
          <path
            ref={pathRef2}
            strokeWidAth="1px"
            stroke="none"
            fill="transparent"
            d="M67.2812 24.9375H74.5469L74.875 32.5312C76.25 30.9062 77.5781 29.5625 78.8594 28.5C80.1406 27.4062 81.3906 26.5312 82.6094 25.875C83.8594 25.2188 85.125 24.7656 86.4062 24.5156C87.6875 24.2344 89.0156 24.0938 90.3906 24.0938C95.2344 24.0938 98.8906 25.5312 101.359 28.4062C103.859 31.25 105.109 35.5469 105.109 41.2969V72H96.9531V41.9531C96.9531 38.2656 96.2656 35.5469 94.8906 33.7969C93.5156 32.0156 91.4688 31.125 88.75 31.125C87.75 31.125 86.7656 31.2812 85.7969 31.5938C84.8594 31.875 83.875 32.3906 82.8438 33.1406C81.8125 33.8594 80.6875 34.8438 79.4688 36.0938C78.2812 37.3438 76.9375 38.9062 75.4375 40.7812V72H67.2812V24.9375Z"
          />
          <path
            ref={pathRef3}
            strokeWidAth="1px"
            stroke="none"
            fill="transparent"
            d="M117.672 49.4531C117.672 45.4531 118.219 41.9062 119.312 38.8125C120.406 35.6875 121.953 33.0625 123.953 30.9375C125.984 28.7812 128.406 27.1562 131.219 26.0625C134.062 24.9375 137.219 24.375 140.688 24.375C142.188 24.375 143.656 24.4688 145.094 24.6562C146.562 24.8438 148 25.1406 149.406 25.5469V5.76562H157.609V72H150.297L150.016 63.0938C147.734 66.4062 145.266 68.8594 142.609 70.4531C139.953 72.0469 137.078 72.8438 133.984 72.8438C131.297 72.8438 128.922 72.2812 126.859 71.1562C124.828 70.0312 123.125 68.4531 121.75 66.4219C120.406 64.3594 119.391 61.8906 118.703 59.0156C118.016 56.1406 117.672 52.9531 117.672 49.4531ZM126.016 48.9375C126.016 54.625 126.844 58.875 128.5 61.6875C130.188 64.4688 132.562 65.8594 135.625 65.8594C137.688 65.8594 139.859 64.9375 142.141 63.0938C144.453 61.25 146.875 58.5156 149.406 54.8906V33.0469C148.062 32.4219 146.578 31.9531 144.953 31.6406C143.328 31.2969 141.719 31.125 140.125 31.125C135.688 31.125 132.219 32.5625 129.719 35.4375C127.25 38.3125 126.016 42.8125 126.016 48.9375Z"
          />
        </SvgStyles>
      )}
    </Container>
  );
}
