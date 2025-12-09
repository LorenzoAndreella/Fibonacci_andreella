function controllo(lung) {
    let l = parseInt(lung);
    let par= document.createElement('p');
    let f = document.getElementById('formm');
    if (isNaN(l) || l<1) {
        par.innerText = "Inserisci un numero valido maggiore di 0";
        f.appendChild(par);
        document.getElementById('lung').disabled = true;
        document.getElementById('invia').disabled = true;
    }

    let seq = [];
    seq = fibonacci(l, seq);
    par.innerHTML = ("La tua sequenza: " + seq.join(','));
    f.appendChild(par);
}

function fibonacci(l, seq) {
    
    for (let i=0; i<l; i++) {
        if (i<2) {
            seq.push(i);
        } else {
            let n = seq[i-2] + seq[i-1];
            seq.push(n);
        }
    }
    return seq;
}