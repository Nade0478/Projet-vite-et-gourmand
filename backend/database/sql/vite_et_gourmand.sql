-- =============================================================
-- Script SQL - Vite et Gourmand
-- Base de données : MySQL
-- Description : Création complète de la base de données
--               pour l'application de réservation Vite et Gourmand
-- =============================================================

SET FOREIGN_KEY_CHECKS = 0;

-- -------------------------------------------------------------
-- Suppression des tables existantes (ordre inverse des FK)
-- -------------------------------------------------------------
DROP TABLE IF EXISTS `personal_access_tokens`;
DROP TABLE IF EXISTS `cache_locks`;
DROP TABLE IF EXISTS `cache`;
DROP TABLE IF EXISTS `role_user`;
DROP TABLE IF EXISTS `jobs`;
DROP TABLE IF EXISTS `commande_menu`;
DROP TABLE IF EXISTS `plat_allergene`;
DROP TABLE IF EXISTS `menu_plat`;
DROP TABLE IF EXISTS `avis`;
DROP TABLE IF EXISTS `password_resets`;
DROP TABLE IF EXISTS `commandes`;
DROP TABLE IF EXISTS `horaires`;
DROP TABLE IF EXISTS `menus`;
DROP TABLE IF EXISTS `plats`;
DROP TABLE IF EXISTS `allergenes`;
DROP TABLE IF EXISTS `themes`;
DROP TABLE IF EXISTS `regimes`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `roles`;

SET FOREIGN_KEY_CHECKS = 1;

-- -------------------------------------------------------------
-- Table : roles
-- -------------------------------------------------------------
CREATE TABLE `roles` (
    `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name`       VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : users
-- -------------------------------------------------------------
CREATE TABLE `users` (
    `id`                BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `prenom`            VARCHAR(255) NOT NULL,
    `nom`               VARCHAR(255) NOT NULL,
    `telephone`         VARCHAR(255) NOT NULL,
    `email`             VARCHAR(255) NOT NULL UNIQUE,
    `password`          VARCHAR(255) NOT NULL,
    `email_verified_at` TIMESTAMP NULL DEFAULT NULL,
    `remember_token`    VARCHAR(100) NULL DEFAULT NULL,
    `adresse_postale`   VARCHAR(255) NULL DEFAULT NULL,
    `ville`             VARCHAR(255) NULL DEFAULT NULL,
    `pays`              VARCHAR(255) NULL DEFAULT NULL,
    `role_id`           BIGINT UNSIGNED NOT NULL,
    `created_at`        TIMESTAMP NULL DEFAULT NULL,
    `updated_at`        TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_users_role`
        FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : regimes
-- -------------------------------------------------------------
CREATE TABLE `regimes` (
    `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name`       VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : themes
-- -------------------------------------------------------------
CREATE TABLE `themes` (
    `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name`       VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : allergenes
-- -------------------------------------------------------------
CREATE TABLE `allergenes` (
    `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name`       VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : plats
-- -------------------------------------------------------------
CREATE TABLE `plats` (
    `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `titre_plat`  VARCHAR(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `photo_path`  VARCHAR(255) NULL DEFAULT NULL COMMENT 'Chemin vers l image',
    `created_at`  TIMESTAMP NULL DEFAULT NULL,
    `updated_at`  TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : menus
-- -------------------------------------------------------------
CREATE TABLE `menus` (
    `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name`       VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : commandes
-- -------------------------------------------------------------
CREATE TABLE `commandes` (
    `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id`    BIGINT UNSIGNED NOT NULL,
    `statut`     VARCHAR(255) NOT NULL DEFAULT 'en_attente',
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_commandes_user`
        FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : horaires
-- -------------------------------------------------------------
CREATE TABLE `horaires` (
    `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `jour`       VARCHAR(255) NOT NULL,
    `ouverture`  TIME NOT NULL,
    `fermeture`  TIME NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : avis
-- -------------------------------------------------------------
CREATE TABLE `avis` (
    `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id`     BIGINT UNSIGNED NOT NULL,
    `note`        INT NOT NULL COMMENT 'Note entre 1 et 5',
    `description` TEXT NULL DEFAULT NULL,
    `statut`      VARCHAR(255) NOT NULL DEFAULT 'en_attente',
    `created_at`  TIMESTAMP NULL DEFAULT NULL,
    `updated_at`  TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_avis_user`
        FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : password_resets
-- -------------------------------------------------------------
CREATE TABLE `password_resets` (
    `email`      VARCHAR(255) NOT NULL,
    `token`      VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    INDEX `idx_password_resets_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table pivot : menu_plat
-- -------------------------------------------------------------
CREATE TABLE `menu_plat` (
    `menu_id`    BIGINT UNSIGNED NOT NULL,
    `plat_id`    BIGINT UNSIGNED NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`menu_id`, `plat_id`),
    CONSTRAINT `fk_menu_plat_menu`
        FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `fk_menu_plat_plat`
        FOREIGN KEY (`plat_id`) REFERENCES `plats` (`id`)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table pivot : plat_allergene
-- -------------------------------------------------------------
CREATE TABLE `plat_allergene` (
    `plat_id`      BIGINT UNSIGNED NOT NULL,
    `allergene_id` BIGINT UNSIGNED NOT NULL,
    `created_at`   TIMESTAMP NULL DEFAULT NULL,
    `updated_at`   TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`plat_id`, `allergene_id`),
    CONSTRAINT `fk_plat_allergene_plat`
        FOREIGN KEY (`plat_id`) REFERENCES `plats` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `fk_plat_allergene_allergene`
        FOREIGN KEY (`allergene_id`) REFERENCES `allergenes` (`id`)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table pivot : commande_menu
-- -------------------------------------------------------------
CREATE TABLE `commande_menu` (
    `commande_id`  BIGINT UNSIGNED NOT NULL,
    `menu_id`      BIGINT UNSIGNED NOT NULL,
    `quantite`     INT NOT NULL DEFAULT 1 COMMENT 'Quantite commandee',
    `prix_unitaire` DECIMAL(8,2) NOT NULL COMMENT 'Prix au moment de la commande',
    `created_at`   TIMESTAMP NULL DEFAULT NULL,
    `updated_at`   TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`commande_id`, `menu_id`),
    CONSTRAINT `fk_commande_menu_commande`
        FOREIGN KEY (`commande_id`) REFERENCES `commandes` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `fk_commande_menu_menu`
        FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : jobs (Laravel Queue)
-- -------------------------------------------------------------
CREATE TABLE `jobs` (
    `id`           BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `queue`        VARCHAR(255) NOT NULL,
    `payload`      LONGTEXT NOT NULL,
    `attempts`     TINYINT UNSIGNED NOT NULL,
    `reserved_at`  INT UNSIGNED NULL DEFAULT NULL,
    `available_at` INT UNSIGNED NOT NULL,
    `created_at`   INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `idx_jobs_queue` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Données initiales : roles
-- -------------------------------------------------------------
INSERT INTO `roles` (`name`, `created_at`, `updated_at`) VALUES
    ('visiteur',  NOW(), NOW()),
    ('utilisateur', NOW(), NOW()),
    ('employe',   NOW(), NOW()),
    ('admin',     NOW(), NOW());

-- -------------------------------------------------------------
-- Données initiales : allergenes
-- -------------------------------------------------------------
INSERT INTO `allergenes` (`name`, `created_at`, `updated_at`) VALUES
    ('Gluten',      NOW(), NOW()),
    ('Crustacés',   NOW(), NOW()),
    ('Oeufs',       NOW(), NOW()),
    ('Poisson',     NOW(), NOW()),
    ('Arachides',   NOW(), NOW()),
    ('Soja',        NOW(), NOW()),
    ('Lait',        NOW(), NOW()),
    ('Fruits à coque', NOW(), NOW()),
    ('Céleri',      NOW(), NOW()),
    ('Moutarde',    NOW(), NOW()),
    ('Sésame',      NOW(), NOW()),
    ('Sulfites',    NOW(), NOW()),
    ('Lupin',       NOW(), NOW()),
    ('Mollusques',  NOW(), NOW());

-- -------------------------------------------------------------
-- Données initiales : regimes
-- -------------------------------------------------------------
INSERT INTO `regimes` (`name`, `created_at`, `updated_at`) VALUES
    ('Standard',    NOW(), NOW()),
    ('Végétarien',  NOW(), NOW()),
    ('Végétalien',  NOW(), NOW()),
    ('Sans gluten', NOW(), NOW()),
    ('Halal',       NOW(), NOW());

-- -------------------------------------------------------------
-- Table pivot : role_user
-- -------------------------------------------------------------
CREATE TABLE `role_user` (
    `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : cache
-- -------------------------------------------------------------
CREATE TABLE `cache` (
    `key`        VARCHAR(255) NOT NULL,
    `value`      MEDIUMTEXT NOT NULL,
    `expiration` INT NOT NULL,
    PRIMARY KEY (`key`),
    INDEX `idx_cache_expiration` (`expiration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : cache_locks
-- -------------------------------------------------------------
CREATE TABLE `cache_locks` (
    `key`        VARCHAR(255) NOT NULL,
    `owner`      VARCHAR(255) NOT NULL,
    `expiration` INT NOT NULL,
    PRIMARY KEY (`key`),
    INDEX `idx_cache_locks_expiration` (`expiration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- Table : personal_access_tokens (Laravel Sanctum)
-- -------------------------------------------------------------
CREATE TABLE `personal_access_tokens` (
    `id`             BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `tokenable_type` VARCHAR(255) NOT NULL,
    `tokenable_id`   BIGINT UNSIGNED NOT NULL,
    `name`           VARCHAR(255) NOT NULL,
    `token`          VARCHAR(64) NOT NULL UNIQUE,
    `abilities`      TEXT NULL DEFAULT NULL,
    `last_used_at`   TIMESTAMP NULL DEFAULT NULL,
    `expires_at`     TIMESTAMP NULL DEFAULT NULL,
    `created_at`     TIMESTAMP NULL DEFAULT NULL,
    `updated_at`     TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    INDEX `idx_personal_access_tokens_tokenable` (`tokenable_type`, `tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================================
-- Fin du script
-- =============================================================