CREATE TABLE "Vehiculo" (
	"id_Vehiculo" UUID NOT NULL UNIQUE,
	"Tipo_Vehiculo" VARCHAR,
	"Placa" VARCHAR,
	"Id_Usuario" UUID,
	"Estado_Vehiculo" BIT,
	"Actualiza" TIMESTAMPTZ,
	PRIMARY KEY("id_Vehiculo")
);