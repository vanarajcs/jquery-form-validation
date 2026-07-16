-- Anavsan recommendation
-- Cluster the sales table by order_date to reduce scan cost.

ALTER TABLE sales CLUSTER BY (order_date);
