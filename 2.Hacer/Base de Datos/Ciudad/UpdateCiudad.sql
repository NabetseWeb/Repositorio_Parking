CREATE OR REPLACE PROCEDURE sp_update_ciudad(
    p_id_Ciudad UUID,
    p_Id_departamento UUID,
    p_Nombre VARCHAR,
    p_Activo BIT,
    p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Ciudad"
    SET "Id_departamento" = p_Id_departamento,
        "Nombre" = p_Nombre,
        "Activo" = p_Activo,
        "Actualiza" = p_Actualiza
    WHERE "id_Ciudad" = p_id_Ciudad;
END;
$$;
