CREATE OR REPLACE PROCEDURE EliminarReserva(
    p_id_Reserva UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Reserva"
    SET "activo" = false
    WHERE "id_Reserva" = p_id_Reserva;
END;
$$;
