<?php

require_once __DIR__ . "/vendor/autoload.php";

if (empty($_POST["test_cases"])) {
    header("Location: /~ben/testgen/");
    die();
}

// split input by line
$cases = explode("\n", $_POST["test_cases"]);

// set the right download headers
header('Content-Type: application/vnd.ms-excel');
header('Content-Disposition: attachment;filename="testcase-template.xls"');
header('Cache-Control: max-age=0');

PHPExcel_IOFactory::createWriter(
    PHPExcel_IOFactory::load("template.xlsx")
        ->getActiveSheet()
        ->fromArray(
            // place vertically
            array_chunk($cases, 1)
            // skip NULLs
            , NULL
            // starting at B2
            , 'B2'
            )
    , 'Excel5'
// save to request page
)->save('php://output');
