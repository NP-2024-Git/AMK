     const loader = document.createElement('div');
loader.id = 'pageLoader';
loader.style.cssText = `
  position: fixed;
  top:0; left:0;
  width:100%; height:100%;
  background:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:9999;
`;

loader.innerHTML = `
<svg style="position: absolute; width: 0; height: 0;">
  <filter id="goo">
  <feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur>
  <feColorMatrix values="0 0 0 0 0 
            0 0 0 0 0 
            0 0 0 0 0 
            0 0 0 48 -7"></feColorMatrix>
</filter>
</svg>

<div class="loader"></div>
`;

const style = document.createElement('style');
style.innerHTML = `
.loader {
  width: 12em;
  height: 3em;
  position: relative;
  overflow: hidden;
  border-bottom: 8px solid #000;
  filter: url(#goo);
}

.loader::before {
  content: '';
  width: 22em;
  height: 18em;
  background: #f00;
  position: absolute;
  border-radius: 50%;
  left: -2em;
  bottom: -18em;
  animation: wee1 2s linear infinite;
}

.loader::after {
  content: '';
  width: 16em;
  height: 12em;
  background: #0ff;
  position: absolute;
  border-radius: 50%;
  left: -4em;
  bottom: -12em;
  animation: wee2 2s linear infinite 0.75s;
}

@keyframes wee1 {
  0% {
    transform: translateX(-10em) rotate(0deg);
  }

  100% {
    transform: translateX(7em) rotate(180deg);
  }
}

@keyframes wee2 {
  0% {
    transform: translateX(-8em) rotate(0deg);
  }

  100% {
    transform: translateX(8em) rotate(180deg);
  }
}
`;
document.head.appendChild(style);
document.body.appendChild(loader);

window.addEventListener('load', () => {
  setTimeout(() => loader.remove(), 1200);
});
   