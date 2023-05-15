<!DOCTYPE html>
<html>
    <head>
        <title>From</title>
    </head>

    <body>
        <section>
        <?php
            $time = $_GET['time'];
            $kind = $_GET['kind'];
            $desc = $_GET['desc'];

            echo '<h1>The Time: ' . $time . ' </h1>';
            echo '<h1>The Kind of help: ' . $kind . ' </h1>';
            echo '<h1>The Description: ' . $desc . ' </h1>';
        ?>
        </section> 
    </body>
</html>