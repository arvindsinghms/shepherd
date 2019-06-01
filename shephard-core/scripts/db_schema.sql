CREATE DATABASE IF NOT EXISTS shepherd_db;

use shepherd_db;

CREATE TABLE IF NOT EXISTS client_details(
client_id int AUTO_INCREMENT primary key,
client_name varchar(255) NOT NULL,
created_at DATETIME,
updated_at DATETIME,
created_by varchar(255)
);

CREATE TABLE IF NOT EXISTS endpoint_details(
endpoint_id int AUTO_INCREMENT primary key,
endpoint_name varchar(255),
client_id int,
workflow_graph BLOB,
endpoint_details BLOB,
created_at DATETIME,
updated_at DATETIME,
created_by varchar(255)
);

CREATE TABLE IF NOT EXISTS execution_details(
object_id varchar(64),
execution_id varchar(64),
client_id int,
endpoint_id int,
status varchar(255),
error_message TEXT,
processed_nodes varchar(255),
current_executing_nodes varchar(255),
created_at DATETIME,
updated_at DATETIME,
created_by varchar(255),
primary key(object_id, execution_id)
);

CREATE TABLE IF NOT EXISTS node_details(
node_name varchar(255),
object_id varchar(64),
execution_id varchar(64),
status varchar(255),
error_message TEXT,
created_at DATETIME,
updated_at DATETIME,
created_by varchar(255),
primary key(object_id, execution_id, node_name)
);