import{a as e}from"./rolldown-runtime-COnpUsM8.js";import{a as t,o as n}from"./motion-Bj7nEJAP.js";var r=e(n(),1),i=t();function a({as:e=`article`,className:t=``,children:n,...a}){let o=(0,r.useRef)(null),s=(0,r.useRef)(0),c=(0,r.useCallback)(e=>{let t=o.current;!t||window.innerWidth<768||(cancelAnimationFrame(s.current),s.current=requestAnimationFrame(()=>{let n=t.getBoundingClientRect(),r=(e.clientX-n.left)/n.width-.5,i=(e.clientY-n.top)/n.height-.5;t.style.transform=`
        perspective(1000px)
        rotateX(${-i*8}deg)
        rotateY(${r*10}deg)
        scale3d(1.02,1.02,1.02)
      `}))},[]),l=(0,r.useCallback)(()=>{let e=o.current;e&&(e.style.transform=`perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`)},[]);return(0,i.jsx)(e,{ref:o,className:`transition-transform duration-300 will-change-transform ${t}`,onMouseMove:c,onMouseLeave:l,...a,children:n})}var o=(0,r.memo)(a);export{o as t};