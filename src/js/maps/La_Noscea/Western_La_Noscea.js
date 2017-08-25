export default {
    mapId:"mapid4",
    title:"Western_La_Noscea",
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
                        level: 20,
                        type: "Mineral Deposit",
                        location: [29,25],
                        items: ["Sunrise Tellin", "Raw Danburite", "Ice Shard"]
                    },
                    {
                        level: 20,
                        type: "Mineral Deposit",
                        location: [26,24],
                        items: ["Mudstone", "Ice Shard", "Limestone"]
                    },
                    {
                        level: 30,
                        type: "Rocky Outcrop",
                        location: [31,28],
                        items: ["Grade 2 Carbonized Matter", "Grey Pigment", "Ice Shard", "Ice Crystal"]
                    },
                    {
                        level: 50,
                        type: "Rocky Outcrop",
                        location: [34,28],
                        items: ["Grade 3 Carbonized Matter", "Ice Shard", "Ice Crystal", "Black Limestone (Hidden)"]
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 20,
                        type: "Mature Tree",
                        location: [26,23],
                        items: ["Grade 1 Carbonized Matter", "Ice Shard"]
                    },{
                        level: 20,
                        type: "Lush Vegetation Patch",
                        location: [31,28],
                        items: ["Lalafellin Lentil", "Island Seedling", "Paprika", "Ice Shard", "Paprika Seeds (Hidden)", "IceLight Seeds (Hidden)"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 10,
                    name: "Swiftperch",
                    location: [34,32],
                    items: ["Lominsan Anchovy", "White Coral", "Harbor Herring", "Moraby Flounder", "Pebble Crab", "Tiger Cod", "Rothlyt Oyster", "Blue Octopus"]
                },{
                    level: 15,
                    name: "Skull Valley",
                    location: [27,27],
                    items: ["Merlthor Goby", "Tiger Cod", "Rothlyt Oyster", "Razor Clam", "Blue Octopus", "Wahoo"]
                },{
                    level: 15,
                    name: "The Brewer's Beacon",
                    location: [30,30],
                    items: ["White Coral", "Harbor Herring", "Helmet Crab", "Rothlyt Oyster", "Navigator's Dagger", "Ogre Barracuda"]
                },{
                    level: 35,
                    name: "Halfstone",
                    location: [16,21],
                    items: ["Saber Sardine","Hammerhead Shark", "Blue Coral", "Sea Pickle"]
                }]
                
            }]
        }
    ]
}