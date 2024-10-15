CREATE OR REPLACE FUNCTION insertar_pais(
    p_id_Pais UUID,
    p_Nombre VARCHAR,
    p_Activo BIT
) RETURNS VOID AS $$
BEGIN
    INSERT INTO "Pais" ("id_Pais", "Nombre", "Activo", "Actualiza")
    VALUES (p_id_Pais, p_Nombre, p_Activo, NOW());
END;
$$ LANGUAGE plpgsql;
