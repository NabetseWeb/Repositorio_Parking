CREATE OR REPLACE PROCEDURE sp_delete_ciudad(
    p_id_Ciudad UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM "Ciudad"
    WHERE "id_Ciudad" = p_id_Ciudad;
END;
$$;
