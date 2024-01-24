import{e as d,r as e,j as n}from"./index-ed02d9c9.js";const c=d.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 100%;
  padding-bottom: 46px;
  color: var(--white-color);
  background-color: var(--black-color);
  background-repeat: no-repeat;
  overflow: hidden;
  z-index: 1;
  opacity: ${a=>a.visibility==="true"?1:0};
  transition: opacity 0.6s ease-out;

  @media screen and (max-width: 767px) {
    background-image: ${a=>{var i,t;return(i=a["data-background"])!=null&&i.mobil?`url(${(t=a["data-background"])==null?void 0:t.mobil})`:"none"}};
    background-position: right bottom;
    background-size: auto 70%;
    padding-top: 60px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: ${a=>{var i,t;return(i=a["data-background"])!=null&&i.tablet?`url(${(t=a["data-background"])==null?void 0:t.tablet})`:"none"}};
    background-position: right center;
    background-size: auto 100%;
    padding-top: 84px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    background-image: ${a=>{var i,t;return(i=a["data-background"])!=null&&i.desctop?`url(${(t=a["data-background"])==null?void 0:t.desctop})`:"none"}};
    background-position: right center;
    background-size: auto 100%;
    padding-top: 84px;
    padding-bottom: 46px;
  }

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
    background-image: ${a=>{var i,t;return(i=a["data-background"])!=null&&i.mobilretina?`url(${(t=a["data-background"])==null?void 0:t.mobilretina})`:"none"}};
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) and (-webkit-min-device-pixel-ratio: 2) {
    background-image: ${a=>{var i,t;return(i=a["data-background"])!=null&&i.tabletretina?`url(${(t=a["data-background"])==null?void 0:t.tabletretina})`:"none"}};
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2) {
    background-image: ${a=>{var i,t;return(i=a["data-background"])!=null&&i.desctopretina?`url(${(t=a["data-background"])==null?void 0:t.desctopretina})`:"none"}};
  }
`,p=d.div`
  display: block;
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 375px;
    padding: 0px 20px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0px 96px;
  }
`,m=({backgrounds:a={},children:i})=>{const[t,o]=e.useState(!1);return e.useEffect(()=>{const r=setTimeout(()=>{o(!0)},20);return()=>{clearTimeout(r)}},[]),n.jsx(c,{"data-background":a,visibility:t?"true":"false",children:n.jsx(p,{children:i})})};export{m as S};
