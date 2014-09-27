var $ = require('jquery');
var Promise = require('promise');

var ASSETS_URL = "http://api.ulriken.vimondtv.com/api/web/search/categories/999/assets.json";

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
    }
    
};
