CREATE OR REPLACE PROCEDURE sp_insert_ciudad(
    p_id_Ciudad UUID,
    p_Id_departamento UUID,
    p_Nombre VARCHAR,
    p_Activo BIT,
    p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO "Ciudad" ("id_Ciudad", "Id_departamento", "Nombre", "Activo", "Actualiza")
    VALUES (p_id_Ciudad, p_Id_departamento, p_Nombre, p_Activo, p_Actualiza);
END;
$$;
