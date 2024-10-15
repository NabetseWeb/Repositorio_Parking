CREATE OR REPLACE PROCEDURE insertar_pais(
    p_id_pais UUID,
    p_nombre VARCHAR,
    p_activo BIT,
    p_actualiza TIMESTAMP
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO "Pais" ("id_Pais", "Nombre", "Activo", "Actualiza")
    VALUES (p_id_pais, p_nombre, p_activo, p_actualiza);
END;
$$;
