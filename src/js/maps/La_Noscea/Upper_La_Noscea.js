export default {
    mapId:"mapid4",
    title:"Upper_La_Noscea",
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
                        level: 25,
                        type: "Rocky Outcrop",
                        location: [12,23],
                        items: ["Fire Rock", "Water Rock", "Lightning Rock", "Earth Shard"]
                    },
                    {
                        level: 30,
                        type: "Rocky Outcrop",
                        location: [12,26],
                        items: ["Siltstone", "Brimstone"]
                    },
                    {
                        level: 45,
                        type: "Mineral Deposit",
                        location: [30,25],
                        items: ["Electrum Ore", "Raw Turquoise", "Earth Shard"]
                    },
                    {
                        level: 45,
                        type: "Rocky Outcrop",
                        location: [28,22],
                        items: ["Electrum Sand", "Marble", "Earth Shard"]
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 25,
                        type: "Lush Vegetation Patch",
                        location: [14,24],
                        items: ["Noble Grapes", "Pixie Plums", "Sticky Rice", "Chamomile", "Earth Shard", "Pixie Plum Seeds (Hidden)", "Chamomile Seeds (Hidden)"]
                    },{
                        level: 45,
                        type: "Mature Tree",
                        location: [35,24],
                        items: ["Rolanberry", "Sagolii Sage", "Dart Frog", "Black Scorpion", "Earth Shard", "Rolanberry Seeds (Hidden)"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 20,
                    name: "Oakwood",
                    location: [14,24],
                    items: ["River Crab", "Faerie Bass", "Jade Eel", "Pond Mussel", "Warmwater Trout", "Four-eyed Fish", "Dark Bass"]
                }]
                
            }]
        }
    ]
}