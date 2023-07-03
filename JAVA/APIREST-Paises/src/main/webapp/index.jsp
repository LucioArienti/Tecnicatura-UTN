<%@page import="com.utn.managers.PaisManager"%>
<%@page import="com.utn.managers.Conexion"%>
<%@page import="com.utn.apprest.PaisRest"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="com.utn.modelo.Pais"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Agenda</title>
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
    <body onload="checkInput()">
        <h2 style="margin-left: 2%">PAISES</h2>
        <p style="margin-left: 2%">Filtro por población:<br><br>
        Mínimo <input type="number" name="min" id="min">
        Máximo <input type="number" name="max" id="max">
        <button type="submit" onclick="checkInput()">FILTRAR</button>
        </p>
        <hr>
        <hr style="border: white">
        <div id="listaPaises"> 
        </div>
        
    </body>
    <script src="Paises.js"></script>
</html>


    
