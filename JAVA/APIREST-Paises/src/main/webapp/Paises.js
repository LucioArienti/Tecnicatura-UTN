/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Pais {
    constructor() {
        this.codigo = "";
        this.nombre = "";
        this.continente = "";
        this.poblacion = 0;
    }
}

function checkInput() {
    var min = document.getElementById('min');
    var max = document.getElementById('max');
    if (!min.value || !max.value) {
        getPaisesJSON();
    } else {
        getFiltroPaisesJSON(min.value, max.value);
    }
}

function getPaisesJSON() {
    return __awaiter(this, void 0, void 0, function* () {
        let urlServer = 'http://localhost:8080/apprest/rest/paises/all';
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
            grillaHTML += '<td>' + c.codigo + '</td>';
            grillaHTML += '<td>' + c.nombre + '</td>';
            grillaHTML += '<td>' + c.continente + '</td>';
            grillaHTML += '<td>' + c.poblacion + '</td>';
            grillaHTML += '</tr>';
        }
        grillaHTML += '</table>';
        ;
        var div = document.getElementById("listaPaises");
        if (div) {
            div.innerHTML = grillaHTML;
        }
    });
}

function getFiltroPaisesJSON(min, max) {
    return __awaiter(this, void 0, void 0, function* () {
        let urlServer = 'http://localhost:8080/apprest/rest/paises/filter/' + min + '/' + max;
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
            grillaHTML += '<td>' + c.codigo + '</td>';
            grillaHTML += '<td>' + c.nombre + '</td>';
            grillaHTML += '<td>' + c.continente + '</td>';
            grillaHTML += '<td>' + c.poblacion + '</td>';
            grillaHTML += '</tr>';
        }
        grillaHTML += '</table>';
        ;
        var div = document.getElementById("listaPaises");
        if (div) {
            div.innerHTML = grillaHTML;
        }
    });
}

function getEncabezado(grillaHTML) {
    grillaHTML += '<table>';
    grillaHTML += '<tr>';
    grillaHTML += '<td><b>CODIGO</b></td>';
    grillaHTML += '<td><b>NOMBRE</b></td>';
    grillaHTML += '<td><b>CONTINENTE</b></td>';
    grillaHTML += '<td><b>POBLACION</b></td>';
    grillaHTML += '</tr>';
    return grillaHTML;
}
