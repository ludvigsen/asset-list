var $ = require('jquery');
var Promise = require('promise');

var API_URL = "http://api.ulriken.vimondtv.com";
var ASSETS_URL = API_URL+ "/api/web/search/categories/999/assets.json";
var ASSET_URL = API_URL+"/api/web/asset/{{id}}.json";

module.exports = {
    assets:{
        get: function(){
            return new Promise(function(resolve, reject){
                $.ajax({
                    url: ASSETS_URL,
                    type: 'GET',
                    success: function(data){
                        resolve(data.assets.asset);
                    },
                    error: function(error){
                        reject(error);
                    }
                });
            });
        }
    },
    asset:{
        get: function(id){
            return new Promise(function(resolve, reject){
                $.ajax({
                    url: ASSET_URL.replace("{{id}}", id),
                    type: 'GET',
                    success: function(data){
                        resolve(data.asset);
                    },
                    error: function(error){
                        reject(error);
                    }
                });
            });
        }
    }
};
