function orderingComponents(arr) {
    let systems = new Map();

    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split('|').map(ch => ch.trim());

        let systemName = tokens[0];
        let componentName = tokens[1];
        let subccomponentName = tokens[2];

        if (!systems.has(systemName)) {
            systems.set(systemName, new Map());
            systems.get(systemName).set(componentName, []);
            systems.get(systemName).get(componentName).push(subccomponentName);
        } else {
            if (!systems.get(systemName).has(componentName)) {
                systems.get(systemName).set(componentName, []);
                systems.get(systemName).get(componentName).push(subccomponentName);
            } else {
                systems.get(systemName).get(componentName).push(subccomponentName);
            }
        }
    }

    let sortedSystems = Array.from(systems.keys()).sort((a, b) => sort(a, b));

    for (let  system of sortedSystems) {
        console.log(system);

        let sortedComponents = Array.from(systems.get(system).keys())
            .sort((a, b) => systems.get(system).get(b).length - systems.get(system).get(a).length);

        for(let component of sortedComponents){
            console.log(`|||${component}`);
            for (let i = 0; i < systems.get(system).get(component).length; i++) {
                console.log(`||||||${Array.from(systems.get(system).get(component))[i]}`)
            }
        }
    }


    function sort(a, b) {
        if (systems.get(a).size !== systems.get(b).size) {
            return systems.get(b).size - systems.get(a).size;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    }
}

orderingComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);