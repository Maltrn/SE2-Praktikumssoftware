<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html ng-app="SE2-Software">
<head>
  <title>SE2-Praktikumssoftware</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <link rel="stylesheet" href="<c:url value="/resources/css/custom.css" />" >
  <link rel="stylesheet" href="<c:url value="/resources/css/bootstrap/bootstrap-select.min.css" />" >
  <link rel="stylesheet" href="<c:url value="/resources/css/bootstrap/bootstrap-select.css" />" >
</head>
<body ng-controller="MainController">

  <!--Button-Group-Container start-->
  <div class="container">
    <br>
    <div class="btn-group btn-group-justified">
      <div class="btn-group">
        <button type="button" class="btn btn-my-default" ng-click="switchToNews()">News</button>
      </div>
      <div class="btn-group">
        <button type="button" class="btn btn-my-default" ng-click="switchToProfile()">Profile</button>
      </div>
      <div class="btn-group">
        <button type="button" class="btn btn-my-default dropdown-toggle" data-toggle="dropdown">
          Praktika <span class="caret"></span></button>
          <ul class="dropdown-menu" role="menu">
            <li><a href="" ng-click="switchToPraktika()">Veranstaltungen</a></li>
            <li><a href="" ng-click="switchToGruppen()">Gruppen</a></li>
          </ul>
      </div>
      <div class="btn-group">
        <button type="button" class="btn btn-my-default dropdown-toggle" data-toggle="dropdown">
          Leistungen <span class="caret"></span></button>
          <ul class="dropdown-menu" role="menu">
            <li><a href="" ng-click="switchToPVL()">PVL</a></li>
            <li><a href="" ng-click="switchToNoten()">Noten</a></li>
          </ul>
      </div>
      <div class="btn-group">
        <button type="button" class="btn btn-my-default dropdown-toggle" data-toggle="dropdown">
          Daten Im-/Export <span class="caret"></span></button>
          <ul class="dropdown-menu" role="menu">
            <li><a href="" ng-click="switchToDatenIm()">Daten imp.</a></li>
            <li><a href="" ng-click="switchToDatenEx()">Daten exp.</a></li>
          </ul>
      </div>
      <div class="btn-group">
        <button type="button" class="btn btn-my-default" ng-click="switchToMeldungen()">Meldungen <span class="badge">2</span></button>
      </div>
    </div>
  </div>
  <!--Button-Group-Container end-->

  <!--ContentContainer start-->
  <div class="container">
    <div ng-switch on="viewToggle">
      <div ng-switch-when="news">
        <div ng-include src="'resources/tabs/news.html'"></div>
      </div>
      <div ng-switch-when="profile">
        <div ng-include src="'resources/tabs/profile.html'"></div>
      </div>
      <div ng-switch-when="praktika">
        <div ng-include src="'resources/tabs/veranstaltungen.html'"></div>
      </div>
      <div ng-switch-when="gruppen">
        <div ng-include src="'resources/tabs/gruppen.html'"></div>
      </div>
      <div ng-switch-when="pvl">
        <div ng-include src="'resources/tabs/pvl.html'"></div>
      </div>
      <div ng-switch-when="noten">
        <div ng-include src="'resources/tabs/noten.html'"></div>
      </div>
      <div ng-switch-when="meldungen">
        <div ng-include src="'resources/tabs/meldungen.html'"></div>
      </div>
      <div ng-switch-when="datenex">
        <div ng-include src="'resources/tabs/datenex.html'"></div>
      </div>
      <div ng-switch-when="datenim">
        <div ng-include src="'resources/tabs/datenim.html'"></div>
      </div>
      <div ng-switch-default>
        <div ng-include src="'resources/tabs/profile.html'"></div>
      </div>
    </div>
  </div>
  <!--Contentcontainer end-->
</body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="<c:url value="/resources/js/bootstrap/bootstrap.min.js" />" ></script>
  <script src="<c:url value="/resources/js/bootstrap/bootstrap-select.min.js" />" ></script>
  <script src="<c:url value="/resources/js/bootstrap/bootstrap-select.js" />" ></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js" ></script>
  <script src="<c:url value="/resources/js/angular/controllers/MainController.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/customdirectives/selectpicker.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/customdirectives/selectpicker.js" />" ></script>
  <script src="<c:url value="/resources/js/uiElements.js" />" ></script>
</html>
