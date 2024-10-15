CREATE OR REPLACE PROCEDURE EliminarDepartamento(
    p_id_Departamento UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Departamento"
    SET "activo" = false
    WHERE "id_Departamento" = p_id_Departamento;
END;
$$;
