<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $comment = $_POST['comment'];
    
    // Store the comment in a text file (you can use a database for more robust storage)
    $file = 'comments.txt';
    $data = "$name: $comment\n";
    file_put_contents($file, $data, FILE_APPEND);
    
    // Return a response to the client
    echo json_encode(['success' => true]);
} else {
    // Handle requests for retrieving comments (if needed)
    $file = 'comments.txt';
    $comments = file_get_contents($file);
    // Process and return the comments as needed
}
