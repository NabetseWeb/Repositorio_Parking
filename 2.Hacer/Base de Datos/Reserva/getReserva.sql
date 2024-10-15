CREATE OR REPLACE PROCEDURE sp_get_reserva_by_id(
    p_id_Reserva UUID,
    OUT p_id_Parqueadero UUID,
    OUT p_id_Vehiculo UUID,
    OUT p_Fecha_Reserva DATE,
    OUT p_Hora_Entrada TIME,
    OUT p_Hora_Salida TIME,
    OUT p_Estado VARCHAR,
    OUT p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT "id_Parqueadero", "id_Vehiculo", "Fecha_Reserva", "Hora_Entrada", "Hora_Salida", "Estado", "Actualiza"
    INTO p_id_Parqueadero, p_id_Vehiculo, p_Fecha_Reserva, p_Hora_Entrada, p_Hora_Salida, p_Estado, p_Actualiza
    FROM "Reserva"
    WHERE "id_Reserva" = p_id_Reserva;
END;
$$;
