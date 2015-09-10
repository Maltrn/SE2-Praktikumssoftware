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
  <link rel="stylesheet" href="<c:url value="/resources/css/bootstrap/ui-bootstrap-csp.css" />" >
  
</head>
<body ng-controller="TabController">
  <div class="container">
    <div class="row">

      <!--Buttonpanel start-->
      <div class="col-sm-12">
          <div class="btn-group btn-group-justified">
          <div class="btn-group">
            <button type="button" class="btn btn-my-default" ng-click="switchToNews()">News</button>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-my-default" ng-click="switchToProfile()">Profile</button>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-my-default dropdown-toggle" data-toggle="dropdown">
              Veranstaltungen <span class="caret"></span></button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="" ng-click="switchToPraktika()"><span class="text text-success">Pflichtpraktika</span></a></li>
                <li><a href="" ng-click="switchToWahlpflicht()"><span class="text text-danger">Wahlpflicht</span></a></li>
                <li><a href="" ng-click="switchToProjekte()"><span class="text text-danger">Projekte</span></a></li>
              </ul>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-my-default" ng-click="switchToLeistungen()">Leistungen</button>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-my-default dropdown-toggle" data-toggle="dropdown">
              Daten Im-/Export <span class="caret"></span></button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="" ng-click="switchToDatenIm()"><span class="text text-danger">Daten imp.</span></a></li>
                <li><a href="" ng-click="switchToDatenEx()"><span class="text text-danger">Daten ex.</span></a></li>
              </ul>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-my-default" ng-click="switchToMeldungen()">Meldungen <span class="badge">2</span></button>
          </div>
          <div class="btn-group">
            <a href="login.html"><button type="button" class="btn btn-my-default">Logout</button></a>
          </div>
        </div>
      </div>
    </div>
    <!--Buttonpanel end-->

    <!-- Contentrow start-->
    <div class="row">
      <div class="col-sm-12">
        <div ng-switch on="getCurrTab()">
          <div ng-switch-when="news">
            <div ng-include src="getNews()"></div>
          </div>
          <div ng-switch-when="profile">
            <div ng-include src="getProfile()"></div>
          </div>
          <div ng-switch-when="praktika">
            <div ng-include src="getPraktika()"></div>
          </div>
          <div ng-switch-when="gruppen">
            <div ng-include src="getGruppen()"></div>
          </div>
          <div ng-switch-when="leistungen">
            <div ng-include src="getLeistungen()"></div>
          </div>
          <div ng-switch-when="meldungen">
            <div ng-include src="getMeldungen()"></div>
          </div>
          <div ng-switch-when="datenex">
            <div ng-include src="getDatenEx()"></div>
          </div>
          <div ng-switch-when="datenim">
            <div ng-include src="getDatenIm()"></div>
          </div>
          <div ng-switch-when="tmUebersicht">
            <div ng-include src="getTmUebersicht()"></div>
          </div>
          <div ng-switch-default>
            <div ng-include src="getProfile()"></div>
          </div>
        </div>
      </div>
    </div>
    <!--Contentrow end-->
  </div>
</body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="<c:url value="/resources/js/bootstrap/bootstrap.min.js" />" ></script>
  <script src="<c:url value="/resources/js/bootstrap/bootstrap-select.min.js" />" ></script>
  <script src="<c:url value="/resources/js/bootstrap/bootstrap-select.js" />" ></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js" ></script>
  <script src="<c:url value="/resources/js/angular/app/app.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/services/AutoScrollService.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/services/VeranstGruppCommunicator.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/services/GruppTmUebersCommunicator.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/controllers/TabController.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/controllers/ModalController.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/controllers/ExtController.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/controllers/EditController.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/controllers/VeranstaltungsController.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/controllers/GruppenController.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/controllers/TMUebersichtController.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/controllers/DateController.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/controllers/LeistungenController.js" />" ></script>
  <script src="<c:url value="/resources/js/bootstrap/ui-bootstrap.min.js" />" ></script>
  <script src="<c:url value="/resources/js/bootstrap/ui-bootstrap-tpls.js" />" ></script>
  <script src="<c:url value="/resources/js/bootstrap/ui-bootstrap-tpls.min.js" />" ></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-scroll/0.7.2/angular-scroll.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-scroll/0.7.2/angular-scroll.min.js"></script>
</html>
