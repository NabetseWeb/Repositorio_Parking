CREATE OR REPLACE PROCEDURE sp_get_celda_by_id(
    p_id_Celda UUID,
    OUT p_id_Parqueadero UUID,
    OUT p_Número_Celda VARCHAR,
    OUT p_Tipo_Vehículo VARCHAR,
    OUT p_Disponible BIT,
    OUT p_Activo BIT,
    OUT p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT "id_Parqueadero", "Número_Celda", "Tipo_Vehículo", "Disponible", "Activo", "Actualiza"
    INTO p_id_Parqueadero, p_Número_Celda, p_Tipo_Vehículo, p_Disponible, p_Activo, p_Actualiza
    FROM "Celda"
    WHERE "id_Celda" = p_id_Celda;
END;
$$;
