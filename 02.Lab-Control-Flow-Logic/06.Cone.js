function findConeVolumeAndSurface(radius, height) {

    let volume = (1/3)*Math.PI*(radius*radius)*height;
    console.log(volume)
    let l = Math.sqrt(radius * radius + height * height);
    let area = Math.PI * radius * (radius + l);
    console.log(area);
}

findConeVolumeAndSurface(3.3, 7.8);