var messages1 =["Plus votre score est faible (au moins inférieur à 15), plus vous êtes introverti(e) et peu expansif(ve). Vous avez tendance à être calme, modéré(e) et peu impliqué(e) dans la vie des autres. Plutôt timide, effacé(e) et silencieux(se) en groupe, vous préférez le plus souvent vous consacrer à des activités solitaires et être seul(e). Si votre score est élevé, vous êtes plein(e) d’énergie et éprouvez des émotions positives. Vous avez tendance à être loquace, actif(ve), voire exubérant(e). Vous êtes très à l’aise en groupe et puisez votre dynamisme dans l’interaction avec les autres. Vous parlez et vous affirmez facilement, et attirez l’atten- tion sur vous. Vous vous montrez enthousiaste pour des projets excitants.","Si votre score est faible (au moins inférieur à 15), vous avez tendance à être sceptique et à douter des intentions d’autrui. Vous préférez entrer en compétition plutôt que de coopérer, et défendez davantage vos intérêts que ceux du groupe. Vous êtes en général distant(e) et peu sensible au bien-être d’autrui, ce qui donne parfois l’impression que vous êtes centré(e) sur vous. Plus votre score est élevé, plus vous êtes prévenant(e), serviable et disposé(e) à trouver un terrain d’entente en cas de conflit. Honnête et droit(e), vous êtes digne de confiance et foncièrement généreux(se) et altruiste. Sympathique, respectueux(se) et amical(e), vous vous entendez bien avec les autres. Vous acceptez les autres dans leurs différences, sans critique. Sensible, indulgent(e) de nature, vous êtes doué(e) de compassion et pensez que les autres le sont également.","Si votre score est faible (au moins inférieur à 15), vous éprouvez beaucoup de plaisir à pratiquer des activités de courte durée, et avez des difficultés à rester concentré(e) sur vos objectifs. Impulsif(ve), vous êtes perçu(e) comme une personne amusante et boute-en-train en société. Vous ne savez pas toujours respecter les limites, ce qui peut vous rendre irréfléchi(e), dispersé(e), voire imprudent(e). Vous ne pensez parfois pas aux conséquences de vos paroles, de vos actes, ce qui peut entraver votre réussite, notamment au travail. Si votre score est élevé, vous êtes prudent(e), réfléchi(e), fiable et savez éviter les difficultés. Vous atteignez facilement vos objectifs grâce à vos capacités d’anticipation et d’organisation. Vous êtes perspicace et déterminé(e). Parfois, vous êtes très perfectionniste, soucieux(se) de l’ordre dans vos tâches et au travail.",];
var messages2 =["Plus votre score est faible (au moins inférieur à 15), plus vous êtes émotionnellement stable. Vous êtes en général calme, d’humeur égale et détendu(e). Vous affrontez les situations stressantes sans vous déstabiliser, sans inquiétude et avec confiance. Vous prenez le temps d’interpréter les événements avec discernement et agissez de façon raisonnée, non impulsive. Vous avez tendance à éprouver peu d’émotions négatives. Si votre score est élevé, vous éprouvez souvent de l’anxiété, de la colère ou de la peur. Vous êtes très réactif(ve) sur le plan émotionnel, voire instable, avec une humeur changeante et négative. Vous avez tendance à interpréter des situations ordinaires comme menaçantes, et des événements mineurs comme insurmontables. Vous êtes souvent tendu(e) et avez en général beaucoup de difficultés à gérer le stress de la vie quotidienne. Vos émotions peuvent entraver votre capacité à raisonner et votre lucidité, d’où parfois des prises de décisions inadaptées. Vous avez aussi tendance à être triste et déprimé(e).","Si votre score est faible (au moins inférieur à 15), vous avez tendance à être terre à terre, conventionnel(le) et fuyez l’originalité, l’extravagance. Vous écoutez assez peu vos sentiments et émotions, vous êtes plutôt centré(e) sur vos objectifs. Vous privilégiez les aspects pratiques et les choses qui ont déjà fait leurs preuves. Vous avez peu de centres d’intérêt et portez assez peu d’attention aux activités artistiques, esthétiques, scientifiques et métaphysiques. Vous appréciez davantage un environnement familier et êtes routinier(ère). Vos habitudes vous rassurent, alors que le changement et la nouveauté peuvent vous inquiéter. Plus votre score est élevé, plus vous êtes curieux(se), inventif(ve) et imaginatif(ve). Vous appréciez l’art, les activités diversifiées et non conventionnelles. Vous êtes davantage attiré(e) par la complexité, le sens caché des événements, l’ambiguïté, que par les évidences. Vous aimez jouer avec les idées, avoir des discussions profondes et existentielles avec vos amis. La nouveauté, le changement ainsi que la différence chez autrui guident vos intérêts et vos actions. Vous écoutez vos sentiments et avez tendance à pensern ;et à agir de façon personnelle, voire non conformiste (vous êtes indépendant(e) dans vos jugements)."]	;
var rang;

/**on 5 fonctions calculer qui font le meme algorithme mais chaque fonction aves ces questions specifiques */
/**fonction calculer:calculer le score de chaque caractere */

/*resultat1:extraversion*/

var res = document.getElementById("resultat1");
function calculer1(){
    var score = 0 ;
    /*cette liste contient toutes les questions dans cette categorie */
     var liste=[1,7,14,21,25,31,35,42,47,50]
    for(var j=0 ; j< liste.length; j++ ){
        question = document.getElementsByName("q"+liste[j]);
            /*pour verifier que toutes les questions dans cette categories checked */

        if (!(question[0].checked )&& !(question[1].checked)){
            if (!(question[2].checked )&& !(question[3].checked)){
            alert("veulliez repondre à la question "+liste[j] +" SVP!")
            return false;}}
    
       for (var i=0; i < question.length; i++){    
           
           if (question[i].checked){
           score = score + 
           Number(question[i].value);
           }
        }
    }
res.textContent = score;
document.getElementById("resultat1").innerHTML="votre score est  "+ score+" /30" ;

    document.getElementById("resultat11").innerHTML =messages1[0]
}

/*resultat2:agreabilite*/

var res1 = document.getElementById("resultat2");
function calculer2(){
    var score2 =0;
    /*cette liste contient toutes les questions dans cette categorie */
    var liste2=[2,4,8,13,17,23,26,30,40,46];
   for(var j=0 ; j< liste2.length; j++ ){
       question2 = document.getElementsByName("q"+liste2[j]);
        /*pour verifier que toutes les questions dans cette categories checked */

       if (!(question2[0].checked )&& !(question2[1].checked)){
          if (!(question2[2].checked )&& !(question2[3].checked)){
          alert("veulliez repondre à la question "+liste2[j] +" SVP!")
         return false;}}

      for (var i=0; i < question2.length; i++){
        if (question2[i].checked){
        score2 = score2 + 
        Number(question2[i].value);
        }
      }
   }
res1.textContent = score2;
document.getElementById("resultat2").innerHTML="votre score est "+ score2 + " /30" ;
document.getElementById("resultat12").innerHTML = messages1[1];  
}
   /****/ 
  /*resultat3:caractere conscieux*/
    var res3 = document.getElementById("resultat3");
    
function calculer3(){
    
    var score3 = 0;
    /*cette liste contient toutes les questions dans cette categorie */
    var liste3=[3,10,15,19,27,33,38,41,44,49]
   for(var j=0 ; j< liste3.length; j++ ){
       question3 = document.getElementsByName("q"+liste3[j]);
       /*pour verifier que toutes les questions dans cette categories checked */

      if (!(question3[0].checked )&& !(question3[1].checked)){
         if (!(question3[2].checked )&& !(question3[3].checked)){
        alert("veulliez repondre à la question "+liste3[j] +" SVP!")
        return false;}}
 
    /*que3*/
      for (var i=0; i < question.length; i++){
        if (question[i].checked){
        score3 = score3 + 
        Number(question3[i].value);
       }
    
      }
    }
    res3.textContent = score3;
    document.getElementById("resultat3").innerHTML="votre score est  "+ score3 +" /30" ;
    document.getElementById("resultat13").innerHTML = messages1[2];
}
   
    /*resultat4:nervosisite*/
    var res4 = document.getElementById("resultat4");
    
    function calculer4(){
    
    var score4 = 0;
    var liste4=[5,9,12,16,22,28,32,36,37,45]
   for(var j=0 ; j< liste4.length; j++ ){
       question4 = document.getElementsByName("q"+liste4[j]);
       /*pour verifier que toutes les questions dans cette categories checked */

   if (!(question4[0].checked )&& !(question4[1].checked)){
    if (!(question4[2].checked )&& !(question4[3].checked)){
        alert("veulliez repondre à la question "+liste4[j] +" SVP!")
        return false;}}
 
    for (var i=0; i < question4.length; i++){
    if (question[i].checked){
        score4 = score4 + 
        Number(question4[i].value);
    }}
    
}
    res4.textContent = score4;
    document.getElementById("resultat4").innerHTML="votre score est "+ score4 + " /30" ;
    document.getElementById("resultat14").innerHTML = messages2[0];
    
    }
    /*resultat5:ouverture a l'experence*/

var res5 = document.getElementById("resultat5");
    
function calculer5(){
    
    var score5 = 0;
    var liste5=[6,11,18,20,24,29,34,39,43,48]
    for(var j=0 ; j< liste5.length; j++ ){
       question5 = document.getElementsByName("q"+liste5[j]);
       /*pour verifier que toutes les questions dans cette categories checked */

   if (!(question5[0].checked )&& !(question5[1].checked)){
    if (!(question5[2].checked )&& !(question5[3].checked)){
        alert("veulliez repondre à la question "+liste5[j] +" SVP!")
        return false;}}
 
    
    for (var i=0; i < question5.length; i++){
    if (question5[i].checked){
        score5 = score5 + 
        Number(question5[i].value);
    }
    }}
    res5.textContent = score5;
    document.getElementById("resultat5").innerHTML="votre score est "+ score5 +" /30" ;
    document.getElementById("resultat15").innerHTML = messages2[1];
}
    /*des qu'on clique sur le bouton le resultat s'affiche */

    var boutonElement =
    document.getElementById("bouton1");
    boutonElement.addEventListener("click",calculer1);
    
    var bouton2Element =
    document.getElementById("bouton2");
    bouton2Element.addEventListener("click",calculer2);   
    var bouton3Element =
    document.getElementById("bouton3");
    bouton3Element.addEventListener("click",calculer3);
    
    var bouton4Element =
    document.getElementById("bouton4");
    bouton4Element.addEventListener("click",calculer4);
   
    var bouton5Element =
    document.getElementById("bouton5");
    bouton5Element.addEventListener("click",calculer5)

