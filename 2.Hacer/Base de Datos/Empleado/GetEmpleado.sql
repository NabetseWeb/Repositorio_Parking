CREATE OR REPLACE FUNCTION ObtenerEmpleado(
    p_id_Empleado UUID
)
RETURNS TABLE (
    id_Empleado UUID,
    Nombre VARCHAR,
    Apellido VARCHAR,
    Email VARCHAR,
    Telefono INTEGER,
    Direccion VARCHAR,
    Fecha_Ingreso DATE,
    Cargo VARCHAR,
    Salario INTEGER,
    id_Parqueadero UUID,
    Activo BOOLEAN,
    Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT "id_Empleado", "Nombre", "Apellido", "Email", "Telefono", "Direccion", "Fecha_Ingreso", "Cargo", "Salario", "id_Parqueadero", "Activo", "Actualiza"
    FROM "Empleado"
    WHERE "id_Empleado" = p_id_Empleado;
END;
$$;
