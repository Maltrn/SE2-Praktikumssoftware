<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en" ng-app="SE2-Login">
<head>
  <title>Login</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <link rel="stylesheet" href="<c:url value="/resources/css/custom.css" />" >
</head>
<body ng-controller="LoginController">
  <div class="container">
    <br>
    <div class="row">
      <div class="col-sm-10 col-lg-offset-1 text-center">
        <div class="panel panel-cust-default">
          <div class="panel-body">
            <h1 class="text-muted">SE2-Praktikumssoftware</h1>
            <br>
            <form class="form-signin col-sm-8 col-lg-offset-2 text-center" ng-model="panel" ng-submit="login(username, passwort)" method="post">
              <label for="inputEmail" class="sr-only">Benutzername</label>
              <input type="username" id="inputUser" class="form-control" placeholder="Benutzername" ng-model="username" required autofocus>
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" id="inputPassword" class="form-control" placeholder="Passwort" ng-model="passwort" required>
              <p class="help-box"ng-show="fail"><span class="text text-danger"> <small>Benutzername und/oder Passwort falsch.</small></span></p>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="remember-me">Daten merken
                </label>
              </div>
              <p><button class="btn btn-my-block btn-lg" type="submit">Anmelden</button></p>
              <br>
            </form>
            <div class="panel panel-cust-primary col-sm-10 col-lg-offset-1">
                <div class="panel-body text-left">
                  <h2 class="text-left"><strong>News</strong></h2>
                   Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                   invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                   eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                   sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                   <br>
                   <h4 class="text-left"><strong>Header 2</strong></h4>
                   consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                   dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                   dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                   Lorem ipsum dolor sit amet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <script src="<c:url value="/resources/js/bootstrap/ui-bootstrap.min.js" />" ></script>
  <script src="<c:url value="/resources/js/bootstrap/ui-bootstrap-tpls.js" />" ></script>
  <script src="<c:url value="/resources/js/bootstrap/ui-bootstrap-tpls.min.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/app/login.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/controllers/LoginController.js" />" ></script>
  <script src="<c:url value="/resources/js/angular/services/database/DBLoginService.js" />" ></script>
</html>
