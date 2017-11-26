CREATE TABLE product(
    `id` INT unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR
(64) not NULL,
    `price` DOUBLE not NULL,
    `cover_src` text varchar
(1024),
    `stock` int unsigned 0,
    `des` text,
    `cat_id` int nut unsigned NULL
)
DEFAULT charset = utf8mb4
engine = innodb;




create table cat (
    id int not null primary key AUTO_INCREMENT,
    title varchar
(64)
);


create table ec_order
(
    id int
    unsigned not null primary key AUTO_INCREMENT,
    product_id int unsigned not null,
    user_id int unsigned not null,
    oid varchar
    (128) nut null,
    status varchar
    (255) nut null
);




    create table `product`
    (
  `id` int unsigned not null primary key auto_increment,
  `title` varchar
    (64) not null,
  `price` double not null,
  `cover_src` varchar
    (1024),
  `stock` int unsigned not null,
  `cat_id` int unsigned not null,
  `des` text,
  `data` longtext
);

    create table `user`
    (
  `id` int unsigned not null primary key auto_increment,
  `username` char
    (64) not null,
  `password` char
    (128) not null,
  `permission` char
    (64) not null default 'user',
  `data` longtext
);

    create table `cat`
    (
  `id` int unsigned not null primary key auto_increment,
  `title` char
    (64) not null
);

    create table `order`
    (
  `id` int unsigned not null primary key auto_increment,
  `product_id` int unsigned not null,
  `user_id` int unsigned not null,
  `oid` char
    (128) not null,
  `status` char
    (64) not null default 'created'
);

