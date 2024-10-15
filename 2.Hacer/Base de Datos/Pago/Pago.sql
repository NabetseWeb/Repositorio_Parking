CREATE TABLE "Pago" (
	"id_Pago" UUID NOT NULL UNIQUE,
	"id_Reserva" UUID,
	"Monto" DECIMAL,
	"Método_Pago" VARCHAR,
	"Fecha_Pago" DATE,
	"Estado" VARCHAR,
	"Actualiza" TIMESTAMPTZ,
	PRIMARY KEY("id_Pago")
);