CREATE OR REPLACE PROCEDURE InsertarEmpleado(
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
    INSERT INTO "Empleado" ("id_Empleado", "Nombre", "Apellido", "Email", "Telefono", "Direccion", "Fecha_Ingreso", "Cargo", "Salario", "id_Parqueadero", "Activo", "Actualiza")
    VALUES (gen_random_uuid(), p_Nombre, p_Apellido, p_Email, p_Telefono, p_Direccion, p_Fecha_Ingreso, p_Cargo, p_Salario, p_id_Parqueadero, p_Activo, CURRENT_TIMESTAMP);
END;
$$;
