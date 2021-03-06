.PHONY: qa phpstan build frontend

qa: phpstan

phpstan:
	vendor/bin/phpstan analyse -l max -c phpstan.neon --memory-limit=512M app

database-clean:
	NETTE_DEBUG=1 bin/console orm:schema-tool:drop --force --full-database
	NETTE_DEBUG=1 bin/console migrations:migrate --no-interaction
	NETTE_DEBUG=1 bin/console doctrine:fixtures:load --no-interaction --append

frontend-build:
	NODE_ENV=production yarn frontend build
	rm -rf public/assets public/images app/resources/index.html -f
	mv frontend/dist/assets public/assets
	mv frontend/dist/images public/images
	mv frontend/dist/index.html app/resources/index.html

loc-api:
	NETTE_DEBUG=1 NETTE_ENV=dev php -S 0.0.0.0:8000 www/index.php

loc-api-prod:
	NETTE_ENV=prod php -S 0.0.0.0:8000 www/index.php

loc-frontend:
	NODE_ENV=development yarn frontend dev

loc-frontend-prod:
	NODE_ENV=production yarn frontend preview
