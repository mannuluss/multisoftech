# MYSQL

para permitir conexiones remotas debemos editar el archivo de configuracion de mysql
```console
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```
Buscaremos la directiva bind-address:
```
bind-address            = 127.0.0.1
```
Basta desactivar esta directiva insertando un carácter # al inicio de línea:
```
#bind-address            = 127.0.0.1
```
salimos y guardamos, ahora reiniciamos el servicio de mysql
```console
sudo systemctl restart mysql
```

ahora necesitamos crear un usuario que pueda acceder remotamente con todos los permisas, ya que el usuario root no lo permite.

localmente ingresamos a mysql y creamos el usuario
```console
mysql> create user 'admin' identified with mysql_native_password by '1234';
mysql> GRANT ALL PRIVILEGES ON * . * TO 'admin';
mysql> FLUSH PRIVILEGES;
mysql> exit;
```
para cambiar la clave 
```console
mysql> SET PASSWORD FOR admin = "new_password";
```
en algunos casos el firewall de linux puede bloquear el trafico, para habilitarlo lo hacemos con:
```console
~$ sudo ufw allow mysql
```