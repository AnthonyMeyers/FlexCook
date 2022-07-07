<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220707092129 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE ingredient (id INT AUTO_INCREMENT NOT NULL, igt_name VARCHAR(200) NOT NULL, igt_eng INT NOT NULL, igt_ptn INT NOT NULL, igt_fts INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE inventory (id INT AUTO_INCREMENT NOT NULL, usr_inv_id INT NOT NULL, igt_inv_id INT NOT NULL, inv_cnt INT NOT NULL, INDEX IDX_B12D4A36DF81A2D5 (usr_inv_id), INDEX IDX_B12D4A36D550D949 (igt_inv_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE inventory ADD CONSTRAINT FK_B12D4A36DF81A2D5 FOREIGN KEY (usr_inv_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE inventory ADD CONSTRAINT FK_B12D4A36D550D949 FOREIGN KEY (igt_inv_id) REFERENCES ingredient (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE inventory DROP FOREIGN KEY FK_B12D4A36D550D949');
        $this->addSql('ALTER TABLE inventory DROP FOREIGN KEY FK_B12D4A36DF81A2D5');
        $this->addSql('DROP TABLE ingredient');
        $this->addSql('DROP TABLE inventory');
        $this->addSql('DROP TABLE user');
    }
}
