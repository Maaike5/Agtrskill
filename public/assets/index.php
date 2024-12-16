<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Printafspraken Kalender</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/main.js"></script>
</head>
<body>
    <div class="container">
        <header>
            <h1>Printafspraken Kalender</h1>
        </header>

        <!-- Kalender -->
        <section id="calendar">
            <h2>Beschikbare Tijdslots</h2>
            <div id="timeslots">
                <!-- Dynamische tijdslots (08:30 - 18:00) -->
            </div>
        </section>

        <!-- Printafspraak formulier -->
        <div id="appointment-form" class="hidden">
            <h3>Maak of Bewerk Printafspraak</h3>
            <form id="print-form">
                <label for="email">E-mail:</label>
                <input type="email" id="email" placeholder="voorbeeld@domein.com" required>

                <label for="paper-size">Papierformaat:</label>
                <select id="paper-size" required>
                    <option value="A5">A5</option>
                    <option value="A4">A4</option>
                    <option value="A3">A3</option>
                </select>

                <label for="paper-type">Papiersoort:</label>
                <select id="paper-type" required>
                    <option value="Normaal">Normaal</option>
                    <option value="Glanzend">Glanzend</option>
                </select>

                <label for="quantity">Aantal prints:</label>
                <input type="number" id="quantity" min="1" value="1" required>

                <label for="cost">Kosten:</label>
                <input type="text" id="cost" readonly>

                <div class="buttons">
                    <button type="button" id="save-appointment">Opslaan</button>
                    <button type="button" id="cancel-appointment">Annuleren</button>
                </div>
            </form>
        </div>
    </div>

</body>
</html>
