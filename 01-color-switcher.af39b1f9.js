const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");function r(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{timerStartId=setInterval(r,1e3),t.setAttribute("disabled","disable"),e.removeAttribute("disabled")})),e.addEventListener("click",(()=>{clearInterval(timerStartId),t.removeAttribute("disabled"),e.setAttribute("disabled","disable")})),console.log(function(t){t.toLowerCase();let e="";for(i=t.length-1;i>=0;i-=1)e+=t[i];console.log(e)}("wordisbig"));
//# sourceMappingURL=01-color-switcher.af39b1f9.js.map
