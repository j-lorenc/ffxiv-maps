export default {
    mapId:"mapid4",
    title:"Central_Shroud",
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
                        level: 35,
                        type: "Mineral Deposit",
                        location: [14,21],
                        items: ["Raw Peridot", "Raw Amethyst", "Granite", "Wind Shard"]
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 5,
                        type: "Mature Tree",
                        location: [23,18],
                        items: ["Allagan Snail", "Maple Branch", "Latex", "Maple Log", "Ice Shard", "Wind Shard"]
                    },{
                        level: 10,
                        type: "Mature Tree",
                        location: [25,20],
                        items: ["Crow Feather", "Ash Branch", "Ash Log", "Tinolqa Mistletoe", "Wind Shard"]
                    },{
                        level: 15,
                        type: "Lush Vegetation Patch",
                        location: [18,19],
                        items: ["Buffalo Beans", "Marjoram", "Tree Toad", "Humus", "Wind Shard"]
                    },{
                        level: 15,
                        type: "Lush Vegetation Patch",
                        location: [22,24],
                        items: ["Carnation", "Cotton Boll", "Lavender", "Chanterelle", "Wind Shard", "Lavender Seeds (Hidden)", "Windlight Seeds (Hidden)"]
                    },{
                        level: 15,
                        type: "Mature Tree",
                        location: [20,20],
                        items: ["Gridanian Chestnut", "Elm Log", "Wind Shard"]
                    },{
                        level: 30,
                        type: "Mature Tree",
                        location: [24,30],
                        items: ["Grade 2 Carbonized Matter", "Green Pigment", "Wind Shard", "Wind Crystal"]
                    }
                ]
            }]
        }
    ]
}