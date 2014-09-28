/*global localStorage*/
'use strict';

//Saves an asset to localStorage
function setLocalAsset(asset){
    if(localStorage){
        localStorage["asset"+asset["@id"]] = JSON.stringify(asset);    
    }
}

//Get an asset from local storage, and overwrite with local changes
function getFromLocalStorage(asset){
    if(localStorage){
        var stored;
        try{
            stored = JSON.parse(localStorage["asset"+asset["@id"]]);
        }catch(e){
            localStorage["asset"+asset["@id"]] = undefined;
        }
        if(stored){
            asset.title = stored.title;
            asset.description = stored.description;
            asset.order = stored.order;
        }else{
            setLocalAsset(asset);
        }
    }
    return asset;
}


//Sorts the assets by order property
//If order is not defined it asset is put in the first vacant slot, 
//and has its order property defined
function sort(assets){
    var i = 0;
    var result = [];
    assets.forEach(function(a){
        if(a.order){
            result[a.order] = a;
        }else{
            while(result[i]){
                i++;
            }
            a.order = i;
            setLocalAsset(a);
            result[i] = a;
        }
    });
    return result;
}

//Model for representing list of assets, also saves to localStorage
var AssetsModel = function(assets){
    this.assets = sort(assets.map(getFromLocalStorage));
};

AssetsModel.prototype.getAsset = function(id){
    var assets = this.assets.filter(function(a){
        return a["@id"]===id;
    });
    return assets[0];
};

AssetsModel.prototype.setAsset = function(a){
    setLocalAsset(a);
    this.assets[a.order] = a;
};

AssetsModel.prototype.getAssets = function(){
    return this.assets;
};

AssetsModel.prototype.swap = function(toId, fromId){
    var toAsset = this.getAsset(toId);
    var fromAsset = this.getAsset(fromId);
    var toIndex = toAsset.order;
    var fromIndex = fromAsset.order;
    toAsset.order = fromIndex;
    fromAsset.order = toIndex;
    this.assets[toIndex] = fromAsset;
    this.assets[fromIndex] = toAsset;
    setLocalAsset(fromAsset);
    setLocalAsset(toAsset);
};

module.exports = AssetsModel;
module.exports.getFromLocalStorage = getFromLocalStorage;
