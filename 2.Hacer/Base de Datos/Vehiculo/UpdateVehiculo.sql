CREATE OR REPLACE PROCEDURE sp_update_vehiculo(
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
    UPDATE "Vehiculo"
    SET "Tipo_Vehiculo" = p_Tipo_Vehiculo,
        "Placa" = p_Placa,
        "Id_Usuario" = p_Id_Usuario,
        "Estado_Vehiculo" = p_Estado_Vehiculo,
        "Actualiza" = p_Actualiza
    WHERE "id_Vehiculo" = p_id_Vehiculo;
END;
$$;
