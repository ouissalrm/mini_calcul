function calculer(op) {
    const n1 = parseFloat(document.getElementById("nb1").value);
    const n2 = parseFloat(document.getElementById("nb2").value);
    let resultat = "";

    if (isNaN(n1) || isNaN(n2)) {
      resultat = "Entrez deux nombres";
    } else {
      switch (op) {
        case '+': resultat = n1 + n2; break;
        case '-': resultat = n1 - n2; break;
        case '*': resultat = n1 * n2; break;
        case '/':
          resultat = (n2 === 0) ? "Division par zéro impossible" : n1 / n2;
          break;
      }
    }

    document.getElementById("res").innerText = resultat;
  }