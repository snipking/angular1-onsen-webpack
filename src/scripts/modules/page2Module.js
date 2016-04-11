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

var page2Controller = require("../controllers/page2Controller");
var filter1 = require("../filters/filter1");
var service1 = require("../services/service1");
var hngDirective1 = require("../directives/hngDirective1");
require("../../css/page2.css");

window.cordovaAppPage2Module = angular.module('app.page2Module', []);

window.cordovaAppPage2Module.controller("page2Controller", page2Controller);
window.cordovaAppPage2Module.filter("filter1", filter1);
window.cordovaAppPage2Module.service("service1", service1);
window.cordovaAppPage2Module.directive("hngDirective1", hngDirective1);
