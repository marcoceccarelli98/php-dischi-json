<?php

header('Content-Type: application/json');

$dbPath = __DIR__ . '/discs.json';
$jsonData = file_get_contents($dbPath);
$discs = json_decode($jsonData, true);

if (isset($_POST['action']) && $_POST['action'] === 'create') {

    $new_disc = [
        "id" => rand(100, 1000),
        "title" => $_POST['title'],
        "artist" => $_POST['artist'],
        "poster" => $_POST['poster'],
        "album" => $_POST['album'],
        "date" => $_POST['date'],
        "plays" => $_POST['plays'],
        "durationSec" => $_POST['durationSec'],
    ];

    $discs = [...$discs, $new_disc];

    //save file
    file_put_contents($dbPath, json_encode($discs));

    echo json_encode($discs);
}
