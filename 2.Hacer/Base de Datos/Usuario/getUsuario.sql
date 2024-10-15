CREATE OR REPLACE PROCEDURE sp_get_usuario_by_id(
    p_id_Usuario UUID,
    OUT p_Nombre VARCHAR,
    OUT p_Email VARCHAR,
    OUT p_Telefono VARCHAR,
    OUT p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT "Nombre", "Email", "Telefono", "Actualiza"
    INTO p_Nombre, p_Email, p_Telefono, p_Actualiza
    FROM "Usuario"
    WHERE "id_Usuario" = p_id_Usuario;
END;
$$;
