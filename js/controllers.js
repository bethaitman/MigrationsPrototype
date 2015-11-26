'use strict';

/* Controllers */
var searchApp = angular.module('searchApp', []);

searchApp.controller('searchCtrl', function ($scope) {

  $scope.menuList = ["File", "Edit", "View", "Tools", "Window", "Community", "Help"];
  $scope.objectExplorerContents = ["Server", "Databases", "System Databases", "Adventureworks", "Development", "MigTeamDev", "MigTeamTest", "MigTeamStaging", "MigTeamProd"];
  $scope.ssmsTabs = [{
    "name": "SQLQuery1.sql",
    "class": "disabled"
  },{
    "name": "SQLQuery2.sql",
    "class": "disabled"
  },{
    "name": "SQL Source Control",
    "class": "active"
  }];

  $scope.socTabs = [{
    "name": "Commit changes",
    "class": "active"
  },{
    "name": "Get latest",
    "class": ""
  },{
    "name": "Migrations",
    "class": ""
  },{
    "name": "Object locking",
    "class": ""
  },{
    "name": "Setup",
    "class": ""
  }];

  $scope.commitGridContents = [{
    "id": 0,
    "changeType": "Drop",
    "name": "Foo",
    "objectType": "Table",
    "owner": "dbo",
    "diffPaneInfoLeft": "Insert diff here for Foo",
    "diffPaneInfoRight": "Insert diff here for Foo",
    "showScript": "false",
    "migScript": "This will be the editable migration script",
    "checked": "false"
  },{
    "id": 1,
    "changeType": "Edit",
    "name": "ProductDescription",
    "objectType": "Table",
    "owner": "Production",
    "diffPaneInfoLeft": "This is a piece of code to show in the diff pane for ProductDescription",
    "diffPaneInfoRight": "More diff here for ProductDescription",
    "showScript": "false",
    "migScript": "This will be the editable migration script",
    "checked": "false"
  }];

  $scope.previousCommits = [{
    "id": 0,
    "message": "Added a table",
    "date": "12.10.15",
    "checked": "false"
  },{
     "id": 1,
    "message": "Renamed a column",
    "date": "13.10.15",
    "checked": "false"
  }];
  
  $scope.selectedRow = {};
  $scope.setRowSelection = function(item) {
    $scope.selectedRow = item;
  };

  $scope.clickEditButton = function(item) {
    if (item.showScript === true) {
      item.showScript = false;
    } else {
      item.showScript = true;
    }
  };
  
});
