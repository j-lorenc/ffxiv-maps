import L from 'leaflet'
require ("leaflet/dist/leaflet.css");
require ("../scss/index.scss");

import FFXIVMap from "./ffxiv-map.js";

//La Noscea
import Middle_La_Noscea from "./maps/La_Noscea/Middle_La_Noscea.js";
import Lower_La_Noscea from "./maps/La_Noscea/Lower_La_Noscea.js";
import Eastern_La_Noscea from "./maps/La_Noscea/Eastern_La_Noscea.js";
import Western_La_Noscea from "./maps/La_Noscea/Western_La_Noscea.js";
import Upper_La_Noscea from "./maps/La_Noscea/Upper_La_Noscea.js";
import Outer_La_Noscea from "./maps/La_Noscea/Outer_La_Noscea.js";

//Shroud
import Central_Shroud from "./maps/Shroud/Central_Shroud.js";
import East_Shroud from "./maps/Shroud/East_Shroud.js";
import South_Shroud from "./maps/Shroud/South_Shroud.js";
import North_Shroud from "./maps/Shroud/North_Shroud.js";

//Thanalan
import Western_Thanalan from "./maps/Thanalan/Western_Thanalan.js";
import Central_Thanalan from "./maps/Thanalan/Central_Thanalan.js";
import Eastern_Thanalan from "./maps/Thanalan/Eastern_Thanalan.js";
import Southern_Thanalan from "./maps/Thanalan/Southern_Thanalan.js";
import Northern_Thanalan from "./maps/Thanalan/Northern_Thanalan.js";

//Coerthas
import Coerthas_Central_Highlands from "./maps/Coerthas/Coerthas_Central_Highlands.js";

//Mor Dhona
import Mor_Dhona from "./maps/Mor_Dhona/Mor_Dhona.js";

//Coerthas
import Coerthas_Western_Highlands from "./maps/Coerthas/Coerthas_Western_Highlands.js";

//Dravania
import The_Dravanian_Forelands from "./maps/Dravania/The_Dravanian_Forelands.js";
import The_Churning_Mists from "./maps/Dravania/The_Churning_Mists.js";
import The_Dravanian_Hinterlands from "./maps/Dravania/The_Dravanian_Hinterlands.js";

//Alabathia's Spine
import The_Sea_of_Clouds from "./maps/Alabathia's_Spine/The_Sea_of_Clouds.js";
import Azys_Lla from "./maps/Alabathia's_Spine/Azys_Lla.js";

//Gyr Abania
import The_Fringes from "./maps/Gyr_Abania/The_Fringes.js";
import The_Peaks from "./maps/Gyr_Abania/The_Peaks.js";
import The_Lochs from "./maps/Gyr_Abania/The_Lochs.js";

//Othard
import The_Ruby_Sea from "./maps/Othard/The_Ruby_Sea.js";
import Yanxia from "./maps/Othard/Yanxia.js";
import Azim_Steppe from "./maps/Othard/Azim_Steppe.js"

let maps = [
Middle_La_Noscea,
Lower_La_Noscea,
Eastern_La_Noscea,
Western_La_Noscea,
Upper_La_Noscea,
Outer_La_Noscea,
    
Central_Shroud,
East_Shroud,   
South_Shroud,
North_Shroud,
    
Western_Thanalan,    
Central_Thanalan,
Eastern_Thanalan,
Southern_Thanalan,
Northern_Thanalan,
     
Coerthas_Central_Highlands,
Mor_Dhona,

Coerthas_Western_Highlands,    
    
The_Dravanian_Forelands,
The_Churning_Mists,
The_Dravanian_Hinterlands,
    
The_Sea_of_Clouds,
Azys_Lla,
    
The_Fringes,
The_Peaks,
    
The_Ruby_Sea,
Yanxia,
Azim_Steppe,
The_Lochs

];

let map = new FFXIVMap(maps);

