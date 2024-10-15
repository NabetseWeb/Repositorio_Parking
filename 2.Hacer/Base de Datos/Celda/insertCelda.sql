CREATE OR REPLACE PROCEDURE sp_insert_celda(
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
    INSERT INTO "Celda" ("id_Celda", "id_Parqueadero", "Número_Celda", "Tipo_Vehículo", "Disponible", "Activo", "Actualiza")
    VALUES (p_id_Celda, p_id_Parqueadero, p_Número_Celda, p_Tipo_Vehículo, p_Disponible, p_Activo, p_Actualiza);
END;
$$;
