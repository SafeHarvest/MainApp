angular.module('searchMap.controllers',[])
.controller('SearchMapCtrl',[ "$scope",'$http','dataService', function($scope,$http,dataService)  {
	$scope.local={};
	$scope.local.data={lat:0,lng:0};
	$scope.values = [{
	  id: 1,
	  label: 'aLabel',
	  subItem: { name: 'aSubItem' }
	}, {
	  id: 2,
	  label: 'bLabel',
	  subItem: { name: 'bSubItem' }
	}];

	$scope.selected = { name: 'aSubItem' };
	
  	$scope.changeLat = function(lat){
		alert(lat);
  	}
  	$scope.changeLong = function(Long){
		alert(Long);
  	}
  	$scope.changeAddress = function(address){
		alert(address);
  	}
	
	var getLoc = function(){
	    if (navigator.geolocation) {
			$scope.loading="We are seraching for your location";
	        navigator.geolocation.getCurrentPosition(_showPosition);
	    } else { 
	        alert("Geolocation is not supported by this browser.");
	    }
	}

	var _showPosition = function(position) {
		$scope.loading=undefined;
	    $scope.local.data.lat=position.coords.latitude;
	    $scope.local.data.lng = position.coords.longitude;
		$scope.$broadcast("centerMap",$scope.local.data);
	}
	
  	$scope.geoLocate = function(){
		getLoc();
  	}

}]);