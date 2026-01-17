import{a as m,S as p,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",g="54231764-14b33dfcfee9941eea7be9726";async function y(i){return(await m.get(h,{params:{q:i,key:g,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:50}})).data}const c=document.querySelector(".gallery"),v=new p(".gallery a"),u=document.getElementById("loader");function L(i){const s=i.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:a,comments:d,downloads:f})=>`<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${r}"
      data-source="${o}"
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
        <p class="stats-num">${a}</p>
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
</li>`).join("");c.insertAdjacentHTML("beforeend",s),v.refresh()}function b(){c.innerHTML=""}function q(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}const n=document.querySelector(".search-input"),S=document.querySelector(".form");n.addEventListener("focus",()=>{n.value=""});S.addEventListener("submit",i=>{i.preventDefault();const s=n.value.trim();s!==""&&(b(),q(),y(s).then(r=>{r.hits.length===0?l.error({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:"2000"}):L(r.hits)}).catch(r=>{console.log(r),l.error({title:"Error",message:"Something went wrong with the server request. Please try again later.!",position:"topRight",timeout:"2000"})}).finally(()=>w()))});
//# sourceMappingURL=index.js.map
