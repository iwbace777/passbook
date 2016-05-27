var myApp = angular.module('myApp', [ 'ngRoute', 'ui.bootstrap', 'ngLocale', 'ngCookies', 'ngSanitize', 'colorpicker.module']);

// Settings
myApp.settings={
    "remoteS3" : "http://erfrefrf",
    "remoteAPI" : "qefqerferg"
};

// Config
myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'app/views/home/HomeView.html'
    })
    .when('/passes', {
        templateUrl : 'app/views/passes/PassesView.html'
    })
	.when('/passes/create/coupon', {
    	templateUrl : 'app/views/passes/passbooks/coupon.html',
        controller : 'CreateCouponController'
    })
    .when('/passes/create/boarding', {
    	templateUrl : 'app/views/passes/passbooks/boarding.html',
        controller : 'CreateBordingController'
    })
    .when('/passes/create/event', {
    	templateUrl : 'app/views/passes/passbooks/event.html',
        controller : 'CreateEventController'
    })
    .when('/passes/create/store', {
    	templateUrl : 'app/views/passes/passbooks/store_card.html',
        controller : 'CreateStoreCardController'
    })
    .when('/passes/create/generic', {
    	templateUrl : 'app/views/passes/passbooks/generic.html',
        controller : 'CreateGenericController'
    })
    .otherwise({
    	redirectTo : '/'
    });
});

myApp.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'https://www.google.com/**',
        'http://www.google.com/**'
    ]);

    // The blacklist overrides the whitelist so the open redirect here is blocked.
    $sceDelegateProvider.resourceUrlBlacklist([

    ]);
});

// Controllers
myApp.controller('MainController',
    function($scope, $location, $filter) {

    }
);

myApp.controller('CreateBordingController',
    function($scope, $location, $filter, $routeParams, $log, GlobalInfoService) {
		// $scope.card = angular.fromJson($routeParams.item);
		$scope.bordingCard = {
				logo: '',
				logo2x: '',
				logoText: '',
				name: '',
				visibleFrom: '',
				visibleTo: '',
				icon: '',
				icon2x: '',
				manifest: '',
				signature: '',
				uri: '',
				backcolor: 'rgba(200, 200, 200, 1)',
				backcolor_r: 200,
				backcolor_g: 200,
				backcolor_b: 200,
				forecolor: 'rgba(100, 100, 100, 1)',
				forecolor_r: 100,
				forecolor_g: 100,
				forecolor_b: 100,
				labelcolor: 'rgba(100, 100, 100, 1)',
				labelcolor_r: 100,
				labelcolor_g: 100,
				labelcolor_b: 100,
				barcodeText: '',
				barcodeImage: '',
				barcodeType: 'pdf417'
		};
        $scope.init = function () {
        	// $scope.card = angular.fromJson($routeParams.item);
        }
		
		$scope.changeColor = function() {
			$scope.bordingCard.backcolor = 'rgba(' + $scope.bordingCard.backcolor_r + ', ' + $scope.bordingCard.backcolor_g + ', ' + $scope.bordingCard.backcolor_b + ', 1)';
			$scope.bordingCard.forecolor = 'rgba(' + $scope.bordingCard.forecolor_r + ', ' + $scope.bordingCard.forecolor_g + ', ' + $scope.bordingCard.forecolor_b + ', 1)';
			$scope.bordingCard.labelcolor = 'rgba(' + $scope.bordingCard.labelcolor_r + ', ' + $scope.bordingCard.labelcolor_g + ', ' + $scope.bordingCard.labelcolor_b + ', 1)';
		}
		
		$scope.changeLogo = function() {
			$('#pass_logo').attr('src', $scope.bordingCard.logo);
		}
		
		$scope.changeLogo2x = function() {
			$('#pass_logo2').attr('src', $scope.bordingCard.logo2x);
		}
		
		$scope.changeIcon = function() {
			$('#pass_icon').attr('src', $scope.bordingCard.icon);
		}
		
		$scope.changeIcon2x = function() {
			$('#pass_icon2').attr('src', $scope.bordingCard.icon2x);
		}
		
		$scope.changeBackgroundImage = function() {
			if ( $scope.bordingCard.backgroundImage != '' ) 
				$scope.bordingCard.backcolor = 'none';
			else 
				$scope.bordingCard.backcolor = 'rgba(' + $scope.bordingCard.backcolor_r + ', ' + $scope.bordingCard.backcolor_g + ', ' + $scope.bordingCard.backcolor_b + ', 1)';
		}
		
        $scope.reload = function () {
        	$scope.bordingCard = {
    				logo: '',
					logo2x: '',
    				logoText: '',
					name: '',
					visibleFrom: '',
					visibleTo: '',
					icon: '',
					icon2x: '',
					manifest: '',
					signature: '',
					uri: '',
    				backcolor: 'rgba(200, 200, 200, 1)',
					backcolor_r: 200,
					backcolor_g: 200,
					backcolor_b: 200,
    				forecolor: 'rgba(100, 100, 100, 1)',
					forecolor_r: 100,
					forecolor_g: 100,
					forecolor_b: 100,
    				labelcolor: 'rgba(100, 100, 100, 1)',
					labelcolor_r: 100,
					labelcolor_g: 100,
					labelcolor_b: 100,
    				barcodeText: '',
    				barcodeImage: '',
    				barcodeType: 'pdf417',
    				thumbnail: ''
    		};
			$scope.headerFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.primaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.auxiliaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.secondaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.backFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.locations = [
				{ lat: '', lng: '' }
     	    ]; 
	         
			$scope.relevantDates = [
				{ date: '' }
			];
        }
        $scope.headerFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.primaryFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.auxiliaryFields = [
            { key: '', label: '', value: '' }
        ];
		$scope.secondaryFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.backFields = [
            { key: '', label: '', value: '' }
        ];
        
        $scope.locations = [
	        { alt: '', lat: '', lng: '', rel: '' }
	    ];  
        
		$scope.relevantDates = [
			{ date: '' }
		];
		
        $scope.generate = function () {
        	if ( $scope.bordingCard.barcodeText == '' ) {
        		return;
        	}
        	var barcode = new Barcode($scope.bordingCard.barcodeType, $scope.bordingCard.barcodeText);
        	$("#barcode").children().remove();
        	
        	$("#barcode").append($('\<img/>')
                    .attr('src', barcode.createImageData(3)));
        	$scope.bordingCard.barcodeImage = barcode.createImageData(3);
        }

              
        $scope.addHeaderFields = function() {
			var length = $scope.headerFields.length;
			if ( length <= 2 ) 
				$scope.headerFields.push({ key: '', label: '', value: '' });
			else 
				alert("You can put up to 3 header fields.");
        };
		
		$scope.deleteHeaderFields = function(index) {
			var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.headerFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.headerFields[i]; 
					count ++;
				}
			}
			$scope.headerFields = tmp;
        };
		
        $scope.addPrimaryFields = function() {
			var length = $scope.primaryFields.length;
			if ( length <= 1 ) 
				$scope.primaryFields.push({ key: '', label: '', value: '' });
			else 
				alert("You can put up to 2 primary fields.");
        };
        
        $scope.deletePrimaryFields = function(index) {
			var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.primaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.primaryFields[i]; 
					count ++;
				}
			}
			$scope.primaryFields = tmp;
        };

        $scope.addAuxiliaryFields = function() {
			var length = $scope.auxiliaryFields.length;
			if ( length <= 4 ) 
				$scope.auxiliaryFields.push({ key: '', label: '', value: '' });
			else 
				alert("You can put up to 5 auxiliary fields.");
        };
        
        $scope.deleteAuxiliaryFields = function(index) {
			var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.auxiliaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.auxiliaryFields[i]; 
					count ++;
				}
			}
			$scope.auxiliaryFields = tmp;
        };
		
		$scope.addSecondaryFields = function() {
			var length = $scope.secondaryFields.length;
			if ( length <= 3 ) 
				$scope.secondaryFields.push({ key: '', label: '', value: '' });
			else 
				alert("You can put up to 4 secondary fields.");
        };
        
        $scope.deleteSecondaryFields = function(index) {
			var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.secondaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.secondaryFields[i]; 
					count ++;
				}
			}
			$scope.secondaryFields = tmp;
        };
        
        $scope.addBackFields = function() {
            $scope.backFields.push({ key: '', label: '', value: '' });
        };
        
        $scope.deleteBackFields = function(index) {
			var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.backFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.backFields[i]; 
					count ++;
				}
			}
			$scope.backFields = tmp;
        };
        
        $scope.addLocations = function() {
            $scope.locations.push({ lat: '', lng: '' });
        };
        
        $scope.deleteLocations = function(index) {
			var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.locations.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.locations[i]; 
					count ++;
				}
			}
			$scope.locations = tmp;
        };       
        
		$scope.addRelevantDates = function() {
            $scope.relevantDates.push({ date: '' });
        };
        
        $scope.deleteRelevantDates = function(index) {
			var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.relevantDates.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.relevantDates[i]; 
					count ++;
				}
			}
			$scope.relevantDates = tmp;
        }; 
		
        $scope.save = function () {
			var json_obj = [];
			for ( var i = 0; i < $scope.headerFields.length; i++ ) {
				if ( $scope.headerFields[i].value != '' )
					json_obj[$scope.headerFields[i].key] = $scope.headerFields[i].value;
			}
			for ( var i = 0; i < $scope.primaryFields.length; i++ ) {
				if ( $scope.primaryFields[i].value != '' )
					json_obj[$scope.primaryFields[i].key] = $scope.primaryFields[i].value;
			}
			for ( var i = 0; i < $scope.secondaryFields.length; i++ ) {
				if ( $scope.secondaryFields[i].value != '' )
					json_obj[$scope.secondaryFields[i].key] = $scope.secondaryFields[i].value;
			}
			for ( var i = 0; i < $scope.auxiliaryFields.length; i++ ) {
				if ( $scope.auxiliaryFields[i].value != '' )
					json_obj[$scope.auxiliaryFields[i].key] = $scope.auxiliaryFields[i].value;
			}
			for ( var i = 0; i < $scope.backFields.length; i++ ) {
				if ( $scope.backFields[i].value != '' )
					json_obj[$scope.backFields[i].key] = $scope.backFields[i].value;
			}
			for ( var i = 0; i < $scope.locations.length; i++ ) {
					json_obj[$scope.locations[i].key] = $scope.locations[i].value;
			}
			for ( var i = 0; i < $scope.relevantDates.length; i++ ) {
					json_obj[$scope.relevantDates[i].key] = $scope.relevantDates[i].value;
			}
			json_obj[$scope.bordingCard.barcodeType] = $scope.bordingCard.barcodeText;
			if ( $scope.bordingCard.backgroundImage != '' ) 
				json_obj['backgroundImage'] = $scope.bordingCard.backgroundImage;
			if ( $scope.bordingCard.stripImage != '' ) 
				json_obj['stripImage'] = $scope.bordingCard.stripImage;
			json_obj['backColor'] = $scope.bordingCard.backcolor;
			json_obj['foreColor'] = $scope.bordingCard.forecolor;
			json_obj['labelColor'] = $scope.bordingCard.labelcolor;
        	var jsonCommonData = [
				{ 
					name		:		$scope.bordingCard.name,
					active		:		'true',
					visibleFrom	:		$scope.bordingCard.visibleFrom,
					visibleTo	:		$scope.bordingCard.visibleTo,
					type		:		'Boarding Pass',
					logo		:		$scope.bordingCard.logo,
					logo2x		:		$scope.bordingCard.logo2x,
					icon		:		$scope.bordingCard.icon,
					icon2x		:		$scope.bordingCard.icon2x,
					manifest	:		$scope.bordingCard.manifest,
					signature	:		$scope.bordingCard.signature,
					uri			:		$scope.bordingCard.uri,
					json		:		JSON.stringify(json_obj)
				}
			];
			
        };
        
        $scope.cancel = function () {
        	$location.path('/passes');
        };
        
        $scope.flip = function() {
        	$(".passbook-container").eq(0).toggleClass('passbook-flipped');
        };
        
        $scope.setLogo = function ( data ) {
        	$scope.bordingCard.logo = data;
        	$scope.$apply();
        };
        
        $scope.setThumbnail = function ( data ) {
        	$scope.bordingCard.thumbnail = data;
        	$scope.$apply();
        };
        
        $scope.setBarcodeImage = function ( data ) {
        	$scope.bordingCard.barcodeImage = data;
        	$scope.$apply();
        };
    }
);

myApp.controller('CreateCouponController',
    function($scope, $location, $filter, $routeParams, $log, GlobalInfoService) {
		// $scope.card = angular.fromJson($routeParams.item);
		$scope.card = {
				logo: '',
				logo2x: '',
				logoText: '',
				name: '',
				visibleFrom: '',
				visibleTo: '',
				icon: '',
				icon2x: '',
				manifest: '',
				signature: '',
				uri: '',
				backcolor: 'rgba(200, 200, 200, 1)',
				backcolor_r: 200,
				backcolor_g: 200,
				backcolor_b: 200,
				forecolor: 'rgba(100, 100, 100, 1)',
				forecolor_r: 100,
				forecolor_g: 100,
				forecolor_b: 100,
				labelcolor: 'rgba(100, 100, 100, 1)',
				labelcolor_r: 100,
				labelcolor_g: 100,
				labelcolor_b: 100,
				barcodeText: '',
				barcodeImage: '',
				barcodeType: 'pdf417',
				stripImage: '',
				stripImage2x: ''
		};
        $scope.init = function () {
        	// $scope.card = angular.fromJson($routeParams.item);
        }
		
		$scope.changeColor = function() {
			$scope.card.backcolor = 'rgba(' + $scope.card.backcolor_r + ', ' + $scope.card.backcolor_g + ', ' + $scope.card.backcolor_b + ', 1)';
			$scope.card.forecolor = 'rgba(' + $scope.card.forecolor_r + ', ' + $scope.card.forecolor_g + ', ' + $scope.card.forecolor_b + ', 1)';
			$scope.card.labelcolor = 'rgba(' + $scope.card.labelcolor_r + ', ' + $scope.card.labelcolor_g + ', ' + $scope.card.labelcolor_b + ', 1)';
		}
		
		$scope.changeLogo = function() {
			$('#pass_logo').attr('src', $scope.card.logo);
		}
		
		$scope.changeLogo2x = function() {
			$('#pass_logo2').attr('src', $scope.card.logo2x);
		}
		
		$scope.changeIcon = function() {
			$('#pass_icon').attr('src', $scope.card.icon);
		}
		
		$scope.changeIcon = function() {
			$('#pass_icon2').attr('src', $scope.card.icon2x);
		}
		
		$scope.changeBackgroundImage = function() {
			if ( $scope.card.backgroundImage != '' ) 
				$scope.card.backcolor = 'none';
			else 
				$scope.card.backcolor = 'rgba(' + $scope.card.backcolor_r + ', ' + $scope.card.backcolor_g + ', ' + $scope.card.backcolor_b + ', 1)';
		}
		
		$scope.changeBarCode = function() {
			if ( $scope.card.barcodeType == 'qrcode' ) {
				$scope.flag = 1;
				$scope.auxiliaryFields = [
					{ key: '', label: '', value: '' }
				];
				$scope.secondaryFields = [
					{ key: '', label: '', value: '' }
				];
			} else 
				$scope.flag = 0;
		}
		
        $scope.reload = function () {
        	$scope.card = {
    				logo: '',
					logo2x: '',
    				logoText: '',
					name: '',
					visibleFrom: '',
					visibleTo: '',
					icon: '',
					icon2x: '',
					manifest: '',
					signature: '',
					uri: '',
    				backcolor: 'rgba(200, 200, 200, 1)',
					backcolor_r: 200,
					backcolor_g: 200,
					backcolor_b: 200,
    				forecolor: 'rgba(100, 100, 100, 1)',
					forecolor_r: 100,
					forecolor_g: 100,
					forecolor_b: 100,
    				labelcolor: 'rgba(100, 100, 100, 1)',
					labelcolor_r: 100,
					labelcolor_g: 100,
					labelcolor_b: 100,
    				barcodeText: '',
    				barcodeImage: '',
    				barcodeType: 'pdf417',
    				thumbnail: '',
					stripImage: '',
					stripImage2x: ''
    		};
			$scope.headerFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.primaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.auxiliaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.secondaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.backFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.locations = [
				{ lat: '', lng: '' }
     	    ]; 
	         
			$scope.relevantDates = [
				{ date: '' }
			];
        }
        $scope.headerFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.primaryFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.auxiliaryFields = [
            { key: '', label: '', value: '' }
        ];
		$scope.secondaryFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.backFields = [
            { key: '', label: '', value: '' }
        ];
        
        $scope.locations = [
	        { alt: '', lat: '', lng: '', rel: '' }
	    ];  
        
		$scope.relevantDates = [
			{ date: '' }
		];
		
        $scope.generate = function () {
        	if ( $scope.card.barcodeText == '' ) {
        		return;
        	}
        	var barcode = new Barcode($scope.card.barcodeType, $scope.card.barcodeText);
        	$("#barcode").children().remove();
        	
        	$("#barcode").append($('\<img/>')
                    .attr('src', barcode.createImageData(3)));
        	$scope.card.barcodeImage = barcode.createImageData(3);
        }

              
        $scope.addHeaderFields = function() {
			var length = $scope.headerFields.length;
			if ( length <= 2 ) 
				$scope.headerFields.push({ key: '', label: '', value: '' });
			else 
				alert("You can put up to 3 header fields.");
        };
		
		$scope.deleteHeaderFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.headerFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.headerFields[i]; 
					count ++;
				}
			}
			$scope.headerFields = tmp;
        };
		
        $scope.addPrimaryFields = function() {
			var length = $scope.primaryFields.length;
			if ( length <= 1 ) 
				$scope.primaryFields.push({ key: '', label: '', value: '' });
			else 
				alert("You can put up to 2 primary fields.");
        };
        
        $scope.deletePrimaryFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.primaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.primaryFields[i]; 
					count ++;
				}
			}
			$scope.primaryFields = tmp;
        };
	
        $scope.addAuxiliaryFields = function() {
			if ( $scope.flag == 1 ) {
				var length_aux = $scope.auxiliaryFields.length;
				var length_sec = $scope.secondaryFields.length;
				if ( length_aux + length_sec <= 3 ) 
					$scope.auxiliaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to total 4 extra fields.");
			} else {
				var length = $scope.auxiliaryFields.length;
				if ( length <= 4 ) 
					$scope.auxiliaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to 5 auxiliary fields.");
			}
        };
        
        $scope.deleteAuxiliaryFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.auxiliaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.auxiliaryFields[i]; 
					count ++;
				}
			}
			$scope.auxiliaryFields = tmp;
        };
		
		$scope.addSecondaryFields = function() {
			if ( $scope.flag == 1 ) {
				var length_aux = $scope.auxiliaryFields.length;
				var length_sec = $scope.secondaryFields.length;
				if ( length_aux + length_sec <= 3 ) 
					$scope.secondaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to total 4 extra fields.");
			} else {
				var length = $scope.secondaryFields.length;
				if ( length <= 3 ) 
					$scope.secondaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to 4 secondary fields.");
			}
        };
        
        $scope.deleteSecondaryFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.secondaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.secondaryFields[i]; 
					count ++;
				}
			}
			$scope.secondaryFields = tmp;
        };
        
        $scope.addBackFields = function() {
            $scope.backFields.push({ key: '', label: '', value: '' });
        };
        
        $scope.deleteBackFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.backFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.backFields[i]; 
					count ++;
				}
			}
			$scope.backFields = tmp;
        };
        
        $scope.addLocations = function() {
            $scope.locations.push({ lat: '', lng: '' });
        };
        
        $scope.deleteLocations = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.locations.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.locations[i]; 
					count ++;
				}
			}
			$scope.locations = tmp;
        };       
        
		$scope.addRelevantDates = function() {
            $scope.relevantDates.push({ date: '' });
        };
        
        $scope.deleteRelevantDates = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.relevantDates.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.relevantDates[i]; 
					count ++;
				}
			}
			$scope.relevantDates = tmp;
        }; 
		
        $scope.save = function () {
        	var json_obj = [];
			for ( var i = 0; i < $scope.headerFields.length; i++ ) {
				if ( $scope.headerFields[i].value != '' )
					json_obj[$scope.headerFields[i].key] = $scope.headerFields[i].value;
			}
			for ( var i = 0; i < $scope.primaryFields.length; i++ ) {
				if ( $scope.primaryFields[i].value != '' )
					json_obj[$scope.primaryFields[i].key] = $scope.primaryFields[i].value;
			}
			for ( var i = 0; i < $scope.secondaryFields.length; i++ ) {
				if ( $scope.secondaryFields[i].value != '' )
					json_obj[$scope.secondaryFields[i].key] = $scope.secondaryFields[i].value;
			}
			for ( var i = 0; i < $scope.auxiliaryFields.length; i++ ) {
				if ( $scope.auxiliaryFields[i].value != '' )
					json_obj[$scope.auxiliaryFields[i].key] = $scope.auxiliaryFields[i].value;
			}
			for ( var i = 0; i < $scope.backFields.length; i++ ) {
				if ( $scope.backFields[i].value != '' )
					json_obj[$scope.backFields[i].key] = $scope.backFields[i].value;
			}
			for ( var i = 0; i < $scope.locations.length; i++ ) {
					json_obj[$scope.locations[i].key] = $scope.locations[i].value;
			}
			for ( var i = 0; i < $scope.relevantDates.length; i++ ) {
					json_obj[$scope.relevantDates[i].key] = $scope.relevantDates[i].value;
			}
			json_obj[$scope.card.barcodeType] = $scope.card.barcodeText;
			if ( $scope.card.backgroundImage != '' ) 
				json_obj['backgroundImage'] = $scope.card.backgroundImage;
			if ( $scope.card.stripImage != '' ) 
				json_obj['stripImage'] = $scope.card.stripImage;
			if ( $scope.card.stripImage2x != '' ) 
				json_obj['stripImage2x'] = $scope.card.stripImage2x;
			json_obj['backColor'] = $scope.card.backcolor;
			json_obj['foreColor'] = $scope.card.forecolor;
			json_obj['labelColor'] = $scope.card.labelcolor;
        	var jsonCommonData = [
				{ 
					name		:		$scope.card.name,
					active		:		'true',
					visibleFrom	:		$scope.card.visibleFrom,
					visibleTo	:		$scope.card.visibleTo,
					type		:		'Coupon',
					logo		:		$scope.card.logo,
					logo2x		:		$scope.card.logo,
					icon		:		$scope.card.icon,
					icon2x		:		$scope.card.icon,
					manifest	:		$scope.card.manifest,
					signature	:		$scope.card.signature,
					uri			:		$scope.card.uri,
					json		:		JSON.stringify(json_obj)
				}
			];
			console.log( jsonCommonData );
        };
        
        $scope.cancel = function () {
        	$location.path('/passes');
        };
        
        $scope.flip = function() {
        	$(".passbook-container").eq(0).toggleClass('passbook-flipped');
        };
        
        $scope.setLogo = function ( data ) {
        	$scope.card.logo = data;
        	$scope.$apply();
        };
        
        $scope.setThumbnail = function ( data ) {
        	$scope.card.thumbnail = data;
        	$scope.$apply();
        };
        
        $scope.setBarcodeImage = function ( data ) {
        	$scope.card.barcodeImage = data;
        	$scope.$apply();
        };
    }
);

myApp.controller('CreateEventController',
    function($scope, $location, $filter, $routeParams, $log, GlobalInfoService) {
		// $scope.card = angular.fromJson($routeParams.item);
		$scope.card = {
				logo: '',
				logo2x: '',
				logoText: '',
				name: '',
				visibleFrom: '',
				visibleTo: '',
				icon: '',
				icon2x: '',
				manifest: '',
				signature: '',
				uri: '',
				backcolor: 'rgba(200, 200, 200, 1)',
				backcolor_r: 200,
				backcolor_g: 200,
				backcolor_b: 200,
				forecolor: 'rgba(100, 100, 100, 1)',
				forecolor_r: 100,
				forecolor_g: 100,
				forecolor_b: 100,
				labelcolor: 'rgba(100, 100, 100, 1)',
				labelcolor_r: 100,
				labelcolor_g: 100,
				labelcolor_b: 100,
				barcodeText: '',
				barcodeImage: '',
				barcodeType: 'pdf417',
				strip_show: 'block',
				primary_style: 'top: 30px; height: 32px;',
				secondary_style: 'width: 180px; display: inline-block; top: 10px;',
				backgroundImage: '',
				backgroundImage2x: '',
				thumbnail: '',
				thumbnail2x: '',
				stripImage: '',
				stripImage2x: ''
		};
        $scope.init = function () {
        	// $scope.card = angular.fromJson($routeParams.item);
        }
		
		$scope.changeColor = function() {
			$scope.card.backcolor = 'rgba(' + $scope.card.backcolor_r + ', ' + $scope.card.backcolor_g + ', ' + $scope.card.backcolor_b + ', 1)';
			$scope.card.forecolor = 'rgba(' + $scope.card.forecolor_r + ', ' + $scope.card.forecolor_g + ', ' + $scope.card.forecolor_b + ', 1)';
			$scope.card.labelcolor = 'rgba(' + $scope.card.labelcolor_r + ', ' + $scope.card.labelcolor_g + ', ' + $scope.card.labelcolor_b + ', 1)';
		}
		
		$scope.changeLogo = function() {
			$('#pass_logo').attr('src', $scope.card.logo);
		}
		
		$scope.changeLogo2x = function() {
			$('#pass_logo2').attr('src', $scope.card.logo2x);
		}
		
		$scope.changeIcon = function() {
			$('#pass_icon').attr('src', $scope.card.icon);
		}
		
		$scope.changeIcon2x = function() {
			$('#pass_icon2').attr('src', $scope.card.icon2x);
		}
		
		$scope.changeBackgroundImage = function() {
			if ( $scope.card.backgroundImage != '' ) {
				if ( $scope.card.stripImage == '' ) 
					$scope.card.backcolor = 'none';
				else 
					$scope.card.backgroundImage = ''
			}
			else 
				$scope.card.backcolor = 'rgba(' + $scope.card.backcolor_r + ', ' + $scope.card.backcolor_g + ', ' + $scope.card.backcolor_b + ', 1)';
		}
		
		$scope.changeBarCode = function() {
			if ( $scope.card.barcodeType == 'qrcode' ) {
				$scope.flag = 1;
				$scope.auxiliaryFields = [
					{ key: '', label: '', value: '' }
				];
				$scope.secondaryFields = [
					{ key: '', label: '', value: '' }
				];
			} else 
				$scope.flag = 0;
		}
		
		$scope.changeStripImage = function() {
			if ( $scope.card.stripImage != '' ) {
				$scope.card.strip_show = 'none';
				$scope.card.backgroundImage = '';
				$scope.card.backcolor = 'rgba(' + $scope.card.backcolor_r + ', ' + $scope.card.backcolor_g + ', ' + $scope.card.backcolor_b + ', 1)';
				$scope.card.primary_style = '';
				$scope.card.secondary_style = '';
			} else {
				$scope.card.strip_show = 'block';
				$scope.card.primary_style = 'top: 30px; height: 32px;';
				$scope.card.secondary_style = 'width: 180px; display: inline-block; top: 10px;';
			}
		}
		
        $scope.reload = function () {
        	$scope.card = {
    				logo: '',
					logo2x: '',
    				logoText: '',
					name: '',
					visibleFrom: '',
					visibleTo: '',
					icon: '',
					icon2x: '',
					manifest: '',
					signature: '',
					uri: '',
    				backcolor: 'rgba(200, 200, 200, 1)',
					backcolor_r: 200,
					backcolor_g: 200,
					backcolor_b: 200,
    				forecolor: 'rgba(100, 100, 100, 1)',
					forecolor_r: 100,
					forecolor_g: 100,
					forecolor_b: 100,
    				labelcolor: 'rgba(100, 100, 100, 1)',
					labelcolor_r: 100,
					labelcolor_g: 100,
					labelcolor_b: 100,
    				barcodeText: '',
    				barcodeImage: '',
    				barcodeType: 'pdf417',
					strip_show: 'block',
					primary_style: 'top: 30px; height: 32px;',
					secondary_style: 'width: 180px; display: inline-block; top: 10px;',
					backgroundImage: '',
					backgroundImage2x: '',
					thumbnail: '',
					thumbnail2x: '',
					stripImage: '',
					stripImage2x: ''
    		};
			$scope.headerFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.primaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.auxiliaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.secondaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.backFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.locations = [
				{ lat: '', lng: '' }
     	    ]; 
			
			$scope.relevantDates = [
				{ date: '' }
			];
	         
        }
        $scope.headerFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.primaryFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.auxiliaryFields = [
            { key: '', label: '', value: '' }
        ];
		$scope.secondaryFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.backFields = [
            { key: '', label: '', value: '' }
        ];
        
        $scope.locations = [
	        { alt: '', lat: '', lng: '', rel: '' }
	    ];  
        
		$scope.relevantDates = [
			{ date: '' }
		];
		
        $scope.generate = function () {
        	if ( $scope.card.barcodeText == '' ) {
        		return;
        	}
        	var barcode = new Barcode($scope.card.barcodeType, $scope.card.barcodeText);
        	$("#barcode").children().remove();
        	
        	$("#barcode").append($('\<img/>')
                    .attr('src', barcode.createImageData(3)));
        	$scope.card.barcodeImage = barcode.createImageData(3);
        }

              
        $scope.addHeaderFields = function() {
			var length = $scope.headerFields.length;
			if ( length <= 2 ) 
				$scope.headerFields.push({ key: '', label: '', value: '' });
			else 
				alert("You can put up to 3 header fields.");
        };
		
		$scope.deleteHeaderFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.headerFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.headerFields[i]; 
					count ++;
				}
			}
			$scope.headerFields = tmp;
        };
		
        $scope.addPrimaryFields = function() {
			var length = $scope.primaryFields.length;
			if ( length <= 1 ) 
				$scope.primaryFields.push({ key: '', label: '', value: '' });
			else 
				alert("You can put up to 2 primary fields.");
        };
        
        $scope.deletePrimaryFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.primaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.primaryFields[i]; 
					count ++;
				}
			}
			$scope.primaryFields = tmp;
        };
	
        $scope.addAuxiliaryFields = function() {
			if ( $scope.flag == 1 ) {
				var length_aux = $scope.auxiliaryFields.length;
				var length_sec = $scope.secondaryFields.length;
				if ( length_aux + length_sec <= 3 ) 
					$scope.auxiliaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to total 4 extra fields.");
			} else {
				var length = $scope.auxiliaryFields.length;
				if ( length <= 4 ) 
					$scope.auxiliaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to 5 auxiliary fields.");
			}
        };
        
        $scope.deleteAuxiliaryFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.auxiliaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.auxiliaryFields[i]; 
					count ++;
				}
			}
			$scope.auxiliaryFields = tmp;
        };
		
		$scope.addSecondaryFields = function() {
			if ( $scope.flag == 1 ) {
				var length_aux = $scope.auxiliaryFields.length;
				var length_sec = $scope.secondaryFields.length;
				if ( length_aux + length_sec <= 3 ) 
					$scope.secondaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to total 4 extra fields.");
			} else {
				var length = $scope.secondaryFields.length;
				if ( length <= 3 ) 
					$scope.secondaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to 4 secondary fields.");
			}
        };
        
        $scope.deleteSecondaryFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.secondaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.secondaryFields[i]; 
					count ++;
				}
			}
			$scope.secondaryFields = tmp;
        };
        
        $scope.addBackFields = function() {
            $scope.backFields.push({ key: '', label: '', value: '' });
        };
        
        $scope.deleteBackFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.backFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.backFields[i]; 
					count ++;
				}
			}
			$scope.backFields = tmp;
        };
        
        $scope.addLocations = function() {
            $scope.locations.push({ lat: '', lng: '' });
        };
        
        $scope.deleteLocations = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.locations.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.locations[i]; 
					count ++;
				}
			}
			$scope.locations = tmp;
        };       
        
		$scope.addRelevantDates = function() {
            $scope.relevantDates.push({ date: '' });
        };
        
        $scope.deleteRelevantDates = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.relevantDates.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.relevantDates[i]; 
					count ++;
				}
			}
			$scope.relevantDates = tmp;
        }; 
		
        $scope.save = function () {
        	var json_obj = [];
			for ( var i = 0; i < $scope.headerFields.length; i++ ) {
				if ( $scope.headerFields[i].value != '' )
					json_obj[$scope.headerFields[i].key] = $scope.headerFields[i].value;
			}
			for ( var i = 0; i < $scope.primaryFields.length; i++ ) {
				if ( $scope.primaryFields[i].value != '' )
					json_obj[$scope.primaryFields[i].key] = $scope.primaryFields[i].value;
			}
			for ( var i = 0; i < $scope.secondaryFields.length; i++ ) {
				if ( $scope.secondaryFields[i].value != '' )
					json_obj[$scope.secondaryFields[i].key] = $scope.secondaryFields[i].value;
			}
			for ( var i = 0; i < $scope.auxiliaryFields.length; i++ ) {
				if ( $scope.auxiliaryFields[i].value != '' )
					json_obj[$scope.auxiliaryFields[i].key] = $scope.auxiliaryFields[i].value;
			}
			for ( var i = 0; i < $scope.backFields.length; i++ ) {
				if ( $scope.backFields[i].value != '' )
					json_obj[$scope.backFields[i].key] = $scope.backFields[i].value;
			}
			for ( var i = 0; i < $scope.locations.length; i++ ) {
					json_obj[$scope.locations[i].key] = $scope.locations[i].value;
			}
			for ( var i = 0; i < $scope.relevantDates.length; i++ ) {
					json_obj[$scope.relevantDates[i].key] = $scope.relevantDates[i].value;
			}
			json_obj[$scope.card.barcodeType] = $scope.card.barcodeText;
			if ( $scope.card.backgroundImage != '' ) 
				json_obj['backgroundImage'] = $scope.card.backgroundImage;
			if ( $scope.card.backgroundImage2x != '' ) 
				json_obj['backgroundImage2x'] = $scope.card.backgroundImage2x;
			if ( $scope.card.thumbnail != '' ) 
				json_obj['thumbnail'] = $scope.card.thumbnail;
			if ( $scope.card.thumbnail2x != '' ) 
				json_obj['thumbnail2x'] = $scope.card.thumbnail2x;
			if ( $scope.card.stripImage != '' ) 
				json_obj['stripImage'] = $scope.card.stripImage;
			if ( $scope.card.stripImage2x != '' ) 
				json_obj['stripImage2x'] = $scope.card.stripImage2x;
			json_obj['backColor'] = $scope.card.backcolor;
			json_obj['foreColor'] = $scope.card.forecolor;
			json_obj['labelColor'] = $scope.card.labelcolor;
        	var jsonCommonData = [
				{ 
					name		:		$scope.card.name,
					active		:		'true',
					visibleFrom	:		$scope.card.visibleFrom,
					visibleTo	:		$scope.card.visibleTo,
					type		:		'Event',
					logo		:		$scope.card.logo,
					logo2x		:		$scope.card.logo,
					icon		:		$scope.card.icon,
					icon2x		:		$scope.card.icon,
					manifest	:		$scope.card.manifest,
					signature	:		$scope.card.signature,
					uri			:		$scope.card.uri,
					json		:		JSON.stringify(json_obj)
				}
			];
			console.log( jsonCommonData );
        };
        
        $scope.cancel = function () {
        	$location.path('/passes');
        };
        
        $scope.flip = function() {
        	$(".passbook-container").eq(0).toggleClass('passbook-flipped');
        };
        
        $scope.setLogo = function ( data ) {
        	$scope.card.logo = data;
        	$scope.$apply();
        };
        
        $scope.setThumbnail = function ( data ) {
        	$scope.card.thumbnail = data;
        	$scope.$apply();
        };
        
        $scope.setBarcodeImage = function ( data ) {
        	$scope.card.barcodeImage = data;
        	$scope.$apply();
        };
    }
);


myApp.controller('CreateStoreCardController',
    function($scope, $location, $filter, $routeParams, $log, GlobalInfoService) {
		// $scope.card = angular.fromJson($routeParams.item);
		$scope.card = {
				logo: '',
				logo2x: '',
				logoText: '',
				name: '',
				visibleFrom: '',
				visibleTo: '',
				icon: '',
				icon2x: '',
				manifest: '',
				signature: '',
				uri: '',
				backcolor: 'rgba(200, 200, 200, 1)',
				backcolor_r: 200,
				backcolor_g: 200,
				backcolor_b: 200,
				forecolor: 'rgba(100, 100, 100, 1)',
				forecolor_r: 100,
				forecolor_g: 100,
				forecolor_b: 100,
				labelcolor: 'rgba(100, 100, 100, 1)',
				labelcolor_r: 100,
				labelcolor_g: 100,
				labelcolor_b: 100,
				barcodeText: '',
				barcodeImage: '',
				barcodeType: 'pdf417',
				stripImage: '',
				stripImage2x: ''
		};
        $scope.init = function () {
        	// $scope.card = angular.fromJson($routeParams.item);
        }
		
		$scope.changeColor = function() {
			$scope.card.backcolor = 'rgba(' + $scope.card.backcolor_r + ', ' + $scope.card.backcolor_g + ', ' + $scope.card.backcolor_b + ', 1)';
			$scope.card.forecolor = 'rgba(' + $scope.card.forecolor_r + ', ' + $scope.card.forecolor_g + ', ' + $scope.card.forecolor_b + ', 1)';
			$scope.card.labelcolor = 'rgba(' + $scope.card.labelcolor_r + ', ' + $scope.card.labelcolor_g + ', ' + $scope.card.labelcolor_b + ', 1)';
		}
		
		$scope.changeLogo = function() {
			$('#pass_logo').attr('src', $scope.card.logo);
		}
		
		$scope.changeLogo2x = function() {
			$('#pass_logo2').attr('src', $scope.card.logo2x);
		}
		
		$scope.changeIcon = function() {
			$('#pass_icon').attr('src', $scope.card.icon);
		}
		
		$scope.changeIcon = function() {
			$('#pass_icon2').attr('src', $scope.card.icon2x);
		}
		
		$scope.changeBackgroundImage = function() {
			if ( $scope.card.backgroundImage != '' ) {
				if ( $scope.card.stripImage == '' ) 
					$scope.card.backcolor = 'none';
				else 
					$scope.card.backgroundImage = ''
			}
			else 
				$scope.card.backcolor = 'rgba(' + $scope.card.backcolor_r + ', ' + $scope.card.backcolor_g + ', ' + $scope.card.backcolor_b + ', 1)';
		}
		
		$scope.changeBarCode = function() {
			if ( $scope.card.barcodeType == 'qrcode' ) {
				$scope.flag = 1;
				$scope.auxiliaryFields = [
					{ key: '', label: '', value: '' }
				];
				$scope.secondaryFields = [
					{ key: '', label: '', value: '' }
				];
			} else 
				$scope.flag = 0;
		}
		
		$scope.changeStripImage = function() {
			if ( $scope.card.stripImage != '' ) {
				$scope.card.strip_show = 'none';
				$scope.card.backgroundImage = '';
				$scope.card.backcolor = 'rgba(' + $scope.card.backcolor_r + ', ' + $scope.card.backcolor_g + ', ' + $scope.card.backcolor_b + ', 1)';
				$scope.card.primary_style = '';
				$scope.card.secondary_style = '';
			} else {
				$scope.card.strip_show = 'block';
				$scope.card.primary_style = 'top: 30px; height: 32px;';
				$scope.card.secondary_style = 'width: 180px; display: inline-block; top: 10px;';
			}
		}
		
        $scope.reload = function () {
        	$scope.card = {
    				logo: '',
					logo2x: '',
    				logoText: '',
					name: '',
					visibleFrom: '',
					visibleTo: '',
					icon: '',
					icon2x: '',
					manifest: '',
					signature: '',
					uri: '',
    				backcolor: 'rgba(200, 200, 200, 1)',
					backcolor_r: 200,
					backcolor_g: 200,
					backcolor_b: 200,
    				forecolor: 'rgba(100, 100, 100, 1)',
					forecolor_r: 100,
					forecolor_g: 100,
					forecolor_b: 100,
    				labelcolor: 'rgba(100, 100, 100, 1)',
					labelcolor_r: 100,
					labelcolor_g: 100,
					labelcolor_b: 100,
    				barcodeText: '',
    				barcodeImage: '',
    				barcodeType: 'pdf417',
    				thumbnail: '',
					stripImage: '',
					stripImage2x: ''
    		};
			$scope.headerFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.primaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.auxiliaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.secondaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.backFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.locations = [
				{ lat: '', lng: '' }
     	    ]; 
	         
			$scope.relevantDates = [
				{ date: '' }
			];
        }
        $scope.headerFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.primaryFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.auxiliaryFields = [
            { key: '', label: '', value: '' }
        ];
		$scope.secondaryFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.backFields = [
            { key: '', label: '', value: '' }
        ];
        
        $scope.locations = [
	        { alt: '', lat: '', lng: '', rel: '' }
	    ];  
		
        $scope.relevantDates = [
			{ date: '' }
		];
		
        $scope.generate = function () {
        	if ( $scope.card.barcodeText == '' ) {
        		return;
        	}
        	var barcode = new Barcode($scope.card.barcodeType, $scope.card.barcodeText);
        	$("#barcode").children().remove();
        	
        	$("#barcode").append($('\<img/>')
                    .attr('src', barcode.createImageData(3)));
        	$scope.card.barcodeImage = barcode.createImageData(3);
        }

              
        $scope.addHeaderFields = function() {
			var length = $scope.headerFields.length;
			if ( length <= 2 ) 
				$scope.headerFields.push({ key: '', label: '', value: '' });
			else 
				alert("You can put up to 3 header fields.");
        };
		
		$scope.deleteHeaderFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.headerFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.headerFields[i]; 
					count ++;
				}
			}
			$scope.headerFields = tmp;
        };
		
        $scope.addPrimaryFields = function() {
			var length = $scope.primaryFields.length;
			if ( length <= 1 ) 
				$scope.primaryFields.push({ key: '', label: '', value: '' });
			else 
				alert("You can put up to 2 primary fields.");
        };
        
        $scope.deletePrimaryFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.primaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.primaryFields[i]; 
					count ++;
				}
			}
			$scope.primaryFields = tmp;
        };
	
        $scope.addAuxiliaryFields = function() {
			if ( $scope.flag == 1 ) {
				var length_aux = $scope.auxiliaryFields.length;
				var length_sec = $scope.secondaryFields.length;
				if ( length_aux + length_sec <= 3 ) 
					$scope.auxiliaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to total 4 extra fields.");
			} else {
				var length = $scope.auxiliaryFields.length;
				if ( length <= 4 ) 
					$scope.auxiliaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to 5 auxiliary fields.");
			}
        };
        
        $scope.deleteAuxiliaryFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.auxiliaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.auxiliaryFields[i]; 
					count ++;
				}
			}
			$scope.auxiliaryFields = tmp;
        };
		
		$scope.addSecondaryFields = function() {
			if ( $scope.flag == 1 ) {
				var length_aux = $scope.auxiliaryFields.length;
				var length_sec = $scope.secondaryFields.length;
				if ( length_aux + length_sec <= 3 ) 
					$scope.secondaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to total 4 extra fields.");
			} else {
				var length = $scope.secondaryFields.length;
				if ( length <= 3 ) 
					$scope.secondaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to 4 secondary fields.");
			}
        };
        
        $scope.deleteSecondaryFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.secondaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.secondaryFields[i]; 
					count ++;
				}
			}
			$scope.secondaryFields = tmp;
        };
        
        $scope.addBackFields = function() {
            $scope.backFields.push({ key: '', label: '', value: '' });
        };
        
        $scope.deleteBackFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.backFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.backFields[i]; 
					count ++;
				}
			}
			$scope.backFields = tmp;
        };
        
        $scope.addLocations = function() {
            $scope.locations.push({ lat: '', lng: '' });
        };
        
        $scope.deleteLocations = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.locations.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.locations[i]; 
					count ++;
				}
			}
			$scope.locations = tmp;
        };    

		$scope.addRelevantDates = function() {
            $scope.relevantDates.push({ date: '' });
        };
        
        $scope.deleteRelevantDates = function(index) {
			var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.relevantDates.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.relevantDates[i]; 
					count ++;
				}
			}
			$scope.relevantDates = tmp;
        }; 
        
        $scope.save = function () {
        	var json_obj = [];
			for ( var i = 0; i < $scope.headerFields.length; i++ ) {
				if ( $scope.headerFields[i].value != '' )
					json_obj[$scope.headerFields[i].key] = $scope.headerFields[i].value;
			}
			for ( var i = 0; i < $scope.primaryFields.length; i++ ) {
				if ( $scope.primaryFields[i].value != '' )
					json_obj[$scope.primaryFields[i].key] = $scope.primaryFields[i].value;
			}
			for ( var i = 0; i < $scope.secondaryFields.length; i++ ) {
				if ( $scope.secondaryFields[i].value != '' )
					json_obj[$scope.secondaryFields[i].key] = $scope.secondaryFields[i].value;
			}
			for ( var i = 0; i < $scope.auxiliaryFields.length; i++ ) {
				if ( $scope.auxiliaryFields[i].value != '' )
					json_obj[$scope.auxiliaryFields[i].key] = $scope.auxiliaryFields[i].value;
			}
			for ( var i = 0; i < $scope.backFields.length; i++ ) {
				if ( $scope.backFields[i].value != '' )
					json_obj[$scope.backFields[i].key] = $scope.backFields[i].value;
			}
			for ( var i = 0; i < $scope.locations.length; i++ ) {
					json_obj[$scope.locations[i].key] = $scope.locations[i].value;
			}
			for ( var i = 0; i < $scope.relevantDates.length; i++ ) {
					json_obj[$scope.relevantDates[i].key] = $scope.relevantDates[i].value;
			}
			json_obj[$scope.card.barcodeType] = $scope.card.barcodeText;
			if ( $scope.card.backgroundImage != '' ) 
				json_obj['backgroundImage'] = $scope.card.backgroundImage;
			if ( $scope.card.stripImage != '' ) 
				json_obj['stripImage'] = $scope.card.stripImage;
			if ( $scope.card.stripImage2x != '' ) 
				json_obj['stripImage2x'] = $scope.card.stripImage2x;
			json_obj['backColor'] = $scope.card.backcolor;
			json_obj['foreColor'] = $scope.card.forecolor;
			json_obj['labelColor'] = $scope.card.labelcolor;
        	var jsonCommonData = [
				{ 
					name		:		$scope.card.name,
					active		:		'true',
					visibleFrom	:		$scope.card.visibleFrom,
					visibleTo	:		$scope.card.visibleTo,
					type		:		'StoreCard',
					logo		:		$scope.card.logo,
					logo2x		:		$scope.card.logo,
					icon		:		$scope.card.icon,
					icon2x		:		$scope.card.icon,
					manifest	:		$scope.card.manifest,
					signature	:		$scope.card.signature,
					uri			:		$scope.card.uri,
					json		:		JSON.stringify(json_obj)
				}
			];
			console.log( jsonCommonData );
        };
        
        $scope.cancel = function () {
        	$location.path('/passes');
        };
        
        $scope.flip = function() {
        	$(".passbook-container").eq(0).toggleClass('passbook-flipped');
        };
        
        $scope.setLogo = function ( data ) {
        	$scope.card.logo = data;
        	$scope.$apply();
        };
        
        $scope.setThumbnail = function ( data ) {
        	$scope.card.thumbnail = data;
        	$scope.$apply();
        };
        
        $scope.setBarcodeImage = function ( data ) {
        	$scope.card.barcodeImage = data;
        	$scope.$apply();
        };
    }
);

myApp.controller('CreateGenericController',
    function($scope, $location, $filter, $routeParams, $log, GlobalInfoService) {
		// $scope.card = angular.fromJson($routeParams.item);
		$scope.card = {
				logo: '',
				logo2x: '',
				logoText: '',
				name: '',
				visibleFrom: '',
				visibleTo: '',
				icon: '',
				icon2x: '',
				manifest: '',
				signature: '',
				uri: '',
				backcolor: 'rgba(200, 200, 200, 1)',
				backcolor_r: 200,
				backcolor_g: 200,
				backcolor_b: 200,
				forecolor: 'rgba(100, 100, 100, 1)',
				forecolor_r: 100,
				forecolor_g: 100,
				forecolor_b: 100,
				labelcolor: 'rgba(100, 100, 100, 1)',
				labelcolor_r: 100,
				labelcolor_g: 100,
				labelcolor_b: 100,
				barcodeText: '',
				barcodeImage: '',
				barcodeType: 'pdf417',
				stripImage: ''
		};
        $scope.init = function () {
        	// $scope.card = angular.fromJson($routeParams.item);
        }
		
		$scope.changeColor = function() {
			$scope.card.backcolor = 'rgba(' + $scope.card.backcolor_r + ', ' + $scope.card.backcolor_g + ', ' + $scope.card.backcolor_b + ', 1)';
			$scope.card.forecolor = 'rgba(' + $scope.card.forecolor_r + ', ' + $scope.card.forecolor_g + ', ' + $scope.card.forecolor_b + ', 1)';
			$scope.card.labelcolor = 'rgba(' + $scope.card.labelcolor_r + ', ' + $scope.card.labelcolor_g + ', ' + $scope.card.labelcolor_b + ', 1)';
		}
		
		$scope.changeLogo = function() {
			$('#pass_logo').attr('src', $scope.card.logo);
		}
		
		$scope.changeLogo2x = function() {
			$('#pass_logo2').attr('src', $scope.card.logo2x);
		}
		
		$scope.changeIcon = function() {
			$('#pass_icon').attr('src', $scope.card.icon);
		}
		
		$scope.changeIcon2x = function() {
			$('#pass_icon2').attr('src', $scope.card.icon2x);
		}
		
		$scope.changeBackgroundImage = function() {
			if ( $scope.card.backgroundImage != '' ) {
					$scope.card.backcolor = 'none';
			}
			else 
				$scope.card.backcolor = 'rgba(' + $scope.card.backcolor_r + ', ' + $scope.card.backcolor_g + ', ' + $scope.card.backcolor_b + ', 1)';
		}
		
		$scope.changeBarCode = function() {
			if ( $scope.card.barcodeType == 'qrcode' ) {
				$scope.flag = 1;
				$scope.auxiliaryFields = [
					{ key: '', label: '', value: '' }
				];
				$scope.secondaryFields = [
					{ key: '', label: '', value: '' }
				];
			} else 
				$scope.flag = 0;
		}
		
		
        $scope.reload = function () {
        	$scope.card = {
    				logo: '',
					logo2x: '',
    				logoText: '',
					name: '',
					visibleFrom: '',
					visibleTo: '',
					icon: '',
					icon2x: '',
					manifest: '',
					signature: '',
					uri: '',
    				backcolor: 'rgba(200, 200, 200, 1)',
					backcolor_r: 200,
					backcolor_g: 200,
					backcolor_b: 200,
    				forecolor: 'rgba(100, 100, 100, 1)',
					forecolor_r: 100,
					forecolor_g: 100,
					forecolor_b: 100,
    				labelcolor: 'rgba(100, 100, 100, 1)',
					labelcolor_r: 100,
					labelcolor_g: 100,
					labelcolor_b: 100,
    				barcodeText: '',
    				barcodeImage: '',
    				barcodeType: 'pdf417',
    				thumbnail: '',
					stripImage: ''
    		};
			$scope.headerFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.primaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.auxiliaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.secondaryFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.backFields = [
				{ key: '', label: '', value: '' }
			];
			$scope.locations = [
				{ lat: '', lng: '' }
     	    ]; 
			$scope.relevantDates = [
				{ date: '' }
			];
	         
        }
        $scope.headerFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.primaryFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.auxiliaryFields = [
            { key: '', label: '', value: '' }
        ];
		$scope.secondaryFields = [
            { key: '', label: '', value: '' }
        ];
        $scope.backFields = [
            { key: '', label: '', value: '' }
        ];
        
        $scope.locations = [
	        { alt: '', lat: '', lng: '', rel: '' }
	    ];  
		
		$scope.relevantDates = [
			{ date: '' }
		];
        
        $scope.generate = function () {
        	if ( $scope.card.barcodeText == '' ) {
        		return;
        	}
        	var barcode = new Barcode($scope.card.barcodeType, $scope.card.barcodeText);
        	$("#barcode").children().remove();
        	
        	$("#barcode").append($('\<img/>')
                    .attr('src', barcode.createImageData(3)));
        	$scope.card.barcodeImage = barcode.createImageData(3);
        }

              
        $scope.addHeaderFields = function() {
			var length = $scope.headerFields.length;
			if ( length <= 2 ) 
				$scope.headerFields.push({ key: '', label: '', value: '' });
			else 
				alert("You can put up to 3 header fields.");
        };
		
		$scope.deleteHeaderFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.headerFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.headerFields[i]; 
					count ++;
				}
			}
			$scope.headerFields = tmp;
        };
		
        $scope.addPrimaryFields = function() {
			var length = $scope.primaryFields.length;
			if ( length <= 1 ) 
				$scope.primaryFields.push({ key: '', label: '', value: '' });
			else 
				alert("You can put up to 2 primary fields.");
        };
        
        $scope.deletePrimaryFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.primaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.primaryFields[i]; 
					count ++;
				}
			}
			$scope.primaryFields = tmp;
        };
	
        $scope.addAuxiliaryFields = function() {
			if ( $scope.flag == 1 ) {
				var length_aux = $scope.auxiliaryFields.length;
				var length_sec = $scope.secondaryFields.length;
				if ( length_aux + length_sec <= 3 ) 
					$scope.auxiliaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to total 4 extra fields.");
			} else {
				var length = $scope.auxiliaryFields.length;
				if ( length <= 4 ) 
					$scope.auxiliaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to 5 auxiliary fields.");
			}
        };
        
        $scope.deleteAuxiliaryFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.auxiliaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.auxiliaryFields[i]; 
					count ++;
				}
			}
			$scope.auxiliaryFields = tmp;
        };
		
		$scope.addSecondaryFields = function() {
			if ( $scope.flag == 1 ) {
				var length_aux = $scope.auxiliaryFields.length;
				var length_sec = $scope.secondaryFields.length;
				if ( length_aux + length_sec <= 3 ) 
					$scope.secondaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to total 4 extra fields.");
			} else {
				var length = $scope.secondaryFields.length;
				if ( length <= 3 ) 
					$scope.secondaryFields.push({ key: '', label: '', value: '' });
				else 
					alert("You can put up to 4 secondary fields.");
			}
        };
        
        $scope.deleteSecondaryFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.secondaryFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.secondaryFields[i]; 
					count ++;
				}
			}
			$scope.secondaryFields = tmp;
        };
        
        $scope.addBackFields = function() {
            $scope.backFields.push({ key: '', label: '', value: '' });
        };
        
        $scope.deleteBackFields = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.backFields.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.backFields[i]; 
					count ++;
				}
			}
			$scope.backFields = tmp;
        };
        
        $scope.addLocations = function() {
            $scope.locations.push({ lat: '', lng: '' });
        };
        
        $scope.deleteLocations = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.locations.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.locations[i]; 
					count ++;
				}
			}
			$scope.locations = tmp;
        };    
		
		$scope.addRelevantDates = function() {
            $scope.relevantDates.push({ date: '' });
        };
        
        $scope.deleteRelevantDates = function(index) {
            var tmp = [];
			var count = 0;
			for ( var i = 0; i < $scope.relevantDates.length; i++ ) {
				if ( i != index ) {
					tmp[count] = $scope.relevantDates[i]; 
					count ++;
				}
			}
			$scope.relevantDates = tmp;
        };   
        
        $scope.save = function () {
        	var json_obj = [];
			for ( var i = 0; i < $scope.headerFields.length; i++ ) {
				if ( $scope.headerFields[i].value != '' )
					json_obj[$scope.headerFields[i].key] = $scope.headerFields[i].value;
			}
			for ( var i = 0; i < $scope.primaryFields.length; i++ ) {
				if ( $scope.primaryFields[i].value != '' )
					json_obj[$scope.primaryFields[i].key] = $scope.primaryFields[i].value;
			}
			for ( var i = 0; i < $scope.secondaryFields.length; i++ ) {
				if ( $scope.secondaryFields[i].value != '' )
					json_obj[$scope.secondaryFields[i].key] = $scope.secondaryFields[i].value;
			}
			for ( var i = 0; i < $scope.auxiliaryFields.length; i++ ) {
				if ( $scope.auxiliaryFields[i].value != '' )
					json_obj[$scope.auxiliaryFields[i].key] = $scope.auxiliaryFields[i].value;
			}
			for ( var i = 0; i < $scope.backFields.length; i++ ) {
				if ( $scope.backFields[i].value != '' )
					json_obj[$scope.backFields[i].key] = $scope.backFields[i].value;
			}
			for ( var i = 0; i < $scope.locations.length; i++ ) {
					json_obj[$scope.locations[i].key] = $scope.locations[i].value;
			}
			for ( var i = 0; i < $scope.relevantDates.length; i++ ) {
					json_obj[$scope.relevantDates[i].key] = $scope.relevantDates[i].value;
			}
			json_obj[$scope.card.barcodeType] = $scope.card.barcodeText;
			if ( $scope.card.backgroundImage != '' ) 
				json_obj['backgroundImage'] = $scope.card.backgroundImage;
			if ( $scope.card.thumbnail != '' ) 
				json_obj['thumbnail'] = $scope.card.thumbnail;
			if ( $scope.card.thumbnail2x != '' ) 
				json_obj['thumbnail2x'] = $scope.card.thumbnail2x;
			if ( $scope.card.stripImage != '' ) 
				json_obj['stripImage'] = $scope.card.stripImage;
			json_obj['backColor'] = $scope.card.backcolor;
			json_obj['foreColor'] = $scope.card.forecolor;
			json_obj['labelColor'] = $scope.card.labelcolor;
        	var jsonCommonData = [
				{ 
					name		:		$scope.card.name,
					active		:		'true',
					visibleFrom	:		$scope.card.visibleFrom,
					visibleTo	:		$scope.card.visibleTo,
					type		:		'Generic',
					logo		:		$scope.card.logo,
					logo2x		:		$scope.card.logo,
					icon		:		$scope.card.icon,
					icon2x		:		$scope.card.icon,
					manifest	:		$scope.card.manifest,
					signature	:		$scope.card.signature,
					uri			:		$scope.card.uri,
					json		:		JSON.stringify(json_obj)
				}
			];
			console.log( jsonCommonData );
        };
        
        $scope.cancel = function () {
        	$location.path('/passes');
        };
        
        $scope.flip = function() {
        	$(".passbook-container").eq(0).toggleClass('passbook-flipped');
        };
        
        $scope.setLogo = function ( data ) {
        	$scope.card.logo = data;
        	$scope.$apply();
        };
        
        $scope.setThumbnail = function ( data ) {
        	$scope.card.thumbnail = data;
        	$scope.$apply();
        };
        
        $scope.setBarcodeImage = function ( data ) {
        	$scope.card.barcodeImage = data;
        	$scope.$apply();
        };
    }
);





































myApp.controller('ModalPassbookController', function ($scope, $modal, $log, GlobalInfoService) {
    $scope.items = GlobalInfoService.getDefaultCards();
    $scope.open = function (size) {
	    var modalInstance = $modal.open({
	        templateUrl: 'modalNewPassbook.html',
	        controller: 'ModalInstanceCtrl',
	        size: size,
	        resolve: {
	            items: function () {
	                return $scope.items;
	            }
	        }
	    });

	    modalInstance.result.then(function (selectedItem) {
	        $scope.selected = selectedItem;
	    }, function () {
	        
	    });
    };
});

myApp.controller('ModalInstanceCtrl', function ($scope, $location, $modalInstance, $log, GlobalInfoService, items) {
    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
        GlobalInfoService.setSelectedType( $scope.selected.item.type );
        switch ( $scope.selected.item.type ) {
        	case '0':
        		$location.path('/passes/create/coupon');
        		break;
        	case '1':
        		$location.path('/passes/create/boarding');
        		break;
        	case '2':
        		$location.path('/passes/create/event');
        		break;
        	case '3':
        		$location.path('/passes/create/store');
        		break;
        	case '4':
        		$location.path('/passes/create/generic');
        		break;
        	default:
        		break;
        }        
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});

// Directives
myApp.directive('holderFix', function() {
	return {
		link : function(scope, element, attrs) {
			Holder.run({
				images : element[0],
				nocss : true
			});
		}
	};
});

myApp.directive('passbookGeneric', function($compile, GlobalInfoService) {
	var str_url = "app/views/passes/passbooks/generic.html";
	var linker = {
		restrict: 'E',
		templateUrl: str_url,
		controller: 'CreatePassbookController',
		link: function (scope, element, attrs) { 
		} 
	};
	
	return linker;
});

myApp.directive('passbookCoupon', function($compile, GlobalInfoService) {
	var str_url = "app/views/passes/passbooks/coupon.html";
	var linker = {
		restrict: 'E',
		templateUrl: str_url,
		controller: 'CreatePassbookController',
		link: function (scope, element, attrs) { 
		} 
	};
	
	return linker;
});

myApp.directive('passbookEvent', function($compile, GlobalInfoService) {
	var str_url = "app/views/passes/passbooks/event.html";
	var linker = {
		restrict: 'E',
		templateUrl: str_url,
		controller: 'CreatePassbookController',
		link: function (scope, element, attrs) { 
		}
	};
	
	return linker;
});

myApp.directive('passbookStore', function($compile, GlobalInfoService) {
	var str_url = "app/views/passes/passbooks/store_card.html";
	var linker = {
		restrict: 'E',
		templateUrl: str_url,
		controller: 'CreatePassbookController',
		link: function (scope, element, attrs) { 
		} 
	};
	
	return linker;
});