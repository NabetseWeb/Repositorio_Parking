CREATE OR REPLACE PROCEDURE sp_insert_usuario(
    p_id_Usuario UUID,
    p_Nombre VARCHAR,
    p_Email VARCHAR,
    p_Telefono VARCHAR,
    p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO "Usuario" ("id_Usuario", "Nombre", "Email", "Telefono", "Actualiza")
    VALUES (p_id_Usuario, p_Nombre, p_Email, p_Telefono, p_Actualiza);
END;
$$;
