<?php

require_once __DIR__ . "/vendor/autoload.php";


$excel = PHPExcel_IOFactory::load("export.xlsx");

$cases = explode("\n", $_POST["test_cases"]);
$excel->getActiveSheet()->fromArray(array_chunk($cases, 1), NULL, 'B2');

header('Content-Type: application/vnd.ms-excel');
header('Content-Disposition: attachment;filename="testcase-template.xls"');
header('Cache-Control: max-age=0');
$writer = PHPExcel_IOFactory::createWriter($excel, 'Excel5');
$writer->save('php://output');

