<?php

$discs = file_get_contents(__DIR__ . '/discs.json');

echo $discs;

// header('Content-Type: application/json');

// json_encode($discs);
