/* 
 * Copyright 2016 snipking.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
/**
 * can require pages with file-loader @ webpack
 * or let gulp go through html files
 */ 
//require('file?name=pages/[name].[ext]!../../pages/page1.html');

var page1Controller = ["$scope", "$log", "$ocLazyLoad", function ($scope, $log, $ocLazyLoad) {
        $scope.pushPage = function () {
            require.ensure(["../modules/page2Module"], function (require) {
                var page2Controller = require("../modules/page2Module");
                $ocLazyLoad.inject("app.page2Module").then(function (args) {
                    $log.debug('will push page');
                    globalNavigator.pushPage('pages/page2.html', {animation: 'slide'});
                }, function (err) {
                    $log.error(err);
                });
            }, "page2module");
        };
    }];

module.exports = page1Controller;
