/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.utn.managers;

import static com.utn.managers.Conexion.getConnection;
import com.utn.modelo.Pais;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Lucio Arienti
 */
public class PaisManager {
    
    public List<Pais> getAll() {
        String query = "SELECT codigo, nombre, continente, poblacion FROM pais;";
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        List<Pais> paises = new ArrayList();
        try {
            conn = Conexion.getConnection();
            ps = getConnection().prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()) {
                Pais p = new Pais();
                p.setCodigo(rs.getString(1));
                p.setNombre(rs.getString(2));
                p.setContinente(rs.getString(3));
                p.setPoblacion(rs.getInt(4));
                paises.add(p);
            }
        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            Conexion.close(conn);
            Conexion.close(ps);
            Conexion.close(rs);
        }
        return paises;
    }
    
    public List<Pais> getFiltered(int min, int max) {
        String query = "SELECT codigo, nombre, continente, poblacion FROM pais WHERE poblacion >"+min+" && poblacion < "+max+";";
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        List<Pais> paises = new ArrayList();
        try {
            conn = Conexion.getConnection();
            ps = getConnection().prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()) {
                Pais p = new Pais();
                p.setCodigo(rs.getString(1));
                p.setNombre(rs.getString(2));
                p.setContinente(rs.getString(3));
                p.setPoblacion(rs.getInt(4));
                paises.add(p);
            }
        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            Conexion.close(conn);
            Conexion.close(ps);
            Conexion.close(rs);
        }
        return paises;
    }
    
}
