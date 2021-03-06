angular.module('data.service', [])
.service('dataService',[ '$http','$q', function($http,$q){
	var _getData = function(){
		var deferred = $q.defer();
		
		$http.get('https://rocky-badlands-6969.herokuapp.com/crops').then(function(data,status,headers,config) {
			deferred.resolve(data);
		}, function(err) {
	  	    //console.error('ERR', err);
	  	    // err.status will contain the status code
	  	})

		return deferred.promise;
	}
	
	var _getCropData = function(){
		var deferred = $q.defer();
		
		$http.get('https://rocky-badlands-6969.herokuapp.com/crops').then(function(data,status,headers,config) {
			deferred.resolve(data);
		}, function(err) {
	  	    //console.error('ERR', err);
	  	    // err.status will contain the status code
	  	})

		return deferred.promise;
	}
	
	var _postCropData = function(){
		var deferred = $q.defer();
		
		/* $http.get('https://rocky-badlands-6969.herokuapp.com/crops').then(function(data,status,headers,config) {
			deferred.resolve(data);
		}, function(err) {
	  	    //console.error('ERR', err);
	  	    // err.status will contain the status code
	  	}) */

		return deferred.promise;
	}

	/*var _getMapData = function(maxLat, minLat, maxLng, minLng, cropTypeId, pestTypeId){
		var deferred = $q.defer();
		$http.get('https://rocky-badlands-6969.herokuapp.com/incidents',
		{
			maxLat: maxLat,
			minLat: minLat,
			maxLng: maxLng,
			minLng: minLng,
			cropTypeId: cropTypeId,
			pestTypeId: pestTypeId
		}).then(function(data, status, headers, config){
			deferred.resolve(data);
		}, function(err){
			//alert("Unable to retrieve map data.");
		})

		return deferred.promise;
	}*/
	
	var _getMapData = function(){
		var deferred = $q.defer();
		$http.get('https://rocky-badlands-6969.herokuapp.com/incidents').then(function(data, status, headers, config){
			deferred.resolve(data);
		}, function(err){
			//alert("Unable to retrieve map data.");
		})

		return deferred.promise;
	}

	return{
		getData:_getData,
		getMapData: _getMapData,
		getCropData:_getCropData
	}
}]);