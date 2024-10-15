
CREATE OR REPLACE PROCEDURE sp_delete_celda(
    p_id_Celda UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM "Celda"
    WHERE "id_Celda" = p_id_Celda;
END;
$$;
