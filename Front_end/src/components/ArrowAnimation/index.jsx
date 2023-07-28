import React, { useEffect } from 'react';
import './arrowAnimation.scss';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

function ArrowAnimation() {
    gsap.registerPlugin(MotionPathPlugin);

    const displayAnimation = (elem, delay, duration) => {
        gsap.to(elem, {
            duration: 2,
            ease: 'power1.inOut',
            motionPath: {
                path: '#path',
                align: '#path',
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
            },
        });
    };
    useEffect(() => {
        displayAnimation('polygon');
    }, []);

    return (
        <>
            <svg>
                <path
                    id='path'
                    strokeDasharray='10,10'
                    d='M2 11C21.0965 5.34174 41.935 3.23619 61.7778 2.99996C79.8485 2.78484 102.058 1.24616 117.111 13.4444C127.291 21.6937 135.506 36.0442 136 49C136.89 72.3524 120.975 81.0532 98.5556 82.7777C94.1253 83.1185 86.1725 84.212 82.3333 81.1111C73.8802 74.2835 83.8824 63.8822 90.1111 60.5555C108.803 50.5725 133.612 49.4337 154.222 47.3333C171.179 45.6052 188.081 45 205.111 45C222.416 45 234.93 50.3225 248.667 60.8889C255.589 66.2134 258.14 73.1395 264 79'
                    stroke='white'
                    strokeWidth='4'
                    strokeLinecap='round'
                />
                <polygon fill='white' points='50,30 30,60 50,50' />
            </svg>
        </>
    );
}
export default ArrowAnimation;
