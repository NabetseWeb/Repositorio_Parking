CREATE TABLE "Parking" (
	"id_Parqueadero" UUID NOT NULL UNIQUE,
	"id_Ciudad" UUID,
	"Dirección" VARCHAR,
	"Telefono" VARCHAR,
	"Actualiza" TIMESTAMP,
	"Activo" BIT,
	"Nombre" UUID,
	PRIMARY KEY("id_Parqueadero")
);
