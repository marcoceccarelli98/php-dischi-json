<?php

header('Content-Type: application/json');

$jsonData = file_get_contents(__DIR__ . '/discs.json');
$discs = json_decode($jsonData, true);

// $discs = file_get_contents(__DIR__ . '/discs.json');

// var_dump($_GET['id']);

function findDiscById($id, $discs)
{
    foreach ($discs as $disc) {
        if ($disc['id'] === $id) {
            return $disc;
        }
    }
    return null;
}

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    $disc = findDiscById($id, $discs);
    if ($disc) {
        echo json_encode($disc);
    } else {
        http_response_code(404);
        echo json_encode(["error" => "Disc not found"]);
    }
} else {
    echo $jsonData; // Return the JSON file content 
}
