export default {
    mapId:"mapid4",
    title:"The_Fringes",
    sortOrder: 1,
    layers: [
        {
            name:"aetherCurrents",
            displayName: "Aether Currents",
            data: [
                [9.5, 27.8],
                [11.7, 16.3],
                [17.4, 15.2],
                [19.4, 4.4],
                [25.0, 11.0],
                [25.0, 26.2],
                [27.9, 21.6],
                [29.6, 28.8],
                [34.2, 30.0],
                [35.7, 16.7]
            ]
        },
        {
            name:"gatheringNodes",
            displayName:"Gathering Nodes",
            layers: [{
                name:"miningNodes",
                displayName:"Mining",
                data: [
                    {
                        level: 60,
                        type: "Mineral Deposit",
                        location: [15,12],
                        items: ["Gyr Abanian Alumen", "Wind Crystal"]
                    },
                    {
                        level: 65,
                        type: "Mineral Deposit",
                        location: [23,13],
                        items: ["Gyr Abanian Mineral Water", "Raw Kyanite", "Wind Crystal"]
                    },
                    {
                        level: 70,
                        type: "Unspoiled Node",
                        location: [25,8],
                        items: ["Raw Triphane"]
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 60,
                        type: "Lush Vegetation Patch",
                        location: [16,7],
                        items: ["Bloodhemp", "Gyr Abanian Wheat", "Fire Crystal"]
                    },{
                        level: 65,
                        type: "Mature Tree",
                        location: [10,16],
                        items: ["Beech Log", "Loquat", "Fire Crystal"]
                    },{
                        level: 65,
                        type: "Lush Vegetation Patch",
                        location: [11,26],
                        items: ["Kudzu Root", "Kudzu Vine", "Holy Basil", "Fire Crystal"]
                    },{
                        level: 70,
                        type: "Mature Tree",
                        location: [10,30],
                        items: ["Persimmon", "Persimmon Leaf", "Persimmon Log", "Fire Crystal"]
                    },{
                        level: 70,
                        type: "Unspoiled Node",
                        location: [11,18],
                        items: ["Beech Branch"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 61,
                    name: "Timmon Beck",
                    location: [11,17],
                    items: ["Steelhead Trout", "Miounnefish", "Balloon Frog", "Death Loach"]
                },{
                    level: 62,
                    name: "Dimwold",
                    location: [10,30],
                    items: ["Miounnefish","Bone Melter","Fallen Leaf","Padjali Loach","	Cave Killifish", "Wraithfish"]
                },{
                    level: 62,
                    name: "The Comet's Tail",
                    location: [14,31],
                    items: ["Bone Melter","Falling Start","Nirvana Crab","Capsized Squeaker"]
                },{
                    level: 61,
                    name: "The Velodyna River",
                    location: [18,10],
                    items: ["Velodyna Grass Carp","Greenstream Grass Carp", "Bloodsipper","Black Velodyna Carp", "Deep Velodyna Carp"]
                },{
                    level: 62,
                    name: "The Velodyna River",
                    location: [29,13],
                    items: ["Highland Perch","Mirage Chub", "Gravel Gudgeon","Rhalgr's Bolt"]
                }]
                
            }]
        }
    ]
}