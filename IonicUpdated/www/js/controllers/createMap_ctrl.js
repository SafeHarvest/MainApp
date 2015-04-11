angular.module('createmap.controllers', [])
.controller("CreateMapCtrl", [ "$scope",'$http','dataService', function($scope,$http,dataService) {

    angular.extend($scope, {
        center: {
            lat: 38.857,
            lng: -107.886,
            zoom: 2
        },
        
        layers: {
            baselayers: {
                osm: {
                    name: 'OpenStreetMap',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                },
                mapbox_terrain: {
                    name: 'Mapbox Terrain',
                     url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
                    type: 'xyz',
                    layerOptions: {
                        apikey: 'pk.eyJ1IjoidGFzaGE0bSIsImEiOiJHeFpiRVNjIn0.135C1-ww2KNenVJzuEDO_w',
                        mapid: 'tasha4m.lkam1h8e'
                    }
                }
            }
        }
    });
	
  	$scope.changeLat = function(lat){
		alert(lat);
  	}
  	$scope.changeLong = function(Long){
		alert(Long);
  	}
  	$scope.changeAddress = function(address){
		alert(address);
  	}
  	
}])