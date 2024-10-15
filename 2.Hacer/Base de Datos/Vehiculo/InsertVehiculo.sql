CREATE OR REPLACE PROCEDURE sp_insert_vehiculo(
    p_id_Vehiculo UUID,
    p_Tipo_Vehiculo VARCHAR,
    p_Placa VARCHAR,
    p_Id_Usuario UUID,
    p_Estado_Vehiculo BIT,
    p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO "Vehiculo" ("id_Vehiculo", "Tipo_Vehiculo", "Placa", "Id_Usuario", "Estado_Vehiculo", "Actualiza")
    VALUES (p_id_Vehiculo, p_Tipo_Vehiculo, p_Placa, p_Id_Usuario, p_Estado_Vehiculo, p_Actualiza);
END;
$$;
