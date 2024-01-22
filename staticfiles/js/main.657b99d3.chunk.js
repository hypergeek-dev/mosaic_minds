(this.webpackJsonpmosaicminds=this.webpackJsonpmosaicminds||[]).push([[0],{43:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),r=(t(43),t(10)),s=t(8),i=t(7),c=t.n(i);c.a.defaults.baseURL="/api",c.a.defaults.headers.post["Content-Type"]="multipart/form-data",c.a.defaults.withCredentials=!0;const l=c.a.create(),o=c.a.create();var d=t(97),j=t(17),h=t(96),b=t(6),u=t(18),m=t(19),p=t(15),O=t(20),x=t(32);var v=t(1);const g=Object(n.createContext)(),f=Object(n.createContext)(),y=()=>Object(n.useContext)(g),S=()=>Object(n.useContext)(f);var A=function(){var e,a,t;const i=S(),[l,o]=Object(n.useState)({username:"",password:""}),{username:d,password:h}=l,[g,f]=Object(n.useState)({}),y=Object(s.f)(),A=e=>{o({...l,[e.target.name]:e.target.value})};return Object(v.jsx)(O.a,{children:Object(v.jsxs)(p.a,{className:"my-auto p-0 p-md-2",md:6,children:[Object(v.jsxs)(j.a,{className:"p-4",children:[Object(v.jsx)("h1",{children:"sign in"}),Object(v.jsxs)(b.a,{onSubmit:async e=>{e.preventDefault();try{const{data:e}=await c.a.post("/dj-rest-auth/login/",l);i(e.user),(e=>{const a=Object(x.a)(null===e||void 0===e?void 0:e.refresh_token).exp;localStorage.setItem("refreshTokenTimestamp",a)})(e),y.goBack()}catch(t){var a;f(null===(a=t.response)||void 0===a?void 0:a.data)}},children:[Object(v.jsxs)(b.a.Group,{controlId:"username",children:[Object(v.jsx)(b.a.Label,{className:"d-none",children:"Username"}),Object(v.jsx)(b.a.Control,{type:"text",placeholder:"Username",name:"username",value:d,onChange:A})]}),null===(e=g.username)||void 0===e?void 0:e.map(((e,a)=>Object(v.jsx)(u.a,{variant:"warning",children:e},a))),Object(v.jsxs)(b.a.Group,{controlId:"password",children:[Object(v.jsx)(b.a.Label,{className:"d-none",children:"Password"}),Object(v.jsx)(b.a.Control,{type:"password",placeholder:"Password",name:"password",value:h,onChange:A})]}),null===(a=g.password)||void 0===a?void 0:a.map(((e,a)=>Object(v.jsx)(u.a,{variant:"warning",children:e},a))),Object(v.jsx)(m.a,{type:"submit",children:"Sign in"}),null===(t=g.non_field_errors)||void 0===t?void 0:t.map(((e,a)=>Object(v.jsx)(u.a,{variant:"warning",className:"mt-3",children:e},a)))]})]}),Object(v.jsx)(j.a,{className:"mt-3",children:Object(v.jsxs)(r.b,{to:"/signup",children:["Don't have an account? ",Object(v.jsx)("span",{children:"Sign up now!"})]})})]})})};var w=()=>{const[e,a]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{a((()=>{const e=localStorage.getItem("mosaic.minds");if(!e)return!1;try{return!(1e3*Object(x.a)(e).exp<Date.now())||(localStorage.removeItem("mosaic.minds"),!1)}catch(a){return console.error("Error decoding token:",a),!1}})())}),[]),Object(v.jsx)(d.a,{expand:"md",children:Object(v.jsxs)(j.a,{children:[Object(v.jsx)(d.a.Brand,{as:r.b,to:"/"}),Object(v.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsxs)(d.a.Collapse,{id:"basic-navbar-nav",children:[Object(v.jsxs)(h.a,{className:"mr-auto",children:[Object(v.jsx)(h.a.Link,{as:r.b,to:"/",children:"Home"}),Object(v.jsx)(h.a.Link,{as:r.b,to:"/AboutUs",children:"About Us"}),Object(v.jsx)(h.a.Link,{as:r.b,to:"/MeetingList",children:"Meetings"}),Object(v.jsx)(h.a.Link,{as:r.b,to:"/Volunteer",children:"Volunteer"}),e&&Object(v.jsx)(h.a.Link,{as:r.b,to:"/AddMeeting",children:"Add Meeting"})]}),Object(v.jsx)(A,{})]})]})})},N=t.p+"static/media/banner.1cc5e586.png";var C=()=>Object(v.jsx)("div",{children:Object(v.jsxs)("section",{className:"hero pt-5",children:[Object(v.jsx)("img",{src:N,alt:"Hero",className:"hero_image"}),Object(v.jsx)("div",{className:"col text-center hero_overlay_text text-box",children:Object(v.jsxs)("p",{children:['"Diversity: the art of thinking independently together." ',Object(v.jsx)("br",{})," - Malcolm Forbes"]})}),Object(v.jsx)("div",{className:"container mt-4",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col text-center text-box",children:[Object(v.jsx)("h2",{className:"header",children:"What We Are"}),Object(v.jsxs)("p",{className:"content home_text_box",children:[Object(v.jsx)("strong",{children:"Mosaic Minds"})," is a UK-wide network celebrating neurodiversity, connecting unique minds in a supportive online community. We offer a spectrum of events, from educational workshops to creative meet-ups, fostering a space where every neurodiverse individual can thrive. Our platform is a sanctuary for connection, learning, and growth, where each voice is heard and every story is valued. Together, we are redefining neurodiversity, championing understanding, acceptance, and empowerment."]})]}),Object(v.jsx)("div",{className:"col text-center button-box",children:Object(v.jsx)("a",{href:"/MeetingSearchPage",className:"btn btn-primary btn-lg",children:"Search Meetings"})}),Object(v.jsxs)("div",{className:"col text-center",children:[Object(v.jsx)("h2",{className:"header",children:"Why We Do It"}),Object(v.jsx)("p",{className:"content home_text_box",children:"At Mosaic Minds, we're driven by the untapped potential within the neurodiverse community. Our mission is to illuminate and celebrate neurodiversity, creating an environment where every individual flourishes. Through shared experiences and mutual support, we're building a future where neurodiversity is recognized as a unique advantage. We're not just envisioning a more inclusive world; we're actively crafting it, one event and one connection at a time."})]})]})})]})});var E=()=>Object(v.jsxs)(j.a,{children:[Object(v.jsx)(O.a,{className:"my-4 mt-5",children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)("h2",{children:"What We Are"}),Object(v.jsx)("p",{children:"Mosaic Minds is a UK-wide network celebrating neurodiversity, connecting unique minds in a supportive online community. We offer a spectrum of events, from educational workshops to creative meet-ups, fostering a space where every neurodiverse individual can thrive. Our platform is a sanctuary for connection, learning, and growth, where each voice is heard and every story is valued. Together, we are redefining neurodiversity, championing understanding, acceptance, and empowerment."})]})}),Object(v.jsx)(O.a,{className:"my-4",children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)("h2",{children:"Our History"}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"2005:"})," Founded in London, Mosaic Minds began as a small group of individuals passionate about neurodiversity. Their mission was simple yet profound \u2013 to create a supportive community for neurodiverse individuals."]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"2010:"})," Mosaic Minds launched its first series of workshops, focusing on empowering neurodiverse individuals through education and skill development. The success of these workshops marked a significant milestone in the organization's journey."]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"2015:"})," With increasing recognition, Mosaic Minds expanded its reach across the UK. They introduced creative meet-ups, offering a new platform for self-expression and collaboration among its members."]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"2020:"})," The organization launched its online platform, connecting neurodiverse individuals nationwide. This digital transformation was a pivotal step in fostering a more inclusive and accessible community."]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"2023:"})," Mosaic Minds celebrated its 18th anniversary with a landmark conference, highlighting the achievements and advancements within the neurodiverse community. The event garnered attention from international media, furthering the organization's impact."]})]})}),Object(v.jsx)(O.a,{className:"my-4",children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)("h2",{children:"Why We Do It"}),Object(v.jsx)("p",{children:"At Mosaic Minds, we're driven by the untapped potential within the neurodiverse community. Our mission is to illuminate and celebrate neurodiversity, creating an environment where every individual flourishes. Through shared experiences and mutual support, we're building a future where neurodiversity is recognized as a unique advantage. We're not just envisioning a more inclusive world; we're actively crafting it, one event and one connection at a time."})]})})]}),_=t(95),L=t(98);const W={CI:"Channel Islands Area",CTV:"Chiltern & Thames Valley Area",CA:"Cornwall Area",DA:"Devon Area",DO:"Dorset Area",EMA:"East Midlands Area",ES:"Essex Area",FC:"Free Counties Area",GM:"Greater Manchester Area",HA:"Hampshire Area",KE:"Kent Area","L-EC":"Lancashire - East & Central Area","L-NE":"London - North East Area","L-NW":"London - North West Area","L-SE":"London - South East Area","L-SW":"London - South West Area",MEA:"Merseyside Area",NS:"Norfolk & Suffolk Area",NEE:"North East England Area",NW:"NW England & N Wales Area","S-EC":"Scotland - East Coast Area","S-EL":"Scotland - Edinburgh & Lothians Area","S-GW":"Scotland - Glasgow & West Coast Area","S-WL":"Scotland - West Lothian Area",SWA:"South Wales Area",SU:"Surrey Area",SX:"Sussex Area",HIG:"The Highlands & Islands Groups",TS:"The Shires Area","UK-FAR":"UK Farsi Groups Area",WC:"West Country Area",WM:"West Midlands Area",WY:"West Yorkshire",YH:"Yorkshire & Humberside Area"},M=e=>{if(e&&e.includes(":")){const[a,t]=e.split(":"),n=new Date;n.setHours(parseInt(a,10),parseInt(t,10),0);let r=n.getHours();const s=r>=12?"PM":"AM";r%=12,r=r||12;const i=n.getMinutes().toString().padStart(2,"0");return"".concat(r,":").concat(i," ").concat(s)}return"Invalid Time"};var k=e=>{let{filters:a}=e;const[t,r]=Object(n.useState)([]),[s,i]=Object(n.useState)(!0),[l,o]=Object(n.useState)(null);return Object(n.useEffect)((()=>{i(!0),(async e=>{try{const a=new URLSearchParams({name:(null===e||void 0===e?void 0:e.meetingName)||"",weekday:(null===e||void 0===e?void 0:e.day)||"",time_of_day:(null===e||void 0===e?void 0:e.time)||"",area:(null===e||void 0===e?void 0:e.area)||""}).toString(),t=await c.a.get("meetings/?".concat(a));return console.log("Response data:",t.data),t.data}catch(l){throw console.error("Error in fetchMeetings:",l),l}})(a).then((e=>{r(e.results),i(!1)})).catch((e=>{console.error("Error fetching meetings:",e),o(e),i(!1)}))}),[a]),s?Object(v.jsxs)(j.a,{className:"mt-4 text-center",children:[Object(v.jsx)(_.a,{animation:"border",role:"status"}),Object(v.jsx)("p",{children:"Loading meetings..."})]}):l?Object(v.jsx)(j.a,{className:"mt-4",children:Object(v.jsxs)(u.a,{variant:"danger",children:["There was an error fetching the meetings: ",l.message]})}):Object(v.jsx)(j.a,{className:"mt-4",children:Object(v.jsx)(O.a,{children:t.length>0?t.map((e=>{return Object(v.jsx)(p.a,{md:4,className:"mb-3",children:Object(v.jsx)(L.a,{className:"boxshadow",children:Object(v.jsxs)(L.a.Body,{children:[Object(v.jsx)(L.a.Title,{children:e.name}),Object(v.jsxs)(L.a.Subtitle,{className:"mb-2 text-muted",children:[e.weekday_display," - ",M(e.meeting_time)]}),Object(v.jsx)(L.a.Subtitle,{className:"mb-2 text-muted",children:(a=e.area,W[a]||"Unknown Area")}),Object(v.jsx)(L.a.Text,{children:e.description}),Object(v.jsx)(L.a.Link,{href:e.moreInfoUrl,children:"Details"}),Object(v.jsx)(L.a.Link,{href:e.onlineMeetingUrl,children:"Online Meeting Link"})]})})},e.id);var a})):Object(v.jsx)("p",{children:"No meetings available"})})})};var T=()=>{const[e,a]=Object(n.useState)({name:"",email:"",motivation:""}),t=t=>{a({...e,[t.target.name]:t.target.value})};return Object(v.jsxs)(b.a,{onSubmit:a=>{a.preventDefault(),console.log(e)},children:[Object(v.jsxs)(b.a.Group,{className:"mb-3",children:[Object(v.jsx)(b.a.Label,{children:"Name"}),Object(v.jsx)(b.a.Control,{type:"text",name:"name",value:e.name,onChange:t,placeholder:"Enter your name"})]}),Object(v.jsxs)(b.a.Group,{className:"mb-3",children:[Object(v.jsx)(b.a.Label,{children:"Email address"}),Object(v.jsx)(b.a.Control,{type:"email",name:"email",value:e.email,onChange:t,placeholder:"Enter your email"})]}),Object(v.jsxs)(b.a.Group,{className:"mb-3",children:[Object(v.jsx)(b.a.Label,{children:"Motivation"}),Object(v.jsx)(b.a.Control,{as:"textarea",name:"motivation",value:e.motivation,onChange:t,rows:3,placeholder:"Why do you want to volunteer?"})]}),Object(v.jsx)(m.a,{variant:"primary",type:"submit",children:"Submit"})]})};var F=e=>{let{onSearch:a}=e;const[t,r]=Object(n.useState)(""),[s,i]=Object(n.useState)(""),[c,l]=Object(n.useState)(""),[o,d]=Object(n.useState)("");return Object(v.jsxs)("form",{className:"views-exposed-form bef-exposed-form",onSubmit:e=>{let n;switch(e.preventDefault(),s){case"1":n="morning";break;case"2":n="afternoon";break;case"3":n="evening";break;default:n=""}console.log("Search Parameters:",{day:t,time:n,area:c,meetingName:o}),a({day:t,time:n,area:c,meetingName:o})},children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"day",children:"Day"}),Object(v.jsxs)("select",{id:"day",value:t,onChange:e=>r(e.target.value),children:[Object(v.jsx)("option",{value:"",children:"- Any -"}),Object(v.jsx)("option",{value:"SUN",children:"Sunday"}),Object(v.jsx)("option",{value:"MON",children:"Monday"}),Object(v.jsx)("option",{value:"TUE",children:"Tuesday"}),Object(v.jsx)("option",{value:"WED",children:"Wednesday"}),Object(v.jsx)("option",{value:"THU",children:"Thursday"}),Object(v.jsx)("option",{value:"FRI",children:"Friday"}),Object(v.jsx)("option",{value:"SAT",children:"Saturday"})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"time",children:"Time"}),Object(v.jsxs)("select",{id:"time",value:s,onChange:e=>i(e.target.value),children:[Object(v.jsx)("option",{value:"",children:"- Any -"}),Object(v.jsx)("option",{value:"1",children:"Morning"}),Object(v.jsx)("option",{value:"2",children:"Afternoon"}),Object(v.jsx)("option",{value:"3",children:"Evening"})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"area",children:"Area"}),Object(v.jsxs)("select",{id:"area",value:c,onChange:e=>l(e.target.value),children:[Object(v.jsx)("option",{value:"",children:"- Any -"}),Object(v.jsx)("option",{value:"CI",children:"Channel Islands Area"}),Object(v.jsx)("option",{value:"CTV",children:"Chiltern & Thames Valley Area"}),Object(v.jsx)("option",{value:"CA",children:"Cornwall Area"}),Object(v.jsx)("option",{value:"DA",children:"Devon Area"}),Object(v.jsx)("option",{value:"DO",children:"Dorset Area"}),Object(v.jsx)("option",{value:"EMA",children:"East Midlands Area"}),Object(v.jsx)("option",{value:"ES",children:"Essex Area"}),Object(v.jsx)("option",{value:"FC",children:"Free Counties Area"}),Object(v.jsx)("option",{value:"GM",children:"Greater Manchester Area"}),Object(v.jsx)("option",{value:"HA",children:"Hampshire Area"}),Object(v.jsx)("option",{value:"KE",children:"Kent Area"}),Object(v.jsx)("option",{value:"L-EC",children:"Lancashire - East & Central Area"}),Object(v.jsx)("option",{value:"L-NE",children:"London - North East Area"}),Object(v.jsx)("option",{value:"L-NW",children:"London - North West Area"}),Object(v.jsx)("option",{value:"L-SE",children:"London - South East Area"}),Object(v.jsx)("option",{value:"L-SW",children:"London - South West Area"}),Object(v.jsx)("option",{value:"MEA",children:"Merseyside Area"}),Object(v.jsx)("option",{value:"NS",children:"Norfolk & Suffolk Area"}),Object(v.jsx)("option",{value:"NEE",children:"North East England Area"}),Object(v.jsx)("option",{value:"NW",children:"NW England & N Wales Area"}),Object(v.jsx)("option",{value:"S-EC",children:"Scotland - East Coast Area"}),Object(v.jsx)("option",{value:"S-EL",children:"Scotland - Edinburgh & Lothians Area"}),Object(v.jsx)("option",{value:"S-GW",children:"Scotland - Glasgow & West Coast Area"}),Object(v.jsx)("option",{value:"S-WL",children:"Scotland - West Lothian Area"}),Object(v.jsx)("option",{value:"SWA",children:"South Wales Area"}),Object(v.jsx)("option",{value:"SU",children:"Surrey Area"}),Object(v.jsx)("option",{value:"SX",children:"Sussex Area"}),Object(v.jsx)("option",{value:"HIG",children:"The Highlands & Islands Groups"}),Object(v.jsx)("option",{value:"TS",children:"The Shires Area"}),Object(v.jsx)("option",{value:"UK-FAR",children:"UK Farsi Groups Area"}),Object(v.jsx)("option",{value:"WC",children:"West Country Area"}),Object(v.jsx)("option",{value:"WM",children:"West Midlands Area"}),Object(v.jsx)("option",{value:"WY",children:"West Yorkshire"}),Object(v.jsx)("option",{value:"YH",children:"Yorkshire & Humberside Area"})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"meetingName",children:"Meeting Name"}),Object(v.jsx)("input",{id:"meetingName",type:"text",value:o,onChange:e=>d(e.target.value),maxLength:"128"})]}),Object(v.jsx)("button",{type:"submit",children:"Search"})]})};var D=()=>{const[e,a]=Object(n.useState)({day:"",time:"",type:"",area:"",name:""});return Object(v.jsxs)("div",{children:[Object(v.jsx)(F,{onSearch:e=>{a(e)}}),Object(v.jsx)(k,{filters:e})]})};var U=()=>{const[e,a]=Object(n.useState)({username:"",password:"",first_name:"",last_name:"",phone_number:"",email:"",role_at_meeting:"",comment:""}),[t,r]=Object(n.useState)(!1),s=t=>{a({...e,[t.target.name]:t.target.value})};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:async a=>{a.preventDefault();try{const a={username:e.username,password:e.password,profile:{first_name:e.first_name,last_name:e.last_name,phone_number:e.phone_number,email:e.email,role_at_meeting:e.role_at_meeting,comment:e.comment}},t=await c.a.post("/profiles/signup/",a);console.log(t.data),r(!0)}catch(t){console.error("There was an error!",t)}},className:"container mt-4",children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"username",children:"Username"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",value:e.username,onChange:s})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"password",children:"Password"}),Object(v.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",value:e.password,onChange:s})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"first_name",children:"First Name"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"first_name",name:"first_name",value:e.first_name,onChange:s})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"last_name",children:"Last Name"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"last_name",name:"last_name",value:e.last_name,onChange:s})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"phone_number",children:"Phone Number"}),Object(v.jsx)("input",{type:"tel",className:"form-control",id:"phone_number",name:"phone_number",value:e.phone_number,onChange:s})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"email",children:"Email"}),Object(v.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",value:e.email,onChange:s})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"role_at_meeting",children:"Role at Meeting"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"role_at_meeting",name:"role_at_meeting",value:e.role_at_meeting,onChange:s})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"comment",children:"Comment"}),Object(v.jsx)("textarea",{className:"form-control",id:"comment",name:"comment",value:e.comment,onChange:s})]}),Object(v.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign Up"})]}),Object(v.jsx)("div",{className:"modal ".concat(t?"show":""),tabIndex:"-1",role:"dialog",style:{display:t?"block":"none"},children:Object(v.jsx)("div",{className:"modal-dialog",role:"document",children:Object(v.jsxs)("div",{className:"modal-content",children:[Object(v.jsx)("div",{className:"modal-header",children:Object(v.jsx)("h5",{className:"modal-title",children:"Registration Successful"})}),Object(v.jsx)("div",{className:"modal-body",children:Object(v.jsxs)("p",{children:["Thank you for your registration!",Object(v.jsx)("br",{}),"You can now add and edit meetings. Be aware, changes need to be approved before they become public."]})}),Object(v.jsx)("div",{className:"modal-footer",children:Object(v.jsx)("button",{type:"button",className:"btn btn-primary",onClick:()=>r(!1),children:"OK"})})]})})})]})},G=t(56);var I=()=>{const{register:e,handleSubmit:a,formState:{errors:t}}=Object(G.a)(),[r,s]=Object(n.useState)("");return Object(v.jsxs)("form",{onSubmit:a((async e=>{try{const a=await c.a.post("/meetings/",e);s("Meeting created successfully!"),console.log(a.data)}catch(a){console.error(a),s("Failed to create meeting.")}})),children:[Object(v.jsx)("input",{name:"name",...e("name",{required:!0}),placeholder:"Meeting Name"}),t.name&&Object(v.jsx)("div",{children:"Meeting name is required"}),Object(v.jsx)("select",{name:"weekday",...e("weekday",{required:!0}),children:[{value:"SUN",label:"Sunday"},{value:"MON",label:"Monday"},{value:"TUE",label:"Tuesday"},{value:"WED",label:"Wednesday"},{value:"THU",label:"Thursday"},{value:"FRI",label:"Friday"},{value:"SAT",label:"Saturday"}].map((e=>Object(v.jsx)("option",{value:e.value,children:e.label},e.value)))}),t.weekday&&Object(v.jsx)("div",{children:"Weekday is required"}),Object(v.jsx)("input",{name:"meeting_time",type:"time",...e("meeting_time",{required:!0})}),t.meeting_time&&Object(v.jsx)("div",{children:"Meeting time is required"}),Object(v.jsx)("select",{name:"area",...e("area",{required:!0}),children:[{value:"CI",label:"Channel Islands Area"},{value:"CTV",label:"Chiltern & Thames Valley Area"},{value:"CA",label:"Cornwall Area"},{value:"DA",label:"Devon Area"},{value:"DO",label:"Dorset Area"},{value:"EMA",label:"East Midlands Area"},{value:"ES",label:"Essex Area"},{value:"FC",label:"Free Counties Area"},{value:"GM",label:"Greater Manchester Area"},{value:"HA",label:"Hampshire Area"},{value:"KE",label:"Kent Area"},{value:"L-EC",label:"Lancashire - East & Central Area"},{value:"L-NE",label:"London - North East Area"},{value:"L-NW",label:"London - North West Area"},{value:"L-SE",label:"London - South East Area"},{value:"L-SW",label:"London - South West Area"},{value:"MEA",label:"Merseyside Area"},{value:"NS",label:"Norfolk & Suffolk Area"},{value:"NEE",label:"North East England Area"},{value:"NW",label:"NW England & N Wales Area"},{value:"S-EC",label:"Scotland - East Coast Area"},{value:"S-EL",label:"Scotland - Edinburgh & Lothians Area"},{value:"S-GW",label:"Scotland - Glasgow & West Coast Area"},{value:"S-WL",label:"Scotland - West Lothian Area"},{value:"SWA",label:"South Wales Area"},{value:"SU",label:"Surrey Area"},{value:"SX",label:"Sussex Area"},{value:"HIG",label:"The Highlands & Islands Groups"},{value:"TS",label:"The Shires Area"},{value:"UK-FAR",label:"UK Farsi Groups Area"},{value:"WC",label:"West Country Area"},{value:"WM",label:"West Midlands Area"},{value:"WY",label:"West Yorkshire"},{value:"YH",label:"Yorkshire & Humberside Area"}].map((e=>Object(v.jsx)("option",{value:e.value,children:e.label},e.value)))}),t.area&&Object(v.jsx)("div",{children:"Area is required"}),Object(v.jsx)("textarea",{name:"description",...e("description",{required:!0}),placeholder:"Description"}),t.description&&Object(v.jsx)("div",{children:"Description is required"}),Object(v.jsx)("input",{name:"online_meeting_url",type:"url",...e("online_meeting_url",{required:!0}),placeholder:"Online Meeting URL"}),t.online_meeting_url&&Object(v.jsx)("div",{children:"Online meeting URL is required"}),Object(v.jsx)("button",{type:"submit",children:"Submit"}),r&&Object(v.jsx)("div",{children:r})]})};var H=()=>{const{id:e}=Object(s.g)(),[a,t]=Object(n.useState)(null),[r,i]=Object(n.useState)(!0),[l,o]=Object(n.useState)("");return Object(n.useEffect)((()=>{(async()=>{try{const a=await c.a.get("/meetings/".concat(e));t(a.data),i(!1)}catch(a){console.error(a),o("Failed to load meeting details."),i(!1)}})()}),[e]),r?Object(v.jsx)("div",{children:"Loading..."}):l?Object(v.jsx)("div",{children:l}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Meeting Details"}),a&&Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:a.name}),Object(v.jsxs)("p",{children:[Object(v.jsx)("strong",{children:"Weekday:"})," ",a.weekday]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("strong",{children:"Time:"})," ",a.meeting_time]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("strong",{children:"Area:"})," ",a.area]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("strong",{children:"Description:"})," ",a.description]}),a.online_meeting_url&&Object(v.jsxs)("p",{children:[Object(v.jsx)("strong",{children:"Online Meeting URL:"})," ",Object(v.jsx)("a",{href:a.online_meeting_url,target:"_blank",rel:"noopener noreferrer",children:a.online_meeting_url})]})]})]})};var R=e=>{let{match:a}=e;const[t,r]=Object(n.useState)({title:"",date:"",time:"",description:"",area:""}),[s,i]=Object(n.useState)([]),l=e=>{const{name:a,value:n}=e.target;r({...t,[a]:n})};return Object(n.useEffect)((()=>{c.a.get("/api/meetings/".concat(a.params.id)).then((e=>r(e.data))).catch((e=>console.error(e))),c.a.get("/api/areas").then((e=>i(e.data))).catch((e=>console.error(e)))}),[a.params.id]),Object(v.jsxs)("form",{onSubmit:e=>{e.preventDefault(),console.log(t)},children:[Object(v.jsx)("h2",{children:"Edit Meeting"}),Object(v.jsxs)("label",{children:["Title:",Object(v.jsx)("input",{type:"text",name:"title",value:t.title,onChange:l})]}),Object(v.jsxs)("label",{children:["Date:",Object(v.jsx)("input",{type:"date",name:"date",value:t.date,onChange:l})]}),Object(v.jsxs)("label",{children:["Time:",Object(v.jsx)("input",{type:"time",name:"time",value:t.time,onChange:l})]}),Object(v.jsxs)("label",{children:["Description:",Object(v.jsx)("textarea",{name:"description",value:t.description,onChange:l})]}),Object(v.jsxs)("label",{children:["Area:",Object(v.jsx)("select",{name:"area",value:t.area,onChange:l,children:s.map((e=>Object(v.jsx)("option",{value:e.name,children:e.name},e.id)))})]}),Object(v.jsx)("button",{type:"submit",children:"Save Changes"})]})};var q=function(){const[e,a]=Object(n.useState)(!1),[t,r]=Object(n.useState)({}),{id:i}=Object(s.g)();Object(n.useEffect)((()=>{(async()=>{try{const{data:e}=await l.get("/profiles/".concat(i,"/"));r(e),a(!0)}catch(e){}})()}),[i]);const c=Object(v.jsx)(O.a,{noGutters:!0,className:"px-3 text-center",children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)("h3",{className:"m-2",children:t.owner}),Object(v.jsxs)("div",{children:["Email: ",t.email]}),Object(v.jsxs)("div",{children:["Phone Number: ",t.phonenumber]}),Object(v.jsxs)("div",{children:["Role: ",t.role_at_meeting]}),Object(v.jsxs)("div",{children:["Joined: ",t.created_at]})]})});return Object(v.jsx)(j.a,{children:e?c:Object(v.jsx)("p",{children:"Loading..."})})},K=t(57);var B=()=>{var e,a;const t=y(),r=S(),{id:i}=Object(s.g)(),c=Object(s.f)(),o=Object(n.useRef)(),[d,h]=Object(n.useState)({name:"",content:"",image:""}),{name:x,content:g,image:f}=d,[A,w]=Object(n.useState)({});Object(n.useEffect)((()=>{(async()=>{var e;if((null===t||void 0===t||null===(e=t.profile_id)||void 0===e?void 0:e.toString())===i)try{const{data:e}=await l.get("/profiles/".concat(i,"/")),{name:a,content:t,image:n}=e;h({name:a,content:t,image:n})}catch(a){c.push("/")}else c.push("/")})()}),[t,c,i]);const N=Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(b.a.Group,{children:[Object(v.jsx)(b.a.Label,{children:"Bio"}),Object(v.jsx)(b.a.Control,{as:"textarea",value:g,onChange:e=>{h({...d,[e.target.name]:e.target.value})},name:"content",rows:7})]}),null===A||void 0===A||null===(e=A.content)||void 0===e?void 0:e.map(((e,a)=>Object(v.jsx)(u.a,{variant:"warning",children:e},a))),Object(v.jsx)(m.a,{onClick:()=>c.goBack(),children:"cancel"}),Object(v.jsx)(m.a,{type:"submit",children:"save"})]});return Object(v.jsx)(b.a,{onSubmit:async e=>{var a;e.preventDefault();const t=new FormData;var n;(t.append("name",x),t.append("content",g),null!==o&&void 0!==o&&null!==(a=o.current)&&void 0!==a&&a.files[0])&&t.append("image",null===o||void 0===o||null===(n=o.current)||void 0===n?void 0:n.files[0]);try{const{data:e}=await l.put("/profiles/".concat(i,"/"),t);r((a=>({...a,profile_image:e.image}))),c.goBack()}catch(d){var s;w(null===(s=d.response)||void 0===s?void 0:s.data)}},children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)(p.a,{className:"py-2 p-0 p-md-2 text-center",md:7,lg:6,children:Object(v.jsxs)(j.a,{children:[Object(v.jsxs)(b.a.Group,{children:[f&&Object(v.jsx)("figure",{children:Object(v.jsx)(K.a,{src:f,fluid:!0})}),null===A||void 0===A||null===(a=A.image)||void 0===a?void 0:a.map(((e,a)=>Object(v.jsx)(u.a,{variant:"warning",children:e},a))),Object(v.jsx)("div",{children:Object(v.jsx)(b.a.Label,{htmlFor:"image-upload",children:"Change the image"})}),Object(v.jsx)(b.a.File,{id:"image-upload",ref:o,accept:"image/*",onChange:e=>{e.target.files.length&&h({...d,image:URL.createObjectURL(e.target.files[0])})}})]}),Object(v.jsx)("div",{className:"d-md-none",children:N})]})}),Object(v.jsx)(p.a,{md:5,lg:6,className:"d-none d-md-block p-0 p-md-2 text-center",children:Object(v.jsx)(j.a,{children:N})})]})})};var Y=()=>{var e;const[a,t]=Object(n.useState)(""),[r,i]=Object(n.useState)({}),c=Object(s.f)(),{id:l}=Object(s.g)(),d=y(),h=S();Object(n.useEffect)((()=>{var e;(null===d||void 0===d||null===(e=d.profile_id)||void 0===e?void 0:e.toString())===l?t(d.username):c.push("/")}),[d,c,l]);return Object(v.jsx)(O.a,{children:Object(v.jsx)(p.a,{className:"py-2 mx-auto text-center",md:6,children:Object(v.jsx)(j.a,{children:Object(v.jsxs)(b.a,{onSubmit:async e=>{e.preventDefault();try{await o.put("/dj-rest-auth/user/",{username:a}),h((e=>({...e,username:a}))),c.goBack()}catch(n){var t;i(null===(t=n.response)||void 0===t?void 0:t.data)}},className:"my-2",children:[Object(v.jsxs)(b.a.Group,{children:[Object(v.jsx)(b.a.Label,{children:"Change username"}),Object(v.jsx)(b.a.Control,{placeholder:"username",type:"text",value:a,onChange:e=>t(e.target.value)})]}),null===r||void 0===r||null===(e=r.username)||void 0===e?void 0:e.map(((e,a)=>Object(v.jsx)(u.a,{variant:"warning",children:e},a))),Object(v.jsx)(m.a,{onClick:()=>c.goBack(),children:"cancel"}),Object(v.jsx)(m.a,{type:"submit",children:"save"})]})})})})};var P=()=>{var e,a;const t=Object(s.f)(),{id:r}=Object(s.g)(),i=y(),[c,l]=Object(n.useState)({new_password1:"",new_password2:""}),{new_password1:d,new_password2:h}=c,[x,g]=Object(n.useState)({}),f=e=>{l({...c,[e.target.name]:e.target.value})};Object(n.useEffect)((()=>{var e;(null===i||void 0===i||null===(e=i.profile_id)||void 0===e?void 0:e.toString())!==r&&t.push("/")}),[i,t,r]);return Object(v.jsx)(O.a,{children:Object(v.jsx)(p.a,{className:"py-2 mx-auto text-center",md:6,children:Object(v.jsx)(j.a,{children:Object(v.jsxs)(b.a,{onSubmit:async e=>{e.preventDefault();try{await o.post("/dj-rest-auth/password/change/",c),t.goBack()}catch(n){var a;g(null===(a=n.response)||void 0===a?void 0:a.data)}},children:[Object(v.jsxs)(b.a.Group,{children:[Object(v.jsx)(b.a.Label,{children:"New password"}),Object(v.jsx)(b.a.Control,{placeholder:"new password",type:"password",value:d,onChange:f,name:"new_password1"})]}),null===x||void 0===x||null===(e=x.new_password1)||void 0===e?void 0:e.map(((e,a)=>Object(v.jsx)(u.a,{variant:"warning",children:e},a))),Object(v.jsxs)(b.a.Group,{children:[Object(v.jsx)(b.a.Label,{children:"Confirm password"}),Object(v.jsx)(b.a.Control,{placeholder:"confirm new password",type:"password",value:h,onChange:f,name:"new_password2"})]}),null===x||void 0===x||null===(a=x.new_password2)||void 0===a?void 0:a.map(((e,a)=>Object(v.jsx)(u.a,{variant:"warning",children:e},a))),Object(v.jsx)(m.a,{onClick:()=>t.goBack(),children:"cancel"}),Object(v.jsx)(m.a,{type:"submit",children:"save"})]})})})})};var V=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"404 - Not Found"}),Object(v.jsx)("p",{children:"The page you are looking for does not exist."})]})};var z=function(){return Object(v.jsx)(r.a,{children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(w,{}),Object(v.jsx)(C,{}),Object(v.jsxs)(s.c,{children:[Object(v.jsx)(s.a,{exact:!0,path:"/home",component:C}),Object(v.jsx)(s.a,{path:"/meeting-list",component:k}),Object(v.jsx)(s.a,{path:"/meeting-search-page",component:D}),Object(v.jsx)(s.a,{path:"/about-us",component:E}),Object(v.jsx)(s.a,{path:"/volunteer",component:T}),Object(v.jsx)(s.a,{path:"/auth/sign-up-form",component:U}),Object(v.jsx)(s.a,{path:"/meetings/create",component:I}),Object(v.jsx)(s.a,{path:"/meeting-details/:id",component:H}),Object(v.jsx)(s.a,{path:"/meetings/:id/edit",component:R}),Object(v.jsx)(s.a,{path:"/profiles/:id",component:q}),Object(v.jsx)(s.a,{path:"/profiles/:id/edit",component:B}),Object(v.jsx)(s.a,{path:"/profiles/:id/edit/username",component:Y}),Object(v.jsx)(s.a,{path:"/profiles/:id/edit/password",component:P}),Object(v.jsx)(s.a,{component:V})]})]})})};var J=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,99)).then((a=>{let{getCLS:t,getFID:n,getFCP:r,getLCP:s,getTTFB:i}=a;t(e),n(e),r(e),s(e),i(e)}))},X=t(58);t(92);c.a.defaults.baseURL="/",c.a.defaults.headers.post["Content-Type"]="multipart/form-data",c.a.defaults.withCredentials=!0;const Q=document.getElementById("root");Object(X.createRoot)(Q).render(Object(v.jsx)(z,{})),J()}},[[93,1,2]]]);
//# sourceMappingURL=main.657b99d3.chunk.js.map