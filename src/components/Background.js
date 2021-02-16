import React from 'react';
import { getWaves, getRandomInt } from '../utils/useMath';

let defaultHeight = 1080;
let defaultWidth = 1440;
if (typeof window !== `undefined`) {
  defaultHeight = window.innerHeight;
  defaultWidth = window.innerWidth;
}

export default function Background2() {
  const height = '98vh';
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          background: 'var(--darkorange)',
          width: '100vw',
          height: `${height}`,
          padding: 0,
          margin: 0,
          zIndex: -1,
          position: 'absolute',
          top: 0,
          left: 0,
          clipPath: `polygon(${getWaves(3, 7).join(',')})`,
        }}
      />
      <div
        style={{
          background: 'var(--grey)',
          width: '100vw',
          height: `${height}`,
          padding: 0,
          margin: 0,
          zIndex: -1,
          position: 'absolute',
          top: 0,
          left: 0,
          clipPath: `polygon(${getWaves(4, 10).join(',')})`,
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        style={{
          background: '#4b3c6b',
          width: '100vw',
          height: `${height}`,
          padding: 0,
          margin: 0,
          zIndex: -1,
          position: 'absolute',
          top: 0,
          left: 0,
          clipPath: `polygon(${getWaves(5, 15).join(',')})`,
        }}
      >
        <g transform="scale(0.42)">
          <g style={{ isolation: 'isolate' }}>
            <path
              id="firefly-0"
              d="M184.398 104.105 Q 189.562 85.494 204.435 71.07900000000001 T224.574 39.351 T246.487 18.129 T264.927 -5.219 T292.293 -42.591 T320.431 -82.492 T337.279 -113.161 T349.29200000000003 -151.824"
              fill="none"
              stroke="none"
            />
            <path
              id="firefly-1"
              d="M75.06800000000001 1.502 Q 95.636 15.530000000000001 122.202 17.566 T161.589 25.051000000000002 T191.01500000000001 24.729 T224.625 30.708000000000002 T274.226 29.819 T304.297 24.228 T330.2 13.365 T364.678 -10.143"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-2"
              d="M94.624 236.854 Q 108.09700000000001 230.832 119.26 220.6 T163.445 202.465 T202.07500000000002 196.358 T240.894 190.167 T284.583 186.111 T320.345 182.92000000000002 T358.053 188.871 T386.79200000000003 185.912"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-3"
              d="M47.859 135.948 Q 37.264 156.278 18.3 170.998 T-2.833 213.238 T-10.203 238.27 T-18.989 281.036 T-28.769000000000002 308.2 T-37.550000000000004 339.06100000000004 T-41.748 380.699 T-34.579 429.986"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-4"
              d="M4.054 221.494 Q 15.079 207.818 22.852 191.81300000000002 T49.946 164.685 T69.727 126.933 T87.85000000000001 101.904 T97.25 74.94800000000001 T117.345 45.219 T130.954 23.674 T153.937 -1.473"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-5"
              d="M228.899 168.774 Q 235.425 184.059 244.73000000000002 198.001 T259.145 227.129 T271.06 267.347 T283.92900000000003 305.982 T305.709 340.91700000000003 T319.382 386.712 T334.52 412.038 T348.139 434.545"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-6"
              d="M228.91 77.609 Q 239.024 92.119 249.417 106.432 T275.46 142.416 T294.757 184.985 T320.128 223.891 T330.732 260.206 T346.608 293.41700000000003 T366.035 335.735 T381.88000000000003 381.321"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-7"
              d="M237.294 46.204 Q 216.98000000000002 45.832 197.136 40 T148.466 40.939 T120.11500000000001 47.721000000000004 T88.44200000000001 65.123 T53.478000000000004 77.497 T20.11 94.572 T-23.915 115.73100000000001 T-49.811 119.318"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-8"
              d="M67.283 223.845 Q 56.455 245.531 34.866 259.892 T2.924 281.683 T-19.699 299.874 T-56.048000000000004 315.46 T-88.773 327.362 T-130.389 337.92900000000003 T-161.316 337.398 T-210.566 337.933"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-9"
              d="M184.292 219.004 Q 163.309 210.784 142.129 203.079 T117.422 191.168 T93.932 172.888 T68.697 159.52100000000002 T37.615 140.041 T-1.3900000000000001 127.083 T-33.099000000000004 103.73100000000001 T-66.20800000000001 81.867"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-10"
              d="M218.975 214.304 Q 202.127 226.806 180.512 231.074 T149.261 247.845 T110.906 277.611 T90.077 291.928 T49.643 313.40500000000003 T11.76 331.04 T-26.981 349.882 T-65.744 359.32"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-11"
              d="M113.717 18.821 Q 126.346 21.43 139.473 17.468 T166.478 19.252 T206.669 10.611 T235.97800000000002 5.578 T281.502 7.5600000000000005 T800.255 3.553 T363.36800000000003 -4.021 T409.954 -4.529"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-12"
              d="M191.69 56.975 Q 199.898 41.453 208.62 26.207 T230.948 -16.103 T249.019 -35.163000000000004 T271.428 -65.168 T291.402 -85.848 T321.539 -118.35000000000001 T349.93600000000004 -138.125 T368.148 -158.916"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-13"
              d="M239.40800000000002 189.69800000000002 Q 217.806 181.34300000000002 195.647 174.512 T166.479 173.032 T118.551 168.327 T82.491 170.02700000000002 T40.093 160.20000000000002 T0.6890000000000001 158.071 T-39.582 167.77700000000002 T-65.242 167.733"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-14"
              d="M250.207 33.956 Q 271.534 33.878 292.831 32.34 T328.219 36.071 T351.85 44.688 T377.41700000000003 62.755 T406.946 86.41 T438.696 98.991 T462.261 108.08200000000001 T493.479 111.511"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-15"
              d="M43.023 78.06 Q 56.452 75.481 67.803 66.489 T110.124 58.61 T156.132 53.896 T189.43 42.951 T228.79 15.314 T258.17900000000003 -14.242 T290.22 -31.393 T800.13800000000003 -56.087"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-16"
              d="M246.835 10.487 Q 258.427 -7.267 278.043 -18.225 T295.32800000000003 -45.039 T330.934 -77.309 T351.944 -91.006 T377.699 -107.937 T416.25 -124.92 T457.93 -137.44800000000002 T498.622 -150.518"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-17"
              d="M132.246 208.342 Q 116.114 201.90200000000002 97.616 205.577 T65.687 204.918 T30.849 209.00900000000001 T-4.643 221.818 T-40.34 242.43 T-70.54 260.60200000000003 T-99.393 267.975 T-132.429 274.04200000000003"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-18"
              d="M159.681 46.605000000000004 Q 145.119 51.19 129.149 46.962 T81.997 57.566 T48.298000000000004 59.913000000000004 T1.504 52.662 T-47.199 57.542 T-86.646 69.478 T-120.413 86.83800000000001 T-150.28 114.546"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-19"
              d="M91.768 13.428 Q 88.547 33.262 96.513 53.334 T94.049 92.897 T84.287 136.082 T78.554 162.096 T77.307 208.05 T77.61 252.326 T70.735 283.683 T52.76 328.284"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-20"
              d="M241.416 242.845 Q 254.25800000000002 226.217 275.411 218.155 T292.47700000000003 198.92000000000002 T311.488 178.028 T335.821 157.316 T362.564 129.662 T390.732 114.627 T429.749 100.902 T459.456 79.508"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-21"
              d="M73.541 96.123 Q 84.72800000000001 108.82600000000001 88.129 126.673 T102.846 155.028 T113.381 181.471 T121.396 211.907 T123.897 243.59300000000002 T129.788 287.872 T133.582 331.94100000000003 T130.696 365.68600000000004"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-22"
              d="M150.219 183.687 Q 156.849 197.895 169.296 208.573 T192.215 225.42000000000002 T226.766 249.882 T266.232 264.96500000000003 T298.075 287.588 T321.899 297.591 T357.503 318.571 T397.005 347.375"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-23"
              d="M241.528 204.977 Q 224.571 222.797 199.649 230.793 T174.326 254.493 T148.665 272.291 T121.944 289.218 T89.357 326.069 T72.599 360.91200000000003 T57.117000000000004 403.206 T38.524 444.23800000000004"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-24"
              d="M82.67 172.548 Q 65.31800000000001 185.035 44.266 191.356 T7.086 197.824 T-28.117 199.336 T-60.800000000000004 192.696 T-104.155 176.244 T-143.734 169.281 T-183.405 154.245 T-214.514 133.394"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-25"
              d="M45.786 5.33 Q 23.032 9.305 4.339 25.733 T-30.608 32.607 T-67.94 33.743 T-105.607 38 T-144.64600000000002 46.32 T-169.14600000000002 55.495000000000005 T-194.197 61.704 T-218.591 70.131"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-26"
              d="M24.307000000000002 186.602 Q 25.657 173.669 34.362 162.618 T47.147 128.097 T64.59100000000001 84.694 T84.602 51.35 T116.494 23.268 T142.497 5.171 T188.717 -9.128 T234.446 -22.643"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-27"
              d="M179.674 135.836 Q 202.466 130.57 221.775 115.432 T259.488 85.23 T278.325 62.92 T299.869 43.927 T318.359 15.011000000000001 T332.733 -16.1 T348.913 -54.811 T360.01 -102.583"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-28"
              d="M137.51 46.239000000000004 Q 127.762 62.381 109.57600000000001 71.577 T76.747 90.665 T44.537 107.47 T16.667 117.165 T-24.071 145.732 T-53.019 160.285 T-76.824 181.77100000000002 T-95.793 212.129"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-29"
              d="M92.372 95.221 Q 80.055 101.46900000000001 70.792 112.46300000000001 T51.836 136.855 T22.85 160.244 T-2.472 191.223 T-17.299 222.84300000000002 T-33.052 245.988 T-49.883 280.339 T-69.106 301.382"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-30"
              d="M90.425 197.589 Q 109.55 206.87800000000001 131.287 209.358 T176.20600000000002 228.39000000000001 T201.915 233.499 T250.36 243.364 T277.024 249.143 T314.44100000000003 245.898 T341.461 238.995 T382.987 219.762"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-31"
              d="M122.48800000000001 208.636 Q 120.566 193.397 121.83500000000001 177.925 T117.768 146.455 T108.848 116.916 T104.95800000000001 81.749 T110.309 51.664 T126.866 7.338 T139.924 -25.497 T150.611 -52.043"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-32"
              d="M82.071 53.359 Q 58.707 61.168 36.604 72.339 T4.673 95.313 T-27.044 111.09100000000001 T-72.496 131.067 T-95.97800000000001 142.588 T-117.875 159.292 T-145.928 189.327 T-184.797 218.506"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-33"
              d="M132.456 66.643 Q 130.68 48.813 123.61 31.915 T117.851 -4.312 T110.36800000000001 -40.862 T109.756 -77.47200000000001 T114.056 -105.34800000000001 T125.325 -134.04500000000002 T130.553 -159.201 T140.965 -199.595"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-34"
              d="M202.684 86.255 Q 197.12800000000001 71.863 185.517 60.616 T167.638 42.555 T134.924 12.996 T111.152 -4.458 T72.047 -27.54 T40.143 -45.138 T10.131 -61.652 T-22.884 -86.10300000000001"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-35"
              d="M205.752 245.37300000000002 Q 188.353 252.23000000000002 170.38 257.529 T134.618 271.636 T99.48800000000001 285.25 T66.854 294.716 T28.003 297.472 T-11.331 288.28000000000003 T-36.714 289.774 T-79.84700000000001 300.151"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-36"
              d="M111.175 118.57000000000001 Q 96.81 105.839 82.858 92.648 T57.315 75.391 T24.164 48.718 T1.737 19.682000000000002 T-26.355 -3.4 T-56.594 -25.629 T-82.09100000000001 -46.208 T-105.313 -76.173"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-37"
              d="M116.925 106.401 Q 102.572 95.486 84.072 91.526 T47.347 86.025 T5.291 89.295 T-23.385 95.526 T-59.564 115.398 T-85.775 141.286 T-108.85300000000001 178.516 T-118.50200000000001 202.817"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-38"
              d="M64.53 167.448 Q 52.879 155.797 40.051 145.386 T6.9030000000000005 120.85600000000001 T-8.247 99.952 T-26.254 63.480000000000005 T-41.208 29.844 T-57.928000000000004 7.215 T-80.115 -37.069 T-88.882 -80.462"
              fill="none"
              stroke="none"
            />{' '}
            <path
              id="firefly-39"
              d="M242.864 225.47 Q 229.073 230.543 215.38800000000001 235.886 T181.883 238.83700000000002 T142.028 251.155 T108.967 261.781 T70.59 273.116 T24.052 276.863 T-5.705 281.741 T-32.874 283.593"
              fill="none"
              stroke="none"
            />
          </g>
        </g>
        {Array.from({ length: 420 }, (_, i) => {
          const begin = getRandomInt(20, 10);
          const dur = getRandomInt(20, 10);
          const colours = ['#da0f7a', '#ffa283', '#13cdcd'];
          const r = Math.random() + 1;
          const cx = getRandomInt(20, 10);
          const cy = getRandomInt(20, 10);
          const translateWidth = getRandomInt(defaultWidth);
          const translateHeight = getRandomInt(defaultHeight);
          const animateValue = Math.random() * 3;

          return (
            <g transform={`translate(${translateWidth} ${translateHeight})`}>
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill={colours[i % 3]}
                style={{ mixBlendMode: 'screen' }}
              >
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  keyTimes="0;0.1;1"
                  dur={dur}
                  repeatCount="indefinite"
                  begin={begin * -1}
                />
                <animate
                  attributeName="r"
                  values={`0;${animateValue};0`}
                  keyTimes="0;0.1;1"
                  dur={dur}
                  repeatCount="indefinite"
                  begin={begin * -1}
                />
                <animateMotion
                  dur={dur}
                  repeatCount="indefinite"
                  begin={begin * -1}
                >
                  <mpath href={`#firefly-${(i + 1) % 39}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
