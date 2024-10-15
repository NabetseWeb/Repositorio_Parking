CREATE OR REPLACE PROCEDURE sp_get_ciudad_by_id(
    p_id_Ciudad UUID,
    OUT p_Id_departamento UUID,
    OUT p_Nombre VARCHAR,
    OUT p_Activo BIT,
    OUT p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT "Id_departamento", "Nombre", "Activo", "Actualiza"
    INTO p_Id_departamento, p_Nombre, p_Activo, p_Actualiza
    FROM "Ciudad"
    WHERE "id_Ciudad" = p_id_Ciudad;
END;
$$;
