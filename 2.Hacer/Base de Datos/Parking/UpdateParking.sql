CREATE OR REPLACE PROCEDURE sp_update_parking(
    p_id_Parqueadero UUID,
    p_id_Ciudad UUID,
    p_Dirección VARCHAR,
    p_Telefono VARCHAR,
    p_Actualiza TIMESTAMP,
    p_Activo BIT,
    p_Nombre UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Parking"
    SET "id_Ciudad" = p_id_Ciudad,
        "Dirección" = p_Dirección,
        "Telefono" = p_Telefono,
        "Actualiza" = p_Actualiza,
        "Activo" = p_Activo,
        "Nombre" = p_Nombre
    WHERE "id_Parqueadero" = p_id_Parqueadero;
END;
$$;
