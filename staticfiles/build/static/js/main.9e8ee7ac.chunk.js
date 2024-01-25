(this.webpackJsonpmosaicminds=this.webpackJsonpmosaicminds||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t(65),r=t(8),i=t(9),c=t(7),l=t.n(c);l.a.defaults.baseURL="/api",l.a.defaults.headers.post["Content-Type"]="multipart/form-data",l.a.defaults.withCredentials=!0;const o=l.a.create(),d=l.a.create();t(63);var j=t(66);const u=()=>{localStorage.removeItem("refreshTokenTimestamp")};var b=t(0);const h=Object(n.createContext)(),m=Object(n.createContext)(),O=()=>Object(n.useContext)(h),v=()=>Object(n.useContext)(m),x=e=>{let{children:a}=e;const[t,s]=Object(n.useState)(null),r=Object(i.f)();return Object(n.useEffect)((()=>{(async()=>{try{const{data:e}=await d.get("dj-rest-auth/user/");s(e)}catch(e){}})()}),[]),Object(n.useMemo)((()=>{o.interceptors.request.use((async e=>{if(localStorage.getItem("refreshTokenTimestamp"))try{await l.a.post("/dj-rest-auth/token/refresh/")}catch(a){return s((e=>(e&&r.push("/signin"),null))),u(),e}return e}),(e=>Promise.reject(e))),d.interceptors.response.use((e=>e),(async e=>{var a;if(401===(null===(a=e.response)||void 0===a?void 0:a.status)){try{await l.a.post("/dj-rest-auth/token/refresh/")}catch(e){s((e=>(e&&r.push("/signin"),null))),u()}return l()(e.config)}return Promise.reject(e)}))}),[r]),Object(b.jsx)(h.Provider,{value:t,children:Object(b.jsx)(m.Provider,{value:s,children:a})})};var p=t(109),g=t(14),y=t(111);const f=e=>{const a=Object(i.f)();Object(n.useEffect)((()=>{(async()=>{try{await l.a.post("/dj-rest-auth/token/refresh/"),"loggedIn"===e&&a.push("/")}catch(t){"loggedOut"===e&&a.push("/")}})()}),[a,e])};var w=t(5),S=t(12),A=t(21),N=t(11),C=t(16);var E=function(){var e,a,t;const s=v();f("loggedIn");const[c,o]=Object(n.useState)({username:"",password:""}),{username:d,password:u}=c,[h,m]=Object(n.useState)({}),O=Object(i.f)(),x=e=>{o({...c,[e.target.name]:e.target.value})};return Object(b.jsxs)(C.a,{className:C.a,children:[Object(b.jsxs)(N.a,{className:"my-auto p-0 p-md-2",md:6,children:[Object(b.jsxs)(g.a,{className:" p-4 ",children:[Object(b.jsx)("h1",{children:"sign in"}),Object(b.jsxs)(w.a,{onSubmit:async e=>{e.preventDefault();try{const{data:e}=await l.a.post("/dj-rest-auth/login/",c);s(e.user),(e=>{const a=Object(j.a)(null===e||void 0===e?void 0:e.refresh_token).exp;localStorage.setItem("refreshTokenTimestamp",a)})(e),O.goBack()}catch(n){var a,t;console.log("Error Object:",n),console.log("Error Response Data:",null===(a=n.response)||void 0===a?void 0:a.data),m(null===(t=n.response)||void 0===t?void 0:t.data)}},children:[Object(b.jsxs)(w.a.Group,{controlId:"username",children:[Object(b.jsx)(w.a.Label,{className:"d-none",children:"Username"}),Object(b.jsx)(w.a.Control,{type:"text",placeholder:"Username",name:"username",value:d,onChange:x})]}),null===(e=h.username)||void 0===e?void 0:e.map(((e,a)=>Object(b.jsx)(S.a,{variant:"warning",children:e},a))),Object(b.jsxs)(w.a.Group,{controlId:"password",children:[Object(b.jsx)(w.a.Label,{className:"d-none",children:"Password"}),Object(b.jsx)(w.a.Control,{type:"password",placeholder:"Password",name:"password",value:u,onChange:x})]}),null===(a=h.password)||void 0===a?void 0:a.map(((e,a)=>Object(b.jsx)(S.a,{variant:"warning",children:e},a))),Object(b.jsx)(A.a,{type:"submit",children:"Sign in"}),null===(t=h.non_field_errors)||void 0===t?void 0:t.map(((e,a)=>Object(b.jsx)(S.a,{variant:"warning",className:"mt-3",children:e},a)))]})]}),Object(b.jsx)(g.a,{className:"mt-3",children:Object(b.jsxs)(r.b,{className:r.b,to:"/signup",children:["Don't have an account? ",Object(b.jsx)("span",{children:"Sign up now!"})]})})]}),Object(b.jsx)(N.a,{md:6,className:"my-auto d-none d-md-block p-2"})]})},L=t(52),W=t(51);var k=()=>{const e=O(),a=v();return Object(b.jsx)(p.a,{expand:"md",bg:"light",variant:"light",children:Object(b.jsxs)(g.a,{children:[Object(b.jsx)(p.a.Brand,{as:r.b,to:"/",children:"Navbar"}),Object(b.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsxs)(p.a.Collapse,{id:"basic-navbar-nav",children:[Object(b.jsxs)(y.a,{className:"mr-auto",children:[Object(b.jsx)(y.a.Link,{as:r.b,to:"/",children:"Home"}),Object(b.jsx)(y.a.Link,{as:r.b,to:"/about-us",children:"About Us"}),Object(b.jsx)(y.a.Link,{as:r.b,to:"/meeting-list",children:"Meetings"}),Object(b.jsx)(y.a.Link,{as:r.b,to:"/volunteer",children:"Volunteer"}),e&&Object(b.jsx)(y.a.Link,{as:r.b,to:"/meetings/create",children:"Add Meeting"})]}),Object(b.jsx)(y.a,{className:"ml-auto",children:e?Object(b.jsxs)(b.Fragment,{children:[e&&Object(b.jsxs)(y.a.Link,{as:r.b,to:e.is_superuser?"/admin/":"/profiles/".concat(e.id),children:[Object(b.jsx)(L.a,{icon:W.a})," Profile Settings"]}),Object(b.jsxs)(y.a.Link,{onClick:async()=>{try{await l.a.post("dj-rest-auth/logout/"),a(null),u()}catch(e){}},children:[Object(b.jsx)(L.a,{icon:W.b})," Logout"]})]}):Object(b.jsx)(E,{})})]})]})})},M=t.p+"static/media/banner.1cc5e586.png";var T=()=>Object(b.jsx)("div",{children:Object(b.jsxs)("section",{className:"hero pt-5",children:[Object(b.jsx)("img",{src:M,alt:"Hero",className:"hero_image"}),Object(b.jsx)("div",{className:"col text-center hero_overlay_text text-box",children:Object(b.jsxs)("p",{children:['"Diversity: the art of thinking independently together." ',Object(b.jsx)("br",{})," - Malcolm Forbes"]})}),Object(b.jsx)("div",{className:"container mt-4",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col text-center text-box",children:[Object(b.jsx)("h2",{className:"header",children:"What We Are"}),Object(b.jsxs)("p",{className:"content home_text_box",children:[Object(b.jsx)("strong",{children:"Mosaic Minds"})," is a UK-wide network celebrating neurodiversity, connecting unique minds in a supportive online community. We offer a spectrum of events, from educational workshops to creative meet-ups, fostering a space where every neurodiverse individual can thrive. Our platform is a sanctuary for connection, learning, and growth, where each voice is heard and every story is valued. Together, we are redefining neurodiversity, championing understanding, acceptance, and empowerment."]})]}),Object(b.jsx)("div",{className:"col text-center button-box",children:Object(b.jsx)(r.b,{to:"/meeting-search-page",className:"btn btn-primary btn-lg",children:"Search Meetings"})}),Object(b.jsxs)("div",{className:"col text-center",children:[Object(b.jsx)("h2",{className:"header",children:"Why We Do It"}),Object(b.jsx)("p",{className:"content home_text_box",children:"At Mosaic Minds, we're driven by the untapped potential within the neurodiverse community. Our mission is to illuminate and celebrate neurodiversity, creating an environment where every individual flourishes. Through shared experiences and mutual support, we're building a future where neurodiversity is recognized as a unique advantage. We're not just envisioning a more inclusive world; we're actively crafting it, one event and one connection at a time."})]})]})})]})});var _=()=>Object(b.jsxs)(g.a,{children:[Object(b.jsx)(C.a,{className:"my-4 mt-5",children:Object(b.jsxs)(N.a,{children:[Object(b.jsx)("h2",{children:"What We Are"}),Object(b.jsx)("p",{children:"Mosaic Minds is a UK-wide network celebrating neurodiversity, connecting unique minds in a supportive online community. We offer a spectrum of events, from educational workshops to creative meet-ups, fostering a space where every neurodiverse individual can thrive. Our platform is a sanctuary for connection, learning, and growth, where each voice is heard and every story is valued. Together, we are redefining neurodiversity, championing understanding, acceptance, and empowerment."})]})}),Object(b.jsx)(C.a,{className:"my-4",children:Object(b.jsxs)(N.a,{children:[Object(b.jsx)("h2",{children:"Our History"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"2005:"})," Founded in London, Mosaic Minds began as a small group of individuals passionate about neurodiversity. Their mission was simple yet profound \u2013 to create a supportive community for neurodiverse individuals."]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"2010:"})," Mosaic Minds launched its first series of workshops, focusing on empowering neurodiverse individuals through education and skill development. The success of these workshops marked a significant milestone in the organization's journey."]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"2015:"})," With increasing recognition, Mosaic Minds expanded its reach across the UK. They introduced creative meet-ups, offering a new platform for self-expression and collaboration among its members."]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"2020:"})," The organization launched its online platform, connecting neurodiverse individuals nationwide. This digital transformation was a pivotal step in fostering a more inclusive and accessible community."]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"2023:"})," Mosaic Minds celebrated its 18th anniversary with a landmark conference, highlighting the achievements and advancements within the neurodiverse community. The event garnered attention from international media, furthering the organization's impact."]})]})}),Object(b.jsx)(C.a,{className:"my-4",children:Object(b.jsxs)(N.a,{children:[Object(b.jsx)("h2",{children:"Why We Do It"}),Object(b.jsx)("p",{children:"At Mosaic Minds, we're driven by the untapped potential within the neurodiverse community. Our mission is to illuminate and celebrate neurodiversity, creating an environment where every individual flourishes. Through shared experiences and mutual support, we're building a future where neurodiversity is recognized as a unique advantage. We're not just envisioning a more inclusive world; we're actively crafting it, one event and one connection at a time."})]})})]}),D=t(108),F=t(110);const G={CI:"Channel Islands Area",CTV:"Chiltern & Thames Valley Area",CA:"Cornwall Area",DA:"Devon Area",DO:"Dorset Area",EMA:"East Midlands Area",ES:"Essex Area",FC:"Free Counties Area",GM:"Greater Manchester Area",HA:"Hampshire Area",KE:"Kent Area","L-EC":"Lancashire - East & Central Area","L-NE":"London - North East Area","L-NW":"London - North West Area","L-SE":"London - South East Area","L-SW":"London - South West Area",MEA:"Merseyside Area",NS:"Norfolk & Suffolk Area",NEE:"North East England Area",NW:"NW England & N Wales Area","S-EC":"Scotland - East Coast Area","S-EL":"Scotland - Edinburgh & Lothians Area","S-GW":"Scotland - Glasgow & West Coast Area","S-WL":"Scotland - West Lothian Area",SWA:"South Wales Area",SU:"Surrey Area",SX:"Sussex Area",HIG:"The Highlands & Islands Groups",TS:"The Shires Area","UK-FAR":"UK Farsi Groups Area",WC:"West Country Area",WM:"West Midlands Area",WY:"West Yorkshire",YH:"Yorkshire & Humberside Area"},U=e=>{if(e&&e.includes(":")){const[a,t]=e.split(":"),n=new Date;n.setHours(parseInt(a,10),parseInt(t,10),0);let s=n.getHours();const r=s>=12?"PM":"AM";s%=12,s=s||12;const i=n.getMinutes().toString().padStart(2,"0");return"".concat(s,":").concat(i," ").concat(r)}return"Invalid Time"};var I=e=>{let{filters:a}=e;const[t,s]=Object(n.useState)([]),[i,c]=Object(n.useState)(!0),[o,d]=Object(n.useState)(null);return Object(n.useEffect)((()=>{c(!0),(async e=>{try{const a=new URLSearchParams({name:(null===e||void 0===e?void 0:e.meetingName)||"",weekday:(null===e||void 0===e?void 0:e.day)||"",time_of_day:(null===e||void 0===e?void 0:e.time)||"",area:(null===e||void 0===e?void 0:e.area)||""}).toString(),t=await l.a.get("meetings/?".concat(a));return console.log("Response data:",t.data),t.data}catch(o){throw console.error("Error in fetchMeetings:",o),o}})(a).then((e=>{s(e.results),c(!1)})).catch((e=>{console.error("Error fetching meetings:",e),d(e),c(!1)}))}),[a]),i?Object(b.jsxs)(g.a,{className:"mt-4 text-center",children:[Object(b.jsx)(D.a,{animation:"border",role:"status"}),Object(b.jsx)("p",{children:"Loading meetings..."})]}):o?Object(b.jsx)(g.a,{className:"mt-4",children:Object(b.jsxs)(S.a,{variant:"danger",children:["There was an error fetching the meetings: ",o.message]})}):Object(b.jsx)(g.a,{className:"mt-4",children:Object(b.jsx)(C.a,{children:(null===t||void 0===t?void 0:t.length)>0?t.map((e=>{return Object(b.jsx)(N.a,{md:4,className:"mb-3",children:Object(b.jsx)(F.a,{className:"boxshadow",children:Object(b.jsxs)(F.a.Body,{children:[Object(b.jsx)(F.a.Title,{children:e.name}),Object(b.jsxs)(F.a.Subtitle,{className:"mb-2 text-muted",children:[e.weekday_display," - ",U(e.meeting_time)]}),Object(b.jsx)(F.a.Subtitle,{className:"mb-2 text-muted",children:(a=e.area,G[a]||"Unknown Area")}),Object(b.jsx)(F.a.Text,{children:e.description}),e.meeting_id&&Object(b.jsx)(r.b,{to:"/meeting-details/".concat(e.meeting_id),className:"btn btn-primary",children:"Details"}),Object(b.jsx)(F.a.Link,{href:e.onlineMeetingUrl,children:"Online Meeting Link"})]})})},e.meeting_id);var a})):Object(b.jsx)("p",{children:"No meetings available"})})})};var H=()=>{const[e,a]=Object(n.useState)({name:"",email:"",motivation:""}),t=t=>{a({...e,[t.target.name]:t.target.value})};return Object(b.jsxs)(w.a,{onSubmit:a=>{a.preventDefault(),console.log(e)},children:[Object(b.jsxs)(w.a.Group,{className:"mb-3",children:[Object(b.jsx)(w.a.Label,{children:"Name"}),Object(b.jsx)(w.a.Control,{type:"text",name:"name",value:e.name,onChange:t,placeholder:"Enter your name"})]}),Object(b.jsxs)(w.a.Group,{className:"mb-3",children:[Object(b.jsx)(w.a.Label,{children:"Email address"}),Object(b.jsx)(w.a.Control,{type:"email",name:"email",value:e.email,onChange:t,placeholder:"Enter your email"})]}),Object(b.jsxs)(w.a.Group,{className:"mb-3",children:[Object(b.jsx)(w.a.Label,{children:"Motivation"}),Object(b.jsx)(w.a.Control,{as:"textarea",name:"motivation",value:e.motivation,onChange:t,rows:3,placeholder:"Why do you want to volunteer?"})]}),Object(b.jsx)(A.a,{variant:"primary",type:"submit",children:"Submit"})]})};var P=e=>{let{onSearch:a}=e;const[t,s]=Object(n.useState)(""),[r,i]=Object(n.useState)(""),[c,l]=Object(n.useState)(""),[o,d]=Object(n.useState)("");return Object(b.jsxs)("form",{className:"views-exposed-form bef-exposed-form",onSubmit:e=>{let n;switch(e.preventDefault(),r){case"1":n="morning";break;case"2":n="afternoon";break;case"3":n="evening";break;default:n=""}console.log("Search Parameters:",{day:t,time:n,area:c,meetingName:o}),a({day:t,time:n,area:c,meetingName:o})},children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"day",children:"Day"}),Object(b.jsxs)("select",{id:"day",value:t,onChange:e=>s(e.target.value),children:[Object(b.jsx)("option",{value:"",children:"- Any -"}),Object(b.jsx)("option",{value:"SUN",children:"Sunday"}),Object(b.jsx)("option",{value:"MON",children:"Monday"}),Object(b.jsx)("option",{value:"TUE",children:"Tuesday"}),Object(b.jsx)("option",{value:"WED",children:"Wednesday"}),Object(b.jsx)("option",{value:"THU",children:"Thursday"}),Object(b.jsx)("option",{value:"FRI",children:"Friday"}),Object(b.jsx)("option",{value:"SAT",children:"Saturday"})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"time",children:"Time"}),Object(b.jsxs)("select",{id:"time",value:r,onChange:e=>i(e.target.value),children:[Object(b.jsx)("option",{value:"",children:"- Any -"}),Object(b.jsx)("option",{value:"1",children:"Morning"}),Object(b.jsx)("option",{value:"2",children:"Afternoon"}),Object(b.jsx)("option",{value:"3",children:"Evening"})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"area",children:"Area"}),Object(b.jsxs)("select",{id:"area",value:c,onChange:e=>l(e.target.value),children:[Object(b.jsx)("option",{value:"",children:"- Any -"}),Object(b.jsx)("option",{value:"CI",children:"Channel Islands Area"}),Object(b.jsx)("option",{value:"CTV",children:"Chiltern & Thames Valley Area"}),Object(b.jsx)("option",{value:"CA",children:"Cornwall Area"}),Object(b.jsx)("option",{value:"DA",children:"Devon Area"}),Object(b.jsx)("option",{value:"DO",children:"Dorset Area"}),Object(b.jsx)("option",{value:"EMA",children:"East Midlands Area"}),Object(b.jsx)("option",{value:"ES",children:"Essex Area"}),Object(b.jsx)("option",{value:"FC",children:"Free Counties Area"}),Object(b.jsx)("option",{value:"GM",children:"Greater Manchester Area"}),Object(b.jsx)("option",{value:"HA",children:"Hampshire Area"}),Object(b.jsx)("option",{value:"KE",children:"Kent Area"}),Object(b.jsx)("option",{value:"L-EC",children:"Lancashire - East & Central Area"}),Object(b.jsx)("option",{value:"L-NE",children:"London - North East Area"}),Object(b.jsx)("option",{value:"L-NW",children:"London - North West Area"}),Object(b.jsx)("option",{value:"L-SE",children:"London - South East Area"}),Object(b.jsx)("option",{value:"L-SW",children:"London - South West Area"}),Object(b.jsx)("option",{value:"MEA",children:"Merseyside Area"}),Object(b.jsx)("option",{value:"NS",children:"Norfolk & Suffolk Area"}),Object(b.jsx)("option",{value:"NEE",children:"North East England Area"}),Object(b.jsx)("option",{value:"NW",children:"NW England & N Wales Area"}),Object(b.jsx)("option",{value:"S-EC",children:"Scotland - East Coast Area"}),Object(b.jsx)("option",{value:"S-EL",children:"Scotland - Edinburgh & Lothians Area"}),Object(b.jsx)("option",{value:"S-GW",children:"Scotland - Glasgow & West Coast Area"}),Object(b.jsx)("option",{value:"S-WL",children:"Scotland - West Lothian Area"}),Object(b.jsx)("option",{value:"SWA",children:"South Wales Area"}),Object(b.jsx)("option",{value:"SU",children:"Surrey Area"}),Object(b.jsx)("option",{value:"SX",children:"Sussex Area"}),Object(b.jsx)("option",{value:"HIG",children:"The Highlands & Islands Groups"}),Object(b.jsx)("option",{value:"TS",children:"The Shires Area"}),Object(b.jsx)("option",{value:"UK-FAR",children:"UK Farsi Groups Area"}),Object(b.jsx)("option",{value:"WC",children:"West Country Area"}),Object(b.jsx)("option",{value:"WM",children:"West Midlands Area"}),Object(b.jsx)("option",{value:"WY",children:"West Yorkshire"}),Object(b.jsx)("option",{value:"YH",children:"Yorkshire & Humberside Area"})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"meetingName",children:"Meeting Name"}),Object(b.jsx)("input",{id:"meetingName",type:"text",value:o,onChange:e=>d(e.target.value),maxLength:"128"})]}),Object(b.jsx)("button",{type:"submit",children:"Search"})]})};var R=()=>{const[e,a]=Object(n.useState)({day:"",time:"",type:"",area:"",name:""});return Object(b.jsxs)("div",{children:[Object(b.jsx)(P,{onSearch:e=>{a(e)}}),Object(b.jsx)(I,{filters:e})]})};var q=()=>{var e,a,t,s;f("loggedIn");const[c,o]=Object(n.useState)({username:"",password1:"",password2:""}),{username:d,password1:j,password2:u}=c,[h,m]=Object(n.useState)({}),O=Object(i.f)(),v=e=>{o({...c,[e.target.name]:e.target.value})};return Object(b.jsxs)(C.a,{className:C.a,children:[Object(b.jsxs)(N.a,{className:"my-auto py-2 p-md-2",md:6,children:[Object(b.jsxs)(g.a,{className:"p-4 ",children:[Object(b.jsx)("h1",{children:"sign up"}),Object(b.jsxs)(w.a,{onSubmit:async e=>{e.preventDefault();try{await l.a.post("/dj-rest-auth/registration/",c),O.push("/signin")}catch(t){var a;m(null===(a=t.response)||void 0===a?void 0:a.data)}},children:[Object(b.jsxs)(w.a.Group,{controlId:"username",children:[Object(b.jsx)(w.a.Label,{className:"d-none",children:"username"}),Object(b.jsx)(w.a.Control,{type:"text",placeholder:"Username",name:"username",value:d,onChange:v})]}),null===(e=h.username)||void 0===e?void 0:e.map(((e,a)=>Object(b.jsx)(S.a,{variant:"warning",children:e},a))),Object(b.jsxs)(w.a.Group,{controlId:"password1",children:[Object(b.jsx)(w.a.Label,{className:"d-none",children:"Password"}),Object(b.jsx)(w.a.Control,{type:"password",placeholder:"Password",name:"password1",value:j,onChange:v})]}),null===(a=h.password1)||void 0===a?void 0:a.map(((e,a)=>Object(b.jsx)(S.a,{variant:"warning",children:e},a))),Object(b.jsxs)(w.a.Group,{controlId:"password2",children:[Object(b.jsx)(w.a.Label,{className:"d-none",children:"Confirm password"}),Object(b.jsx)(w.a.Control,{type:"password",placeholder:"Confirm password",name:"password2",value:u,onChange:v})]}),null===(t=h.password2)||void 0===t?void 0:t.map(((e,a)=>Object(b.jsx)(S.a,{variant:"warning",children:e},a))),Object(b.jsx)(A.a,{type:"submit",children:"Sign up"}),null===(s=h.non_field_errors)||void 0===s?void 0:s.map(((e,a)=>Object(b.jsx)(S.a,{variant:"warning",className:"mt-3",children:e},a)))]})]}),Object(b.jsx)(g.a,{className:"mt-3",children:Object(b.jsxs)(r.b,{className:r.b,to:"/signin",children:["Already have an account? ",Object(b.jsx)("span",{children:"Sign in"})]})})]}),Object(b.jsx)(N.a,{md:6,className:"my-auto d-none d-md-block p-2"})]})},K=t(68);var B=()=>{const{register:e,handleSubmit:a,formState:{errors:t}}=Object(K.a)(),[s,r]=Object(n.useState)("");return Object(b.jsxs)("form",{onSubmit:a((async e=>{console.log(e);try{const a=await l.a.post("/meetings/",e);r("Meeting created successfully!"),console.log(a.data)}catch(a){console.error(a),r("Failed to create meeting.")}})),children:[Object(b.jsx)("input",{name:"name",...e("name",{required:!0}),placeholder:"Meeting Name"}),t.name&&Object(b.jsx)("div",{children:"Meeting name is required"}),Object(b.jsx)("select",{name:"weekday",...e("weekday",{required:!0}),children:[{value:"SUN",label:"Sunday"},{value:"MON",label:"Monday"},{value:"TUE",label:"Tuesday"},{value:"WED",label:"Wednesday"},{value:"THU",label:"Thursday"},{value:"FRI",label:"Friday"},{value:"SAT",label:"Saturday"}].map((e=>Object(b.jsx)("option",{value:e.value,children:e.label},e.value)))}),t.weekday&&Object(b.jsx)("div",{children:"Weekday is required"}),Object(b.jsx)("input",{name:"meeting_time",type:"time",...e("meeting_time",{required:!0})}),t.meeting_time&&Object(b.jsx)("div",{children:"Meeting time is required"}),Object(b.jsx)("select",{name:"area",...e("area",{required:!0}),children:[{value:"CI",label:"Channel Islands Area"},{value:"CTV",label:"Chiltern & Thames Valley Area"},{value:"CA",label:"Cornwall Area"},{value:"DA",label:"Devon Area"},{value:"DO",label:"Dorset Area"},{value:"EMA",label:"East Midlands Area"},{value:"ES",label:"Essex Area"},{value:"FC",label:"Free Counties Area"},{value:"GM",label:"Greater Manchester Area"},{value:"HA",label:"Hampshire Area"},{value:"KE",label:"Kent Area"},{value:"L-EC",label:"Lancashire - East & Central Area"},{value:"L-NE",label:"London - North East Area"},{value:"L-NW",label:"London - North West Area"},{value:"L-SE",label:"London - South East Area"},{value:"L-SW",label:"London - South West Area"},{value:"MEA",label:"Merseyside Area"},{value:"NS",label:"Norfolk & Suffolk Area"},{value:"NEE",label:"North East England Area"},{value:"NW",label:"NW England & N Wales Area"},{value:"S-EC",label:"Scotland - East Coast Area"},{value:"S-EL",label:"Scotland - Edinburgh & Lothians Area"},{value:"S-GW",label:"Scotland - Glasgow & West Coast Area"},{value:"S-WL",label:"Scotland - West Lothian Area"},{value:"SWA",label:"South Wales Area"},{value:"SU",label:"Surrey Area"},{value:"SX",label:"Sussex Area"},{value:"HIG",label:"The Highlands & Islands Groups"},{value:"TS",label:"The Shires Area"},{value:"UK-FAR",label:"UK Farsi Groups Area"},{value:"WC",label:"West Country Area"},{value:"WM",label:"West Midlands Area"},{value:"WY",label:"West Yorkshire"},{value:"YH",label:"Yorkshire & Humberside Area"}].map((e=>Object(b.jsx)("option",{value:e.value,children:e.label},e.value)))}),t.area&&Object(b.jsx)("div",{children:"Area is required"}),Object(b.jsx)("textarea",{name:"description",...e("description",{required:!0}),placeholder:"Description"}),t.description&&Object(b.jsx)("div",{children:"Description is required"}),Object(b.jsx)("input",{name:"online_meeting_url",type:"url",...e("online_meeting_url",{required:!0}),placeholder:"Online Meeting URL"}),t.online_meeting_url&&Object(b.jsx)("div",{children:"Online meeting URL is required"}),Object(b.jsx)("button",{type:"submit",children:"Submit"}),s&&Object(b.jsx)("div",{children:s})]})};var Y=()=>{const{id:e}=Object(i.g)(),[a,t]=Object(n.useState)(null),[s,r]=Object(n.useState)(!0),[c,o]=Object(n.useState)("");return Object(n.useEffect)((()=>{(async()=>{try{const a=await l.a.get("/meeting-details/".concat(e));t(a.data),r(!1)}catch(a){console.error(a),o("Failed to load meeting details."),r(!1)}})()}),[e]),s?Object(b.jsx)("div",{children:"Loading..."}):c?Object(b.jsx)("div",{children:c}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Meeting Details"}),a&&Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:a.name}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Weekday:"})," ",a.weekday]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Time:"})," ",a.meeting_time]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Area:"})," ",a.area]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Description:"})," ",a.description]}),a.online_meeting_url&&Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Online Meeting URL:"})," ",Object(b.jsx)("a",{href:a.online_meeting_url,target:"_blank",rel:"noopener noreferrer",children:a.online_meeting_url})]})]})]})};var V=e=>{let{match:a}=e;const[t,s]=Object(n.useState)({title:"",date:"",time:"",description:"",area:""}),[r,i]=Object(n.useState)([]),c=e=>{const{name:a,value:n}=e.target;s({...t,[a]:n})};return Object(n.useEffect)((()=>{l.a.get("/api/meetings/".concat(a.params.id)).then((e=>s(e.data))).catch((e=>console.error(e))),l.a.get("/api/areas").then((e=>i(e.data))).catch((e=>console.error(e)))}),[a.params.id]),Object(b.jsxs)("form",{onSubmit:e=>{e.preventDefault(),console.log(t)},children:[Object(b.jsx)("h2",{children:"Edit Meeting"}),Object(b.jsxs)("label",{children:["Title:",Object(b.jsx)("input",{type:"text",name:"title",value:t.title,onChange:c})]}),Object(b.jsxs)("label",{children:["Date:",Object(b.jsx)("input",{type:"date",name:"date",value:t.date,onChange:c})]}),Object(b.jsxs)("label",{children:["Time:",Object(b.jsx)("input",{type:"time",name:"time",value:t.time,onChange:c})]}),Object(b.jsxs)("label",{children:["Description:",Object(b.jsx)("textarea",{name:"description",value:t.description,onChange:c})]}),Object(b.jsxs)("label",{children:["Area:",Object(b.jsx)("select",{name:"area",value:t.area,onChange:c,children:r.map((e=>Object(b.jsx)("option",{value:e.name,children:e.name},e.id)))})]}),Object(b.jsx)("button",{type:"submit",children:"Save Changes"})]})};var z=function(){const[e,a]=Object(n.useState)(!1),[t,s]=Object(n.useState)({}),r=O();Object(n.useEffect)((()=>{if(r){(async()=>{try{const{data:e}=await o.get("/profiles/".concat(r.id,"/"));s(e),a(!0)}catch(e){}})()}}),[r]);const i=Object(b.jsx)(C.a,{nogutters:"true",className:"px-3 text-center",children:Object(b.jsxs)(N.a,{children:[Object(b.jsx)("h3",{className:"m-2",children:(null===t||void 0===t?void 0:t.owner)||"No Owner"}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["First Name: ",(null===t||void 0===t?void 0:t.first_name)||"No First Name"]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Last Name: ",(null===t||void 0===t?void 0:t.last_name)||"No Last Name"]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Email: ",(null===t||void 0===t?void 0:t.email)||"No Email"]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Phone Number: ",(null===t||void 0===t?void 0:t.phonenumber)||"No Phone Number"]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Role: ",(null===t||void 0===t?void 0:t.role_at_meeting)||"No Role"]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Joined: ",(null===t||void 0===t?void 0:t.created_at)||"No Join Date"]})})]})});return Object(b.jsx)(g.a,{children:e?i:Object(b.jsx)("p",{children:"Loading..."})})},J=t(69);var X=()=>{var e,a;const t=O(),s=v(),{id:r}=Object(i.g)(),c=Object(i.f)(),l=Object(n.useRef)(),[d,j]=Object(n.useState)({name:"",content:"",image:""}),{name:u,content:h,image:m}=d,[x,p]=Object(n.useState)({});Object(n.useEffect)((()=>{(async()=>{var e;if((null===t||void 0===t||null===(e=t.profile_id)||void 0===e?void 0:e.toString())===r)try{const{data:e}=await o.get("/profiles/".concat(r,"/")),{name:a,content:t,image:n}=e;j({name:a,content:t,image:n})}catch(a){c.push("/")}else c.push("/")})()}),[t,c,r]);const y=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(w.a.Group,{children:[Object(b.jsx)(w.a.Label,{children:"Bio"}),Object(b.jsx)(w.a.Control,{as:"textarea",value:h,onChange:e=>{j({...d,[e.target.name]:e.target.value})},name:"content",rows:7})]}),null===x||void 0===x||null===(e=x.content)||void 0===e?void 0:e.map(((e,a)=>Object(b.jsx)(S.a,{variant:"warning",children:e},a))),Object(b.jsx)(A.a,{onClick:()=>c.goBack(),children:"cancel"}),Object(b.jsx)(A.a,{type:"submit",children:"save"})]});return Object(b.jsx)(w.a,{onSubmit:async e=>{var a;e.preventDefault();const t=new FormData;var n;(t.append("name",u),t.append("content",h),null!==l&&void 0!==l&&null!==(a=l.current)&&void 0!==a&&a.files[0])&&t.append("image",null===l||void 0===l||null===(n=l.current)||void 0===n?void 0:n.files[0]);try{const{data:e}=await o.put("/profiles/".concat(r,"/"),t);s((a=>({...a,profile_image:e.image}))),c.goBack()}catch(d){var i;p(null===(i=d.response)||void 0===i?void 0:i.data)}},children:Object(b.jsxs)(C.a,{children:[Object(b.jsx)(N.a,{className:"py-2 p-0 p-md-2 text-center",md:7,lg:6,children:Object(b.jsxs)(g.a,{children:[Object(b.jsxs)(w.a.Group,{children:[m&&Object(b.jsx)("figure",{children:Object(b.jsx)(J.a,{src:m,fluid:!0})}),null===x||void 0===x||null===(a=x.image)||void 0===a?void 0:a.map(((e,a)=>Object(b.jsx)(S.a,{variant:"warning",children:e},a))),Object(b.jsx)("div",{children:Object(b.jsx)(w.a.Label,{htmlFor:"image-upload",children:"Change the image"})}),Object(b.jsx)(w.a.File,{id:"image-upload",ref:l,accept:"image/*",onChange:e=>{e.target.files.length&&j({...d,image:URL.createObjectURL(e.target.files[0])})}})]}),Object(b.jsx)("div",{className:"d-md-none",children:y})]})}),Object(b.jsx)(N.a,{md:5,lg:6,className:"d-none d-md-block p-0 p-md-2 text-center",children:Object(b.jsx)(g.a,{children:y})})]})})};var Q=()=>{var e;const[a,t]=Object(n.useState)(""),[s,r]=Object(n.useState)({}),c=Object(i.f)(),{id:l}=Object(i.g)(),o=O(),j=v();Object(n.useEffect)((()=>{var e;(null===o||void 0===o||null===(e=o.profile_id)||void 0===e?void 0:e.toString())===l?t(o.username):c.push("/")}),[o,c,l]);return Object(b.jsx)(C.a,{children:Object(b.jsx)(N.a,{className:"py-2 mx-auto text-center",md:6,children:Object(b.jsx)(g.a,{children:Object(b.jsxs)(w.a,{onSubmit:async e=>{e.preventDefault();try{await d.put("/dj-rest-auth/user/",{username:a}),j((e=>({...e,username:a}))),c.goBack()}catch(n){var t;r(null===(t=n.response)||void 0===t?void 0:t.data)}},className:"my-2",children:[Object(b.jsxs)(w.a.Group,{children:[Object(b.jsx)(w.a.Label,{children:"Change username"}),Object(b.jsx)(w.a.Control,{placeholder:"username",type:"text",value:a,onChange:e=>t(e.target.value)})]}),null===s||void 0===s||null===(e=s.username)||void 0===e?void 0:e.map(((e,a)=>Object(b.jsx)(S.a,{variant:"warning",children:e},a))),Object(b.jsx)(A.a,{onClick:()=>c.goBack(),children:"cancel"}),Object(b.jsx)(A.a,{type:"submit",children:"save"})]})})})})};var Z=()=>{var e,a;const t=Object(i.f)(),{id:s}=Object(i.g)(),r=O(),[c,l]=Object(n.useState)({new_password1:"",new_password2:""}),{new_password1:o,new_password2:j}=c,[u,h]=Object(n.useState)({}),m=e=>{l({...c,[e.target.name]:e.target.value})};Object(n.useEffect)((()=>{var e;(null===r||void 0===r||null===(e=r.profile_id)||void 0===e?void 0:e.toString())!==s&&t.push("/")}),[r,t,s]);return Object(b.jsx)(C.a,{children:Object(b.jsx)(N.a,{className:"py-2 mx-auto text-center",md:6,children:Object(b.jsx)(g.a,{children:Object(b.jsxs)(w.a,{onSubmit:async e=>{e.preventDefault();try{await d.post("/dj-rest-auth/password/change/",c),t.goBack()}catch(n){var a;h(null===(a=n.response)||void 0===a?void 0:a.data)}},children:[Object(b.jsxs)(w.a.Group,{children:[Object(b.jsx)(w.a.Label,{children:"New password"}),Object(b.jsx)(w.a.Control,{placeholder:"new password",type:"password",value:o,onChange:m,name:"new_password1"})]}),null===u||void 0===u||null===(e=u.new_password1)||void 0===e?void 0:e.map(((e,a)=>Object(b.jsx)(S.a,{variant:"warning",children:e},a))),Object(b.jsxs)(w.a.Group,{children:[Object(b.jsx)(w.a.Label,{children:"Confirm password"}),Object(b.jsx)(w.a.Control,{placeholder:"confirm new password",type:"password",value:j,onChange:m,name:"new_password2"})]}),null===u||void 0===u||null===(a=u.new_password2)||void 0===a?void 0:a.map(((e,a)=>Object(b.jsx)(S.a,{variant:"warning",children:e},a))),Object(b.jsx)(A.a,{onClick:()=>t.goBack(),children:"cancel"}),Object(b.jsx)(A.a,{type:"submit",children:"save"})]})})})})};var $=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"404 - Not Found"}),Object(b.jsx)("p",{children:"The page you are looking for does not exist."})]})};var ee=function(){return Object(b.jsx)(r.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(k,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/",component:T}),Object(b.jsx)(i.a,{path:"/signin",render:()=>Object(b.jsx)(E,{})}),Object(b.jsx)(i.a,{path:"/signup",render:()=>Object(b.jsx)(q,{})}),Object(b.jsx)(i.a,{path:"/meeting-list",render:()=>Object(b.jsx)(I,{})}),Object(b.jsx)(i.a,{path:"/meeting-search-form",render:()=>Object(b.jsx)(P,{})}),Object(b.jsx)(i.a,{path:"/meeting-search-page",render:()=>Object(b.jsx)(R,{})}),Object(b.jsx)(i.a,{path:"/about-us",render:()=>Object(b.jsx)(_,{})}),Object(b.jsx)(i.a,{path:"/volunteer",render:()=>Object(b.jsx)(H,{})}),Object(b.jsx)(i.a,{path:"/auth/sign-up-form",render:()=>Object(b.jsx)(q,{})}),Object(b.jsx)(i.a,{path:"/meetings/create",render:()=>Object(b.jsx)(B,{})}),Object(b.jsx)(i.a,{path:"/meeting-details/:id",render:e=>Object(b.jsx)(Y,{...e})}),Object(b.jsx)(i.a,{path:"/meetings/:id/edit",render:e=>Object(b.jsx)(V,{...e})}),Object(b.jsx)(i.a,{path:"/profiles/:id",render:e=>Object(b.jsx)(z,{...e})}),Object(b.jsx)(i.a,{path:"/profiles/:id/edit/username",render:e=>Object(b.jsx)(Q,{...e})}),Object(b.jsx)(i.a,{path:"/profiles/:id/edit/password",render:e=>Object(b.jsx)(Z,{...e})}),Object(b.jsx)(i.a,{path:"/profiles/:id/edit",render:e=>Object(b.jsx)(X,{...e})}),Object(b.jsx)(i.a,{component:$})]})]})})};var ae=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,112)).then((a=>{let{getCLS:t,getFID:n,getFCP:s,getLCP:r,getTTFB:i}=a;t(e),n(e),s(e),r(e),i(e)}))};t(105);const te=Object(n.createContext)(),ne=Object(n.createContext)(),se=e=>{let{children:a}=e;const[t,s]=Object(n.useState)({currentUserProfile:null}),r=O();return Object(n.useEffect)((()=>{(async()=>{if(r&&r.id)try{const{data:e}=await o.get("profiles/".concat(r.id,"/"));s({currentUserProfile:e})}catch(e){}})()}),[r]),Object(b.jsx)(te.Provider,{value:t,children:Object(b.jsx)(ne.Provider,{value:{setProfileData:s},children:a})})},re=document.getElementById("root");Object(s.createRoot)(re).render(Object(b.jsx)(r.a,{children:Object(b.jsx)(x,{children:Object(b.jsx)(se,{children:Object(b.jsx)(ee,{})})})})),ae()},63:function(e,a,t){}},[[106,1,2]]]);
//# sourceMappingURL=main.9e8ee7ac.chunk.js.map