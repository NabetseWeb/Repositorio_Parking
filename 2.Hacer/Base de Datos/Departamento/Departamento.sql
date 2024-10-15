CREATE TABLE "Departamento" (
	"id_Departamento" UUID NOT NULL UNIQUE,
	"Id_Pais" UUID,
	"Nombre" VARCHAR,
	"Activo" BIT,
	"Actualiza" TIMESTAMPTZ,
	PRIMARY KEY("id_Departamento")
);