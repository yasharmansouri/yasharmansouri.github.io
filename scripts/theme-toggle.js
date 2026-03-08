(function(){const n=(()=>{const r=localStorage.getItem("theme");return r||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")})();document.documentElement.setAttribute("data-theme",n)})(),document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("theme-toggle"),n=e?.querySelector(".theme-icon");if(!e||!n){console.warn("Theme toggle button not found");return}const r=()=>document.documentElement.getAttribute("data-theme")||"dark",i=o=>{o==="dark"?(n.innerHTML=`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>`,e.setAttribute("aria-pressed","true"),e.setAttribute("aria-label","Switch to light mode")):(n.innerHTML=`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>`,e.setAttribute("aria-pressed","false"),e.setAttribute("aria-label","Switch to dark mode"))};i(r()),e.addEventListener("click",function(){const t=r()==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t),i(t)}),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",o=>{if(!localStorage.getItem("theme")){const t=o.matches?"dark":"light";document.documentElement.setAttribute("data-theme",t),i(t)}})});
