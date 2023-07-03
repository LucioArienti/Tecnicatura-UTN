<%@page import="com.utn.managers.RubroManager"%>
<%@page import="com.utn.managers.Conexion"%>
<%@page import="com.utn.apprest.RubroRest"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="com.utn.modelo.Rubro"%>
<%@page import="com.utn.modelo.Producto"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Rubros</title>
    </head>
    <style>
        table{
            margin-left: 1%;
            margin-top: 1%;
        }
        table, th, td {
          padding: 8px;
        }
    </style>
    <body onload="loadSelect()">
        <h2 style="margin-left: 2%">Rubros-Productos</h2>
        
        <select name="selectRubros" id="selectRubros" style="margin-left: 2%;"></select>
        <button id="btListar" onclick="getProductosJSON()">BUSCAR</button>
        
        <hr>
        <hr style="border: white">
        <div id="listaProductos"> 
        </div>
        
    </body>
    <script src="Rubros.js"></script>
</html>


    
