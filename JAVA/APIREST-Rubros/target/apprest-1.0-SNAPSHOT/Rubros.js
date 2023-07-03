/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Rubro {
    constructor() {
        this.id = 0;
        this.denominacion = "";
    }
}

class Producto {
    constructor() {
        this.id = 0;
        this.codigo = "";
        this.denominacion = "";
        this.precio = 0;
    }
}

function loadSelect(){
    return __awaiter(this, void 0, void 0, function* () {
        let urlServer = 'http://localhost:8080/apprest/rest/rubro/all';
        let response = yield fetch(urlServer, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors'
        });
        console.log(response);
        let datos = yield response.json();
        let options = "";
        for (const c of datos) {
            options += '<option value="' + c.id.toString() + '">' + c.denominacion.toUpperCase() + '</option>\n';
        }
        ;
        var div = document.getElementById("selectRubros");
        if (div) {
            div.innerHTML = options;
        }
    });
}

function getProductosJSON() {
    return __awaiter(this, void 0, void 0, function* () {
        const idRubro = document.getElementById('selectRubros').value;
        let urlServer = 'http://localhost:8080/apprest/rest/rubro/productos/'+idRubro;
        let response = yield fetch(urlServer, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors'
        });
        console.log(response);
        let datos = yield response.json();
        let grillaHTML = "";
        grillaHTML = getEncabezado(grillaHTML);
        for (const c of datos) {
            grillaHTML += '<tr>';
            grillaHTML += '<td>' + c.id + '</td>';
            grillaHTML += '<td>' + c.codigo + '</td>';
            grillaHTML += '<td>' + c.denominacion + '</td>';
            grillaHTML += '<td>' + c.precio + '</td>';
            grillaHTML += '</tr>';
        }
        grillaHTML += '</table>';
        ;
        var div = document.getElementById("listaProductos");
        if (div) {
            div.innerHTML = grillaHTML;
        }
    });
}

function getEncabezado(grillaHTML) {
    grillaHTML += '<table>';
    grillaHTML += '<tr>';
    grillaHTML += '<td><b>ID</b></td>';
    grillaHTML += '<td><b>CÓDIGO</b></td>';
    grillaHTML += '<td><b>DENOMINACIÓN</b></td>';
    grillaHTML += '<td><b>PRECIO</b></td>';
    grillaHTML += '</tr>';
    return grillaHTML;
}
