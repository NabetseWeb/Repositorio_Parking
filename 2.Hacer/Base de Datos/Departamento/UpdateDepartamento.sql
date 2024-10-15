CREATE OR REPLACE PROCEDURE ActualizarDepartamento(
    p_id_Departamento UUID,
    p_Nombre VARCHAR,
    p_Activo BIT
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Departamento"
    SET "Nombre" = p_Nombre,
        "Activo" = p_Activo,
        "Actualiza" = CURRENT_TIMESTAMP
    WHERE "id_Departamento" = p_id_Departamento;
END;
$$;
