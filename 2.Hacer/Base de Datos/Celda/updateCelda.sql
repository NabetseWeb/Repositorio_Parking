CREATE OR REPLACE PROCEDURE sp_update_celda(
    p_id_Celda UUID,
    p_id_Parqueadero UUID,
    p_Número_Celda VARCHAR,
    p_Tipo_Vehículo VARCHAR,
    p_Disponible BIT,
    p_Activo BIT,
    p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Celda"
    SET "id_Parqueadero" = p_id_Parqueadero,
        "Número_Celda" = p_Número_Celda,
        "Tipo_Vehículo" = p_Tipo_Vehículo,
        "Disponible" = p_Disponible,
        "Activo" = p_Activo,
        "Actualiza" = p_Actualiza
    WHERE "id_Celda" = p_id_Celda;
END;
$$;
