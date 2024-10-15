CREATE OR REPLACE PROCEDURE sp_update_usuario(
    p_id_Usuario UUID,
    p_Nombre VARCHAR,
    p_Email VARCHAR,
    p_Telefono VARCHAR,
    p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Usuario"
    SET "Nombre" = p_Nombre,
        "Email" = p_Email,
        "Telefono" = p_Telefono,
        "Actualiza" = p_Actualiza
    WHERE "id_Usuario" = p_id_Usuario;
END;
$$;
