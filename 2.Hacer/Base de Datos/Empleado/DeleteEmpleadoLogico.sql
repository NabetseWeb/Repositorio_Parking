CREATE OR REPLACE PROCEDURE EliminarEmpleadologico(
    p_id_Empleado UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Empleado"
    SET "activo" = false
    WHERE "id_Empleado" = p_id_Empleado;
END;
$$;
