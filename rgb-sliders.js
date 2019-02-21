function update() {
            
    r = document.getElementById("red").value;
    g = document.getElementById("green").value;
    b = document.getElementById("blue").value;
    rgb = "rgb(" + r + "," + g + "," + b + ")";

    document.getElementById("decimal-red").innerHTML = r;
    document.getElementById("decimal-green").innerHTML = g;
    document.getElementById("decimal-blue").innerHTML = b;
    document.getElementById("rgb").innerHTML = rgb;

    rHex = Number(r).toString(16).padStart(2, '0');
    gHex = Number(g).toString(16).padStart(2, '0');
    bHex = Number(b).toString(16).padStart(2, '0');
    hex = "#" + rHex + gHex + bHex;
    document.getElementById("hex-red").innerHTML = rHex;
    document.getElementById("hex-green").innerHTML = gHex;
    document.getElementById("hex-blue").innerHTML = bHex;
    document.getElementById("hex").innerHTML = hex;

    rBin = Number(r).toString(2).padStart(8, '0');
    gBin = Number(g).toString(2).padStart(8, '0');
    bBin = Number(b).toString(2).padStart(8, '0');
    bin = "b" + rBin + gBin + bBin;
    document.getElementById("binary-red").innerHTML = rBin;
    document.getElementById("binary-green").innerHTML = gBin;
    document.getElementById("binary-blue").innerHTML = bBin;
    document.getElementById("bin").innerHTML = bin;

    box = document.getElementById("box");
    box.style.backgroundColor = rgb; 
}
