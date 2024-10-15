CREATE OR REPLACE PROCEDURE sp_insert_reserva(
    p_id_Reserva UUID,
    p_id_Parqueadero UUID,
    p_id_Vehiculo UUID,
    p_Fecha_Reserva DATE,
    p_Hora_Entrada TIME,
    p_Hora_Salida TIME,
    p_Estado VARCHAR,
    p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO "Reserva" ("id_Reserva", "id_Parqueadero", "id_Vehiculo", "Fecha_Reserva", "Hora_Entrada", "Hora_Salida", "Estado", "Actualiza")
    VALUES (p_id_Reserva, p_id_Parqueadero, p_id_Vehiculo, p_Fecha_Reserva, p_Hora_Entrada, p_Hora_Salida, p_Estado, p_Actualiza);
END;
$$;
