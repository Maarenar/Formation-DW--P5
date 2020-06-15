<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-IIED/eyOkM6ihtOiQsX2zizxFBphgnv1zbe1bKA+njdFzkr6cDNy16jfIKWu4FNH" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        
    </head>
    <body>
        <?php
            include('includes/header.php');
        ?>
        <main>
            <div id="page_title"></div>
            <div class="separation"></div>
            <section class="conteneur">
                <section id="product_info">
                </section>
                <form class="product_perso">
                    <label for="lentille">Choisissez votre lentille : </label>
                    <select name="lentille" id="lentille">
                        <option value="55mm">55mm</option>
                        <option value="65mm">65mm</option>
                        <option value="75mm">75mm</option>
                    </select>
                </form>
                <button onclick="addToCart()"><i class="far fa-plus"></i>Ajouter au panier</button>
            </section>
        </main>
        <?php
            include('includes/footer.php');
        ?>
        <script type="text/javascript" src="js/page_produit.js"></script>
        <script type="text/javascript" src="js/appearance_controls.js"></script>
    </body>

</html>