<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-IIED/eyOkM6ihtOiQsX2zizxFBphgnv1zbe1bKA+njdFzkr6cDNy16jfIKWu4FNH" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <?php
            include('includes/header.php');
        ?>
        <main>
            <div id="confirmation">
                <i class="far fa-smile"></i>
                <p>Merci! Votre commande <span id="id_order">TJ03859e</span> d'un montant de <span id="total_amount">78 594€</span>
                a bien été enregistrée.</p>
                <p>Vous recevrez sous peu un email de confirmation</p>
            </div>
            <button onclick="backHome()">Retourner à l'accueil</button>
        </main>
        <?php
            include('includes/footer.php');
        ?>
        <script src="js/conf.js"></script>
        <script type="text/javascript" src="js/appearance_controls.js"></script>
    </body>

</html>