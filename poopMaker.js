var dictionary = {
  " et ": " crotte ",
  "pour ": "popo ",
  "bonjour": "crotin",
  "vous": "poils pubiens",
  "batiment": "caca à étages",
  "entreprise": "prout économique",
  "festival": "fesse",
  "mec ": "cher excrement ",
  "amis": "excrements",
  "voiture": "défection à roulette",
  "camion": "défection à roulette",
  "scooter": "défection à roulette",
  " moto": " défection à roulette",
  "bagnole": "défection à roulette",
  "bière": "pipi dans un verre",
  " vin": " diarrhée dans un verre",
  " jour": " jour de diarrhée",
  " car": " cacar",
  " si": " pipi",
  " a ": " anus ",
  " à ": " anus ",
  "messages": "guanos de mouette",
  "personnes": "déjéctions",
  "chocolat": "jus anal",
  "france": "bouse de vache"
};

function replaceTextOnPage(obj){
  getAllTextNodes().forEach(function(node){
    for (var x in obj) {
      node.nodeValue = node.nodeValue.replace(new RegExp(quote(x), 'g'), obj[x]);
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
