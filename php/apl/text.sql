# 库级操作
CREATE DATABASE bshop; # 创建库
DROP DATABASE bshop; # 删除库

# 默认让所有编码为utf8
CREATE DATABASE bshop
  DEFAULT CHARACTER SET utf8
  DEFAULT COLLATE utf8_general_ci;

# 表级操作
# 创建表
CREATE TABLE user (
  id   INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  age  INT          NOT NULL
); # 创建表

CREATE TABLE user (
  id   INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  age  INT          NOT NULL
)
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci; # 创建表并指定字符集

CREATE TABLE user (
  id   INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  age  INT          NOT NULL
)
  ENGINE = InnoDB; # 创建表并指定引擎

CREATE TABLE product (
  `id`    INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `price` DOUBLE       NOT NULL,
  `desc`  TEXT
)
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci
  ENGINE = InnoDB;

# 删除表
DROP TABLE user;

# 重命名表
RENAME TABLE
    user TO user_yo;

# 修改表(列级操作)
# 新增列
ALTER TABLE user
  ADD COLUMN sex VARCHAR(12);
# 修改列
ALTER TABLE user
  CHANGE COLUMN name username VARCHAR(32) NOT NULL;
# 删除列
ALTER TABLE user
  DROP COLUMN age;

# 数据操作（行级操作）
# 插入一条数据
INSERT INTO product (title, price, `desc`)
VALUES ("小米手机", 100, "yo");
# 查看所有数据
SELECT *
FROM product;
# 只查看id为1的数据
SELECT *
FROM product
WHERE id = 1;
# 只查看title和price
SELECT
  title,
  price
FROM product;
# 只查看id为1的商品的title和price
SELECT
  title,
  price
FROM product
WHERE id = 1;
# 删除所有数据
DELETE FROM product;
# 删除一条数据（删除id等于1的行）
DELETE FROM product
WHERE id = 1;