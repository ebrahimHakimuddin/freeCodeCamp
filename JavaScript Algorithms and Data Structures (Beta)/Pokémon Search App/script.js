async function lookUp(){
    const search = String(document.getElementById("search-input").value)
    const validPokemon = await fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/" + search.toLowerCase(),{method:'GET'});
    // console.log(validPokemon.json())
    if(!validPokemon.ok){
        alert("Pokémon not found")
    }else{
        const info = validPokemon.json().then((data) => {
            if (document.contains(document.getElementById("sprite"))){
                document.getElementById("sprite").remove()
            }
            const sprite = data.sprites.front_default
            const spriteImg = document.createElement("img")
            document.getElementById("pokemon-name").innerHTML = String(data.name).toUpperCase()
            document.getElementById("pokemon-id").innerHTML = data.id 
            document.body.append(spriteImg)
            spriteImg.setAttribute("src", sprite)
            spriteImg.setAttribute("id", "sprite")
            document.getElementById("weight").innerHTML = data.weight
            document.getElementById("height").innerHTML = data.height
            const types = data.types
            document.getElementById("types").innerHTML = "";
            types.forEach(element => {
                const typeDiv = document.createElement("div");
                document.getElementById("types").appendChild(typeDiv)
                typeDiv.innerHTML = String(element["type"]["name"]).toUpperCase()
            });
            const stats = data.stats
            document.getElementById("hp").innerHTML = stats[0]["base_stat"]
            document.getElementById("attack").innerHTML = stats[1]["base_stat"]
            document.getElementById("defense").innerHTML = stats[2]["base_stat"]
            document.getElementById("special-attack").innerHTML = stats[3]["base_stat"]
            document.getElementById("special-defense").innerHTML = stats[4]["base_stat"]
            document.getElementById("speed").innerHTML = stats[5]["base_stat"]
        })
    }
}