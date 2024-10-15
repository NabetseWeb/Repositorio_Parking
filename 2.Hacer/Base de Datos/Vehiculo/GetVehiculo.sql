CREATE OR REPLACE PROCEDURE sp_get_vehiculo_by_id(
    p_id_Vehiculo UUID,
    OUT p_Tipo_Vehiculo VARCHAR,
    OUT p_Placa VARCHAR,
    OUT p_Id_Usuario UUID,
    OUT p_Estado_Vehiculo BIT,
    OUT p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT "Tipo_Vehiculo", "Placa", "Id_Usuario", "Estado_Vehiculo", "Actualiza"
    INTO p_Tipo_Vehiculo, p_Placa, p_Id_Usuario, p_Estado_Vehiculo, p_Actualiza
    FROM "Vehiculo"
    WHERE "id_Vehiculo" = p_id_Vehiculo;
END;
$$;

