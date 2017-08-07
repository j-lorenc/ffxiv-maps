class Layers {
    
    constructor(map){
        this.map = map;
        this.layers = map.layerManager.getLayers();

    
        this.render()
        
    }
    
    render(){
        let layerData = this.map.currentMapData.layers;
            
        let template = layerData.reduce((acc, value) => {
            acc += `<div class="layer `+value.name+`"><div class="checkbox-container"><div class="checkbox"><input type="checkbox" name="mapLayer" id="`+value.name+`" value="`+value.name+`"><label for="`+value.name+`"/></label></div><span>`+value.displayName+`</span></div>`
            if(value.layers){
                acc += this.addSubLayerTemplate(value.layers, value.name);
            }
            acc += `</div>`;
            return acc;
        },`<div>`)+`</div>`;

        document.getElementsByClassName("map-layers")[0].insertAdjacentHTML("afterbegin",template);
        
        this.attachEventListeners();
    }
    
    addSubLayerTemplate(layers, className){
        let template = layers.reduce((acc, val)=>{acc = this.generateCheckboxItem(acc, val); return acc;},`<div class="sublayer">`)+`</div>`
        return template;
        
    }
    
    generateCheckboxItem(acc, value){
        acc += `<div class="layer `+value.name+`"><div class="checkbox-container"><div class="checkbox"><input type="checkbox" name="mapLayer" id="`+value.name+`" value="`+value.name+`"><label for="`+value.name+`"/></label></div><span>`+value.displayName+`</span></div>`;
        if(value.layers){
            acc += this.addSubLayerTemplate(value.layers, value.name);
        }
        acc +=`</div>`
        return acc;
    }
    
    attachEventListeners(){
        Array.from(document.getElementsByClassName("map-layers")[0].getElementsByTagName("input")).forEach((item)=>{
            item.addEventListener('change', (e)=>{this.handleItemClick(e)});    
        });
        
        Array.from(document.getElementsByClassName("map-layers")[0].getElementsByClassName("sublayer")).forEach((item)=>{
            let parentCheckBox = item.parentElement.getElementsByTagName("input")[0];
            parentCheckBox.addEventListener('change', (e)=>{this.handleHeaderClick(e)});    
        });
        
        
    }
    
    handleHeaderClick(e){
        let checkbox = e.target;
        let checkedState = checkbox.checked;
        let checkboxContainer = checkbox.parentElement.parentElement;
        let subLayerDiv = checkboxContainer.parentElement.getElementsByClassName("sublayer")[0];
        let subLayerInputs = subLayerDiv.getElementsByTagName("input");
        
        
        
        Array.from(subLayerInputs).forEach((subLayerCheckbox)=>{
            if(subLayerCheckbox.checked !== checkedState){
                subLayerCheckbox.click();
            }
        });
    }
    
    handleItemClick(e){
        if(Object.keys(this.layers).includes(e.target.value)){
            this.map.layerManager.toggleLayer(e.target.value);
        }
        
        
        let checkbox = e.target;
        let checkedState = checkbox.checked;
        let checkboxContainer = checkbox.parentElement;
        let layerContainer = checkboxContainer.parentElement;
        let subLayerDiv = Array.from(layerContainer.parentElement.parentElement.parentElement.children).filter((node)=>{
            return node.className.includes("sublayer");
        })[0];

        
        if(subLayerDiv){
            let subLayerInputs = subLayerDiv.getElementsByTagName("input");
            let headerInput = subLayerDiv.parentElement.getElementsByTagName("input")[0];

            let siblings = Array.from(subLayerInputs).filter((siblingCheckbox)=>{
                return (siblingCheckbox != checkbox)
            }), uncheckedSiblings = siblings.filter((siblingCheckbox)=>{
                return (checkbox.checked != siblingCheckbox.checked) ; 
            });
            
            if(uncheckedSiblings.length < 1 && siblings.length > 0){ //if no children are checked, uncheck header
                headerInput.checked = false;
            }
            
            if(checkedState && !headerInput.checked){ //check header if child is checked and header unchecked
                headerInput.checked = true;
            }            
        } 
    }
}

export default Layers;