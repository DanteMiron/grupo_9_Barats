-- MySQL Script generated by MySQL Workbench
-- Mon Aug 15 14:57:12 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema baratsdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema baratsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `baratsdb` DEFAULT CHARACTER SET utf8mb4 ;
USE `baratsdb` ;

-- -----------------------------------------------------
-- Table `baratsdb`.`categoría`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `baratsdb`.`categoría` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `baratsdb`.`tipo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `baratsdb`.`tipo` (
  `id` INT(11) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `baratsdb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `baratsdb`.`productos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(80) NOT NULL,
  `description` TEXT NOT NULL,
  `image` VARCHAR(80) NOT NULL,
  `price` INT(11) NOT NULL,
  `fees` VARCHAR(45) NOT NULL,
  `categoría_id` INT(11) NOT NULL,
  `tipo_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_productos_categoría1_idx` (`categoría_id` ASC) VISIBLE,
  INDEX `fk_productos_tipo1_idx` (`tipo_id` ASC) VISIBLE,
  CONSTRAINT `fk_productos_categoría1`
    FOREIGN KEY (`categoría_id`)
    REFERENCES `baratsdb`.`categoría` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_tipo1`
    FOREIGN KEY (`tipo_id`)
    REFERENCES `baratsdb`.`tipo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `baratsdb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `baratsdb`.`usuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `tel` VARCHAR(45) NOT NULL,
  `image` VARCHAR(80) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `admin` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;