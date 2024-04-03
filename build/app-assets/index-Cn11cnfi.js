import{r as t,j as e,c as d,a as R,R as D}from"./vendor-CmXSQ-Az.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function N(s){const[o,n]=t.useState(window.matchMedia(s).matches),i=()=>n(window.matchMedia(s).matches);return t.useEffect(()=>{const r=window.matchMedia(s);return i(),r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[s]),o}function v(){const s=N("(max-width: 800px)"),o=N("(max-width: 1024px)"),n=N("(max-width: 1280px)"),i=N("(max-width: 1512px)");return{isMobile:s,isTablet:o,isLaptop:n,isDesktopSmall:i}}const G="_text_tcjhp_1",P="_truncateOne_tcjhp_1",B="_truncateMany_tcjhp_7",Z="_isCentered_tcjhp_12",Q="_isUppercased_tcjhp_15",W="_isInLine_tcjhp_18",m={text:G,truncateOne:P,truncateMany:B,isCentered:Z,isUppercased:Q,isInLine:W,"size--12":"_size--12_tcjhp_21","size--13":"_size--13_tcjhp_24","size--14":"_size--14_tcjhp_27","size--15":"_size--15_tcjhp_30","size--16":"_size--16_tcjhp_33","size--18":"_size--18_tcjhp_36","size--20":"_size--20_tcjhp_39","size--22":"_size--22_tcjhp_42","size--24":"_size--24_tcjhp_45","size--28":"_size--28_tcjhp_48","size--32":"_size--32_tcjhp_51","size--36":"_size--36_tcjhp_54","size--40":"_size--40_tcjhp_57","size--44":"_size--44_tcjhp_60","size--48":"_size--48_tcjhp_63","size--64":"_size--64_tcjhp_66","weight--400":"_weight--400_tcjhp_69","weight--500":"_weight--500_tcjhp_72","weight--600":"_weight--600_tcjhp_75","weight--700":"_weight--700_tcjhp_78","color--default":"_color--default_tcjhp_81","color--secondary":"_color--secondary_tcjhp_84","color--dark":"_color--dark_tcjhp_87"},c=({tag:s="div",size:o,color:n="default",weight:i=500,truncateLines:r,isCentered:a,isUppercased:l,isInLine:w,children:k,onClick:h,className:E})=>{const A=s,z=r&&r===1,L=r&&r>1;return e.jsx(A,{onClick:h,style:{...L?{WebkitLineClamp:r}:{}},className:d(m.text,E,m[`size--${o}`],m[`color--${n}`],m[`weight--${i}`],{[m.isCentered]:a,[m.isUppercased]:l,[m.truncateOne]:z,[m.truncateMany]:L,[m.isInLine]:w}),children:k})},K="_link_derzr_1",Y={link:K},j=({href:s,onClick:o,children:n})=>{const{isMobile:i}=v();return e.jsx("a",{href:s,children:e.jsx(c,{size:i?20:16,className:Y.link,onClick:o,children:n})})},J=s=>t.createElement("svg",{width:105,height:30,viewBox:"0 0 105 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},t.createElement("g",{clipPath:"url(#clip0_2003_3740)"},t.createElement("path",{d:"M42.4999 30C42.4999 30 37.7986 28.8492 37.4999 26.25C35.7073 28.8492 32.1854 29.728 29.1381 29.728C26.1206 29.728 24.1637 29.0409 23.2674 27.6666C22.6699 26.8002 22.3711 25.8142 22.3711 24.7088C22.3711 23.6034 22.4607 22.5876 22.64 21.6615L25.1496 7.54492H32.768L30.6617 19.4656C30.5721 20.0033 30.5273 20.5411 30.5273 21.0789C30.5273 22.5129 31.334 23.23 32.9473 23.23C34.2917 23.23 35.3672 22.7669 36.1739 21.8407L38.7283 7.54492H46.3468L43.8371 21.6615C43.8073 21.8407 42.4999 30 42.4999 30Z",fill:"white"}),t.createElement("path",{d:"M9.18695 29.7281C5.7213 29.7281 3.22663 28.9514 1.70294 27.3978C0.56765 26.2625 0 24.7388 0 22.8267C0 22.1993 0.0597525 21.5271 0.179257 20.81L3.22663 3.46692L11.4277 0.0610352L10.128 7.545H22.4968L21.3764 13.8638H9.0077L8.1114 18.9279C7.9919 19.4955 7.93215 20.0034 7.93215 20.4515C7.93215 22.3337 8.8284 23.2749 10.621 23.2749C11.5771 23.2749 12.3687 22.8715 12.9962 22.0648C13.6535 21.2582 14.1016 20.1826 14.3406 18.8382H21.7798C20.525 26.0981 16.3274 29.7281 9.18695 29.7281Z",fill:"white"}),t.createElement("path",{d:"M99.8968 28.7091C99.8043 29.2196 99.5223 29.75 99.0033 29.75C96.2848 29.75 94.7458 29.1006 93.9393 27.8458C93.4018 27.0093 93.1328 26.1279 93.1328 25.2017C93.1328 24.2457 93.1923 23.4092 93.3118 22.6922L95.2493 12L103.749 7.5L99.8968 28.7091Z",fill:"white"}),t.createElement("path",{d:"M80.4487 29.6671C76.9832 29.6671 74.4882 28.8903 72.9647 27.3367C71.8292 26.2014 71.2617 24.6777 71.2617 22.7656C71.2617 22.1382 71.3212 21.466 71.4407 20.749L74.4882 3.40588L82.6892 0L81.3897 7.484H93.7582L92.6382 13.8028H80.2692L79.3732 18.8668C79.2537 19.4344 79.1937 19.9423 79.1937 20.3905C79.1937 22.2727 80.0902 23.2138 81.8827 23.2138C82.8387 23.2138 83.6302 22.8105 84.2577 22.0038C84.9152 21.1971 85.3632 20.1216 85.6022 18.7772H93.0412C91.7867 26.0371 87.5892 29.6671 80.4487 29.6671Z",fill:"white"}),t.createElement("path",{d:"M55.8548 29.6671C52.3893 29.6671 49.8946 28.8903 48.3709 27.3367C47.2356 26.2014 46.668 24.6777 46.668 22.7656C46.668 22.1382 46.7277 21.466 46.8472 20.749L49.8946 3.40588L58.0958 0L56.7958 7.484H79.1648L78.0443 13.8028H55.6758L54.7793 18.8668C54.6598 19.4344 54.6003 19.9423 54.6003 20.3905C54.6003 22.2727 55.4963 23.2138 57.2888 23.2138C58.2448 23.2138 59.0368 22.8105 59.6643 22.0038C60.3213 21.1971 60.7693 20.1216 61.0083 18.7772H68.4478C67.1928 26.0371 62.9953 29.6671 55.8548 29.6671Z",fill:"white"}),t.createElement("path",{d:"M9.18695 29.6671C5.7213 29.6671 3.22663 28.8903 1.70294 27.3367C0.56765 26.2014 0 24.6777 0 22.7656C0 22.1382 0.0597525 21.466 0.179257 20.749L3.22663 3.40588L11.4277 0L10.128 7.484H22.4968L21.3764 13.8028H9.0077L8.1114 18.8668C7.9919 19.4344 7.93215 19.9423 7.93215 20.3905C7.93215 22.2727 8.8284 23.2138 10.621 23.2138C11.5771 23.2138 12.3687 22.8105 12.9962 22.0038C13.6535 21.1971 14.1016 20.1216 14.3406 18.7772H21.7798C20.525 26.0371 16.3274 29.6671 9.18695 29.6671Z",fill:"white"}),t.createElement("path",{d:"M95.5 10.75L102.237 7.18335C103.347 6.59565 104.117 5.52055 104.315 4.28019L105 0L96.5 4.5L95.5 10.75Z",fill:"white"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_2003_3740"},t.createElement("rect",{width:105,height:30,fill:"white"})))),H=J,X="_wrapper_1l5kh_1",ee="_content_1l5kh_12",te="_logo_1l5kh_22",se="_menu_1l5kh_28",ie="_pageLinks_1l5kh_31",re="_hamburger_1l5kh_51",x={wrapper:X,content:ee,logo:te,menu:se,pageLinks:ie,"wrapper-active":"_wrapper-active_1l5kh_41","menu-active":"_menu-active_1l5kh_51",hamburger:re},ne=()=>{const{isMobile:s}=v(),[o,n]=t.useState(!1),i=()=>{n(!1)};return e.jsx("div",{className:d(x.wrapper,{[x["wrapper-active"]]:o}),children:e.jsxs("div",{className:x.content,children:[e.jsx("div",{className:x.logo,children:e.jsx(H,{onClick:()=>{n(!1),window.scrollTo({top:0})}})}),e.jsxs("div",{className:d(x.menu,{[x["menu-active"]]:o}),children:[s&&e.jsx("div",{className:x.hamburger,onClick:()=>n(!o)}),e.jsxs("div",{className:x.pageLinks,children:[e.jsx(j,{href:"#",onClick:i,children:"$Tutti"}),e.jsx(j,{href:"#actors",onClick:i,children:"Actors"}),e.jsx(j,{href:"#flows",onClick:i,children:"Flows"}),e.jsx(j,{href:"#use-cases",onClick:i,children:"Use cases"}),e.jsx(j,{href:"#lightpaper",onClick:i,children:"Lightpaper"}),e.jsx(j,{href:"#contact",onClick:i,children:"Contact"})]})]})]})})},oe=t.memo(ne),ce="_wrapper_r5vly_1",ae="_content_r5vly_1",le="_logo_r5vly_8",de="_pageLinks_r5vly_14",pe="_link_r5vly_20",_e="_additional_r5vly_37",he="_agreements_r5vly_42",me="_stamp_r5vly_70",_={wrapper:ce,content:ae,logo:le,pageLinks:de,link:pe,additional:_e,agreements:he,stamp:me},ue=()=>{const{isMobile:s}=v();return e.jsxs("div",{className:_.wrapper,children:[e.jsxs("div",{className:_.content,children:[e.jsx("div",{className:_.logo,children:e.jsx(H,{onClick:()=>{window.scrollTo({top:0})}})}),!s&&e.jsxs("div",{className:_.pageLinks,children:[e.jsx("a",{href:"#",children:e.jsx(c,{size:16,className:_.link,children:"$Tutti"})}),e.jsx("a",{href:"#actors",children:e.jsx(c,{size:16,className:_.link,children:"Actors"})}),e.jsx("a",{href:"#flows",children:e.jsx(c,{size:16,className:_.link,children:"Flows"})}),e.jsx("a",{href:"#use-cases",children:e.jsx(c,{size:16,className:_.link,children:"Use cases"})}),e.jsx("a",{href:"#lightpaper",children:e.jsx(c,{size:16,className:_.link,children:"Lightpaper"})}),e.jsx("a",{href:"#contact",children:e.jsx(c,{size:16,className:_.link,children:"Contact"})})]})]}),e.jsxs("div",{className:_.additional,children:[e.jsx(c,{size:16,color:"dark",className:_.stamp,children:"©2024 tutti"}),e.jsxs("div",{className:_.agreements,children:[e.jsx(c,{size:16,color:"dark",children:"Privacy Policy"}),e.jsx(c,{size:16,color:"dark",children:"Legal notice"})]})]})]})},ve=t.memo(ue),ge="_wrapper_1azh1_1",xe="_inner_1azh1_7",V={wrapper:ge,inner:xe},we=({children:s})=>e.jsx("div",{className:V.wrapper,children:e.jsxs("div",{className:V.inner,children:[e.jsx(oe,{}),e.jsx("div",{children:s}),e.jsx(ve,{})]})}),be="_tabs_dfd73_1",fe="_tab_dfd73_1",je="_isActive_dfd73_37",Ce="_content_dfd73_74",ke="_contentIsActive_dfd73_74",Le="_contentSlideIn_dfd73_74",ye="_slideIn_dfd73_1",Ee="_contentSlideOut_dfd73_77",ze="_slideOut_dfd73_1",b={tabs:be,tab:fe,isActive:je,content:Ce,contentIsActive:ke,contentSlideIn:Le,slideIn:ye,contentSlideOut:Ee,slideOut:ze},M=({children:s})=>e.jsx(e.Fragment,{children:s}),Te=({initialTab:s,currentTab:o,children:n,className:i,tabsClassName:r,onChange:a})=>{const l=o!==void 0,[w,k]=t.useState(s||0),h=l?o:w,[E,A]=t.useState(h),[z,L]=t.useState(!1);t.useEffect(()=>{const g=setTimeout(()=>{L(!1)},500);return()=>clearTimeout(g)},[z]);const F=t.Children.toArray(n),q=t.useCallback(g=>{a==null||a(g),l||k(g)},[l,a]);return e.jsxs("div",{className:i,children:[e.jsx("div",{className:d(b.tabs,r),children:F.map((g,T)=>e.jsx("div",{onClick:()=>{A(h),L(!0),q(T)},className:d(b.tab,g.props.className,{[b.isActive]:T===h,[`${g.props.activeClassName}`]:T===h}),children:g.props.title},T))}),e.jsx("div",{className:d(b.content,{[b.contentIsActive]:z,[b.contentSlideIn]:E>h,[b.contentSlideOut]:E<h}),children:F[h]})]})},C=({threshold:s=.5}={})=>{const{isMobile:o}=v(),n=t.useRef(null),[i,r]=t.useState(!1);return t.useEffect(()=>{const a={root:null,rootMargin:o?"80px 0px 0px":"110px 0px 0px",threshold:s},l=new IntersectionObserver(w=>{w.forEach(k=>{r(k.isIntersecting)})},a);return n.current&&l.observe(n.current),()=>{n.current&&l.unobserve(n.current)}},[n]),{ref:n,isVisible:i}},Ne="_wrapper_1vgtp_1",Me="_title_1vgtp_19",$e="_description_1vgtp_22",$={wrapper:Ne,"wrapper--unlock":"_wrapper--unlock_1vgtp_7","wrapper--enable":"_wrapper--enable_1vgtp_10","wrapper--leverage":"_wrapper--leverage_1vgtp_13","wrapper--auto-degen":"_wrapper--auto-degen_1vgtp_16",title:Me,description:$e},I=({title:s,description:o,iconId:n})=>{const{isMobile:i}=v();return e.jsxs("div",{className:d($.wrapper,$[`wrapper--${n}`]),children:[e.jsx(c,{size:i?24:32,weight:700,className:$.title,children:s}),e.jsx(c,{size:i?16:24,color:"secondary",className:$.description,children:o})]})},Ie="_wrapper_mebpn_1",Se="_title_mebpn_27",Ue="_proposition_mebpn_35",Ae="_propositionTitle_mebpn_43",y={wrapper:Ie,title:Se,proposition:Ue,"proposition--visible":"_proposition--visible_mebpn_40",propositionTitle:Ae},Oe=()=>{const{isMobile:s,isTablet:o}=v(),{ref:n,isVisible:i}=C({threshold:.4});return e.jsxs("div",{className:y.wrapper,children:[e.jsxs("div",{className:y.title,children:[e.jsx(c,{size:s?28:o?48:64,weight:700,isUppercased:!0,children:"Tutti Is a cross-chain liquidity market"}),e.jsx(c,{size:s?18:o?24:32,color:"secondary",children:"For native bitcoin to EVM chains without a bridge."})]}),e.jsxs("div",{ref:n,className:d(y.proposition,{[y["proposition--visible"]]:i}),children:[!s&&e.jsx(c,{size:32,weight:700,isUppercased:!0,isCentered:!0,className:y.propositionTitle,children:"Value Proposition"}),e.jsxs(Te,{children:[e.jsx(M,{title:"Unlock",children:e.jsx(I,{title:"Unlock cross-chain liquidity without bridges",description:"Deposit bitcoin and borrow USDC on EVM chains",iconId:"unlock"})}),e.jsx(M,{title:"Enable",children:e.jsx(I,{title:"Enable yield for bitcoin",description:"Deposit bitcoin and borrow liquid (re)staking tokens; earning yield without selling",iconId:"enable"})}),e.jsx(M,{title:"Leverage",children:e.jsx(I,{title:"Leverage strategies like reflexive looping",description:"Deposit bitcoin, borrow ETH, stake ETH, restake ETH, repeat",iconId:"leverage"})}),e.jsx(M,{title:"Auto Degen",children:e.jsx(I,{title:"Auto Degen strategy",description:"Deposit bitcoin, borrow ETH, deposit onto Gearbox to margin trade or leverage liquidity provisioning via one-click",iconId:"auto-degen"})})]})]})]})},Fe=s=>t.createElement("svg",{width:300,height:312,viewBox:"0 0 300 312",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},t.createElement("rect",{width:173.205,height:173.205,transform:"matrix(0.866025 0.5 -0.866025 0.5 150 138.564)",fill:"url(#paint0_linear_107_12375)"}),t.createElement("rect",{width:173.205,height:173.205,transform:"matrix(0.866025 0.5 -0.866025 0.5 150 103.923)",fill:"url(#paint1_linear_107_12375)"}),t.createElement("rect",{width:173.205,height:173.205,transform:"matrix(0.866025 0.5 -0.866025 0.5 150 69.2822)",fill:"url(#paint2_linear_107_12375)"}),t.createElement("rect",{width:173.205,height:173.205,transform:"matrix(0.866025 0.5 -0.866025 0.5 150 34.6411)",fill:"url(#paint3_linear_107_12375)"}),t.createElement("rect",{width:173.205,height:173.205,transform:"matrix(0.866025 0.5 -0.866025 0.5 150 0)",fill:"url(#paint4_linear_107_12375)"}),t.createElement("defs",null,t.createElement("linearGradient",{id:"paint0_linear_107_12375",x1:193.588,y1:191.793,x2:37.7036,y2:191.793,gradientUnits:"userSpaceOnUse"},t.createElement("stop",{stopColor:"#FFA800",stopOpacity:0}),t.createElement("stop",{offset:1,stopColor:"#E74F13",stopOpacity:.83})),t.createElement("linearGradient",{id:"paint1_linear_107_12375",x1:191.423,y1:189.628,x2:11.1307,y2:196.829,gradientUnits:"userSpaceOnUse"},t.createElement("stop",{stopColor:"#FFA800",stopOpacity:0}),t.createElement("stop",{offset:1,stopColor:"#E74F13"})),t.createElement("linearGradient",{id:"paint2_linear_107_12375",x1:187.093,y1:185.298,x2:11.1302,y2:192.492,gradientUnits:"userSpaceOnUse"},t.createElement("stop",{stopColor:"#FFA800",stopOpacity:0}),t.createElement("stop",{offset:1,stopColor:"#E74F13"})),t.createElement("linearGradient",{id:"paint3_linear_107_12375",x1:191.088,y1:194.293,x2:6.14226,y2:196.76,gradientUnits:"userSpaceOnUse"},t.createElement("stop",{stopColor:"#FFA800",stopOpacity:0}),t.createElement("stop",{offset:1,stopColor:"#E74F13"})),t.createElement("linearGradient",{id:"paint4_linear_107_12375",x1:174.103,y1:172.308,x2:-.0180441,y2:174.772,gradientUnits:"userSpaceOnUse"},t.createElement("stop",{stopColor:"#FFA800",stopOpacity:0}),t.createElement("stop",{offset:1e-4,stopColor:"#FFA800",stopOpacity:0}),t.createElement("stop",{offset:1,stopColor:"#E74F13"})))),Ve=Fe,He="_wrapper_13vqo_1",qe="_sectionTitle_13vqo_26",Re="_title_13vqo_35",De="_content_13vqo_42",Ge="_card_13vqo_49",Pe="_image_13vqo_149",p={wrapper:He,sectionTitle:qe,title:Re,content:De,card:Ge,"card-visible":"_card-visible_13vqo_58","card--stakers":"_card--stakers_13vqo_67","card--incentive":"_card--incentive_13vqo_79","card--voting":"_card--voting_13vqo_90",image:Pe},Be=()=>{const{isMobile:s,isTablet:o}=v(),{ref:n,isVisible:i}=C({threshold:s?.3:.5}),{ref:r,isVisible:a}=C({threshold:s?.3:.9}),{ref:l,isVisible:w}=C({threshold:s?.3:.7});return e.jsxs("div",{className:p.wrapper,children:[e.jsx(c,{size:16,weight:700,className:p.sectionTitle,children:"Utility"}),e.jsxs("div",{className:p.title,children:[e.jsxs(c,{size:s?20:32,weight:700,isUppercased:!0,children:["Tutti is a governance minimized,",e.jsx("br",{}),"cross-chain liquidity primitive."]}),e.jsx(c,{size:18,color:"secondary",children:"The native token, $TUTTI, is an incentive, staking, and voting asset."})]}),e.jsxs("div",{className:p.content,children:[e.jsx(c,{size:s?28:o?48:64,weight:700,isUppercased:!0,children:"UTILITY"}),e.jsx(Ve,{className:p.image}),e.jsxs("div",{ref:n,className:d(p.card,p["card--stakers"],{[p["card-visible"]]:i}),children:[e.jsx(c,{size:24,weight:700,children:"Stakers"}),e.jsx(c,{size:18,color:"secondary",children:"All revenue goes to stakers of TUTTI based on amount and time lock (optional)."})]}),e.jsxs("div",{ref:r,className:d(p.card,p["card--incentive"],{[p["card-visible"]]:a}),children:[e.jsx(c,{size:24,weight:700,children:"Incentive"}),e.jsx(c,{size:18,color:"secondary",children:"Lending pool depositors will receive rewards based on amount and time lock (optional)"})]}),e.jsxs("div",{ref:l,className:d(p.card,p["card--voting"],{[p["card-visible"]]:w}),children:[e.jsx(c,{size:24,weight:700,children:"Voting"}),e.jsx(c,{size:18,color:"secondary",children:"Tutti is designed to be a governance-lite protocol with minimal voting matters. Select items can be voted on stakers of $TUTTI only."})]})]})]})},Ze="_wrapper_1c460_1",Qe="_title_1c460_21",We="_text_1c460_51",S={wrapper:Ze,"wrapper--protocol-bg":"_wrapper--protocol-bg_1c460_9","wrapper--quantium-bg":"_wrapper--quantium-bg_1c460_12","wrapper--gearbox-bg":"_wrapper--gearbox-bg_1c460_15","wrapper--evm-bg":"_wrapper--evm-bg_1c460_18",title:Qe,text:We},U=({title:s,description:o,iconId:n})=>{const{isMobile:i,isTablet:r}=v();return e.jsx("div",{className:d(S.wrapper,S[`wrapper--${n}`]),children:e.jsxs("div",{className:S.text,children:[e.jsx(c,{size:i?16:r?18:20,weight:700,isUppercased:!0,className:S.title,children:s}),e.jsx(c,{size:r?14:18,color:"secondary",children:o})]})})},Ke="_wrapper_1av28_1",Ye="_title_1av28_1",Je="_tag_1av28_7",Xe="_card_1av28_15",et="_cardTitle_1av28_31",tt="_cardDescription_1av28_32",f={wrapper:Ke,title:Ye,tag:Je,card:Xe,"card--bitcoin":"_card--bitcoin_1av28_22","card--evm":"_card--evm_1av28_25","card--gearbox":"_card--gearbox_1av28_28",cardTitle:et,cardDescription:tt},O=({tag:s,label:o,title:n,description:i,iconId:r})=>{const{isMobile:a}=v(),l=t.memo(()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{size:24,weight:700,className:f.cardTitle,children:n}),e.jsx(c,{size:18,color:"secondary",className:f.cardDescription,children:i})]}));return e.jsxs("div",{className:f.wrapper,children:[e.jsxs("div",{className:f.title,children:[e.jsx(c,{size:a?16:20,weight:700,className:f.tag,children:s}),e.jsx(c,{size:a?20:24,weight:700,isUppercased:!0,children:o})]}),a&&e.jsx(l,{}),e.jsx("div",{className:d(f.card,f[`card--${r}`]),children:!a&&e.jsx(l,{})})]})},st=s=>t.createElement("svg",{width:81,height:59,viewBox:"0 0 81 59",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},t.createElement("path",{d:"M56.8387 58.2076C51.1025 58.2076 46.9734 56.9219 44.4515 54.3504C42.5724 52.4713 41.6328 49.9494 41.6328 46.7846C41.6328 45.7461 41.7317 44.6335 41.9295 43.4467L46.9734 14.7408L60.5475 9.10352L58.3964 21.4908H78.8688L77.0144 31.9495H56.542L55.0585 40.3313C54.8607 41.2709 54.7618 42.1115 54.7618 42.8533C54.7618 45.9686 56.2453 47.5263 59.2124 47.5263C60.7948 47.5263 62.1052 46.8587 63.1437 45.5236C64.2316 44.1884 64.9733 42.4082 65.3689 40.183H77.682C75.6051 52.1994 68.6573 58.2076 56.8387 58.2076Z",fill:"white"}),t.createElement("path",{d:"M16.1278 58.2076C10.3916 58.2076 6.26249 56.9218 3.74054 54.3504C1.86143 52.4713 0.921875 49.9494 0.921875 46.7846C0.921875 45.7461 1.02077 44.6335 1.21857 43.4467L6.2625 14.7408L19.8366 9.10352L17.6855 21.4908H54.7096L52.8552 31.9495H15.8311L14.3476 40.3313C14.1498 41.2709 14.0509 42.1115 14.0509 42.8533C14.0509 45.9686 15.5344 47.5263 18.5014 47.5263C20.0838 47.5263 21.3943 46.8587 22.4327 45.5236C23.5206 44.1884 24.2624 42.4082 24.658 40.183H36.9711C34.8942 52.1994 27.9464 58.2076 16.1278 58.2076Z",fill:"white"}),t.createElement("path",{d:"M65.1953 17.7931L75.7382 12.2116C77.9585 11.0361 79.4977 8.8859 79.8946 6.40518L80.9194 0L66.8505 7.44826L65.1953 17.7931Z",fill:"white"})),it=st,rt="_wrapper_16k62_1",nt="_sectionTitle_16k62_5",ot="_title_16k62_14",ct="_actors_16k62_18",at="_actorsRef_16k62_28",lt="_subsectionTitle_16k62_45",dt="_flows_16k62_65",u={wrapper:rt,sectionTitle:nt,title:ot,actors:ct,actorsRef:at,subsectionTitle:lt,"actors-visible":"_actors-visible_16k62_58",flows:dt,"flows-visible":"_flows-visible_16k62_73"},pt=()=>{const{ref:s,isVisible:o}=C({threshold:.1}),{ref:n,isVisible:i}=C({threshold:.1});return e.jsxs("div",{className:u.wrapper,id:"actors",children:[e.jsx(c,{size:16,weight:700,className:u.sectionTitle,children:"Actors and Flows"}),e.jsx("div",{className:u.title,children:e.jsx(it,{})}),e.jsxs("div",{className:d(u.actors,{[u["actors-visible"]]:o}),children:[e.jsx(U,{title:"lending protocol, i.e. set of smart contracts, compatible with the Compound V2.",description:"Can be deployed on several EVM-compatible chains.",iconId:"protocol-bg"}),e.jsx(U,{title:"Quantum portal smart contract framework",description:"That enables interoperability and communication between different blockchains.",iconId:"quantium-bg"}),e.jsx(U,{title:"Bitcoin L2:EVM-compatible smart contracts platform interoperable with Bitcoin blockchain",description:"Can be deployed on several EVM-compatible chains.",iconId:"evm-bg"}),e.jsx(U,{title:"Gearbox: composable leveraging protocol",description:"Which allows users to borrow from liquidity pools and use these assets to create spot leverage positions via an abstraction layer called Credit Account.",iconId:"gearbox-bg"}),e.jsx("div",{ref:s,className:u.actorsRef}),e.jsx(c,{size:16,weight:700,className:u.subsectionTitle,children:"Flows"})]}),e.jsxs("div",{ref:n,className:d(u.flows,{[u["flows-visible"]]:i}),id:"flows",children:[e.jsx(O,{tag:"With Bitcoin",label:"lvl1: Multichain",title:"User deposits native BTC",description:"Deposits as collateral via Quantum Portal, borrows LRTs on Ethereum.",iconId:"bitcoin"}),e.jsx(O,{tag:"EVM Chains",label:"lvl1: Multichain",title:"User deposits stEth on Tutti on Ethereum ",description:"User deposits stEth on Tutti on Ethereum and borrows USDC on Arbitrum. Tutti checks collateral state via Quantum Portal and allows borrowing if collateral health allows.",iconId:"evm"}),e.jsx(O,{tag:"Gearbox",label:"lvl2: Gearbox or similar",title:"User deposits bitcoin",description:"Borrows ETH on Tutti, and leverages on Gearbox to margin trade or leverage liquidity provision.",iconId:"gearbox"})]})]})},_t=()=>e.jsxs(we,{children:[e.jsx(Oe,{}),e.jsx(Be,{}),e.jsx(pt,{})]});R.createRoot(document.getElementById("root")).render(e.jsx(D.StrictMode,{children:e.jsx(_t,{})}));