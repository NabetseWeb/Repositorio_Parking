CREATE OR REPLACE PROCEDURE EliminarCelda(
    p_id_Celda UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Celda"
    SET "activo" = false
    WHERE "id_Celda" = p_id_Celda;
END;
$$;
