CREATE OR REPLACE PROCEDURE ActualizarEmpleado(
    p_id_Empleado UUID,
    p_Nombre VARCHAR,
    p_Apellido VARCHAR,
    p_Email VARCHAR,
    p_Telefono INTEGER,
    p_Direccion VARCHAR,
    p_Fecha_Ingreso DATE,
    p_Cargo VARCHAR,
    p_Salario INTEGER,
    p_id_Parqueadero UUID,
    p_Activo BOOLEAN
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Empleado"
    SET "Nombre" = p_Nombre,
        "Apellido" = p_Apellido,
        "Email" = p_Email,
        "Telefono" = p_Telefono,
        "Direccion" = p_Direccion,
        "Fecha_Ingreso" = p_Fecha_Ingreso,
        "Cargo" = p_Cargo,
        "Salario" = p_Salario,
        "id_Parqueadero" = p_id_Parqueadero,
        "Activo" = p_Activo,
        "Actualiza" = CURRENT_TIMESTAMP
    WHERE "id_Empleado" = p_id_Empleado;
END;
$$;
