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
var ChildComponent = (function () {
    function ChildComponent() {
        this.eventoTeste = new core_1.EventEmitter();
        //Necessário utilizar Output() para emissor de eventos.
        this.novoObjeto = new Classe();
    }
    ChildComponent.prototype.dispara = function (nome) {
        this.novoObjeto.name = nome;
        this.eventoTeste.emit(this.novoObjeto);
        console.log(this.novoObjeto);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Classe)
    ], ChildComponent.prototype, "obj", void 0);
    __decorate([
        core_1.Output("testeEventoTeste"), 
        __metadata('design:type', Object)
    ], ChildComponent.prototype, "eventoTeste", void 0);
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'child-component',
            template: "\n    <hr>\n    <h3>ChildComponent</h3>\n    <p>{{obj.name}}</p>\n    <label>Funciona two-way com ngModel</label><input [(ngModel)]=\"obj.name\"/><br>\n    <label>Teste EventEmitter - Veja console.log()</label>\n    <input (input)=\"dispara($event.target.value)\" />\n    <hr>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
var Classe = (function () {
    function Classe() {
    }
    return Classe;
}());
exports.Classe = Classe;
//# sourceMappingURL=app.child.component.js.map