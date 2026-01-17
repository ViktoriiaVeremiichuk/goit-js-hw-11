import{a as m,S as p,i as h}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",g="54231764-14b33dfcfee9941eea7be9726";async function v(a){return(await m.get(y,{params:{q:a,key:g,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:50}})).data}const l=document.querySelector(".gallery"),L=new p(".gallery a"),u=document.getElementById("loader");function b(a){const s=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:o,comments:d,downloads:f})=>`<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${r}"
      data-source="${i}"
      alt="${e}"
    />
  </a>
  <div class="quantitative-data">
      <div class="stats-info">
        <h2 class="stats-title">Likes</h2>
        <p class="stats-num">${t}</p>
      </div>
      <div class="stats-info">
        <h2 class="stats-title">Views</h2>
        <p class="stats-num">${o}</p>
      </div>
      <div class="stats-info">
        <h2 class="stats-title">Comments</h2>
        <p class="stats-num">${d}</p>
      </div>
      <div class="stats-info">
        <h2 class="stats-title">Downloads</h2>
        <p class="stats-num">${f}</p>
      </div>
  </div>
</li>`).join("");l.insertAdjacentHTML("beforeend",s),L.refresh()}function c(){l.innerHTML=""}function q(){u.classList.remove("hidden")}function S(){u.classList.add("hidden")}const n=document.querySelector(".search-input"),$=document.querySelector(".form");n.addEventListener("focus",()=>{n.value=""});$.addEventListener("submit",a=>{a.preventDefault();const s=n.value.trim();s!==""&&(q(),v(s).then(r=>{r.hits.length===0?(c(),h.error({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:"2000"})):(c(),b(r.hits))}).catch(r=>console.log(r)).finally(()=>S()))});
//# sourceMappingURL=index.js.map
