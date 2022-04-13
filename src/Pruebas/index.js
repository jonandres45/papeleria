import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function Pruebas(){
    return (
        <div>
                    <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
  <h1>
    React Animate On Scroll
  </h1>
  <h2>
    Using:
  </h2>
</ScrollAnimation>
<ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
  <h2>
    <a href='https://daneden.github.io/animate.css/'>
      Animate.css
    </a>
  </h2>
</ScrollAnimation>
        </div>
    );
}

export {Pruebas};