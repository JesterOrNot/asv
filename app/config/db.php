<?php declare(strict_types = 1);

use Nette\Http\Url;

$databaseConfig = [];

$databaseUrl = new Url(
  is_string(getenv('DATABASE_URL'))
    ? getenv('DATABASE_URL')
    : "mysql://asv:lol123@localhost:3306/asv_dev"
);

$host = $databaseUrl->host;
$port = $databaseUrl->port;
$user = $databaseUrl->user;
$password = $databaseUrl->password;
$database = trim($databaseUrl->path, '/\\');

$databaseConfig = [
  'database' => array_merge($databaseConfig, [
    'host' => $host,
    'port' => $port,
    'user' => $user,
    'password' => $password,
    'dbname' => $database,
  ]),
];

return [ "parameters" => $databaseConfig ];
