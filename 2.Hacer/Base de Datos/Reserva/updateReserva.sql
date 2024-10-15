CREATE OR REPLACE PROCEDURE sp_update_reserva(
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
    UPDATE "Reserva"
    SET "id_Parqueadero" = p_id_Parqueadero,
        "id_Vehiculo" = p_id_Vehiculo,
        "Fecha_Reserva" = p_Fecha_Reserva,
        "Hora_Entrada" = p_Hora_Entrada,
        "Hora_Salida" = p_Hora_Salida,
        "Estado" = p_Estado,
        "Actualiza" = p_Actualiza
    WHERE "id_Reserva" = p_id_Reserva;
END;
$$;
