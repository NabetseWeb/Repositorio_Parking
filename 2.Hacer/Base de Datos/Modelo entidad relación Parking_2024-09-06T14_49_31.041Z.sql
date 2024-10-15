CREATE TABLE "Pais" (
    "id_Pais" UUID NOT NULL UNIQUE,
    "Nombre" VARCHAR NOT NULL,
    "Activo" BIT,
    "Actualiza" TIMESTAMP,
    PRIMARY KEY("id_Pais")
);

CREATE TABLE "Departamento" (
    "id_Departamento" UUID NOT NULL UNIQUE,
    "Id_Pais" UUID,
    "Nombre" VARCHAR NOT NULL,
    "Activo" BIT,
    "Actualiza" TIMESTAMP,
    PRIMARY KEY("id_Departamento")
);

CREATE TABLE "Ciudad" (
    "id_Ciudad" UUID NOT NULL UNIQUE,
    "Id_departamento" UUID,
    "Nombre" VARCHAR NOT NULL,
    "Activo" BIT,
    "Actualiza" TIMESTAMP,
    PRIMARY KEY("id_Ciudad")
);

CREATE TABLE "Parking" (
    "id_Parqueadero" UUID NOT NULL UNIQUE,
    "id_Ciudad" UUID,
    "Dirección" VARCHAR,
    "Telefono" VARCHAR,
    "Actualiza" TIMESTAMP,
    "Activo" BIT,
    "Nombre" VARCHAR,
    PRIMARY KEY("id_Parqueadero")
);

CREATE TABLE "Vehiculo" (
    "id_Vehiculo" UUID NOT NULL UNIQUE,
    "Tipo_Vehiculo" VARCHAR,
    "Placa" VARCHAR,
    "Id_Usuario" UUID,
    "Estado_Vehiculo" BIT,
    "Actualiza" TIMESTAMP,
    PRIMARY KEY("id_Vehiculo")
);

CREATE TABLE "Usuario" (
    "id_Usuario" UUID NOT NULL UNIQUE,
    "Nombre" VARCHAR,
    "Apellido" VARCHAR,
    "Email" VARCHAR,
    "Telefono" VARCHAR,
    "Direccion" VARCHAR,
    "Actualiza" TIMESTAMP,
    "Estado_Civil" VARCHAR,
    PRIMARY KEY("id_Usuario")
);

CREATE TABLE "Reserva" (
    "id_Reserva" UUID NOT NULL UNIQUE,
    "id_Parqueadero" UUID,
    "id_Vehiculo" UUID,
    "Fecha_Reserva" DATE,
    "Hora_Entrada" TIME,
    "Hora_Salida" TIME,
    "Estado" VARCHAR,
    "Actualiza" TIMESTAMP,
    PRIMARY KEY("id_Reserva")
);

CREATE TABLE "Celda" (
    "id_Celda" UUID NOT NULL UNIQUE,
    "id_Parqueadero" UUID,
    "Número_Celda" VARCHAR,
    "Tipo_Vehículo" VARCHAR,
    "Disponible" BIT,
    "Activo" BIT,
    "Actualiza" TIMESTAMP,
    PRIMARY KEY("id_Celda")
);

CREATE TABLE "Transaccion" (
    "id_Pago" UUID NOT NULL UNIQUE,
    "id_Reserva" UUID,
    "Monto" DECIMAL,
    "Método_Pago" VARCHAR,
    "Fecha_Pago" DATE,
    "Estado" VARCHAR,
    "Actualiza" TIMESTAMP,
    PRIMARY KEY("id_Pago")
);

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

-- Foreign key para la tabla Departamento
ALTER TABLE "Departamento"
ADD FOREIGN KEY("Id_Pais") REFERENCES "Pais"("id_Pais");

-- Foreign key para la tabla Ciudad
ALTER TABLE "Ciudad"
ADD FOREIGN KEY("Id_departamento") REFERENCES "Departamento"("id_Departamento");

-- Foreign key para la tabla Parking
ALTER TABLE "Parking"
ADD FOREIGN KEY("id_Ciudad") REFERENCES "Ciudad"("id_Ciudad");

-- Foreign key para la tabla Vehiculo
ALTER TABLE "Vehiculo"
ADD FOREIGN KEY("Id_Usuario") REFERENCES "Usuario"("id_Usuario");

-- Foreign key para la tabla Reserva
ALTER TABLE "Reserva"
ADD FOREIGN KEY("id_Parqueadero") REFERENCES "Parking"("id_Parqueadero");

ALTER TABLE "Reserva"
ADD FOREIGN KEY("id_Vehiculo") REFERENCES "Vehiculo"("id_Vehiculo");

-- Foreign key para la tabla Celda
ALTER TABLE "Celda"
ADD FOREIGN KEY("id_Parqueadero") REFERENCES "Parking"("id_Parqueadero");

-- Foreign key para la tabla Transaccion
ALTER TABLE "Transaccion"
ADD FOREIGN KEY("id_Reserva") REFERENCES "Reserva"("id_Reserva");

-- Foreign key para la tabla Empleado
ALTER TABLE "Empleado"
ADD FOREIGN KEY("id_Parqueadero") REFERENCES "Parking"("id_Parqueadero");