angular.module('map.controllers', [])
.controller("MapCtrl", [ "$scope",'$http','dataService', 'leafletData','leafletEvents', 'leafletBoundsHelpers', function($scope,$http,dataService, leafletData,leafletEvents, leafletBoundsHelpers) {
	
	angular.extend($scope, {
		center: {
			lat: 49.34637449999999,
			lng: -88.70785409999999,
			zoom: 2
		},
		events: {
			map: {
				disable: leafletEvents.getAvailableMapEvents(),
				enable: ['dblclick', 'drag', 'blur', 'touchstart', 'click'],
				logic: 'emit'
			},
			marker: {
				disable: leafletEvents.getAvailableMapEvents(),
				enable: ['click'],
				logic: 'emit'
			}
		},

		markers : { 
			enable: ['dblclick', 'drag', 'blur', 'touchstart']
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
	
	if($scope.mapId==="create"){

		$scope.$on('leafletDirectiveMap.click', function(event, args){
			$scope.markers=[];
			var marker = event.target;
			var latlng = args.leafletEvent.latlng;
			$scope.data.lat = latlng.lat;
			$scope.data.lng = latlng.lng;

			$scope.markers.push({
				lat: latlng.lat,
				lng: latlng.lng,
				message: "A Message"
			});
		});

		$scope.$on("addMarker",function(event,data){
			if(angular.isDefined(data.lat) && angular.isDefined(data.lng)){
				$scope.markers=[];

				$scope.markers.push({
					lat: parseFloat(data.lat),
					lng: parseFloat(data.lng),
					message: "A Message"
				});

				$scope.center={
					lat: parseFloat(data.lat),
					lng: parseFloat(data.lng),
					zoom: 10
				}
			}


		});
	}else{

		$scope.$on('leafletDirectiveMap.load', function(event, args){

			function marker(lat, lng, incidentId){
				this.lat = lat;
				this.lng = lng;
				this.incidentId = incidentId;
			}
			
			/*var junkmarker = {
				lat:"41.4119217",
				lng:"-81.862382",
				incidentId:incidentId
			}*/

			var bounds = args.leafletEvent.target.getBounds();

			$scope.markers=[];

			var mapData;

			dataService.getMapData(bounds._northEast.lat, bounds._southWest.lat, bounds._northEast.lng, bounds._southWest.lng)
			.then(function(data){
				mapData = data.data;
				
				if(mapData){
					for(var i = 0; i < mapData.length; i++){
						
						$scope.markers.push({
							lat: parseFloat(mapData[i].latitude),
							lng: parseFloat(mapData[i].longitude),
							incidentId: mapData[i].incidentId
						});
					}
					
				}

				$scope.center={
					lat: "41.4119217",
					lng: '-81.862382',
					zoom: 10
				}
			});

			
			
		});

		$scope.$on('leafletDirectiveMarker.click', function(event, args){

		});
		
		$scope.$on("centerMap",function(event,data){
			if(angular.isDefined(data.lat) && angular.isDefined(data.lng)){

				$scope.center={
					lat: parseFloat(data.lat),
					lng: parseFloat(data.lng),
					zoom: 10
				}
			}


		});


	}
	
	/*$scope.$on('leafletDirectiveMap.click', function(event){
		_addMarkerToMap();

	});*/
	// Simple POST request example (passing data) :
	/*$http.post('https://rocky-badlands-6969.herokuapp.com/').
	success(function(data, status, headers, config) {
	$scope.test = data;
	// this callback will be called asynchronously
	// when the response is available
	}).
	error(function(data, status, headers, config) {
	// called asynchronously if an error occurs
	// or server returns response with an error status.
});*/
	/*$http.get('http://echo.jsontest.com/conditions/frightful').then(function(resp) {
		$scope.conditions = resp.data.conditions;
		}, function(err) {
		console.error('ERR', err);
		// err.status will contain the status code
	})*/

		/*var promise = dataService.getData();
		promise.then(function(result) {
		//alert('Success: ' + result);
		$scope.conditions2 = result;
		}, function(reason) {
		//alert('Failed: ' + reason);
		}, function(update) {
		//alert('Got notification: ' + update);
	});*/

}])
