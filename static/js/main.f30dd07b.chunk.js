(this["webpackJsonpandrescarrasco.github.io"]=this["webpackJsonpandrescarrasco.github.io"]||[]).push([[0],{163:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),s=(n(79),n(11)),l=n(7),c=n(13),m=n(12),u=n(25),p=n(209),d=n(199),h=n(200),f=n(201),g=n(210),y=n(202),v=n(203),w=n(211),b=n(4),E=n(191),k=n(192),S=n(33),A=n(185),I=n(188),O=n(189),j=n(190),C=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"getIcon",value:function(){var e={maxWidth:20,paddingRight:5,objectFit:"contain"};return"github"===this.props.type?r.a.createElement(A.a,{style:e}):"email"===this.props.type?r.a.createElement(I.a,{style:e}):"linkedin"===this.props.type?r.a.createElement(O.a,{style:e}):r.a.createElement("span",null)}},{key:"getLink",value:function(){return"github"===this.props.type?r.a.createElement(j.a,{target:"_blank",color:"secondary",href:"https://github.com/".concat(this.props.username),underline:"hover"},"@".concat(this.props.username)):"email"===this.props.type?r.a.createElement("span",null,this.props.username):"linkedin"===this.props.type?r.a.createElement(j.a,{target:"_blank",color:"secondary",href:"https://www.linkedin.com/in/".concat(this.props.username),underline:"hover"},"LinkedIn"):r.a.createElement("div",null)}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex"}},this.getIcon(),r.a.createElement(S.a,{variant:"subtitle2"},this.getLink()))}}]),n}(r.a.Component);function x(e){return r.a.createElement("img",{src:e.src,alt:"head shot of ".concat(e.name),style:{clipPath:"polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",maxWidth:e.maxWidth}})}var W=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(E.a,{variant:"outlined",className:e.card},r.a.createElement(k.a,null,r.a.createElement(x,{src:this.props.profile.headshot,name:this.props.profile.name,maxWidth:"100%"}),r.a.createElement(S.a,{variant:"h6",component:"h2",align:"center"},this.props.profile.name),this.props.profile.links.map((function(e){return r.a.createElement(C,{key:"".concat(e.type,"-").concat(e.username),type:e.type,username:e.username})}))))}}]),n}(r.a.Component),D=Object(b.a)((function(e){return Object(w.a)({card:{background:e.palette.primary.main}})}))(W),T=n(193),_=n(194),P=n(195),M=n(196),N=n(197),J=n(198),L=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"getIcon",value:function(e){return"programming"===e?r.a.createElement(T.a,null):"experience"===e?r.a.createElement(_.a,null):"tools"===e?r.a.createElement(P.a,null):"education"===e?r.a.createElement(M.a,null):"languages"===e?r.a.createElement(N.a,null):"publications"===e?r.a.createElement(J.a,null):r.a.createElement(T.a,null)}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(r.a.Fragment,null,this.props.windowWidth>=1024&&r.a.createElement("nav",{className:t.drawer},r.a.createElement(p.a,{classes:{paper:t.paper},color:"primary",variant:"persistent",open:this.props.windowWidth>=1024},r.a.createElement("div",null,this.props.showProfileCard&&r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{profile:this.props.profile}),r.a.createElement(d.a,null)),r.a.createElement(h.a,{subheader:r.a.createElement(f.a,{className:t.color,component:"div"},"Sections")},this.props.sections.map((function(n,a){return r.a.createElement(g.a,{button:!0,key:a,component:"a",href:"#".concat(n.type)},r.a.createElement(y.a,{className:t.color},e.getIcon(n.type)),r.a.createElement(v.a,{className:t.color,primary:n.title}))})))))))}}]),n}(r.a.Component),F=Object(b.a)((function(e){return Object(w.a)({drawer:Object(u.a)({},e.breakpoints.up("sm"),{width:"20vw",maxWidth:280,flexShrink:0}),paper:{width:"20vw",maxWidth:280,background:e.palette.primary.main},color:{color:e.palette.secondary.main}})}))(L),U=n(204),R=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={height:0},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){return e.handleScroll()})),this.updateHeight()}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("scroll",(function(){return e.handleScroll()}))}},{key:"updateHeight",value:function(){var e,t=null===(e=document.getElementById("section-profile-container"))||void 0===e?void 0:e.clientHeight;t&&t!==this.state.height&&this.setState({height:t})}},{key:"handleScroll",value:function(){this.updateHeight(),window.scrollY>this.state.height+20?this.props.onOutOfView(!0):this.props.onOutOfView(!1)}},{key:"render",value:function(){return r.a.createElement(U.a,{container:!0,id:"section-profile-container"},r.a.createElement(U.a,{item:!0,sm:3,style:{maxWidth:200,marginRight:20}},r.a.createElement(x,{src:this.props.profile.headshot,name:this.props.profile.name,maxWidth:200})),r.a.createElement(U.a,{item:!0,container:!0,sm:9,direction:"column",alignItems:"flex-start"},r.a.createElement(U.a,{item:!0,xs:!0},r.a.createElement(S.a,{variant:"h4",component:"h2",align:"left"},this.props.profile.name),r.a.createElement(S.a,{variant:"caption",component:"span",align:"left",style:{fontStyle:"italic"}},this.props.profile.caption)),r.a.createElement(U.a,{item:!0,container:!0,xs:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",spacing:3},this.props.profile.links.map((function(e){return r.a.createElement(U.a,{key:"".concat(e.type,"-").concat(e.username),item:!0},r.a.createElement(C,{type:e.type,username:e.username}))})))))}}]),n}(r.a.Component),B=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){for(var e=[],t=Math.ceil(this.props.entries.length/this.props.numOfColumns),n=0;n<Math.ceil(this.props.entries.length/t);n++){var a=n*t;e.push(this.props.entries.slice(a,a+t))}return r.a.createElement(U.a,{container:!0},e.map((function(e,t){return r.a.createElement(U.a,{key:t,xs:"auto",item:!0},r.a.createElement(G,{entries:e}))})))}}]),n}(r.a.Component);function G(e){return r.a.createElement(h.a,null,e.entries.map((function(e,t){return r.a.createElement(g.a,{key:t},r.a.createElement(v.a,{primary:e.primary,secondary:e.secondary}))})))}function V(e){return r.a.createElement(B,{numOfColumns:1,entries:e.entries.map((function(e){return{primary:(t=e).name,secondary:"".concat(t.years," ").concat(t.years>1?"years":"year"," of ").concat(t.experience," experience ").concat(t.usage)};var t}))})}var q=n(67);function z(e){var t,n=[],a=Object(q.a)(e.entries);try{for(a.s();!(t=a.n()).done;){var i=t.value;n.push({primary:i.name})}}catch(o){a.e(o)}finally{a.f()}return r.a.createElement(B,{numOfColumns:6,entries:n})}var H=n(43),Q=n.n(H);function X(e){return r.a.createElement("span",{style:e.style},r.a.createElement(S.a,{style:{fontWeight:"bold"}},"".concat(e.start.getFullYear(),".").concat(e.start.getMonth()," - "),e.end?"".concat(e.end.getFullYear(),".").concat(e.end.getMonth()):"present",e.showTimeCalc?" (".concat(function(e,t){t||(t=new Date);var n=Q()(e).startOf("month"),a=Q()(t).endOf("month"),r=Q.a.duration(a.diff(n)),i=Math.floor(r.asMonths()%12),o=Math.floor(Math.ceil(r.asMonths())/12),s="";return o&&(s+="".concat(o," ").concat(o>1?"yrs":"yr")),i&&(s+=" ".concat(i," ").concat(i>1?"mos":"mo")),s.trim()}(e.start,e.end),")"):""))}var Y=n(41),K=n.n(Y);function Z(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{variant:"h6"},e.entry.title),e.entry.subtitle&&r.a.createElement(S.a,{variant:"subtitle2"},e.entry.subtitle),r.a.createElement(X,e.timeRangeProps),e.header,r.a.createElement(K.a,{source:e.entry.summary}))}var $=n(205),ee=n(206);function te(e){return{title:"".concat(e.position," at ").concat(e.company),summary:e.summary}}function ne(e){return r.a.createElement("div",null,e.entries.map((function(e,t){return r.a.createElement(Z,{key:t,entry:te(e),header:r.a.createElement("div",{style:{display:"flex"}},e.website&&r.a.createElement(j.a,{target:"_blank",color:"secondary",underline:"hover",href:e.website&&e.website.startsWith("http")?e.website:"https://".concat(e.website),style:{display:"flex",paddingRight:5}},r.a.createElement($.a,null),e.website),e.referenceLetter&&r.a.createElement(j.a,{target:"_blank",color:"secondary",underline:"hover",href:e.referenceLetter,style:{display:"flex"},download:!0},r.a.createElement(ee.a,null),r.a.createElement(S.a,null,"Reference Letter"))),timeRangeProps:{start:e.start,end:e.end,showTimeCalc:!0}})})))}function ae(e){return r.a.createElement(B,{numOfColumns:e.entries.length,entries:e.entries.map((function(e){return{primary:(t=e).name,secondary:"".concat(t.level," proficiency")};var t}))})}var re=n(207);function ie(e){return{title:e.title,subtitle:"".concat(e.university," in ").concat(e.country),summary:e.summary}}function oe(e){return r.a.createElement("div",null,e.entries.map((function(e,t){return r.a.createElement(Z,{key:t,entry:ie(e),header:r.a.createElement(r.a.Fragment,null,e.thesis&&r.a.createElement(j.a,{target:"_blank",color:"secondary",underline:"hover",href:e.thesis,style:{display:"flex"},download:!0},r.a.createElement(re.a,null),r.a.createElement(S.a,null," Download Thesis"))),timeRangeProps:{start:e.start,end:e.end,showTimeCalc:!1}})})))}function se(e){return r.a.createElement("div",null,e.entries.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(K.a,{source:e.ref}))})))}var le=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.section.type,style:{marginTop:5,marginBottom:5}},r.a.createElement(S.a,{variant:"h5"},this.props.section.title),r.a.createElement(d.a,null),"education"===this.props.section.type&&r.a.createElement(oe,{entries:this.props.section.entries}),"programming"===this.props.section.type&&r.a.createElement(V,{entries:this.props.section.entries}),"tools"===this.props.section.type&&r.a.createElement(z,{entries:this.props.section.entries}),"experience"===this.props.section.type&&r.a.createElement(ne,{entries:this.props.section.entries}),"languages"===this.props.section.type&&r.a.createElement(ae,{entries:this.props.section.entries}),"publications"===this.props.section.type&&r.a.createElement(se,{entries:this.props.section.entries}))}}]),n}(r.a.Component),ce=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.content},r.a.createElement(R,{profile:this.props.profile,onOutOfView:function(t){return e.props.onSectionProfileOutOfView(t)}}),r.a.createElement(d.a,null),this.props.sections.map((function(e,t){return r.a.createElement(le,{key:t,section:e})})))}}]),n}(r.a.Component),me=Object(b.a)((function(e){return Object(w.a)({content:{flexGrow:1,padding:e.spacing(3)}})}))(ce),ue={title:"Professional Experience",type:"experience",entries:[{start:new Date(2020,7),company:"Austrian Institute of Technology GmbH",position:"Research Engineer",website:"https://www.ait.ac.at",location:"Vienna, Austria"},{start:new Date(2018,7),end:new Date(2020,6),company:"Byteflies",position:"Software Engineer and Scrum Master",website:"www.byteflies.com",location:"Antwerp, Belgium",summary:"\nAs Software Engineer and Scrum Master, I am tasked to develop and maintain a data collection solution for the healthcare sector, while helping the team keep a high focus on value creation and high quality standards. \n\nSome of my responsibilities include:\n\n- Assessing and selecting tools and technologies for future development\n- Planning and estimating feature development\n- Ensuring scrum principles are followed, and have a spirit of continuous improvement\n- Ensuring software development conforms to the life-cycle requirements of a medical device (IEC 62304:2006)\n\nAs well as, designing, developing, and maintaining:\n- A CI/CD pipeline for the development of the front-end and back-end services\n- A RESTful API using AWS Serverless Application Model, NodeJS, and TypeScript\n- A back-end infrastructure using AWS IoT, AWS CloudFormation and other AWS services\n- Multiple client applications using React and TypeScript\n- Signal collection devices in Golang and, to a lesser extent, C++\n- Legacy solutions using Electron, Angular, PostgreSQL, and NodeJS"},{start:new Date(2015,7),end:new Date(2016,8),position:"Software Developer",website:"www.cenarion.com",company:"Cenarion",location:"Vienna, Austria",referenceLetter:"references/cenarion.pdf",summary:"\nAs a Software Developer I fulfilled two roles during my time working for Cenarion.\n\nAt the beginning, I started as intern of the team developing of a [workflow management system](https://cenarion.com/leistungen/versicherungsloesungen.html) (NEXA Plus) for the insurance sector in Java. \nThroughout my internship I gradually contributed to the team starting with small tasks, however, I quickly got more responsibility from my colleagues.\nAt the end of my internship, I was part of the development team, and thus got hired as a Software Developer.\n\nI contributed for the next months to the core development of NEXA Plus, and also in the maintenance of legacy versions of the NEXA solution. \n\nSome of my main responsibilities at this role included:\n\n- Fulfill feature requests from design to implementation utilizing Java, the Spring Framework, Hibernate, bare MySQL for optimized queries, JavaFX, Google Web Toolkit, among other tools.\n- Reviewing code from colleagues\n- Test the application before new releases, and ensure their proper deployment\n- Give 3rd level customer support \n\nNot long after, I was tasked to take over the development of a cloud-based social business tool ([Labelizer](https://labelizer.cenarion.com/)) as the main developer.\nThe application was developed using the Google Cloud Platform, and the Gmail and Contacts API, using agile methodology, receiving feedback and feature requests from users.\nDuring my time as the main developer we successfully increased our client base by ~30%.\n\nSome of my main responsibilities at this role included:\n\n- Drive the development of the application using user feedback\n- Give 3rd level customer support \n- Normalize the software development process\n- Stabilize, and develop the application further using Java, JSP, and MySQL\n- Deployment of the application into clients' G Suite"}]},pe={title:"Education",type:"education",entries:[{start:new Date(2016,9),end:new Date(2018,6),title:"Master of Computer Science: Software Engineering",university:"University of Antwerp",country:"Belgium",thesis:"thesis/master.pdf",summary:"\nAfter finishing my Bachelor's degree, I enrolled in the University of Antwerp, with the goal of deepening my knowledge in Software Engineering. \nAt UAntwerpen, I revisited some of the different fields of informatics I was already familiar with. \nMost notably, I excelled my knowledge in the following fields:\n- Software Reengineering\n- Software Testing\n- Networks and Distributed Computing\n- Fault Tolerance\n\nMoreover, during the program at UAntwerpen I fulfilled two research internships and a master thesis:\n\n- __Migrating towards microservices: migration and architecture smells__.\nIn this research internship, I investigated the existing academic and grey literature for anti-patterns when migrating monolithic applications towards the novel microservice architecture.\nThis research resulted in a [scientific publication](https://doi.org/10.1145/3242163.3242164).\n- __Increasing Reliability of Distributed SDN Controllers for Wireless Networks__.\nIn this research internship, I proposed and implemented a strategy for increasing reliability of Software Defined Networks using the [Raft consensus algorithm](https://raft.github.io/).\n- __The Ubiquity of Test Smells: An Empirical Study__.\nIn this master thesis, I mined GitHub using [Boa](http://web.cs.ucla.edu/~shyoo1st/boa/) looking for the existence and frequency of 7 well-known test smells. \nThe study concludes that _Assertion Roulette_ is the most common followed by _Test Code Duplication_, _Assertionless_ and _Verbose Test_. \nMoreover, the larger a project is the more likely it contains test smells and where introduced when creating the test.\n      "},{start:new Date(2014,9),end:new Date(2015,2),title:"Erasmus Exchange Program",university:"Aalto University",country:"Finland",summary:"\nFor 6 months in three study periods, I focused on deepening my technical knowledge of information security, cloud computing, web development, and user-centred design.\nThe programming languages of choice in Aalto were Python and NodeJS, this allowed me to explore web development in Django, Android application development, and backend development in NodeJS and OpenStack.\nHowever, I did not focus only on my technical skills. \nThe program in Aalto allowed to develop my skills on intercultural communication, and teamwork.\nLastly, I tried to pick up on some _suomi_ with little to some success.\n"},{start:new Date(2012,3),end:new Date(2016,7),title:"BSc Software & Information Engineering",university:"Vienna University of Technology",country:"Austria",thesis:"thesis/bachelor.pdf",summary:"\nAt the Technical University of Vienna, I developed a keen understanding on developing software with high quality.\nThe study program allowed me to learn multiple programming languages from different _paradigma_ (e.g. functional, procedural, object-oriented, etc.) focusing heavily on Java.\nAlongside programming languages, I learned about many different fields of informatics, most notably: user-centred design, software engineering and project management, distributed systems, and database systems.\nMoreover, according to the study program I selected the following specializations:\n- Software Quality Assurance\n- Security\n- Web Engineering\n- Interface and Interaction Design\n\nI concluded the bachelor by submitting a thesis titled __Scalability for data stream processing frameworks__.\nIn this thesis, I investigated the capability of different stream processing frameworks, like Apache Storm, for processing real-time data streams of varying volumes, i.e. volatile streams.\nTo achieve an efficient processing of these volatile streams I proposed, implemented, and evaluated an auto-scaling approach for Apache Storm.\n"},{start:new Date(2008,8),end:new Date(2011,6),title:"Licentiate Degree in Mechatronic Engineering (Not finished)",university:"Universidad Aut\xf3noma de Nuevo Le\xf3n",country:"Mexico",summary:"\nFor three years I studied the interdisciplinary field of mechatronics, allowing me to understand basic concepts of mechanical and electrical systems.\nWhile studying at the Universidad Aut\xf3noma de Nuevo Le\xf3n, I discovered not only my interest for learning concepts on different fields of engineering, but also my passion for programming.\nUnfortunately, I found the study program for software engineering lacking and decided to look for better education alternatives available to me.\nAfter the sixth semester, I left my studies in favor of studying Software & Information Engineering at the Technical University of Vienna. \n      "}]},de=n(68),he={name:"Andr\xe9s Carrasco",caption:"\nI am an engineer with the heart of a craftsman. \nPersistent and eager to create reliable and extensible solutions with the appropriate tools. \nFast learner of new technologies, jack-of-all-trades. \nPragmatic and malleable. \nCulturally aware and a team-player.",headshot:n.n(de).a,links:[{type:"email",username:"andres.c.k@gmail.com"},{type:"github",username:"andrescarrasco"},{type:"linkedin",username:"andres-carrasco-sw"}]},fe={sections:[ue,{title:"Programming Languages",type:"programming",entries:[{name:"JavaScript/TypeScript",years:6,experience:"professional and university",usage:"at TUWien, Cenarion, and Byteflies"},{name:"Java",years:5,experience:"professional and university",usage:"at TUWien and Cenarion"},{name:"Python",years:2,experience:"self-taught",usage:"at TUWien, Aalto University, and UAntwerpen"},{name:"Golang",years:1,experience:"professional",usage:"at Byteflies"}]},{title:"Frameworks and Tools",type:"tools",entries:[{name:"ElectronJS"},{name:"RxJS"},{name:"NodeJS"},{name:"ReactJS"},{name:"Angular 2+"},{name:"AWS/GCP"},{name:"AWS Serverless Application Model"},{name:"AWS CloudFormation"},{name:"AWS Amplify"},{name:"Spring Framework"},{name:"JavaFX"},{name:"Java Server Pages (JSP)"},{name:"Google Web Toolkit"},{name:"Apache Maven"},{name:"JDBC/Hibernate"},{name:"MySQL/PostgreSQL"},{name:"SonarQube/SonarCloud"},{name:"Jenkins/AWS CodeBuild"},{name:"Git/SVN"},{name:"IntelliJ"},{name:"VSCode"},{name:"PyCharm"},{name:"Eclipse"}]},{title:"Publications",type:"publications",entries:[{ref:"\n**Migrating towards microservices: migration and architecture smells.** \n_Andr\xe9s Carrasco, Brent van Bladel, and Serge Demeyer_. **2018**. \nIn Proceedings of the 2nd International Workshop on Refactoring (IWoR 2018). Association for Computing Machinery, New York, NY, USA, 1\u20136. DOI:https://doi.org/10.1145/3242163.3242164"}]},pe,{title:"Spoken Languages",type:"languages",entries:[{name:"Spanish",level:"native"},{name:"English",level:"fluent"},{name:"German",level:"working"},{name:"Catalan",level:"working"},{name:"Japanese",level:"basic"}]}]},ge=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={windowWidth:window.innerWidth,showProfileCard:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.updateWindowDimensions()}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",(function(){return e.updateWindowDimensions()}))}},{key:"updateWindowDimensions",value:function(){this.setState({windowWidth:window.innerWidth})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(F,{sections:fe.sections,windowWidth:this.state.windowWidth,profile:he,showProfileCard:this.state.showProfileCard}),r.a.createElement(me,{sections:fe.sections,profile:he,onSectionProfileOutOfView:function(t){return e.setState({showProfileCard:t})}}))}}]),n}(r.a.Component),ye=n(69),ve=n(208),we="#223029",be=Object(ye.a)({palette:{primary:{main:"#A2E3C4"},secondary:{main:we}},typography:{h4:{color:we},h5:{color:we},h6:{color:we},body1:{color:we},subtitle2:{color:we},caption:{color:we}}});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve.a,{theme:be},r.a.createElement(ge,null))),document.getElementById("root"))},68:function(e,t,n){e.exports=n.p+"static/media/profile.ad932fdf.jpg"},74:function(e,t,n){e.exports=n(163)},79:function(e,t,n){}},[[74,1,2]]]);
//# sourceMappingURL=main.f30dd07b.chunk.js.map