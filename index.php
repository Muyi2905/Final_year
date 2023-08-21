<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST["login"])) {
        $apiUrl = "https://api.fruitask.com/v3/tables/vpJYPtv52BXGSsD/rows/";
        $apiKey = "7b5cbc613248b60aca9465ceced78650";

        // Initialize cURL session
        $ch = curl_init();

        // Set cURL options
        curl_setopt($ch, CURLOPT_URL, $apiUrl . "?api_key=" . $apiKey);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

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
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-sclae=1">
    <title>LearnTech</title>
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <section id="header">
        <div class="container">
            <img src="images/learn tech logo.png" class="logo" alt="">
            <div class="header-text">
                <h1>The purpose is to<br>teach technology, bring knowledge to the people</h1>
                <span class="square"></span>
                <p>Discover a world of knowledge and learn at your own pace with our computer e-learning platform.
                    Whether you want to master programming, web development, data science, or any other computer-related
                    skill, we've got you covered.</p>
                <!-- <button class="common-btn">Read More</button> -->
                <div class="line">
                    <span class="line-1"></span><br>
                    <span class="line-2"></span><br>
                    <span class="line-3"></span>
                </div>
            </div>
        </div>
    </section>

    <nav id="sideNav">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#offer">Offer</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <img src="images/menu.png" id="menuBtn" alt="menu-img">

    <script src="scripts.js"></script>

    <!-- about section -->

    <section id="about">
        <div class="about-left-col">
            <img src="images/about.png" alt="">
        </div>
        <div class="about-right-col">
            <div class="about-text">
                <h1>About Us</h1>
                <span class="square"></span>
                <p>At <strong>LearnTech,</strong> we understand that traditional methods like offline seminars and
                    lengthy classroom training might not always be the ideal solution for modern employee onboarding and
                    skill enhancement..</p><br><br>
                <p>Our solution? Embrace the power of online learning. We've crafted a revolutionary approach to
                    employee training by harnessing the potential of our cutting-edge Learning Management System (LMS).
                    Say goodbye to unproductive hours away from work and hello to efficient, accessible learning..</p>
                <br><br>
                <div class="line">
                    <span class="line-1"></span><br>
                    <span class="line-2"></span><br>
                    <span class="line-3"></span>
                </div>
                <h2>
                    "Learning is not attained by chance, it must be sought after with ardor and attended with diligence"
                </h2>
                <h3>----Abigail Adams</h3>
            </div>
        </div>
    </section>

    <!-- features -->
    <section id="features">
        <div class="feature-row">
            <div class="feature-col">
                <img src="images/pic-1.png" alt="">
                <h4>Learn Anywhere</h4>
                <p>Switch between your computer, tablet or mobile device</p>
            </div>
            <div class="feature-col">
                <img src="images/pic-3.png" alt="">
                <h4>Unlimited Access</h4>
                <p>Choose what you'd like to learn from our vast computer science courses</p>
            </div>
        </div>
        <div class="feature-btn">
            <div class="line">
                <span class="line-1"></span><br>
                <span class="line-2"></span><br>
                <span class="line-3"></span>
            </div>
            <a class="common-btn" href="register.php">Sign Up</a>
        </div>
    </section>

    <!-- courses -->

    <section id="courses">
        <div class="container course-row">
            <div class="course-left-col">
                <div class="course-text">
                    <h1>Browse our top<br>courses</h1>
                    <span class="square"></span>
                    <a class="all-courses-btn" href="register.php">View all courses</a>
                    <div class="line">
                        <span class="line-1"></span><br>
                        <span class="line-2"></span><br>
                        <span class="line-3"></span>
                    </div>
                </div>
            </div>
            <div class="course-right-col">
                <img src="images/course.png" alt="">
            </div>
        </div>
    </section>

    <!-- offer -->
    <section id="offer">
        <div class="about-left-col">
            <img src="images/offer.png" alt="">
        </div>
        <div class="about-right-col">
            <div class="about-text">
                <h1>Limitless learning<br>limitless possibilities</h1>
                <span class="square"></span>
                <p>In a rapidly changing world, where technology, industries, and societal norms evolve quickly, the
                    ability to learn and adapt becomes increasingly valuable. The phrase "limitless learning, limitless
                    possibilities" serves as a motivational reminder to embrace learning as a lifelong journey and to
                    remain open to the endless opportunities that knowledge can bring</p><br>
                <a class="get-started-btn" href="register.php">Get Started</a>
                <div class="line">
                    <span class="line-1"></span><br>
                    <span class="line-2"></span><br>
                    <span class="line-3"></span>
                </div>
            </div>
        </div>
    </section>

    <!-- contact -->
    <section id="contact">
        <div class="container contact-row">
            <div class="contact-left-col">
                <h1>Sign Up to join our<br>learning community</h1><br>
                <p><b>Already Have an account?</b></p>
                <form method="post" action="">
                    <input name="email" type="email" placeholder="Enter Email">
                    <input name="password" type="password" placeholder="Enter Password">
                    <div class="btn-box">
                        <button name="login" class="common-btn">Login</button>
                    </div>
                </form>
                <div class="line">
                    <span class="line-1"></span><br>
                    <span class="line-2"></span><br>
                    <span class="line-3"></span>
                </div>
            </div>
            <div class="contact-right-col">
                <img src="images/contact.png" alt="">
            </div>
        </div>
    </section>

    <!-- footer -->

    <section id="footer">
        <div class="container footer-row">
            <hr>
            <div class="footer-left-col">
                <div class="footer-links">
                    <div class="link-title">
                        <h4>Product</h4>
                    </div>
                    <div class="link-title">
                        <h4>About us</h4>
                    </div>
                    <div class="link-title">
                        <h4>Support</h4>
                    </div>
                    <div class="link-title">
                        <h4>Explore</h4>
                    </div>
                </div>
            </div>
            <div class="footer-right-col">
                <div class="footer-info">
                    <div class="copyright-text">
                        <small>obaremimuyiwa@gmail.com</small>
                        <small>copyright 2023</small>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>

    <!-- social icons -->

    <div class="social-icons">
        <img src="images/facebook.png" alt="">
        <img src="images/twitter.png" alt="">
        <img src="images/linkedin.png" alt="">
        <img src="images/instagram.png" alt="">
    </div>
    <!-- smooth scroll -->
    <script src="smooth-scroll.js"></script>
    <script>
        var scroll = new SmoothScroll('a[href*="#"]');
    </script>
    <script src="script.js"></script>
</body>

</html>