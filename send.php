<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email sender</title>
    <style>
        .common-btn {
            padding: 10px 10px;
            background: transparent;
            outline: none;
            border: 2px solid #f67c92;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
        }
    </style>
</head>

<body>
    <form class="" action="send.php" method="post">
        Email <input type="email" name="email" value=""> <br>
        Subject <input type="text" name="subject" value=""> <br>
        Message <input type="text" name="message" value=""> <br>
        <button type="submit" class="common-btn" name="send">Send</button>
    </form>
</body>

</html>