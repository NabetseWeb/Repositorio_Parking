CREATE OR REPLACE PROCEDURE actualizar_pais(
    p_id_pais UUID,
    p_nombre VARCHAR,
    p_activo BIT,
    p_actualiza TIMESTAMP
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Pais"
    SET "Nombre" = p_nombre,
        "Activo" = p_activo,
        "Actualiza" = p_actualiza
    WHERE "id_Pais" = p_id_pais;
END;
$$;
