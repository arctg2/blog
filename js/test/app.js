var app = angular.module("app", []);
app.controller("MyController", [ '$scope', function($scope) {
    $scope.clock = {
        now : new Date().Format("yyyy-MM-dd hh:mm:ss")
    };

    var updateClock = function() {
        $scope.clock.now = new Date().Format("yyyy-MM-dd hh:mm:ss");
    };

    setInterval(function() {
        $scope.$apply(updateClock);
    }, 1000);

    updateClock();
} ]);

app.controller("CalcController", function($scope) {
    $scope.counter = 0;
    $scope.add = function(amount) {
        $scope.counter += amount;
    };
    $scope.subtract = function(amount) {
        $scope.counter -= amount;
    };
});

app.controller("showController", function($scope) {
    $scope.showInfo = function() {
        var url = "http://jofy1004.github.io/blog/data/dataFile.xml"
        QueryData.query(url).done(function(data) {
            if (data) {
                $scope.title = $(data).find("title");
                $scope.content = $(data).find("content");
            }
        });
    }
});
