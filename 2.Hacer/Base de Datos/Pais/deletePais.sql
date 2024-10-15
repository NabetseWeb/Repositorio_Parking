CREATE OR REPLACE PROCEDURE sp_delete_pais(
    p_id_Pais UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM "Pais"
    WHERE "id_Pais" = p_id_Pais;
END;
$$;

