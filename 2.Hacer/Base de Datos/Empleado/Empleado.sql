CREATE TABLE "Empleado" (
    "id_Empleado" UUID NOT NULL UNIQUE,
    "Nombre" VARCHAR,
    "Apellido" VARCHAR,
    "Email" VARCHAR,
    "Telefono" INTEGER,
    "Direccion" VARCHAR,
    "Fecha_Ingreso" DATE,
    "Cargo" VARCHAR,
    "Salario" INTEGER,
    "id_Parqueadero" UUID,
    "Activo" BOOLEAN,
    "Actualiza" TIMESTAMP,
    PRIMARY KEY("id_Empleado")
);
