/// <reference path="angular.min.js" />



// Creating a module
var myApp = angular.module('myModule', []);

// creating a controller
//var myController = function ($scope) {
//    $scope.message = "AngularJS Tutorial";
//};

// Register the controller with the module
//myApp.controller("myController", myController);

// equivalent to creating a controller and registering it with the module (Step 2 and step 3)
myApp.controller("myController", function ($scope) {
    ////////////////////////////////////////////////////////////////
    $scope.message = "AngularJS Tutorial";
    //////////////////////////////////////////////////////////////////
    var employee = {
        firstName: "David",
        lastName: "Lames",
        gender: "Male"
    };
    $scope.employee = employee;
    ///////////////////////////////////////////////////////////////////

    // Images demo - ng-src
    var country = {
        name: 'USA',
        capital: 'Washington,DC',
        flag:'/images/bg.jpg'
    }
    $scope.country = country;
    /////////////////////////////////////////////////////////////////////////
    // for 2 way data binding
    $scope.inputmessage = "Hello Angular !"
    /////////////////////////////////////////////////////////////////////////
    // ng-repeat
    var employees = [
        { firstName: "Ben", lastName: "Camy", salary: 5000 },
        { firstName: "Anna", lastName: "Kurts", salary: 5500 },
        { firstName: "Sammy", lastName: "Rogs", salary: 8000 },
        { firstName: "Sally", lastName: "Atkins", salary: 6000 },
        { firstName: "Brodie", lastName: "Atkins", salary: 5000 }
    ];

    $scope.employees = employees;
    /////////////////////////////////////////////////////////////////////////
    // nested ng-repeat
    var countries = [
        {    
        name: 'India',
            cities: [
               { name: 'Bangalore,KA' },
               { name: 'Pune,MH' },
               {name: 'Mumbai,MH'}
            ]
        },
        {
            name: 'USA',
            cities: [
               { name: 'Washington,DC' },
               { name: 'Mankato,MN' },
               { name: 'Summerfield,NC' }
            ]
        },
        {
            name: 'Canada',
            cities: [
               { name: 'Canada' },
               { name: 'Vancover' },
               { name: 'Canada City' }
            ]
        },

    ];

    $scope.countries = countries;
    ////////////////////////////////////////////////////////////////////////////////
    // Event Handling in Angular JS
    var technologies = [
        { name: "C#", likes: 0, dislikes: 0 },
        { name: "ASP.Net", likes: 0, dislikes: 0 },
        { name: "Angular", likes: 0, dislikes: 0 },
        { name: "SQL", likes: 0, dislikes: 0 },
    ];
    $scope.technologies = technologies;

    // increment likes
    $scope.incrementLikes = function (technology) {
        technology.likes++;
    };

    // increment dislikes
    $scope.incrementDislikes = function (technology) {
        technology.dislikes++;
    };
    //////////////////////////////////////////////////////////////////////////////////////
    // Filters Example
    var filEmployees = [
        { firstname: "Ben", dateofbirth:new Date("November 4,1981"),gender:"Male", salary: 5000.7877 },
        { firstname: "Mark", dateofbirth: new Date("March 21,1979"), gender: "Female", salary: 5500 },
        { firstname: "Pam", dateofbirth: new Date("June 1,1982"), gender: "Male", salary: 8000 },
        { firstname: "Sara", dateofbirth: new Date("May 6,1977"), gender: "Female", salary: 6000 },
        { firstname: "Todd", dateofbirth: new Date("September 21,1978"), gender: "Male", salary: 5000 }
    ];

    $scope.filEmployees = filEmployees;
    $scope.rowlimit = 3;
    ///////////////////////////////////////////////////////////////////////////////////////
    // Sorting data
    $scope.sortColumn = "firstname";
    $scope.reverseSort = false;
    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    };

    $scope.getSortClass = function (column) {   
        if($scope.sortColumn == column)
        {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        }
        return '';
    };



    var employeesSearch = [
        { name: "Ben", gender: "Camy", salary: 5000,city:"London" },
        { name: "Anna", gender: "Kurts", salary: 5500, city: "Edinburg" },
        { name: "Sammy", gender: "Rogs", salary: 8000, city: "London" },
        { name: "Sally", gender: "Atkins", salary: 6000, city: "Edinburg" },
        { name: "Brodie", gender: "Atkins", salary: 5000, city: "Ireland" }
    ];

    $scope.employeesSearch = employeesSearch;

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // Search for name and city using one text box ( not used )
    $scope.search = function (item) {
        if ($scope.searchText == undefined) {
            return true;
        }
        else {
            if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1)
            {
                return true;
            }
        }
        return false;
    };
    /////////////////////////////////
    //Custom Filter
    var employeesCustom= [
        { name: "Ben", gender: 1, salary: 5000 },
        { name: "Anna", gender: 2, salary: 5500 },
        { name: "Sammy", gender: 1, salary: 8000 },
        { name: "Sally", gender: 2, salary: 6000 },
        { name: "Brodie", gender: 3, salary: 5000 }
    ];
    $scope.employeesCustom = employeesCustom;



    /////////////////////////////////
    //ng-hide ng-show
    var salHideShow = [
        { name: "Ben", gender: 1, salary: 5000 },
        { name: "Anna", gender: 2, salary: 5500 },
        { name: "Sammy", gender: 1, salary: 8000 },
        { name: "Sally", gender: 2, salary: 6000 },
        { name: "Brodie", gender: 3, salary: 5000 }
    ];
    $scope.salHideShow = salHideShow;


    ////////////////////////////////////////////////
    // ng-include
    var ngIncludeDemo = [
        { name: "Ben", gender: 1, salary: 5000 },
        { name: "Anna", gender: 2, salary: 5500 },
        { name: "Sammy", gender: 1, salary: 8000 },
        { name: "Sally", gender: 2, salary: 6000 },
        { name: "Brodie", gender: 3, salary: 5000 }
    ];
    $scope.ngIncludeDemo = ngIncludeDemo;


});



