export default {
    mapId:"mapid6",
    title:"Yanxia",
    sortOrder: 4,
    layers: [
        {
            name:"aetherCurrents",
            displayName: "Aether Currents",
            data: [
                [39.4, 20.7],
                [29.1, 16.9],
                [24.8, 21.2],
                [29.9, 23.4],
                [31.4, 29.7],
                [30.6, 37.8],
                [24.7, 30.8],
                [19.5, 32.7],
                [16.0, 29.3],
                [11.7, 27.5]
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
                            level: 65,
                            type: "Mineral Deposit",
                            location: [33,22],
                            items: ["Doman Iron Ore", "Crescent Spring Water", "Fire Crystal"]
                        },{
                            level: 70,
                            type: "Mineral Deposit",
                            location: [36,19],
                            items: ["Durium Ore, Serpentine, Fire Crystal"]
                        },{
                            level: 65,
                            type: "Unspoiled Node",
                            location: [20.5, 10.4],
                            items: ["Palladium Ore"]
                        },{
                            level: 65,
                            type: "Unspoiled Node",
                            location: [29,9],
                            items: ["Raw Imperial Jade"]
                        },{
                            level: 65,
                            type: "Ephemeral Node",
                            location: [38,19],
                            items: ["Perlite", "Fire Crystal"]
                        }    
                ]   
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 65,
                        type: "Mature Tree",
                        location: [36,15],
                        items: ["Pine Resin", "Pine Log", "Wind Crystal"]
                    },{
                        level: 65,
                        type: "Lush Vegetation Patch",
                        location: [22,10],
                        items: ["Doman Eggplant", "Wind Crystal", "Yanxian Parsley", "Nagxian Cudweed", "Daikon Radish"]
                    },{
                        level: 70,
                        type: "Unspoiled Node",
                        location: [28,7],
                        items: ["Lotus Root"]
                    },{
                        level: 70,
                        type: "Unspoiled Node",
                        location: [28,25],
                        items: ["Bamboo Shoot"]
                    },{
                        level: 70,
                        type: "Ephemeral Node",
                        location: [22,13],
                        items: ["Wind Crystal", "Windtea Leaves"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 64,
                    name: "Namai",
                    location: [29,15],
                    items: ["Nogoi"]
                },{
                    level: 64,
                    name: "The Heron's Nest",
                    location: [34,14],
                    items: ["Doman Trout", "Doman Crayfish"]
                },{
                    level: 64,
                    name: "The Heron's Way",
                    location: [35,17],
                    items: ["River Barramundi","Doman Trout","Doman Crayfish"]
                },{
                    level: 65,
                    name: "The One River (East)",
                    location: [20,24],
                    items: ["Yanxian Koi","Longhair Catfish","Doman Trout","Yanxian Barramundi","Kotsu Zetsu"]
                },{
                    level: 67,
                    name: "Doma Castle",
                    location: [14,7],
                    items: ["Doman Trout", "Samurai Fish", "Blank Oscar", "Dragonfish", "Raitonfish", "Timeworn Gaganaskin Map"]
                },{
                    level:67,
                    name:"Mercantile Docks",
                    location:[11,14],
                    items:["Doman Trout", "Doman Grass Carp", "Lordly Salmon", "Kotsu Zetsu"]
                },{
                    level:67,
                    name:"Prism Canyon",
                    location:[31,7],
                    items:["Doman Trout","Doman Crayfish","Doman Eel"]
                },{
                    level:70,
                    name:"Plum Spring",
                    location:[36,23],
                    items:["Doman Trout","Kotsu Zetsu","Pandamoth","Silken Koi","Plum Koi"]
                },{
                    level:70,
                    name:"The One River (West)",
                    location:[11,33],
                    items:["Doman Trout","Kotsu Zetsu","Longhair Catfish","Seraphim","Timeworn Gazelleskin Map"]
                },{
                    level:67,
                    name:"Prism Lake",
                    location:[28,6],
                    items:["Yellow Prismfish","Blue Prismfish"]
                }]
                
            }]
        }
    ]
}