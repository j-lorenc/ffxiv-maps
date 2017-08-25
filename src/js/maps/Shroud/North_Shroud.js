export default {
    mapId:"mapid4",
    title:"North_Shroud",
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
                        location: [28,25],
                        items: ["Raw Lapis Lazuli", "Earth Shard", "Potter's Clay"]
                    },
                    {
                        level: 20,
                        type: "Mineral Deposit",
                        location: [29,22],
                        items: ["Raw Sphene", "Earth Shard"]
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 5,
                        type: "Mature Tree",
                        location: [28,26],
                        items: ["Maple Branch", "Latex", "Maple Log", "Earth Shard"]
                    },{
                        level: 5,
                        type: "Mature Tree",
                        location: [25,27],
                        items: ["Beehive Chip", "Cinnamon", "Maple Sap", "Earth Shard"]
                    },{
                        level: 10,
                        type: "Mature Tree",
                        location: [27,24],
                        items: ["Ash Branch", "Ash Log", "Tinolqa Mistletoe", "Earth Shard"]
                    },{
                        level: 30,
                        type: "Mature Tree",
                        location: [27,22],
                        items: ["Grade 2 Carbonized Matter", "Yellow Pigment", "Brown Pigment", "Earth Shard", "Earth Crystal"]
                    },{
                        level: 30,
                        type: "Lush Vegetation Patch",
                        location: [22,25],
                        items: ["Moor Leech", "Wizard Eggplant", "Jade Peas", "Midland Cabbage", "Earth Shard", "Wizard Eggplant Seeds (Hidden)", "Midland Cabbage Seeds (Hidden)"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 15,
                    name: "Fallgourd Float",
                    location: [21,25],
                    items: ["Striped Goby", "Brass Loach", "Maiden Carp", "Rainbow Trout", "Ala Mhigan Fighting Fish", "Faerie Bass", "Dark Sleeper", "Shadow Catfish"]
                },{
                    level: 15,
                    name: "Murmur Rills",
                    location: [26,25],
                    items: ["Brass Loach", "Maiden Carp", "Rainbow Trout", "River Crab", "Bluebell Salmon", "Tri-colored Carp"]
                }]
                
            }]
        }
    ]
}