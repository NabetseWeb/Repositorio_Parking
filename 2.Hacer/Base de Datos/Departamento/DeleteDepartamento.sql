CREATE OR REPLACE PROCEDURE EliminarDepartamento(
    p_id_Departamento UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM "Departamento"
    WHERE "id_Departamento" = p_id_Departamento;
END;
$$;
