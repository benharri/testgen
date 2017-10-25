<?php

require_once __DIR__ . "/vendor/autoload.php";

if (empty($_POST["test_cases"])) {
    header("Location: /~ben/testgen/");
    die();
}

// split input by line and place into template at cell B2
$cases = explode("\n", $_POST["test_cases"]);
$excel = PHPExcel_IOFactory::load("template.xlsx");
$excel->getActiveSheet()->fromArray(array_chunk($cases, 1), NULL, 'B2');

// set the right download headers
header('Content-Type: application/vnd.ms-excel');
header('Content-Disposition: attachment;filename="testcase-template.xls"');
header('Cache-Control: max-age=0');
PHPExcel_IOFactory::createWriter($excel, 'Excel5')->save('php://output');
