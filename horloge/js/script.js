

setInterval(function(){myTimer()}, 1000);

function myTimer() {
    let d = new Date();
  
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    let time= s+60*m+3600*h;
    console.log(m);
    console.log(time);

    // let sCircle = s/60*360;
    // let mCircle = m/60*360;
    // let hCircle = h/12*360;
    let sCircle = time*6;
    let mCircle = time/10;
    let hCircle = time/120;

    secondes.style.transform='rotate('+sCircle+'deg)';
    minutes.style.transform='rotate('+mCircle+'deg)';
    heures.style.transform='rotate('+hCircle+'deg)';

    // document.querySelector("#secondes").style.transform='rotate('+sCircle+'deg)';
    // document.querySelector("#minutes").style.transform='rotate('+mCircle+'deg)';
    // document.querySelector("#heures").style.transform='rotate('+hCircle+'deg)';
    let dig = document.querySelector("#digital");
    dig.innerHTML=h+':'+m+':'+s;
}

let prenom = document.createElement("p");
prenom.innerHTML = "ELIANA";
prenom.style.color="white"
prenom.style.transform = "rotate(90deg)";
prenom.style.marginTop="100px";
minutes.appendChild(prenom);

let prenom1 = document.createElement("p");
prenom1.innerHTML = "CELINA";
prenom1.style.transform = "rotate(90deg)";
prenom1.style.marginTop="100px";
heures.appendChild(prenom1);

myTimer();