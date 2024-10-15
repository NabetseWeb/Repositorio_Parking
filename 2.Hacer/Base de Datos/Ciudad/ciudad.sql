CREATE TABLE "Ciudad" (
	"id_Ciudad" UUID NOT NULL UNIQUE,
	"Id_departamento" UUID,
	"Nombre" VARCHAR,
	"Activo" BIT,
	"Actualiza" TIMESTAMPTZ,
	PRIMARY KEY("id_Ciudad")
);
