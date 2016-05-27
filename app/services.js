myApp.service ('GlobalInfoService', function() {
	var service = {};
	var defaultCards = [
	                 {'icon' : '01.png', 'image' : 'A01.png', 'name' : 'Coupon', 'description' : 'Description of Coupon', type: '0'},
	                 {'icon' : '02.png', 'image' : 'A02.png', 'name' : 'Boarding Pass', 'description' : 'Description of Boarding Pass', type: '1'},
	                 {'icon' : '03.png', 'image' : 'A03.png', 'name' : 'Event', 'description' : 'Description of Event', type: '2'},
	                 {'icon' : '04.png', 'image' : 'A04.png', 'name' : 'Store Card', 'description' : 'Description of Store Card', type: '3'},
	                 {'icon' : '05.png', 'image' : 'A05.png', 'name' : 'Generic', 'description' : 'Description of Generic', type: '4'}];
	var selectedtype = '0';
	service.getDefaultCard = function ( str_type ) {
		for ( var i = 0; i < defaultCards.length; i ++) {
			if ( str_type == defaultCards[i].type )
				return defaultCards[i];
		}
	}; 
	service.setSelectedType = function ( str_type ) {
		selectedtype = str_type;
	}
	service.getSelectedType = function() {
		return selectedtype;
	};
	service.getDefaultCards = function () {
		return defaultCards;
	};
	
	service.resetCard = function ( ptr_card ) {
		
	};
	
	return service;
})