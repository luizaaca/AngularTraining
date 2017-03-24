"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_child_component_1 = require('./app.child.component');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.heroImageUrl = 'http://kingofwallpapers.com/imagem/imagem-005.jpg';
        this.isUnchanged = true;
        this.classes = 'teste';
        this.child = new app_child_component_1.Classe();
        this.evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
        this.child.name = 'Angular Child++++';
        this.child.id = 1;
    }
    AppComponent.prototype.getSrc = function () {
        return this.heroImageUrl;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>Hello {{name}}</h1>\n  <img bind-src=\"getSrc()\">\n  <img src=\"{{getSrc()}}\"><br>\n  <button [disabled]=\"isUnchanged\">Cancel is disabled</button>\n  <div ngClass=\"teste\">[ngClass] binding to the classes property</div>\n  <child-component obj=\"{{child}}\"></child-component>\n  <p>// interpola\u00E7\u00E3o s\u00F3 funciona com strings, em caso de objetos complexos usar property binding</p>\n  <child-component [obj]=\"child\"></child-component>\n  <p><span>\"{{evilTitle}}\" is the <i>interpolated</i> evil title.</span></p>\n  <p>\"<span [innerHTML]=\"evilTitle\"></span>\" is the <i>property bound</i> evil title.</p>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map