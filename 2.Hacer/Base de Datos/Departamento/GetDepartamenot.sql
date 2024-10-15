CREATE OR REPLACE FUNCTION ObtenerDepartamento(
    p_id_Departamento UUID
)
RETURNS TABLE (
    id_Departamento UUID,
    Id_Pais UUID,
    Nombre VARCHAR,
    Activo BIT,
    Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT "id_Departamento", "Id_Pais", "Nombre", "Activo", "Actualiza"
    FROM "Departamento"
    WHERE "id_Departamento" = p_id_Departamento;
END;
$$;
