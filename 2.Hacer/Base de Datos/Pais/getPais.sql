CREATE OR REPLACE PROCEDURE sp_get_pais_by_id(
    p_id_Pais UUID,
    OUT p_Nombre VARCHAR,
    OUT p_Activo BIT,
    OUT p_Actualiza TIMESTAMP
)
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT "Nombre", "Activo", "Actualiza"
    INTO p_Nombre, p_Activo, p_Actualiza
    FROM "Pais"
    WHERE "id_Pais" = p_id_Pais;
END;
$$;
