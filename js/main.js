/**
 * Instruction popin :
 * Vous devez insérer ce script dans la page panier.html
 * Pour utiliser le script de popin vous devez mettre l'id "buttonReduction" sur le boutton "Afficher le code promo"
 * Pour fermer la popin il faudra créer un bouton et lui attribuer l'id "closePopinReduction"
 */
(function(){
	window.addEventListener('load',function(e){
		var popin = document.getElementById('popinReduction');
		var button = document.getElementById('buttonReduction');
		var close = document.getElementById('closePopinReduction');

		popin.style.display="none";

		button.addEventListener('click',function(){
			console.log(popin);
			popin.style.display = "block";
		});
		close.addEventListener('click',function(){
			popin.style.display = "none";
		})
	})
})();