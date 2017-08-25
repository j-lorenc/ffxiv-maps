export default {
    mapId:"mapid5",
    title:"The_Peaks",
    sortOrder: 2,
    layers: [
        {
            name:"aetherCurrents",
            displayName: "Aether Currents",
            data: [
                [11.9, 5.8],
                [15.8, 16.9],
                [26.7, 6.9],
                [27.5, 21.0],
                [35.6, 11.6],
                [10.8, 26.4],
                [16.6, 31.8],
                [8.1, 32.6],
                [21.1, 22.0],
                [23.9, 31.8]
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
                        type: "Rocky Outcrop",
                        location: [21,13],
                        items:["Koppranickel Sand", "Stiperstone", "Slate", "Earth Crystal"]
                    },{
                        level: 65,
                        type: "Unspoiled Node",
                        location: [26.9,12.7],
                        items:["Raw Rhodonite"]
                    },{
                        level: 65,
                        type: "Unspoiled Node",
                        location: [16,33.9],
                        items:["Chromite Ore"]            
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 65,
                        type: "Lush Vegetation Patch",
                        location: [13,11],
                        items: ["Buckwheat Kernels", "Sugar Beet", "Green Leek", "Mountain Popoto", "Lightning Crystal"]
                    },{
                        level: 70,
                        type: "Lush Vegetation Patch",
                        location: [26,27],
                        items: ["Alyssum", "Lightning Crystal", "Gyr Abanian Carrot", "Twincoon"]
                    },{
                        level: 70,
                        type: "Unspoiled Node",
                        location: [23,16],
                        items: ["Hallowed Basil"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 61,
                    name: "The Slow Wash",
                    location: [24,8],
                    items: ["Idle Goby","Rapids Jumper","Gyr Abanian Trout","Heather Charr","Death Loach","Invisible Crayfish"]
                },{
                    level: 61,
                    name: "Grymm & Enid",
                    location: [6,15],
                    items: ["Death Loach","Grymm Crab","Enid Shrimp"]
                },{
                    level: 65,
                    name: "Heather Falls",
                    location: [32,6],
                    items: ["Adamantium Bichir","Death Loach","Abalathian Salamander","Steelshark"]
                },{
                    level: 68,
                    name: "The Bull's Bath",
                    location: [20,32],
                    items: ["Death Loach","Invisible Crayfish","Bull's Bite","Peeping Pisces","Gazelleskin Map"]
                },{
                    level: 70,
                    name: "The Arms of Meed",
                    location: [9,37],
                    items: ["Gyr Abanian Trout","Gigant Bass","Eastern Pike","Scimitarfish","Ala Mhigan Ribbon","Gazelleskin Map"]
                },{
                    level:70,
                    name:"The Ephor",
                    location:[32,17],
                    items:["Heather Charr","Meditator","Stonytongue","Deemster"]
                }]
                
            }]
        }
    ]
}