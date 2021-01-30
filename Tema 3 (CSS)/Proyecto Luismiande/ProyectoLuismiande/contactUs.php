<!DOCTYPE html>
<html lang="en">

<head>
	<?php include 'head.php';?>
</head>

<body>
    <?php include 'header.php';?>
    
    <?php include 'menus.php';?>
    
    <section id="contactUs">
        <h2>Contact us</h2>
        <form action="" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="name"/>
            
            <label for="subname">Subname:</label>
            <input type="text" id="subname" placeholder="Subname"/>
            
            <label for="issue">Issue:</label>
            <textarea id="issue" placeholder="Comment your issue here"></textarea>
            
            <label for="email">E-mail:</label>
            <input type="email" id="email"/>
        </form>
    </section>
    
    <?php include 'footer.php';?>
</body>

</html>