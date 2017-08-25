export default {
    mapId:"mapid4",
    title:"Lower_La_Noscea",
    sortOrder: 1,
    layers: [
        {
            name:"gatheringNodes",
            displayName:"Gathering Nodes",
            layers: [{
                name:"miningNodes",
                displayName:"Mining",
                data: [
                    {
                        level: 10,
                        type: "Mineral Deposit",
                        location: [27,18],
                        items: ["Raw Sunstone", "Earth Shard"]
                    },
                    {
                        level: 30,
                        type: "Rocky Outcrop",
                        location: [26,15],
                        items: ["Grade 2 Carbonized Matter", "Yellow Pigment", "Brown Pigment", "Earth Shard", "Earth Crystal", "Grade 1 La Noscean Topsoil (Rare)"]
                    },
                    {
                        level: 50,
                        type: "Rocky Outcrop",
                        location: [22,34],
                        items: ["Grade 3 Carbonized Matter", "Earth Shard", "Earth Crystal", "Grade 2 La Noscean Topsoil (Rare)"]
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 10,
                        type: "Mature Tree",
                        location: [32,16],
                        items: ["Kukuru Bean", "La Noscean Orange", "Earth Shard", "La Noscean Orange Seeds (Hidden)"]
                    },{
                        level: 15,
                        type: "Lush Vegetation Patch",
                        location: [26,22],
                        items: ["Cinderfoot Olive", "Lowland Grapes", "Cieldalaes Spinach", "Highland Parsley", "Earth Shard", "Lowland Grape Seeds (Hidden)", "Olive Seeds (Hidden)", "Earthlight Seeds (Hidden)"]
                    },{
                        level: 20,
                        type: "Mature Tree",
                        location: [34,17],
                        items: ["Sun Lemon", "Earth Shard", "Sun Lemon Seeds (Hidden)"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 1,
                    name: "The Mourning Widow",
                    location: [25,23],
                    items: ["Crayfish", "Chub", "Dwarf Catfish", "Princess Trout", "Dusk Goby", "Gudgeon", "Maiden Carp"]
                },{
                    level: 5,
                    name: "Moraby Bay",
                    location: [26,26],
                    items: ["Miounnefish","Bone Melter","Fallen Leaf","Padjali Loach","	Cave Killifish", "Wraithfish"]
                },{
                    level: 10,
                    name: "Cedarwood",
                    location: [35,18],
                    items: ["Bone Melter","Falling Start","Nirvana Crab","Capsized Squeaker"]
                },{
                    level: 10,
                    name: "Candlekeep Quay",
                    location: [20,38],
                    items: ["Velodyna Grass Carp","Greenstream Grass Carp", "Bloodsipper","Black Velodyna Carp", "Deep Velodyna Carp"]
                },{
                    level: 10,
                    name: "Oschon's Torch",
                    location: [24,39],
                    items: ["Highland Perch","Mirage Chub", "Gravel Gudgeon","Rhalgr's Bolt"]
                },{
                    level: 15,
                    name: "Empty Heart",
                    location: [22,35],
                    items: ["Bone Melter","Falling Start","Nirvana Crab","Capsized Squeaker"]
                },{
                    level: 15,
                    name: "Moraby Drydocks",
                    location: [26,35],
                    items: ["Velodyna Grass Carp","Greenstream Grass Carp", "Bloodsipper","Black Velodyna Carp", "Deep Velodyna Carp"]
                },{
                    level: 20,
                    name: "Blind Iron Mines",
                    location: [27,16],
                    items: ["Highland Perch","Mirage Chub", "Gravel Gudgeon","Rhalgr's Bolt"]
                }]
                
            }]
        }
    ]
}