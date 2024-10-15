CREATE OR REPLACE PROCEDURE sp_delete_reserva(
    p_id_Reserva UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM "Reserva"
    WHERE "id_Reserva" = p_id_Reserva;
END;
$$;
