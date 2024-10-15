CREATE TABLE "Reserva" (
	"id_Reserva" UUID NOT NULL UNIQUE,
	"id_Parqueadero" UUID,
	"id_Vehiculo" UUID,
	"Fecha_Reserva" DATE,
	"Hora_Entrada" TIME,
	"Hora_Salida" TIME,
	"Estado" VARCHAR,
	"Actualiza" TIMESTAMPTZ,
	PRIMARY KEY("id_Reserva")
);