CREATE OR REPLACE PROCEDURE sp_get_parking_by_id(
    p_id_Parqueadero UUID,
    OUT p_id_Ciudad UUID,
    OUT p_Dirección VARCHAR,
    OUT p_Telefono VARCHAR,
    OUT p_Actualiza TIMESTAMP,
    OUT p_Activo BIT,
    OUT p_Nombre UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT "id_Ciudad", "Dirección", "Telefono", "Actualiza", "Activo", "Nombre"
    INTO p_id_Ciudad, p_Dirección, p_Telefono, p_Actualiza, p_Activo, p_Nombre
    FROM "Parking"
    WHERE "id_Parqueadero" = p_id_Parqueadero;
END;
$$;
