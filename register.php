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
                <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
                <p class="w-80 text-center text-md mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create
                    an
                    account to access our range of computer science courses for free</p>
            </div>
            <div class="space-y-4">
                <input type="name" name="fname" placeholder="First name" required
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                <input type="name" name="lname" placeholder="Last name" required
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                <input type="text" name="email" placeholder="Email Addres" required
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                <div class="password-input">
                    <input type="password" name="password" placeholder="Password" required
                        class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />

                    <span class="password-toggle" id="password-toggle">&#128065;</span>
                </div>
            </div>
            <div class="text-center mt-6">
                <button name="submit" class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Sign up</button>
                <p class="mt-4 text-sm">Already have an account? <a href="login.php"
                        class="underline cursor-pointer">Sign in</a></p>

                </p>
            </div>
        </form>
        <div id="successMessage" class="text-green-500 text-center mt-4 hidden">
            You have registered successfully!
        </div>
        <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
        <div
            class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
        </div>
    </div>
</body>

</html>
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST["submit"])) {

        // Register User using Fruitask API create row endpoint

        $fname = $_POST["fname"];
        $lname = $_POST["lname"];
        $email = $_POST["email"];
        $password = $_POST["password"];

        // API endpoint URL
        $url = 'https://api.fruitask.com/v3/tables/vpJYPtv52BXGSsD/rows/?api_key=7b5cbc613248b60aca9465ceced78650';

        // Request payload
        $data = array(
            'fname' => $fname,
            'lname' => $lname,
            'email' => $email,
            'password' => $password
        );

        // Set headers
        $headers = array(
            'Content-Type: application/json'
        );

        // Initialize cURL session
        $curl = curl_init();

        // Set cURL options
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

        // Execute the request
        $response = curl_exec($curl);

        // Check for errors
        if (curl_errno($curl)) {
            $error = curl_error($curl);
            // Handle the error
            //echo "cURL Error: " . $error;
            echo "failed";
        } else {
            // Display success message using JavaScript
            echo "<script>alert('You have registered successfully!');</script>";
            // Redirect to login page after a delay
            echo "<script>
                    setTimeout(function() {
                        window.location.href = 'login.php';
                    }, 2000); // 1 seconds delay
                  </script>";
        }

        // Close the cURL session
        curl_close($curl);
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