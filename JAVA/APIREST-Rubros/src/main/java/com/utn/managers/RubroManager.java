/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.utn.managers;

import static com.utn.managers.Conexion.getConnection;
import com.utn.modelo.Rubro;
import com.utn.modelo.Producto;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Emi Chiófalo
 */
public class RubroManager {

    public List<Rubro> getRubros() {
        String query = "SELECT * FROM rubro;";
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        List<Rubro> rubros = new ArrayList();
        try {
            conn = Conexion.getConnection();
            ps = getConnection().prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()) {
                Rubro p = new Rubro();
                p.setId(rs.getLong(1));
                p.setDenominacion(rs.getString(2));
                rubros.add(p);
            }
        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            Conexion.close(conn);
            Conexion.close(ps);
            Conexion.close(rs);
        }
        return rubros;
    }

    public List<Producto> getProductos(long idRubro) {
        String query = "SELECT * FROM producto WHERE idrubro =" + idRubro + ";";
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        List<Producto> prods = new ArrayList();
        try {
            conn = Conexion.getConnection();
            ps = getConnection().prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()) {
                Producto p = new Producto();
                p.setId(rs.getLong(1));
                p.setCodigo(rs.getString(2));
                p.setDenominacion(rs.getString(3));
                p.setPrecio(rs.getDouble(4));
                prods.add(p);
            }
        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            Conexion.close(conn);
            Conexion.close(ps);
            Conexion.close(rs);
        }
        return prods;
    }

}
