// Create loader
const loader = document.createElement('div');
loader.id = 'pageLoader';
loader.style.position = 'fixed';
loader.style.top = '0';
loader.style.left = '0';
loader.style.width = '100%';
loader.style.height = '100%';
loader.style.background = '#272727';
loader.style.display = 'flex';
loader.style.alignItems = 'center';
loader.style.justifyContent = 'center';
loader.style.zIndex = '9999';

loader.innerHTML = `
<div class="pl">
  ${'<div class="pl__dot"></div>'.repeat(12)}
  <div class="pl__text">:D</div>
</div>
`;

// Add loader CSS
const style = document.createElement('style');
style.innerHTML = `
.pl {
  box-shadow: 2em 0 2em rgba(0,0,0,0.2) inset, -2em 0 2em rgba(255,255,255,0.1) inset;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transform: rotateX(30deg) rotateZ(45deg);
  width: 14em;
  height: 14em;
  color: white;
  border-radius: 50%;
  --bg: #444;
  --primary1: #ff5722;
  --primary2: #888;
  --fg-t: #fff;
  --trans-dur: 0.3s;
}

.pl__dot {
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  top: calc(50% - 0.75em);
  left: calc(50% - 0.75em);
  border-radius: 50%;
  animation: shadow724 2s infinite;
  box-shadow: 0.1em 0.1em 0 0.1em black, 0.3em 0 0.3em rgba(0,0,0,0.5);
}

.pl__dot:before, .pl__dot:after {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: inherit;
}

.pl__dot:before {
  animation: pushInOut1724 2s infinite;
  background-color: var(--bg);
  box-shadow: 0.05em 0 0.1em rgba(255,255,255,0.2) inset;
  z-index: 1;
}

.pl__dot:after {
  animation: pushInOut2724 2s infinite;
  background-color: var(--primary1);
  bottom: 0;
  clip-path: polygon(0 75%,100% 75%,100% 100%,0 100%);
  height: 3em;
  transform: rotate(-45deg);
  transform-origin: 50% 2.25em;
  box-shadow: 0.1em 0.3em 0.2em rgba(255,255,255,0.4) inset, 0 -0.4em 0.2em #2e3138 inset, 0 -1em 0.25em rgba(0,0,0,0.3) inset;
}

.pl__text {
  font-size: 0.75em;
  max-width: 5rem;
  position: relative;
  text-shadow: 0 0 0.1em var(--fg-t);
  transform: rotateZ(-45deg);
}

/* Animations */
@keyframes shadow724 {
  0%, 50%, 100% { box-shadow: 0.1em 0.1em 0 0.1em black, 0.3em 0 0.3em rgba(0,0,0,0.3); }
  25% { box-shadow: 0.1em 0.1em 0 0.1em black, 0.8em 0 0.8em rgba(0,0,0,0.5); }
}

@keyframes pushInOut1724 {
  0%,50%,100% { transform: translate(0,0); background-color: var(--bg); }
  25% { transform: translate(-71%,-71%); background-color: var(--primary2); }
}

@keyframes pushInOut2724 {
  0%,50%,100% { clip-path: polygon(0 75%,100% 75%,100% 100%,0 100%); background-color: var(--bg); }
  25% { clip-path: polygon(0 25%,100% 25%,100% 100%,0 100%); background-color: var(--primary1); }
}

/* Position dots */
${[...Array(12)].map((_,i)=>`
.pl__dot:nth-child(${i+1}) {
  transform: rotate(-${i*30}deg) translateX(5em) rotate(${i*30}deg);
  z-index: ${i<6?6-i:i-5};
}
.pl__dot:nth-child(${i+1}), .pl__dot:nth-child(${i+1}):before, .pl__dot:nth-child(${i+1}):after {
  animation-delay: -${(i/12*2).toFixed(10)}s;
}
`).join('')}
`;

document.head.appendChild(style);
document.body.appendChild(loader);

window.addEventListener('load', () => {
  setTimeout(() => loader.remove(), 1200);
});
