CREATE DATABASE IF NOT EXISTS nhpc_manuals;
USE nhpc_manuals;

CREATE TABLE main_category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE manuals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  file_name VARCHAR(255) NOT NULL,
  file_location VARCHAR(255) NOT NULL,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES main_category(id) ON DELETE CASCADE
);

INSERT INTO main_category (name) VALUES ('Electrical'), ('Mechanical');

INSERT INTO manuals (file_name, file_location, category_id) VALUES 
('Transformer Manual 1', '/manuals/transformer1.pdf', 1),
('Motor Manual 1', '/manuals/motor1.pdf', 1),
('Switchgear Manual', '/manuals/switchgear.pdf', 1),
('Circuit Breaker Manual', '/manuals/circuit_breaker.pdf', 1),
('Lighting System Manual', '/manuals/lighting_system.pdf', 1),

('Turbine Manual 1', '/manuals/turbine1.pdf', 2),
('Pump Manual', '/manuals/pump.pdf', 2),
('Compressor Manual', '/manuals/compressor.pdf', 2),
('Valve Manual', '/manuals/valve.pdf', 2),
('Boiler Manual', '/manuals/boiler.pdf', 2),
('Generator Manual', '/manuals/generator.pdf', 2);

select * from main_category;

select * from manuals;
