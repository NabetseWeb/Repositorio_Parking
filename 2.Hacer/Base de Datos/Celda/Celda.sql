CREATE TABLE "Celda" (
	"id_Celda" UUID NOT NULL UNIQUE,
	"id_Parqueadero" UUID,
	"Número_Celda" VARCHAR,
	"Tipo_Vehículo" VARCHAR,
	"Disponible" BIT,
	"Activo" BIT,
	"Actualiza" TIMESTAMPTZ,
	PRIMARY KEY("id_Celda")
);
