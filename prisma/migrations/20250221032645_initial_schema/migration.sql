-- CreateTable
CREATE TABLE `Admin` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPER_ADMIN', 'ADMIN', 'TEACHER', 'STUDENT') NOT NULL DEFAULT 'SUPER_ADMIN',

    UNIQUE INDEX `Admin_email_key`(`email`),
    UNIQUE INDEX `Admin_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teacher` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `middle_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPER_ADMIN', 'ADMIN', 'TEACHER', 'STUDENT') NOT NULL DEFAULT 'TEACHER',
    `date_of_birth` DATETIME(3) NOT NULL,
    `classroom_id` VARCHAR(191) NULL,

    UNIQUE INDEX `Teacher_email_key`(`email`),
    UNIQUE INDEX `Teacher_username_key`(`username`),
    UNIQUE INDEX `Teacher_classroom_id_key`(`classroom_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `middle_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPER_ADMIN', 'ADMIN', 'TEACHER', 'STUDENT') NOT NULL DEFAULT 'STUDENT',
    `phone_number` VARCHAR(191) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `classroom_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Student_email_key`(`email`),
    UNIQUE INDEX `Student_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subject` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `teacher_id` VARCHAR(191) NULL,

    UNIQUE INDEX `Subject_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Classroom` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `grade_level` ENUM('GRADE_1', 'GRADE_2', 'GRADE_3', 'GRADE_4', 'GRADE_5', 'GRADE_6') NOT NULL,
    `teacher_id` VARCHAR(191) NULL,

    UNIQUE INDEX `Classroom_name_key`(`name`),
    UNIQUE INDEX `Classroom_teacher_id_key`(`teacher_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StudentApplication` (
    `id` VARCHAR(191) NOT NULL,
    `control_no` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `middle_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `suffix` ENUM('JR', 'SR', 'I', 'II', 'III', 'IV', 'V') NULL,
    `gender` VARCHAR(191) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `birth_place` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `tel_number` VARCHAR(191) NULL,
    `religion` VARCHAR(191) NOT NULL,
    `medical_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `StudentApplication_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HomeAddress` (
    `id` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `postal_code` VARCHAR(191) NOT NULL,
    `student_application_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `HomeAddress_student_application_id_key`(`student_application_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FamilyBackground` (
    `id` VARCHAR(191) NOT NULL,
    `father_first_name` VARCHAR(191) NULL,
    `father_middle_name` VARCHAR(191) NULL,
    `father_last_name` VARCHAR(191) NULL,
    `father_occupation` VARCHAR(191) NULL,
    `father_civil_status` ENUM('SINGLE', 'MARRIED', 'WIDOWED', 'SEPARATED', 'DIVORCED') NULL,
    `father_annual_income` DOUBLE NULL,
    `father_phone_number` VARCHAR(191) NULL,
    `father_deceased` BOOLEAN NOT NULL DEFAULT false,
    `mother_first_name` VARCHAR(191) NULL,
    `mother_middle_name` VARCHAR(191) NULL,
    `mother_last_name` VARCHAR(191) NULL,
    `mother_occupation` VARCHAR(191) NULL,
    `mother_civil_status` ENUM('SINGLE', 'MARRIED', 'WIDOWED', 'SEPARATED', 'DIVORCED') NULL,
    `mother_annual_income` DOUBLE NULL,
    `mother_phone_number` VARCHAR(191) NULL,
    `mother_deceased` BOOLEAN NOT NULL DEFAULT false,
    `guardian_first_name` VARCHAR(191) NULL,
    `guardian_middle_name` VARCHAR(191) NULL,
    `guardian_last_name` VARCHAR(191) NULL,
    `guardian_occupation` VARCHAR(191) NULL,
    `guardian_annual_income` DOUBLE NULL,
    `guardian_phone_number` VARCHAR(191) NULL,
    `student_application_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `FamilyBackground_student_application_id_key`(`student_application_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MedicalRecord` (
    `id` VARCHAR(191) NOT NULL,
    `has_medical_condition` BOOLEAN NOT NULL DEFAULT false,
    `medical_condition` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admission` (
    `id` VARCHAR(191) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,
    `admission_type` ENUM('NEW_STUDENT', 'TRANSFEREE') NOT NULL,
    `intended_grade_level` VARCHAR(191) NOT NULL,
    `previous_school_id` VARCHAR(191) NULL,
    `status` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Admission_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `School` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `last_year_level` VARCHAR(191) NULL,
    `last_school_year` VARCHAR(191) NULL,
    `general_weighted_average` DOUBLE NULL,

    UNIQUE INDEX `School_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_classroom_id_fkey` FOREIGN KEY (`classroom_id`) REFERENCES `Classroom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subject` ADD CONSTRAINT `Subject_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `Teacher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Classroom` ADD CONSTRAINT `Classroom_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `Teacher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentApplication` ADD CONSTRAINT `StudentApplication_medical_record_id_fkey` FOREIGN KEY (`medical_record_id`) REFERENCES `MedicalRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HomeAddress` ADD CONSTRAINT `HomeAddress_student_application_id_fkey` FOREIGN KEY (`student_application_id`) REFERENCES `StudentApplication`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FamilyBackground` ADD CONSTRAINT `FamilyBackground_student_application_id_fkey` FOREIGN KEY (`student_application_id`) REFERENCES `StudentApplication`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admission` ADD CONSTRAINT `Admission_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `StudentApplication`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admission` ADD CONSTRAINT `Admission_previous_school_id_fkey` FOREIGN KEY (`previous_school_id`) REFERENCES `School`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
