<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
    <title>Document</title>
</head>
<style>
    .password-input {
        position: relative;
    }

    .password-toggle {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        cursor: pointer;
    }
</style>

<body>
    <!-- component -->
    <div class="min-h-screen bg-purple-400 flex justify-center items-center">
        <div
            class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
        </div>
        <div
            class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
        </div>
        <form method="POST" action="" class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
                <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Login to your Account</h1>
                <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"></p>
            </div>
            <div class="space-y-4">
                <input type="text" name="email" placeholder="Email Addres"
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                <div class="password-input">
                    <input type="password" name="password" placeholder="Password"
                        class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <span class="password-toggle" id="password-toggle">&#128065;</span>
                </div>
                <div class="text-center mt-6">
                    <button name="login" class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Log In</button>
                    <p class="mt-4 text-sm">Don't have an account? <a href="register.php"
                            class="underline cursor-pointer">Sign up</a></p>
                    </p>
                </div>
        </form>
        <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
        <div
            class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
        </div>
    </div>
</body>

</html>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST["login"])) {
        $apiUrl = "https://api.fruitask.com/v3/tables/vpJYPtv52BXGSsD/rows/";
        $apiKey = "7b5cbc613248b60aca9465ceced78650"; // sending request

        // Initialize cURL session
        $ch = curl_init();

        // Set cURL options
        curl_setopt($ch, CURLOPT_URL, $apiUrl . "?api_key=" . $apiKey);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //response

        // Execute cURL session and get the response
        $response = curl_exec($ch);

        // Check for cURL errors
        if (curl_errno($ch)) {
            echo 'Curl error: ' . curl_error($ch);
        }

        // Close cURL session
        curl_close($ch);

        // Process the response as JSON
        $data = json_decode($response, true);

        if ($data && isset($data['result']) && is_array($data['result'])) {
            $resultArray = $data['result'];
            $providedEmail = $_POST['email']; // Make sure to get this value from your form
            $providedPassword = $_POST['password']; // Make sure to get this value from your form
            $found = false;

            foreach ($resultArray as $user) {
                if ($user['email'] === $providedEmail && $user['password'] === $providedPassword) {
                    $found = true;
                    break;
                }
            }

            if ($found) {
                header("Location: mainpage.html"); // Redirect to login page
                exit();
            } else {
                echo "Email and password combination not found in the data.";
                header("Location: register.php"); // Redirect to login page
                exit();
            }
        } else {
            echo "Failed to retrieve or process data from the API.";
        }
    }
}
?>
<script>
    const passwordInput = document.querySelector('input[name="password"]');
    const passwordToggle = document.getElementById('password-toggle');

    passwordToggle.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
</script>