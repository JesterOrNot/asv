.PHONY: qa cs cfx phpstan tests build frontend

qa: cs phpstan

cs:
	vendor/bin/codesniffer app tests

cfx:
	vendor/bin/codefixer app tests

phpstan:
	vendor/bin/phpstan analyse -l max -c phpstan.neon --memory-limit=512M app tests/toolkit

build:
	NETTE_DEBUG=1 bin/console orm:schema-tool:drop --force --full-database
	NETTE_DEBUG=1 bin/console migrations:migrate --no-interaction
	NETTE_DEBUG=1 bin/console doctrine:fixtures:load --no-interaction --append

frontend:
	NODE_ENV=production yarn frontend build
	rm -rf public/assets -f
	rm app/resources/index.html -f
	mv frontend/dist/assets public/assets
	mv frontend/dist/index.html app/resources/index.html

loc-api:
	NETTE_DEBUG=1 NETTE_ENV=dev php -S 0.0.0.0:8000 www/index.php

loc-api-prod:
	NETTE_ENV=prod php -S 0.0.0.0:8000 www/index.php

loc-postgres: loc-postgres-stop
	docker run -it -d -p 5432:5432 --name asv_pg -e POSTGRES_PASSWORD=asv -e POSTGRES_USER=asv postgres:10

loc-postgres-stop:
	docker stop asv_postgres || true
	docker rm asv_postgres || true

loc-adminer: loc-adminer-stop
	docker run -it -d -p 9999:80 --name asv_adminer dockette/adminer:dg

loc-adminer-stop:
	docker stop asv_adminer || true
	docker rm asv_adminer || true
