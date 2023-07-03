/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.utn.apprest;

import com.utn.managers.PaisManager;
import com.utn.modelo.Pais;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;
import javax.ws.rs.PathParam;
/**
 *
 * @author Lucio Arienti
 */

@Path("paises")
public class PaisRest {
    
    @GET
    @Path("all")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Pais> getPaises(){
        //http://localhost:8080/apprest/rest/paises/all
        PaisManager mPais = new PaisManager();
        return mPais.getAll();
    }
    
    @GET
    @Path("filter/{min}/{max}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Pais> getPaisesXFiltro(@PathParam("min") int min, @PathParam("max") int max){
        //http://localhost:8080/apprest/rest/paises/filter/5000/30000
        PaisManager mPais = new PaisManager();
        return mPais.getFiltered(min, max);
    }
}
