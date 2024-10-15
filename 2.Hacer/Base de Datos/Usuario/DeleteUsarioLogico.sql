CREATE OR REPLACE PROCEDURE EliminarUsuario(
    p_id_Usuario UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Usuario"
    SET "activo" = false
    WHERE "id_Usuario" = p_id_Usuario;
END;
$$;
