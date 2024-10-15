CREATE OR REPLACE PROCEDURE sp_delete_usuario(
    p_id_Usuario UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM "Usuario"
    WHERE "id_Usuario" = p_id_Usuario;
END;
$$;
