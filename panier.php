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
            <div class="sub_title">
                <i class="fas fa-shopping-cart"></i>
                <h2>Mon panier</h2>
            </div>
            <div class="separation"></div>
            <button onclick="showCloseForm()">Passer commande</button>
            <div id="product_info">
            </div>
            <button onclick="showCloseForm()">Passer commande</button>

            <section class="formulaire" id="form_order">
                <div>
                    <h4>Merci de remplir le formulaire pour passer commande (tous les champs sont obligatoires)</h4>
                    <i class="far fa-times" onclick="showCloseForm()"></i>

                    <form method="post" action="#">
                        <label for="pays"></label>
                        <select name="pays" id="pays" autofocus>
                            <option value="france">France</option>
                            <option value="royaume-uni">Royaume-Uni</option>
                            <option value="allemagne">Allemagne</option>
                            <option value="italie">Italie</option>
                            <option value="suisse">Suisse</option>
                        </select>
                        <label for="lastname"></label><input type="text" name="lastname" id="lastname" placeholder="Votre nom" required/>
                        <label for="firstname"></label><input type="text" name="firstname" id="firstname" placeholder="Votre prénom" required/>
                        <label for="email"></label><input type="email" name="email" id="email" placeholder="Votre e-mail" required/>
                        <label for="adresse1"></label><input type="text" name="adresse1" id="adresse1" placeholder="Adresse ligne 1" required/>
                        <label for="adresse2"></label><input type="text" name="adresse2" id="adresse2" placeholder="Adresse ligne 2" required/>
                        <label for="codepostal"></label><input type="text" name="codepostal" id="codepostal" placeholder="Code postal" required/>
                        <label for="ville"></label><input type="text" name="ville" id="ville" placeholder="Ville" required/>
                        <input type="submit" value="Valider" onclick="sendData()"/>
                    </form>
                </div>
            </section>
        </main>
        <?php
            include('includes/footer.php');
        ?>
        <script type="text/javascript" src="js/panier.js"></script>
        <script type="text/javascript" src="js/appearance_controls.js"></script>
    </body>

</html>