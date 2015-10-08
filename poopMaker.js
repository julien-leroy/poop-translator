var dictionary = {
  "bonjour": " crotin",
  "vous": "poils pubiens",
  "bâtiment": "caca à étages",
  "entreprise": " prout économique",
  "festival": " fessetival",
  " mec": " excrément",
  "mec ": "excrément ",
  "amis": "excréments",
  "voiture": "bouse à roues",
  "camion": "crottin à roulette",
  "scooter": "crottin à deux roulette",
  "moto": "défection à roulette",
  "bagnole": "diarrhée à roulette",
  "bière": "pipi moussueux",
  " vin": " pet de bouteille",
  " jour": " jour de diarrhée",
  " pour ": " popo",
  " car": " cacar",
  " a ": " anus ",
  " à ": " anus ",
  "modèle": "pet atomique",
  "nombre": "caca croustillant",
  "tâche": "chiasse humide",
  "écrire": "entâcher de merde",
  "automatiquement": "au poils",
  "programmation": "machine à gaz",
  "procédure": "déjection",
  "méthode": "mélandre de chiasse",
  " jus": " jus d'anus",
  "domaine": "caca mou",
  "conception": "chiasse granuleuse",
  "modifier": "cacacryptographier",
  "abus ": "anus paisible ",
  "messages": "guanos de mouette",
  "personnes": "déjections",
  "chocolat": "jus anal",
  "france": "bouse de vache",
  "ananas": "ananal",
  "évènements": "poop parties",
  "accueil": "toilette",
  "status": "états intestinaux",
  "statut": "état intestinal",
  "fil d'actualité": "trace de frein",
  "groupes": "déjéctions sociales",
  "pages": "rouleaux souillés",
  "applications": "matieres fécales",
  "favoris": "meilleurs étrons",
  "amis proches": "poire à lavement"
};

function replaceTextOnPage(obj){
  getAllTextNodes().forEach(function(node){
    for (var x in obj) {
      node.nodeValue = node.nodeValue.toLowerCase().replace(new RegExp(quote(x), 'g'), obj[x]);
    }
  });
  function getAllTextNodes(){
    var result = [];
    (function scanSubTree(node){
      if(node.childNodes.length)
        for(var i = 0; i < node.childNodes.length; i++)
          scanSubTree(node.childNodes[i]);
      else if(node.nodeType == Node.TEXT_NODE)
        result.push(node);
    })(document);
    return result;
  }
  function quote(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }
}

replaceTextOnPage(dictionary);
