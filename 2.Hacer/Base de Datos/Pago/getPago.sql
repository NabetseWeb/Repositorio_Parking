
CREATE OR REPLACE PROCEDURE sp_get_pago_by_id(
    p_id_Pago UUID,
    OUT p_id_Reserva UUID,
    OUT p_Monto DECIMAL,
    OUT p_Método_Pago VARCHAR,
    OUT p_Fecha_Pago DATE,
    OUT p_Estado VARCHAR,
    OUT p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT "id_Reserva", "Monto", "Método_Pago", "Fecha_Pago", "Estado", "Actualiza"
    INTO p_id_Reserva, p_Monto, p_Método_Pago, p_Fecha_Pago, p_Estado, p_Actualiza
    FROM "Pago"
    WHERE "id_Pago" = p_id_Pago;
END;
$$;
