function figureArea(par1, par2, par3, par4) {

    let w = Number(par1);
    let h = Number(par2);
    let W = Number(par3);
    let H = Number(par4);

    let s1 = w * h;
    let s2 = W * H;
    let s3 = Math.min(w, W) * Math.min(h, H);

    console.log(`${s1 + s2 - s3}`)
}

figureArea(2, 4, 5, 3);