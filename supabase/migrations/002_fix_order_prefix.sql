-- Fix order number prefix from PD- to VS-
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  order_num TEXT;
  date_part TEXT;
  random_part TEXT;
BEGIN
  date_part := TO_CHAR(NOW(), 'YYYYMMDD');
  random_part := UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 4));
  order_num := 'VS-' || date_part || '-' || random_part;
  RETURN order_num;
END;
$$;
