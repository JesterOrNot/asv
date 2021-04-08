<?php declare (strict_types = 1);

namespace Database\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210408205708 extends AbstractMigration
{
  public function getDescription(): string
  {
    return '';
  }

  public function up(Schema $schema): void
  {
    // this up() migration is auto-generated, please modify it to your needs
    $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

    $this->addSql('CREATE TABLE access_records (id VARCHAR(191) NOT NULL, endpoint VARCHAR(191) NOT NULL, ip VARCHAR(191) NOT NULL, created_at DATETIME NOT NULL, userId VARCHAR(191) DEFAULT NULL, INDEX userId (userId), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
    $this->addSql('CREATE TABLE projects (id VARCHAR(191) NOT NULL, name VARCHAR(191) NOT NULL, slug VARCHAR(191) NOT NULL, UNIQUE INDEX slug_unique (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
    $this->addSql('CREATE TABLE teams (id VARCHAR(191) NOT NULL, fullName VARCHAR(191) NOT NULL, position VARCHAR(191) NOT NULL, image VARCHAR(191) DEFAULT NULL, UNIQUE INDEX fullName_unique (fullName), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
    $this->addSql('CREATE TABLE users (id VARCHAR(191) NOT NULL, username VARCHAR(191) NOT NULL, email VARCHAR(191) NOT NULL, password VARCHAR(191) NOT NULL, role VARCHAR(191) DEFAULT \'USER\' NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, UNIQUE INDEX email_unique (email), UNIQUE INDEX username_unique (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
    $this->addSql('ALTER TABLE access_records ADD CONSTRAINT FK_54B8825364B64DCC FOREIGN KEY (userId) REFERENCES users (id)');
  }

  public function down(Schema $schema): void
  {
    // this down() migration is auto-generated, please modify it to your needs
    $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

    $this->addSql('ALTER TABLE access_records DROP FOREIGN KEY FK_54B8825364B64DCC');
    $this->addSql('DROP TABLE access_records');
    $this->addSql('DROP TABLE projects');
    $this->addSql('DROP TABLE teams');
    $this->addSql('DROP TABLE users');
  }
}
