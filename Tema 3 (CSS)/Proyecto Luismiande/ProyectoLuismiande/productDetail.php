<!DOCTYPE html>
<html lang="en">

<head>
	<?php include 'head.php';?>
</head>

<body>
    <?php include 'header.php';?>
    
    <?php include 'menus.php';?>
    
   <section id="productDetail">
        <div class="product">
            <div class="images">
                <div>
                    <img src="img/anakin.jpg" alt="Img 1" title="Img 1">
                    <img src="img/anakin.jpg" alt="Img 2" title="Img 2">
                    <img src="img/anakin.jpg" alt="Img 3" title="Img 3">
                    <img src="img/anakin.jpg" alt="Img 4" title="Img 4">
                </div>

                <img src="img/anakin.jpg" alt="Main Img" title="Main Img" id="mainImg">
            </div>

            <div class="details">
                <p class="pTitle">Product's name</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div class="stars">
                    <img src="img/star_rate.svg" alt="star">
                    <img src="img/star_rate.svg" alt="star">
                    <img src="img/star_rate.svg" alt="star">
                    <img src="img/star_rate.svg" alt="star">
                    <img src="img/star_rate.svg" alt="star">
                </div>
                <div class="buttons">
                    <a href="shopping.php"><button>Add <img src="img/add_shopping_cart_white.svg"/></button></a>
                    <a href="buyPage.php"><button>Buy now</button></a>
                </div>
            </div>
        </div>
        
        <div class="toBuy">
            <p class="pTitle">Refund term</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p class="pTitle">Delivery time</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
       
        <div class="similarItems">
            <h2>Similar Items</h2>
            <div class="similarProductsBox">
                <input type="image" src="img/arrow-left-black.svg"/>
                <div>
                    <img src="img/mando.jpg" alt="The Mandalorian Ed. Beskar" title="The Mandalorian Ed. Beskar">
                    <div class="nameProduct">
                        <p><a href="productDetail.php">Name</a></p>
                        <p>XX €</p>
                        <input type="image" src="img/add_shopping_cart.svg"/>
                    </div>
                </div>
                <div>
                    <img src="img/mando.jpg" alt="The Mandalorian Ed. Beskar" title="The Mandalorian Ed. Beskar">
                    <div class="nameProduct">
                        <p><a href="productDetail.php">Name</a></p>
                        <p>XX €</p>
                        <input type="image" src="img/add_shopping_cart.svg"/>
                    </div>
                </div>
                <div>
                    <img src="img/mando.jpg" alt="The Mandalorian Ed. Beskar" title="The Mandalorian Ed. Beskar">
                    <div class="nameProduct">
                        <p><a href="productDetail.php">Name</a></p>
                        <p>XX €</p>
                        <input type="image" src="img/add_shopping_cart.svg"/>
                    </div>
                </div>
                <div>
                    <img src="img/mando.jpg" alt="The Mandalorian Ed. Beskar" title="The Mandalorian Ed. Beskar">
                    <div class="nameProduct">
                        <p><a href="productDetail.php">Name</a></p>
                        <p>XX €</p>
                        <input type="image" src="img/add_shopping_cart.svg"/>
                    </div>
                </div>
                <input type="image" src="img/arrow-right-black.svg"/>
            </div>
        </div>
        
   </section>
   
    <?php include 'footer.php';?>
</body>

</html>