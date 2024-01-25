(this.webpackJsonpmosaicminds=this.webpackJsonpmosaicminds||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(65),r=a(7),c=a(9),i=a(6),l=a.n(i);l.a.defaults.baseURL="/api",l.a.defaults.headers.post["Content-Type"]="multipart/form-data",l.a.defaults.withCredentials=!0;const o=l.a.create(),d=l.a.create();a(63);var j=a(66);const u=()=>{localStorage.removeItem("refreshTokenTimestamp")};var h=a(0);const b=Object(n.createContext)(),m=Object(n.createContext)(),p=()=>Object(n.useContext)(b),O=()=>Object(n.useContext)(m),x=e=>{let{children:t}=e;const[a,s]=Object(n.useState)(null),r=Object(c.f)();return Object(n.useEffect)((()=>{(async()=>{try{const{data:e}=await d.get("dj-rest-auth/user/");s(e)}catch(e){}})()}),[]),Object(n.useMemo)((()=>{o.interceptors.request.use((async e=>{if(localStorage.getItem("refreshTokenTimestamp"))try{await l.a.post("/dj-rest-auth/token/refresh/")}catch(t){return s((e=>(e&&r.push("/signin"),null))),u(),e}return e}),(e=>Promise.reject(e))),d.interceptors.response.use((e=>e),(async e=>{var t;if(401===(null===(t=e.response)||void 0===t?void 0:t.status)){try{await l.a.post("/dj-rest-auth/token/refresh/")}catch(e){s((e=>(e&&r.push("/signin"),null))),u()}return l()(e.config)}return Promise.reject(e)}))}),[r]),Object(h.jsx)(b.Provider,{value:a,children:Object(h.jsx)(m.Provider,{value:s,children:t})})};var v=a(109),g=a(15),y=a(111);const f=e=>{const t=Object(c.f)();Object(n.useEffect)((()=>{(async()=>{try{await l.a.post("/dj-rest-auth/token/refresh/"),"loggedIn"===e&&t.push("/")}catch(a){"loggedOut"===e&&t.push("/")}})()}),[t,e])};var w=a(5),S=a(17),A=a(21),N=a(11),C=a(14);var E=function(){var e,t,a;const s=O();f("loggedIn");const[i,o]=Object(n.useState)({username:"",password:""}),{username:d,password:u}=i,[b,m]=Object(n.useState)({}),p=Object(c.f)(),x=e=>{o({...i,[e.target.name]:e.target.value})};return Object(h.jsxs)(C.a,{className:C.a,children:[Object(h.jsxs)(N.a,{className:"my-auto p-0 p-md-2",md:6,children:[Object(h.jsxs)(g.a,{className:" p-4 ",children:[Object(h.jsx)("h1",{children:"sign in"}),Object(h.jsxs)(w.a,{onSubmit:async e=>{e.preventDefault();try{const{data:e}=await l.a.post("/dj-rest-auth/login/",i);s(e.user),(e=>{const t=Object(j.a)(null===e||void 0===e?void 0:e.refresh_token).exp;localStorage.setItem("refreshTokenTimestamp",t)})(e),p.goBack()}catch(n){var t,a;console.log("Error Object:",n),console.log("Error Response Data:",null===(t=n.response)||void 0===t?void 0:t.data),m(null===(a=n.response)||void 0===a?void 0:a.data)}},children:[Object(h.jsxs)(w.a.Group,{controlId:"username",children:[Object(h.jsx)(w.a.Label,{className:"d-none",children:"Username"}),Object(h.jsx)(w.a.Control,{type:"text",placeholder:"Username",name:"username",value:d,onChange:x})]}),null===(e=b.username)||void 0===e?void 0:e.map(((e,t)=>Object(h.jsx)(S.a,{variant:"warning",children:e},t))),Object(h.jsxs)(w.a.Group,{controlId:"password",children:[Object(h.jsx)(w.a.Label,{className:"d-none",children:"Password"}),Object(h.jsx)(w.a.Control,{type:"password",placeholder:"Password",name:"password",value:u,onChange:x})]}),null===(t=b.password)||void 0===t?void 0:t.map(((e,t)=>Object(h.jsx)(S.a,{variant:"warning",children:e},t))),Object(h.jsx)(A.a,{type:"submit",children:"Sign in"}),null===(a=b.non_field_errors)||void 0===a?void 0:a.map(((e,t)=>Object(h.jsx)(S.a,{variant:"warning",className:"mt-3",children:e},t)))]})]}),Object(h.jsx)(g.a,{className:"mt-3",children:Object(h.jsxs)(r.b,{className:r.b,to:"/signup",children:["Don't have an account? ",Object(h.jsx)("span",{children:"Sign up now!"})]})})]}),Object(h.jsx)(N.a,{md:6,className:"my-auto d-none d-md-block p-2"})]})},L=a(34),W=a(33);var k=()=>{const e=p(),t=O();return Object(h.jsx)(v.a,{expand:"md",bg:"light",variant:"light",children:Object(h.jsxs)(g.a,{children:[Object(h.jsx)(v.a.Brand,{as:r.b,to:"/",children:"Navbar"}),Object(h.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsxs)(v.a.Collapse,{id:"basic-navbar-nav",children:[Object(h.jsxs)(y.a,{className:"mr-auto",children:[Object(h.jsx)(y.a.Link,{as:r.b,to:"/",children:"Home"}),Object(h.jsx)(y.a.Link,{as:r.b,to:"/about-us",children:"About Us"}),Object(h.jsx)(y.a.Link,{as:r.b,to:"/meeting-list",children:"Meetings"}),Object(h.jsx)(y.a.Link,{as:r.b,to:"/volunteer",children:"Volunteer"}),e&&Object(h.jsx)(y.a.Link,{as:r.b,to:"/meetings/create",children:"Add Meeting"})]}),Object(h.jsx)(y.a,{className:"ml-auto",children:e?Object(h.jsxs)(h.Fragment,{children:[e&&Object(h.jsxs)(y.a.Link,{as:r.b,to:e.is_superuser?"/admin/":"/profiles/".concat(e.id),children:[Object(h.jsx)(L.a,{icon:W.a})," Profile Settings"]}),Object(h.jsxs)(y.a.Link,{onClick:async()=>{try{await l.a.post("dj-rest-auth/logout/"),t(null),u()}catch(e){}},children:[Object(h.jsx)(L.a,{icon:W.b})," Logout"]})]}):Object(h.jsx)(E,{})})]})]})})},_=a.p+"static/media/banner.1cc5e586.png";var M=()=>Object(h.jsx)("div",{children:Object(h.jsxs)("section",{className:"hero pt-5",children:[Object(h.jsx)("img",{src:_,alt:"Hero",className:"hero_image"}),Object(h.jsx)("div",{className:"col text-center hero_overlay_text text-box",children:Object(h.jsxs)("p",{children:['"Diversity: the art of thinking independently together." ',Object(h.jsx)("br",{})," - Malcolm Forbes"]})}),Object(h.jsx)("div",{className:"container mt-4",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col text-center text-box",children:[Object(h.jsx)("h2",{className:"header",children:"What We Are"}),Object(h.jsxs)("p",{className:"content home_text_box",children:[Object(h.jsx)("strong",{children:"Mosaic Minds"})," is a UK-wide network celebrating neurodiversity, connecting unique minds in a supportive online community. We offer a spectrum of events, from educational workshops to creative meet-ups, fostering a space where every neurodiverse individual can thrive. Our platform is a sanctuary for connection, learning, and growth, where each voice is heard and every story is valued. Together, we are redefining neurodiversity, championing understanding, acceptance, and empowerment."]})]}),Object(h.jsx)("div",{className:"col text-center button-box",children:Object(h.jsx)(r.b,{to:"/meeting-search-page",className:"btn btn-primary btn-lg",children:"Search Meetings"})}),Object(h.jsxs)("div",{className:"col text-center",children:[Object(h.jsx)("h2",{className:"header",children:"Why We Do It"}),Object(h.jsx)("p",{className:"content home_text_box",children:"At Mosaic Minds, we're driven by the untapped potential within the neurodiverse community. Our mission is to illuminate and celebrate neurodiversity, creating an environment where every individual flourishes. Through shared experiences and mutual support, we're building a future where neurodiversity is recognized as a unique advantage. We're not just envisioning a more inclusive world; we're actively crafting it, one event and one connection at a time."})]})]})})]})});var T=()=>Object(h.jsxs)(g.a,{children:[Object(h.jsx)(C.a,{className:"my-4 mt-5",children:Object(h.jsxs)(N.a,{children:[Object(h.jsx)("h2",{children:"What We Are"}),Object(h.jsx)("p",{children:"Mosaic Minds is a UK-wide network celebrating neurodiversity, connecting unique minds in a supportive online community. We offer a spectrum of events, from educational workshops to creative meet-ups, fostering a space where every neurodiverse individual can thrive. Our platform is a sanctuary for connection, learning, and growth, where each voice is heard and every story is valued. Together, we are redefining neurodiversity, championing understanding, acceptance, and empowerment."})]})}),Object(h.jsx)(C.a,{className:"my-4",children:Object(h.jsxs)(N.a,{children:[Object(h.jsx)("h2",{children:"Our History"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"2005:"})," Founded in London, Mosaic Minds began as a small group of individuals passionate about neurodiversity. Their mission was simple yet profound \u2013 to create a supportive community for neurodiverse individuals."]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"2010:"})," Mosaic Minds launched its first series of workshops, focusing on empowering neurodiverse individuals through education and skill development. The success of these workshops marked a significant milestone in the organization's journey."]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"2015:"})," With increasing recognition, Mosaic Minds expanded its reach across the UK. They introduced creative meet-ups, offering a new platform for self-expression and collaboration among its members."]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"2020:"})," The organization launched its online platform, connecting neurodiverse individuals nationwide. This digital transformation was a pivotal step in fostering a more inclusive and accessible community."]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"2023:"})," Mosaic Minds celebrated its 18th anniversary with a landmark conference, highlighting the achievements and advancements within the neurodiverse community. The event garnered attention from international media, furthering the organization's impact."]})]})}),Object(h.jsx)(C.a,{className:"my-4",children:Object(h.jsxs)(N.a,{children:[Object(h.jsx)("h2",{children:"Why We Do It"}),Object(h.jsx)("p",{children:"At Mosaic Minds, we're driven by the untapped potential within the neurodiverse community. Our mission is to illuminate and celebrate neurodiversity, creating an environment where every individual flourishes. Through shared experiences and mutual support, we're building a future where neurodiversity is recognized as a unique advantage. We're not just envisioning a more inclusive world; we're actively crafting it, one event and one connection at a time."})]})})]}),D=a(108),G=a(110);const F={CI:"Channel Islands Area",CTV:"Chiltern & Thames Valley Area",CA:"Cornwall Area",DA:"Devon Area",DO:"Dorset Area",EMA:"East Midlands Area",ES:"Essex Area",FC:"Free Counties Area",GM:"Greater Manchester Area",HA:"Hampshire Area",KE:"Kent Area","L-EC":"Lancashire - East & Central Area","L-NE":"London - North East Area","L-NW":"London - North West Area","L-SE":"London - South East Area","L-SW":"London - South West Area",MEA:"Merseyside Area",NS:"Norfolk & Suffolk Area",NEE:"North East England Area",NW:"NW England & N Wales Area","S-EC":"Scotland - East Coast Area","S-EL":"Scotland - Edinburgh & Lothians Area","S-GW":"Scotland - Glasgow & West Coast Area","S-WL":"Scotland - West Lothian Area",SWA:"South Wales Area",SU:"Surrey Area",SX:"Sussex Area",HIG:"The Highlands & Islands Groups",TS:"The Shires Area","UK-FAR":"UK Farsi Groups Area",WC:"West Country Area",WM:"West Midlands Area",WY:"West Yorkshire",YH:"Yorkshire & Humberside Area"},I=e=>{if(e&&e.includes(":")){const[t,a]=e.split(":"),n=new Date;n.setHours(parseInt(t,10),parseInt(a,10),0);let s=n.getHours();const r=s>=12?"PM":"AM";s%=12,s=s||12;const c=n.getMinutes().toString().padStart(2,"0");return"".concat(s,":").concat(c," ").concat(r)}return"Invalid Time"};var U=e=>{let{filters:t}=e;const[a,s]=Object(n.useState)([]),[c,i]=Object(n.useState)(!0),[o,d]=Object(n.useState)(null);return Object(n.useEffect)((()=>{i(!0),(async e=>{try{const t=new URLSearchParams({name:(null===e||void 0===e?void 0:e.meetingName)||"",weekday:(null===e||void 0===e?void 0:e.day)||"",time_of_day:(null===e||void 0===e?void 0:e.time)||"",area:(null===e||void 0===e?void 0:e.area)||""}).toString(),a=await l.a.get("meetings/?".concat(t));return console.log("Response data:",a.data),a.data}catch(o){throw console.error("Error in fetchMeetings:",o),o}})(t).then((e=>{s(e.results),i(!1)})).catch((e=>{console.error("Error fetching meetings:",e),d(e),i(!1)}))}),[t]),c?Object(h.jsxs)(g.a,{className:"mt-4 text-center",children:[Object(h.jsx)(D.a,{animation:"border",role:"status"}),Object(h.jsx)("p",{children:"Loading meetings..."})]}):o?Object(h.jsx)(g.a,{className:"mt-4",children:Object(h.jsxs)(S.a,{variant:"danger",children:["There was an error fetching the meetings: ",o.message]})}):(console.log(a),Object(h.jsx)(g.a,{className:"mt-4",children:Object(h.jsx)(C.a,{children:(null===a||void 0===a?void 0:a.length)>0?a.map((e=>{return Object(h.jsxs)(N.a,{md:4,className:"mb-3",children:["  ",Object(h.jsx)(G.a,{className:"boxshadow",children:Object(h.jsxs)(G.a.Body,{children:[Object(h.jsx)(G.a.Title,{children:e.name}),Object(h.jsxs)(G.a.Subtitle,{className:"mb-2 text-muted",children:[e.weekday_display," - ",I(e.meeting_time)]}),Object(h.jsx)(G.a.Subtitle,{className:"mb-2 text-muted",children:(t=e.area,F[t]||"Unknown Area")}),Object(h.jsx)(G.a.Text,{children:e.description}),Object(h.jsx)(r.b,{to:"/meetings/".concat(e.id),className:"btn btn-primary",children:"Details"}),Object(h.jsx)(G.a.Link,{href:e.online_meeting_url,children:"Online Meeting Link"})]})})]},e.id);var t})):Object(h.jsx)("p",{children:"No meetings available"})})}))};var H=()=>{const[e,t]=Object(n.useState)({name:"",email:"",motivation:""}),a=a=>{t({...e,[a.target.name]:a.target.value})};return Object(h.jsxs)(w.a,{onSubmit:t=>{t.preventDefault(),console.log(e)},children:[Object(h.jsxs)(w.a.Group,{className:"mb-3",children:[Object(h.jsx)(w.a.Label,{children:"Name"}),Object(h.jsx)(w.a.Control,{type:"text",name:"name",value:e.name,onChange:a,placeholder:"Enter your name"})]}),Object(h.jsxs)(w.a.Group,{className:"mb-3",children:[Object(h.jsx)(w.a.Label,{children:"Email address"}),Object(h.jsx)(w.a.Control,{type:"email",name:"email",value:e.email,onChange:a,placeholder:"Enter your email"})]}),Object(h.jsxs)(w.a.Group,{className:"mb-3",children:[Object(h.jsx)(w.a.Label,{children:"Motivation"}),Object(h.jsx)(w.a.Control,{as:"textarea",name:"motivation",value:e.motivation,onChange:a,rows:3,placeholder:"Why do you want to volunteer?"})]}),Object(h.jsx)(A.a,{variant:"primary",type:"submit",children:"Submit"})]})};var P=e=>{let{onSearch:t}=e;const[a,s]=Object(n.useState)(""),[r,c]=Object(n.useState)(""),[i,l]=Object(n.useState)(""),[o,d]=Object(n.useState)("");return Object(h.jsxs)("form",{className:"views-exposed-form bef-exposed-form",onSubmit:e=>{let n;switch(e.preventDefault(),r){case"1":n="morning";break;case"2":n="afternoon";break;case"3":n="evening";break;default:n=""}console.log("Search Parameters:",{day:a,time:n,area:i,meetingName:o}),t({day:a,time:n,area:i,meetingName:o})},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"day",children:"Day"}),Object(h.jsxs)("select",{id:"day",value:a,onChange:e=>s(e.target.value),children:[Object(h.jsx)("option",{value:"",children:"- Any -"}),Object(h.jsx)("option",{value:"SUN",children:"Sunday"}),Object(h.jsx)("option",{value:"MON",children:"Monday"}),Object(h.jsx)("option",{value:"TUE",children:"Tuesday"}),Object(h.jsx)("option",{value:"WED",children:"Wednesday"}),Object(h.jsx)("option",{value:"THU",children:"Thursday"}),Object(h.jsx)("option",{value:"FRI",children:"Friday"}),Object(h.jsx)("option",{value:"SAT",children:"Saturday"})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"time",children:"Time"}),Object(h.jsxs)("select",{id:"time",value:r,onChange:e=>c(e.target.value),children:[Object(h.jsx)("option",{value:"",children:"- Any -"}),Object(h.jsx)("option",{value:"1",children:"Morning"}),Object(h.jsx)("option",{value:"2",children:"Afternoon"}),Object(h.jsx)("option",{value:"3",children:"Evening"})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"area",children:"Area"}),Object(h.jsxs)("select",{id:"area",value:i,onChange:e=>l(e.target.value),children:[Object(h.jsx)("option",{value:"",children:"- Any -"}),Object(h.jsx)("option",{value:"CI",children:"Channel Islands Area"}),Object(h.jsx)("option",{value:"CTV",children:"Chiltern & Thames Valley Area"}),Object(h.jsx)("option",{value:"CA",children:"Cornwall Area"}),Object(h.jsx)("option",{value:"DA",children:"Devon Area"}),Object(h.jsx)("option",{value:"DO",children:"Dorset Area"}),Object(h.jsx)("option",{value:"EMA",children:"East Midlands Area"}),Object(h.jsx)("option",{value:"ES",children:"Essex Area"}),Object(h.jsx)("option",{value:"FC",children:"Free Counties Area"}),Object(h.jsx)("option",{value:"GM",children:"Greater Manchester Area"}),Object(h.jsx)("option",{value:"HA",children:"Hampshire Area"}),Object(h.jsx)("option",{value:"KE",children:"Kent Area"}),Object(h.jsx)("option",{value:"L-EC",children:"Lancashire - East & Central Area"}),Object(h.jsx)("option",{value:"L-NE",children:"London - North East Area"}),Object(h.jsx)("option",{value:"L-NW",children:"London - North West Area"}),Object(h.jsx)("option",{value:"L-SE",children:"London - South East Area"}),Object(h.jsx)("option",{value:"L-SW",children:"London - South West Area"}),Object(h.jsx)("option",{value:"MEA",children:"Merseyside Area"}),Object(h.jsx)("option",{value:"NS",children:"Norfolk & Suffolk Area"}),Object(h.jsx)("option",{value:"NEE",children:"North East England Area"}),Object(h.jsx)("option",{value:"NW",children:"NW England & N Wales Area"}),Object(h.jsx)("option",{value:"S-EC",children:"Scotland - East Coast Area"}),Object(h.jsx)("option",{value:"S-EL",children:"Scotland - Edinburgh & Lothians Area"}),Object(h.jsx)("option",{value:"S-GW",children:"Scotland - Glasgow & West Coast Area"}),Object(h.jsx)("option",{value:"S-WL",children:"Scotland - West Lothian Area"}),Object(h.jsx)("option",{value:"SWA",children:"South Wales Area"}),Object(h.jsx)("option",{value:"SU",children:"Surrey Area"}),Object(h.jsx)("option",{value:"SX",children:"Sussex Area"}),Object(h.jsx)("option",{value:"HIG",children:"The Highlands & Islands Groups"}),Object(h.jsx)("option",{value:"TS",children:"The Shires Area"}),Object(h.jsx)("option",{value:"UK-FAR",children:"UK Farsi Groups Area"}),Object(h.jsx)("option",{value:"WC",children:"West Country Area"}),Object(h.jsx)("option",{value:"WM",children:"West Midlands Area"}),Object(h.jsx)("option",{value:"WY",children:"West Yorkshire"}),Object(h.jsx)("option",{value:"YH",children:"Yorkshire & Humberside Area"})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"meetingName",children:"Meeting Name"}),Object(h.jsx)("input",{id:"meetingName",type:"text",value:o,onChange:e=>d(e.target.value),maxLength:"128"})]}),Object(h.jsx)("button",{type:"submit",children:"Search"})]})};var q=()=>{const[e,t]=Object(n.useState)({day:"",time:"",type:"",area:"",name:""});return Object(h.jsxs)("div",{children:[Object(h.jsx)(P,{onSearch:e=>{t(e)}}),Object(h.jsx)(U,{filters:e})]})};var R=()=>{var e,t,a,s;f("loggedIn");const[i,o]=Object(n.useState)({username:"",password1:"",password2:""}),{username:d,password1:j,password2:u}=i,[b,m]=Object(n.useState)({}),p=Object(c.f)(),O=e=>{o({...i,[e.target.name]:e.target.value})};return Object(h.jsxs)(C.a,{className:C.a,children:[Object(h.jsxs)(N.a,{className:"my-auto py-2 p-md-2",md:6,children:[Object(h.jsxs)(g.a,{className:"p-4 ",children:[Object(h.jsx)("h1",{children:"sign up"}),Object(h.jsxs)(w.a,{onSubmit:async e=>{e.preventDefault();try{await l.a.post("/dj-rest-auth/registration/",i),p.push("/signin")}catch(a){var t;m(null===(t=a.response)||void 0===t?void 0:t.data)}},children:[Object(h.jsxs)(w.a.Group,{controlId:"username",children:[Object(h.jsx)(w.a.Label,{className:"d-none",children:"username"}),Object(h.jsx)(w.a.Control,{type:"text",placeholder:"Username",name:"username",value:d,onChange:O})]}),null===(e=b.username)||void 0===e?void 0:e.map(((e,t)=>Object(h.jsx)(S.a,{variant:"warning",children:e},t))),Object(h.jsxs)(w.a.Group,{controlId:"password1",children:[Object(h.jsx)(w.a.Label,{className:"d-none",children:"Password"}),Object(h.jsx)(w.a.Control,{type:"password",placeholder:"Password",name:"password1",value:j,onChange:O})]}),null===(t=b.password1)||void 0===t?void 0:t.map(((e,t)=>Object(h.jsx)(S.a,{variant:"warning",children:e},t))),Object(h.jsxs)(w.a.Group,{controlId:"password2",children:[Object(h.jsx)(w.a.Label,{className:"d-none",children:"Confirm password"}),Object(h.jsx)(w.a.Control,{type:"password",placeholder:"Confirm password",name:"password2",value:u,onChange:O})]}),null===(a=b.password2)||void 0===a?void 0:a.map(((e,t)=>Object(h.jsx)(S.a,{variant:"warning",children:e},t))),Object(h.jsx)(A.a,{type:"submit",children:"Sign up"}),null===(s=b.non_field_errors)||void 0===s?void 0:s.map(((e,t)=>Object(h.jsx)(S.a,{variant:"warning",className:"mt-3",children:e},t)))]})]}),Object(h.jsx)(g.a,{className:"mt-3",children:Object(h.jsxs)(r.b,{className:r.b,to:"/signin",children:["Already have an account? ",Object(h.jsx)("span",{children:"Sign in"})]})})]}),Object(h.jsx)(N.a,{md:6,className:"my-auto d-none d-md-block p-2"})]})},K=a(68);var Y=()=>{const{register:e,handleSubmit:t,formState:{errors:a}}=Object(K.a)(),[s,r]=Object(n.useState)("");return Object(h.jsxs)("form",{onSubmit:t((async e=>{console.log(e);try{const t=await l.a.post("/meetings/",e);r("Meeting created successfully!"),console.log(t.data)}catch(t){console.error(t),r("Failed to create meeting.")}})),children:[Object(h.jsx)("input",{name:"name",...e("name",{required:!0}),placeholder:"Meeting Name"}),a.name&&Object(h.jsx)("div",{children:"Meeting name is required"}),Object(h.jsx)("select",{name:"weekday",...e("weekday",{required:!0}),children:[{value:"SUN",label:"Sunday"},{value:"MON",label:"Monday"},{value:"TUE",label:"Tuesday"},{value:"WED",label:"Wednesday"},{value:"THU",label:"Thursday"},{value:"FRI",label:"Friday"},{value:"SAT",label:"Saturday"}].map((e=>Object(h.jsx)("option",{value:e.value,children:e.label},e.value)))}),a.weekday&&Object(h.jsx)("div",{children:"Weekday is required"}),Object(h.jsx)("input",{name:"meeting_time",type:"time",...e("meeting_time",{required:!0})}),a.meeting_time&&Object(h.jsx)("div",{children:"Meeting time is required"}),Object(h.jsx)("select",{name:"area",...e("area",{required:!0}),children:[{value:"CI",label:"Channel Islands Area"},{value:"CTV",label:"Chiltern & Thames Valley Area"},{value:"CA",label:"Cornwall Area"},{value:"DA",label:"Devon Area"},{value:"DO",label:"Dorset Area"},{value:"EMA",label:"East Midlands Area"},{value:"ES",label:"Essex Area"},{value:"FC",label:"Free Counties Area"},{value:"GM",label:"Greater Manchester Area"},{value:"HA",label:"Hampshire Area"},{value:"KE",label:"Kent Area"},{value:"L-EC",label:"Lancashire - East & Central Area"},{value:"L-NE",label:"London - North East Area"},{value:"L-NW",label:"London - North West Area"},{value:"L-SE",label:"London - South East Area"},{value:"L-SW",label:"London - South West Area"},{value:"MEA",label:"Merseyside Area"},{value:"NS",label:"Norfolk & Suffolk Area"},{value:"NEE",label:"North East England Area"},{value:"NW",label:"NW England & N Wales Area"},{value:"S-EC",label:"Scotland - East Coast Area"},{value:"S-EL",label:"Scotland - Edinburgh & Lothians Area"},{value:"S-GW",label:"Scotland - Glasgow & West Coast Area"},{value:"S-WL",label:"Scotland - West Lothian Area"},{value:"SWA",label:"South Wales Area"},{value:"SU",label:"Surrey Area"},{value:"SX",label:"Sussex Area"},{value:"HIG",label:"The Highlands & Islands Groups"},{value:"TS",label:"The Shires Area"},{value:"UK-FAR",label:"UK Farsi Groups Area"},{value:"WC",label:"West Country Area"},{value:"WM",label:"West Midlands Area"},{value:"WY",label:"West Yorkshire"},{value:"YH",label:"Yorkshire & Humberside Area"}].map((e=>Object(h.jsx)("option",{value:e.value,children:e.label},e.value)))}),a.area&&Object(h.jsx)("div",{children:"Area is required"}),Object(h.jsx)("textarea",{name:"description",...e("description",{required:!0}),placeholder:"Description"}),a.description&&Object(h.jsx)("div",{children:"Description is required"}),Object(h.jsx)("input",{name:"online_meeting_url",type:"url",...e("online_meeting_url",{required:!0}),placeholder:"Online Meeting URL"}),a.online_meeting_url&&Object(h.jsx)("div",{children:"Online meeting URL is required"}),Object(h.jsx)("button",{type:"submit",children:"Submit"}),s&&Object(h.jsx)("div",{children:s})]})},B=a(69);var V=()=>{const{id:e}=Object(c.g)(),[t,a]=Object(n.useState)(null),[s,r]=Object(n.useState)(!1),[i,o]=Object(n.useState)(null),[d,j]=Object(n.useState)(!0),[u,b]=Object(n.useState)("");Object(n.useEffect)((()=>{(async()=>{try{const n=await l.a.get("/meetings/".concat(e));a(n.data),j(!1);try{const t=await l.a.get("/favourites/".concat(e));r(t.data.isFavorited),o(t.data.favoriteId)}catch(t){r(!1),o(null)}}catch(n){console.error(n),j(!1),b("Failed to load meeting details.")}})()}),[e]);return d?Object(h.jsx)("div",{children:"Loading..."}):u?Object(h.jsx)("div",{children:u}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Meeting Details"}),t&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:t.name}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Weekday:"})," ",t.weekday]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Time:"})," ",t.meeting_time]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Area:"})," ",t.area]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Description:"})," ",t.description]}),t.online_meeting_url&&Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Online Meeting URL:"})," ",Object(h.jsx)("a",{href:t.online_meeting_url,target:"_blank",rel:"noopener noreferrer",children:t.online_meeting_url})]}),Object(h.jsx)(L.a,{icon:s?W.d:B.a,onClick:async()=>{try{if(s)null!==i&&(await l.a.delete("/favourites/".concat(i)),o(null));else{const t=parseInt(e,10),a=await l.a.post("/favourites/",{meeting:t});o(a.data.id)}r(!s)}catch(t){console.error(t)}},style:{color:s?"yellow":"black"}})]})]})};var z=e=>{let{match:t}=e;const[a,s]=Object(n.useState)({title:"",date:"",time:"",description:"",area:""}),[r,c]=Object(n.useState)([]),i=e=>{const{name:t,value:n}=e.target;s({...a,[t]:n})};return Object(n.useEffect)((()=>{l.a.get("/api/meetings/".concat(t.params.id)).then((e=>s(e.data))).catch((e=>console.error(e))),l.a.get("/api/areas").then((e=>c(e.data))).catch((e=>console.error(e)))}),[t.params.id]),Object(h.jsxs)("form",{onSubmit:e=>{e.preventDefault(),console.log(a)},children:[Object(h.jsx)("h2",{children:"Edit Meeting"}),Object(h.jsxs)("label",{children:["Title:",Object(h.jsx)("input",{type:"text",name:"title",value:a.title,onChange:i})]}),Object(h.jsxs)("label",{children:["Date:",Object(h.jsx)("input",{type:"date",name:"date",value:a.date,onChange:i})]}),Object(h.jsxs)("label",{children:["Time:",Object(h.jsx)("input",{type:"time",name:"time",value:a.time,onChange:i})]}),Object(h.jsxs)("label",{children:["Description:",Object(h.jsx)("textarea",{name:"description",value:a.description,onChange:i})]}),Object(h.jsxs)("label",{children:["Area:",Object(h.jsx)("select",{name:"area",value:a.area,onChange:i,children:r.map((e=>Object(h.jsx)("option",{value:e.name,children:e.name},e.id)))})]}),Object(h.jsx)("button",{type:"submit",children:"Save Changes"})]})};var J=function(){const[e,t]=Object(n.useState)(!1),[a,s]=Object(n.useState)({}),c=p();Object(n.useEffect)((()=>{if(c){(async()=>{try{const{data:e}=await o.get("/profiles/".concat(c.id,"/"));s(e),t(!0)}catch(e){}})()}}),[c]);const i=a.id,l=Object(h.jsx)(C.a,{nogutters:"true",className:"px-3 text-center",children:Object(h.jsxs)(N.a,{children:[Object(h.jsxs)("h3",{className:"m-2",children:[(null===a||void 0===a?void 0:a.owner)||"No Owner",Object(h.jsxs)(r.b,{to:"/profiles/".concat(i,"/edit/"),children:["Edit",Object(h.jsx)(L.a,{icon:W.c})]})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:["First Name: ",(null===a||void 0===a?void 0:a.first_name)||"No First Name"]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:["Last Name: ",(null===a||void 0===a?void 0:a.last_name)||"No Last Name"]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:["Email: ",(null===a||void 0===a?void 0:a.email)||"No Email"]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:["Phone Number: ",(null===a||void 0===a?void 0:a.phonenumber)||"No Phone Number"]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:["Role: ",(null===a||void 0===a?void 0:a.role_at_meeting)||"No Role"]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:["Joined: ",(null===a||void 0===a?void 0:a.created_at)||"No Join Date"]})})]})});return Object(h.jsx)(g.a,{children:e?l:Object(h.jsx)("p",{children:"Loading..."})})};var X=()=>{const e=p(),t=O(),{id:a}=Object(c.g)(),s=Object(c.f)(),[r,i]=Object(n.useState)({first_name:"",last_name:"",email:"",phonenumber:"",role_at_meeting:""}),{first_name:l,last_name:d,email:j,phonenumber:u,role_at_meeting:b}=r,[m,x]=Object(n.useState)({});Object(n.useEffect)((()=>{(async()=>{if(e&&e.id.toString()===a)try{const{data:e}=await o.get("/profiles/".concat(a,"/"));i({first_name:e.first_name,last_name:e.last_name,email:e.email,phonenumber:e.phonenumber,role_at_meeting:e.role_at_meeting})}catch(n){var t;console.log(n),x(null===(t=n.response)||void 0===t?void 0:t.data)}else s.push("/")})()}),[e,s,a]);const v=e=>{i({...r,[e.target.name]:e.target.value})};return Object(h.jsx)(g.a,{children:Object(h.jsx)(C.a,{className:"justify-content-center",children:Object(h.jsx)(N.a,{xs:12,md:8,lg:6,children:Object(h.jsxs)(w.a,{onSubmit:async e=>{e.preventDefault();try{const{data:e}=await o.put("/profiles/".concat(a,"/"),r);t((t=>({...t,profile:e}))),s.goBack()}catch(c){var n;console.log(c),x((null===(n=c.response)||void 0===n?void 0:n.data)||{})}},children:[Object(h.jsxs)(w.a.Group,{children:[Object(h.jsx)(w.a.Label,{children:"First Name"}),Object(h.jsx)(w.a.Control,{type:"text",name:"first_name",value:l,onChange:v})]}),Object(h.jsxs)(w.a.Group,{children:[Object(h.jsx)(w.a.Label,{children:"Last Name"}),Object(h.jsx)(w.a.Control,{type:"text",name:"last_name",value:d,onChange:v})]}),Object(h.jsxs)(w.a.Group,{children:[Object(h.jsx)(w.a.Label,{children:"Email"}),Object(h.jsx)(w.a.Control,{type:"email",name:"email",value:j,onChange:v})]}),Object(h.jsxs)(w.a.Group,{children:[Object(h.jsx)(w.a.Label,{children:"Phone Number"}),Object(h.jsx)(w.a.Control,{type:"text",name:"phonenumber",value:u,onChange:v})]}),Object(h.jsxs)(w.a.Group,{children:[Object(h.jsx)(w.a.Label,{children:"Role at Meeting"}),Object(h.jsx)(w.a.Control,{type:"text",name:"role_at_meeting",value:b,onChange:v})]}),Object.keys(m).length>0&&Object(h.jsx)("div",{className:"errors",children:Object.keys(m).map(((e,t)=>Object(h.jsx)("p",{children:"".concat(e,": ").concat(m[e])},t)))}),Object(h.jsx)(A.a,{variant:"primary",type:"submit",children:"Save"}),Object(h.jsx)(A.a,{variant:"secondary",onClick:()=>s.goBack(),children:"Cancel"})]})})})})};var Q=()=>{var e;const[t,a]=Object(n.useState)(""),[s,r]=Object(n.useState)({}),i=Object(c.f)(),{id:l}=Object(c.g)(),o=p(),j=O();Object(n.useEffect)((()=>{var e;(null===o||void 0===o||null===(e=o.profile_id)||void 0===e?void 0:e.toString())===l?a(o.username):i.push("/")}),[o,i,l]);return Object(h.jsx)(C.a,{children:Object(h.jsx)(N.a,{className:"py-2 mx-auto text-center",md:6,children:Object(h.jsx)(g.a,{children:Object(h.jsxs)(w.a,{onSubmit:async e=>{e.preventDefault();try{await d.put("/dj-rest-auth/user/",{username:t}),j((e=>({...e,username:t}))),i.goBack()}catch(n){var a;r(null===(a=n.response)||void 0===a?void 0:a.data)}},className:"my-2",children:[Object(h.jsxs)(w.a.Group,{children:[Object(h.jsx)(w.a.Label,{children:"Change username"}),Object(h.jsx)(w.a.Control,{placeholder:"username",type:"text",value:t,onChange:e=>a(e.target.value)})]}),null===s||void 0===s||null===(e=s.username)||void 0===e?void 0:e.map(((e,t)=>Object(h.jsx)(S.a,{variant:"warning",children:e},t))),Object(h.jsx)(A.a,{onClick:()=>i.goBack(),children:"cancel"}),Object(h.jsx)(A.a,{type:"submit",children:"save"})]})})})})};var Z=()=>{var e,t;const a=Object(c.f)(),{id:s}=Object(c.g)(),r=p(),[i,l]=Object(n.useState)({new_password1:"",new_password2:""}),{new_password1:o,new_password2:j}=i,[u,b]=Object(n.useState)({}),m=e=>{l({...i,[e.target.name]:e.target.value})};Object(n.useEffect)((()=>{var e;(null===r||void 0===r||null===(e=r.profile_id)||void 0===e?void 0:e.toString())!==s&&a.push("/")}),[r,a,s]);return Object(h.jsx)(C.a,{children:Object(h.jsx)(N.a,{className:"py-2 mx-auto text-center",md:6,children:Object(h.jsx)(g.a,{children:Object(h.jsxs)(w.a,{onSubmit:async e=>{e.preventDefault();try{await d.post("/dj-rest-auth/password/change/",i),a.goBack()}catch(n){var t;b(null===(t=n.response)||void 0===t?void 0:t.data)}},children:[Object(h.jsxs)(w.a.Group,{children:[Object(h.jsx)(w.a.Label,{children:"New password"}),Object(h.jsx)(w.a.Control,{placeholder:"new password",type:"password",value:o,onChange:m,name:"new_password1"})]}),null===u||void 0===u||null===(e=u.new_password1)||void 0===e?void 0:e.map(((e,t)=>Object(h.jsx)(S.a,{variant:"warning",children:e},t))),Object(h.jsxs)(w.a.Group,{children:[Object(h.jsx)(w.a.Label,{children:"Confirm password"}),Object(h.jsx)(w.a.Control,{placeholder:"confirm new password",type:"password",value:j,onChange:m,name:"new_password2"})]}),null===u||void 0===u||null===(t=u.new_password2)||void 0===t?void 0:t.map(((e,t)=>Object(h.jsx)(S.a,{variant:"warning",children:e},t))),Object(h.jsx)(A.a,{onClick:()=>a.goBack(),children:"cancel"}),Object(h.jsx)(A.a,{type:"submit",children:"save"})]})})})})};var $=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"404 - Not Found"}),Object(h.jsx)("p",{children:"The page you are looking for does not exist."})]})};var ee=function(){return Object(h.jsx)(r.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(k,{}),Object(h.jsxs)(c.c,{children:[Object(h.jsx)(c.a,{exact:!0,path:"/",component:M}),Object(h.jsx)(c.a,{path:"/signin",component:E}),Object(h.jsx)(c.a,{path:"/signup",component:R}),Object(h.jsx)(c.a,{path:"/meeting-list",component:U}),Object(h.jsx)(c.a,{path:"/meeting-search-form",component:P}),Object(h.jsx)(c.a,{path:"/meeting-search-page",component:q}),Object(h.jsx)(c.a,{path:"/about-us",component:T}),Object(h.jsx)(c.a,{path:"/volunteer",component:H}),Object(h.jsx)(c.a,{path:"/auth/sign-up-form",component:R}),Object(h.jsx)(c.a,{path:"/meetings/create",component:Y}),Object(h.jsx)(c.a,{exact:!0,path:"/meetings/:id",component:V}),Object(h.jsx)(c.a,{exact:!0,path:"/meetings/:id/edit",component:z}),Object(h.jsx)(c.a,{exact:!0,path:"/profiles/:id",component:J}),Object(h.jsx)(c.a,{exact:!0,path:"/profiles/:id/edit",component:X}),Object(h.jsx)(c.a,{path:"/profiles/:id/edit/username",component:Q}),Object(h.jsx)(c.a,{path:"/profiles/:id/edit/password",component:Z}),Object(h.jsx)(c.a,{component:$})]})]})})};var te=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,112)).then((t=>{let{getCLS:a,getFID:n,getFCP:s,getLCP:r,getTTFB:c}=t;a(e),n(e),s(e),r(e),c(e)}))};a(105);const ae=Object(n.createContext)(),ne=Object(n.createContext)(),se=e=>{let{children:t}=e;const[a,s]=Object(n.useState)({currentUserProfile:null}),r=p();return Object(n.useEffect)((()=>{(async()=>{if(r&&r.id)try{const{data:e}=await o.get("profiles/".concat(r.id,"/"));s({currentUserProfile:e})}catch(e){}})()}),[r]),Object(h.jsx)(ae.Provider,{value:a,children:Object(h.jsx)(ne.Provider,{value:{setProfileData:s},children:t})})},re=document.getElementById("root");Object(s.createRoot)(re).render(Object(h.jsx)(r.a,{children:Object(h.jsx)(x,{children:Object(h.jsx)(se,{children:Object(h.jsx)(ee,{})})})})),te()},63:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.4b0d5556.chunk.js.map