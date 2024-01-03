CREATE TABLE users (
  user_id INT PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password_hash VARCHAR(255)
);

CREATE TABLE products (
  product_id INT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10, 2),
  description TEXT
);

ALTER TABLE products
ADD FOREIGN KEY (user_id) REFERENCES users(user_id);


-- Ajoutez d'autres tables selon votre modèle
CREATE INDEX idx_username ON users (username);
