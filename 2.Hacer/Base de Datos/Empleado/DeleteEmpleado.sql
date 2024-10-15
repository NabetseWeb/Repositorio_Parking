CREATE OR REPLACE PROCEDURE EliminarEmpleado(
    p_id_Empleado UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM "Empleado"
    WHERE "id_Empleado" = p_id_Empleado;
END;
$$;

