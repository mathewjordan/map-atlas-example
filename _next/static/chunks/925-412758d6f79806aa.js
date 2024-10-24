"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[925],{3235:function(a,e,t){t.d(e,{Z:function(){return C}});var i=t(7178),l=t(3245),o=t(9499),n=t(2854),r=(0,n.zo)("div",{padding:"$gr3 0 0"}),d=(0,n.zo)("div",{backgroundColor:"var(--gray-3)",width:"100%",height:"100%",overflowY:"hidden",borderRadius:"3px",transition:"$canopyAll"}),s=(0,n.zo)("div",{display:"flex",width:"100%",position:"relative",flexGrow:1,flexShrink:0,maxWidth:"275px",img:{width:"100%",height:"100%",objectFit:"cover"},a:(0,o.Z)({display:"flex",flexDirection:"column",width:"100%",color:"var(--gray-12)",textDecoration:"none !important",transition:"$canopyAll"},"&:hover, &:focus",(0,o.Z)({color:"var(--accent-11)"},"".concat(d),{transform:"scale3d(1.03, 1.03, 1.03)"}))}),c=t(3093),m=t(8522),u=t(6225),p=t(3817),b=(0,n.zo)("img",(0,o.Z)({position:"relative",zIndex:"1",width:"100%",height:"100%",objectFit:"contain",transition:"$canopyAll",opacity:0,color:"transparent"},"&.loaded",{opacity:1})),g=(0,n.zo)("figure",{backgroundColor:"var(--gray-3)",display:"flex",width:"100%",height:"100%",padding:"0",margin:"0",position:"relative",overflow:"hidden",zIndex:"0",borderRadius:"3px",transition:"$canopyAll"}),h=t(7294),f=t(6010),getResourceImage=function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"600,",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(Array.isArray(a)&&(a=a[0]),!a.service)return a.id;if(!Array.isArray(a.service)){if(a.service["@id"])return"".concat(a.service["@id"],"/").concat(t,"/").concat(e,"/0/default.jpg");if(a.service.id)return"".concat(a.service.id,"/").concat(t,"/").concat(e,"/0/default.jpg")}return a.service[0]["@id"]?"".concat(a.service[0]["@id"],"/").concat(t,"/").concat(e,"/0/default.jpg"):"".concat(a.service[0].id,"/").concat(t,"/").concat(e,"/0/default.jpg")},v=t(5893),Figure_Figure=function(a){var e=a.alt,t=a.resource,i=a.region,l=void 0===i?"full":i,o=a.size,n=void 0===o?"400,":o,r=a.isCover,d=(0,h.useState)(),s=d[0],c=d[1],m=(0,h.useState)(!1),u=m[0],p=m[1],y=(0,h.useRef)(null);return(0,h.useEffect)(function(){var a;c(getResourceImage(t,n,l)),null!=y&&y.current&&null!=y&&null!==(a=y.current)&&void 0!==a&&a.complete&&p(!0)},[]),(0,v.jsx)(g,{children:(0,v.jsx)(b,{alt:e,src:s,ref:y,style:void 0!==r&&r?{objectFit:"cover",objectPosition:"50% 50%",width:"100%",height:"100%"}:{},onLoad:function(){return p(!0)},className:(0,f.Z)("source",u&&"loaded")})})},y=t(1830),x=t(9769),w=t(8956),S=t(2708),C=h.memo(function(a){var e=a.resource,t=1,o=e.label,n=e.homepage,b=e.thumbnail,g=(0,w.J)(b),h=g.width,f=g.height;h&&f&&(t=h/f);var C=(0,S.YD)(),A=C.ref,z=C.inView,M=(0,x.i)(o);return(0,v.jsx)(s,{as:l.Box,ref:A,children:(0,v.jsx)(l.Card,{size:"2",style:{width:"100%"},variant:"classic",asChild:!0,children:(0,v.jsxs)(l.Link,{href:n&&n[0].id?n[0].id:"",children:[(0,v.jsx)(l.Inset,{clip:"padding-box",side:"top",children:(0,v.jsx)(i.f,{ratio:t,children:(0,v.jsx)(d,{children:(0,v.jsx)(c.A,{transition:{duration:1},children:z&&e&&(0,v.jsx)(m.X,{features:u.H,children:(0,v.jsx)(p.m.div,{style:{height:"100%"},initial:{opacity:0},animate:{opacity:1},children:(0,v.jsx)(Figure_Figure,{resource:b,alt:M})})})})})})}),(0,v.jsx)(l.Text,{size:"2",asChild:!0,children:(0,v.jsx)(r,{children:(0,v.jsx)(y.Label,{label:o})})})]})})})})},2929:function(a,e,t){t.d(e,{Z:function(){return m}});var i=t(9499),l=t(3235),o=t(827),n=t(2854),r=(0,n.zo)("div",{paddingBottom:"$gr4",zIndex:"1","@xxs":{paddingBottom:"$gr2"},"@xs":{paddingBottom:"$gr2"},"@sm":{paddingBottom:"$gr3"},"@md":{paddingBottom:"$gr3"}}),d=(0,n.zo)(o.Z,{display:"flex",width:"auto",position:"relative",padding:"$gr2 0",zIndex:"1",".canopy-grid-column":{marginLeft:"$gr4","@xxs":{marginLeft:"$gr2"},"@xs":{marginLeft:"$gr2"},"@sm":{marginLeft:"$gr3"},"@md":{marginLeft:"$gr3"},"&:first-child":{marginLeft:"0"}}});t(7294);var s=t(5893),c=t(7668),Grid=function(a){var e,t=a.children,l=(e={default:6},(0,i.Z)(e,c.b.xl,5),(0,i.Z)(e,c.b.lg,4),(0,i.Z)(e,c.b.md,4),(0,i.Z)(e,c.b.sm,3),(0,i.Z)(e,c.b.xs,2),e);return(0,s.jsx)(d,{breakpointCols:l,className:"canopy-grid",columnClassName:"canopy-grid-column",children:t})};Grid.Item=function(a){var e=a.item;return e?(0,s.jsx)(r,{children:(0,s.jsx)(l.Z,{resource:e},e.id)}):(0,s.jsx)(s.Fragment,{})};var m=Grid},7058:function(a){a.exports=[]},3981:function(a){a.exports=JSON.parse('[{"id":0,"label":"Saneamento. R\xeade actual dos exgottos sanitarios","metadata":""},{"id":1,"label":"Map of Evanston, Cook County, Illinois","metadata":""},{"id":2,"label":"Insul\xe6 American\xe6, nempe Cuba, Hispaniola Iamaica, Pto. Rico, Lucania, Antill\xe6 vulgo Carib\xe6, Barlo-Et Sotto-Vento etc.","metadata":""},{"id":3,"label":"The kitchen garden of Mount Vernon, seat of Gen\'l Geo\'e Washington in Virginia : the design of an elegant kitchen and fruit garden containing 0.92 acres","metadata":""},{"id":4,"label":"Status ecclesiastici magnique ducatus Florentini nova exhibitio","metadata":""},{"id":5,"label":"Regnorum Siciliae et Sardiniae nec non Melitae, seu Maltae insulae cum adjectis Italiae et Africae litoribus nova tabula","metadata":""},{"id":6,"label":"Proposed Shenandoah National Park, Virginia","metadata":""},{"id":7,"label":"Nieuwe kaart der Provincie van Gelderland : uitgegeven te Amsterdam","metadata":""},{"id":8,"label":"Kumasi.","metadata":""},{"id":9,"label":"United States.","metadata":""},{"id":10,"label":"Partie Septentrionale des Pays Bas : comprenant les Etats Généraux des Provinces Unies","metadata":""},{"id":11,"label":"Hispaniam ac Lusitaniam complectens : medius meridianus ii, reliqui ad hund inclinantur distantes juxta rationem parallelorum 30 et 39 ad circulum maximum.","metadata":""},{"id":12,"label":"Central Manufacturing District.","metadata":""},{"id":13,"label":"Carta de Angola : contendo indicações de producção e salubridade","metadata":""},{"id":14,"label":"Ward map : city of Chicago","metadata":""},{"id":15,"label":"Forest regions of the United States : listing the principal trees of each region","metadata":""},{"id":16,"label":"Illustris ciuitatis Conimbriae in Lusitania ad flumen Jllundam effigies.","metadata":""},{"id":17,"label":"Areal geology : Illinois, (Jo Daviess County) Elizabeth quadrangle","metadata":""},{"id":18,"label":"A new map of the world on the globular projection.","metadata":""},{"id":19,"label":"Map of the city of New Orleans showing location of exposition grounds and all approaches thereto by land & water.","metadata":""},{"id":20,"label":"Les duchez de Lorraine et de Bar. La seigneurie temporelle des Evechez de Metz, de Toul, et de Verdun ; ou sont remarquees les terres qui y ont esté reünies par les arrests de la chambre royale de Metz en l\'an 1680 etc. : les presidiaux de Metz, Toul, Verdun et de Sar-Louis, avec les bailliages de Longwy, et d\'Espinal : recueillis de divers memoires","metadata":""},{"id":21,"label":"Clearing Industrial District, Inc.","metadata":""},{"id":22,"label":"Tchad","metadata":""},{"id":23,"label":"Connecticut.","metadata":""},{"id":24,"label":"Le Maroc économique","metadata":""},{"id":25,"label":"Historical map of Illinois showing early discoveries, explorations, Indian villages, missions, trails, battle fields, forts, block houses, first settlements, and mail routes","metadata":""},{"id":26,"label":"Greeley, Carlson & Company\'s second atlas of the city of Chicago ... with all subdivisions, railroads, docks and buildings upon a scale of 100 feet to one inch. Volume 1","metadata":""},{"id":27,"label":"Scotia Regnum","metadata":""},{"id":28,"label":"Use of property, 1922","metadata":""},{"id":29,"label":"Greeley, Carlson & Company\'s second atlas of the city of Chicago ... with all subdivisions, railroads, docks and buildings upon a scale of 100 feet to one inch. Volume 2","metadata":""},{"id":30,"label":"Praefectura generalis & comitatus Provinciae una cum terris adjacentibus in suas Dioeceses & Praeturas subdivisus ad prototypum del ́Islianum","metadata":""},{"id":31,"label":"Lengths of the principal rivers in the world ; Heights of the principal mountains in the world","metadata":""},{"id":32,"label":"Carte d\'aptitudes et de potentialités à l\'agriculture et au paturage du Sahel","metadata":""},{"id":33,"label":"Areal geology : Illinois-Iowa, Galena quadrangle","metadata":""},{"id":34,"label":"Mappamondo antico diviso nell\'uno e nell\'altro continente","metadata":""},{"id":35,"label":"Nouvelle carte geographique du grand Royaume de Moscovie representant la partie meridionale &c.","metadata":""},{"id":36,"label":"A new map of Louisiana : with its canals, roads & distances from place to place along the stage & steam boat routes.","metadata":""},{"id":37,"label":"Territoire du Ruanda-Urundi","metadata":""},{"id":38,"label":"Ecological base map of the Chicago area","metadata":""},{"id":39,"label":"Distribution of forests in the Lake States","metadata":""},{"id":40,"label":"Die verfinsterte Erdkugel d.i. geographische Vorstellung der Sonnen- od. Erd-Finsternis den 25ten Iulii ao. 1748 ... = le Monde eclipsé, ou representation geographique de l\'eclipse de la terre ou du soleil qui arrivera le 25. Iulliet 1748 ...","metadata":""},{"id":41,"label":"[Geology of the La Harpe and Good Hope quadrangles]","metadata":""},{"id":42,"label":"Germany, zones of occupation.","metadata":""},{"id":43,"label":"Nouvelle carte geographique du grand Royaume de Moscovie representant la partie Septentrionale &c.","metadata":""},{"id":44,"label":"Topographische Vorstellung der neuen russischen Haupt-Residenz und See-Stadt St. Petersburg : samt ihrer zu erst aufgerichten Vestüg welche von Ihro Czaar. Maj. Petro Alexiewitz aller Russen selbst Erhalter etc., etc., etc., An. 1703 an der Spitze der Ost-See auf etlichen Insuln bey dem aussflus des Neva Stroms erbaut und zur Aufnahm der Handelschafft und Schiffarth f\xfcr die Russischen Nation mit einer m\xe4chtigen Flotte versehen worden","metadata":""},{"id":45,"label":"Bartholomew\'s plan of central London","metadata":""},{"id":46,"label":"Forest regions of the United States","metadata":""},{"id":47,"label":"[National forests and national parks of the United States]","metadata":""},{"id":48,"label":"Atlas of Mexico, Physiography","metadata":""},{"id":49,"label":"Saneamento. R\xeade futura dos exgottos sanitarios","metadata":""},{"id":50,"label":"Rio de Janeiro. Zoning","metadata":""},{"id":51,"label":"A new and accurate map of the island of Antigua or Antego :taken from surveys, and adjusted by astronl. observations : containing all the towns, parish churches, forts, castles, windmills, roads &c.","metadata":""},{"id":52,"label":"Geologic map of Equality-Shawneetown area (parts of Gallatin and Saline counties) Illinois","metadata":""},{"id":53,"label":"Map of the village of Wilmette, Cook County, Illinois compiled from official records","metadata":""},{"id":54,"label":"Hiberniae regnum tam in praecipuas Ultoniae, Connaciae, Laceniae et Momoniae : quam in minores earundem provincias et ditiones divisum ex prototype Guil. Petty-Vischeriano deductu et exhibitum","metadata":""},{"id":55,"label":"A new map of Tennessee : with its roads and distances from place to place along the stage & steam boat routes.","metadata":""},{"id":56,"label":"Health resorts in Germany","metadata":""},{"id":57,"label":"Cambriae typus","metadata":""},{"id":58,"label":"Terra Australis Incognita.","metadata":""},{"id":59,"label":"Statistical map of the United States of America","metadata":""},{"id":60,"label":"United States of America","metadata":""},{"id":61,"label":"North Eastern Sudan : Tribes","metadata":""},{"id":62,"label":"Canada East, formerly Lower Canada.","metadata":""},{"id":63,"label":"Russia bianca ò Moscovia : divisa da Guglielmo Sansone ne suoi regni, ducati, principati, provincie, e popoli, che presentemente sono soggetti al gran\' duca di Moscovia","metadata":""},{"id":64,"label":"Schizzo dimostrativa della Tripolitania : scala 1:2 000 000.","metadata":""},{"id":65,"label":"Geology of the Kings quadrangle.","metadata":""},{"id":66,"label":"Map of the Township of Evanston, Cook County, Illinois.","metadata":""},{"id":67,"label":"Nigeria","metadata":""},{"id":68,"label":"Le royaume d\'Angleterre : divisé en plusieurs parties, subdivisées en comtez ou shireries : ou sont aussy remarquez les royaumes quil y avoit autrefois","metadata":""},{"id":69,"label":"Anglesey ; Wight Vectis olim ; Garnesay ; Iarsay.","metadata":""},{"id":70,"label":"Firenze","metadata":""},{"id":71,"label":"Map of Boston for 1880.","metadata":""},{"id":72,"label":"Tripolitania : scala 1:4 000 000.","metadata":""},{"id":73,"label":"Map of the vicinity of Petersburg","metadata":""},{"id":74,"label":"Niger","metadata":""},{"id":75,"label":"City of New-York.","metadata":""},{"id":76,"label":"Economic map of portions of Wyoming, Idaho and Utah","metadata":""},{"id":77,"label":"Carte de la Turquie d\'Europe","metadata":""},{"id":78,"label":"Map of the Adirondack Forest and adjoining territory","metadata":""},{"id":79,"label":"Scotiae tabula","metadata":""},{"id":80,"label":"North America.","metadata":""},{"id":81,"label":"Nieuwe kaart van Frankryk","metadata":""},{"id":82,"label":"Rio de Janeiro. Espa\xe7os livres e reservas arborisadas","metadata":""},{"id":83,"label":"Prefeitura do Districto Federal","metadata":""},{"id":84,"label":"Angliae, Scotiae, et Hiberniae, sive Britannicar: Insularum Descriptio","metadata":""},{"id":85,"label":"Assessed land values, 1922","metadata":""},{"id":86,"label":"Plan of Newcastle upon Tyne and Gateshead, from actual survey","metadata":""},{"id":87,"label":"Magnae Britannia : pars septentrionalis qua Regnum Scotiae in suas partes et subja centes insulas divisum","metadata":""},{"id":88,"label":"Topographic map, Sequoia and General Grant National Parks, California","metadata":""},{"id":89,"label":"A new map of Maine.","metadata":""},{"id":90,"label":"Sudan, roads","metadata":""},{"id":91,"label":"Africa","metadata":""},{"id":92,"label":"A new map of Nth. Carolina : with its canals, roads & distances from place to place, along the stage & steam boat routes.","metadata":""},{"id":93,"label":"Map showing labor districts : established by the rules of the Civil Service Commission","metadata":""},{"id":94,"label":"Preliminary geological map of the Yellowstone National Park","metadata":""},{"id":95,"label":"Central Manufacturing District : the Kedzie Development.","metadata":""},{"id":96,"label":"Mexico & Guatemala.","metadata":""},{"id":97,"label":"Forest and park activity map as of December 15, 1937 : [Wisconsin]","metadata":""},{"id":98,"label":"Sudan.","metadata":""},{"id":99,"label":"Condé-en-Barrois area ; Gondrecourt area ; Vaucouleurs area.","metadata":""},{"id":100,"label":"Gibraltar (U.K.)","metadata":""},{"id":101,"label":"Les royaumes de Suède, de Danemarck et de Norwège : divisez en plusieurs provinces, et gouvernemens, etc.","metadata":""},{"id":102,"label":"Senegal","metadata":""},{"id":103,"label":"Açores Insulae","metadata":""},{"id":104,"label":"West Indies.","metadata":""},{"id":105,"label":"Pony express route, April 3, 1860-October 24, 1861","metadata":""},{"id":106,"label":"National forests in the Eastern District (District Seven) 1926","metadata":""},{"id":107,"label":"Lucta contra as inunda\xe7\xf5es","metadata":""},{"id":108,"label":"Rio de Janeiro. Reorganiza\xe7\xe3o dos meios de transporte","metadata":""},{"id":109,"label":"The North Shore and part of Middlesex County, Mass.","metadata":""},{"id":110,"label":"City of Accra","metadata":""},{"id":111,"label":"Atlas of freight facilities : gas pipelines, petroleum pipelines, electric transmission, motor freight, rail freight, waterborne freight, air freight, other terminals","metadata":""},{"id":112,"label":"Whiteburn gold district, Queens county, Nova Scotia","metadata":""},{"id":113,"label":"Tentative zoning plan for the city of Boston","metadata":""},{"id":114,"label":"General map, Gettysburg-Antietam","metadata":""},{"id":115,"label":"Highway map of Ethiopia","metadata":""},{"id":116,"label":"Portugallia que olim Lusitania, novissima & exactissima descriptio","metadata":""},{"id":117,"label":"Valentiae regni olim contestanorum si Ptolemaeo, edetanorum si Plinio credimus typus.","metadata":""},{"id":118,"label":"Planiglobii terrestris mappa universalis : utrumq[ue] hemisph\xe6rium orient. et occidentale repr\xe6sentans ex IV mappis generalibus = Mappe-monde qui represente les deux hemispheres savoir celui de l\'orient et celui de l\'occident tirée des quatre cartes generales","metadata":""},{"id":119,"label":"England.","metadata":""},{"id":120,"label":"Surficial geology and rock outcrops of the Morris quadrangle.","metadata":""},{"id":121,"label":"Economic, structural and areal geology of the Morris quadrangle.","metadata":""},{"id":122,"label":"National Forests with related projects and data","metadata":""},{"id":123,"label":"Regnorum Hungariae, Dalmatiae, Croatiae, Sclavoniae, Bosniae, Serviae, et Principatus Transylvaniae typus accuratior et plane novus","metadata":""},{"id":124,"label":"Progetto della circoscrizione territoriale-sistemazione difensiva e della dislocazione sommaria delle truppa in Tripolitania : scala 1:1 000 000.","metadata":""},{"id":125,"label":"Mali","metadata":""},{"id":126,"label":"Particular draughts of some of the chief African Islands in the Mediterranean, as also in the Atlantic and Ethiopic Oceans : drawn from the most approv\'d foreign maps & charts, and regulated by astronl. observations","metadata":""},{"id":127,"label":"Proposed Great Smoky Mountains National Park, North Carolina-Tennessee","metadata":""},{"id":128,"label":"Europa, christiani orbis domina in sua imperia, regna et status exacte divisa","metadata":""},{"id":129,"label":"Areas characterized by major forest types in the United States, 1949","metadata":""},{"id":130,"label":"Canada West : formerly Upper Canada.","metadata":""},{"id":131,"label":"Central Manufacturing District : the Pershing Road Development.","metadata":""},{"id":132,"label":"Economic and surficial geology of the Joliet quadrangle","metadata":""},{"id":133,"label":"Haute-Volta","metadata":""},{"id":134,"label":"La Spagna : all\'illmo. e reumo. Sigre. Monsre. Gio. Battista Febei, referendario dell\'una, e l\'altra segnatura","metadata":""},{"id":135,"label":"Route map of Rhodesia.","metadata":""},{"id":136,"label":"Coal field of Indiana : showing approximate location of mines and some outcrops","metadata":""},{"id":137,"label":"South America","metadata":""},{"id":138,"label":"Indexed street map of Chicago and vicinity","metadata":""}]')}}]);