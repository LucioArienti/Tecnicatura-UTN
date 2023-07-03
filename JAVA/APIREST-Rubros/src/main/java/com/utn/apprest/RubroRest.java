/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.utn.apprest;

import com.utn.managers.RubroManager;
import com.utn.modelo.Rubro;
import com.utn.modelo.Producto;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;
import javax.ws.rs.PathParam;
/**
 *
 * @author Emi Chiófalo
 */

@Path("rubro")
public class RubroRest {
    
    @GET
    @Path("all")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Rubro> getRubros(){
        //http://localhost:8080/apprest/rest/rubro/all
        RubroManager mRubro = new RubroManager();
        return mRubro.getRubros();
    }
    
    @GET
    @Path("productos/{idRubro}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Producto> getProductosXidRubro(@PathParam("idRubro") int idRubro){
        //http://localhost:8080/apprest/rest/rubro/productos/80
        RubroManager mRubro = new RubroManager();
        return mRubro.getProductos(idRubro);
    }
}
