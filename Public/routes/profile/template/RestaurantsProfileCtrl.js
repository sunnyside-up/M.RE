(function() {
        angular.module('MRE')
            .controller('RestaurantsProfileCtrl', ['$scope', 'RestaurantsProfileService', '$modalInstance', 'ProfileService', 'profile',
                function($scope, RestaurantsProfileService, ProfileService, profile, $modalInstance) {
                    //submit function for updating profile
                    //business hours not complete
                    var RPC = this;
                    RPC.updateProfile = function(name, addressOne, addressTwo, city, state, zip, email, phone, businessHour, tableNumber, capacity) {
                        var update = {
                            businessName: name,
                            businessAddress: {
                                addressOne: addressOne,
                                addressTwo: addressTwo,
                                city: city,
                                state: state,
                                zip: zip
                            },
                            businessEmail: email,
                            businessNumber: phone,
                            tablePlacement: [{
                                tableNumber: tableNumber,
                                capacity: capacity
                            }]
                        }
 
                        RestaurantsProfileService.updateProfile(update).then(function(res) {
                            profile[0].userRestaurant.push(update);
                            $modalInstance.dismiss('cancel');
                        })      
                    };


        }]) //end of controller
})();

