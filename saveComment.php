<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $comment = $_POST['comment'];

    // Define the path to the comments file
    $file = 'comments.txt';

    // Format the comment and save it to the file
    $commentData = date("Y-m-d H:i:s") . " - $name: $comment\n";
    file_put_contents($file, $commentData, FILE_APPEND);

    // Return a response (optional)
    echo json_encode(['success' => true]);
} else {
    // Handle requests for retrieving comments (if needed)
    $file = 'comments.txt';
    $comments = file_get_contents($file);
    // Process and return the comments as needed
    echo $comments;
}
