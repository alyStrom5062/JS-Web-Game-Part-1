// Alyena Strom 

// creates and loops the backgrounds at the desired height and width
function tile (assetSrc, leftAlign, bottomAlign, width, height){
    for (let h = 0; h < height; h++){
        for (let w = 0; w < width; w++){
            newImage(assetSrc, leftAlign + w*100, bottomAlign+h*100)
        }
    }
}

// ====================================================================================================================

// object does not need to be declared in the paramaters it is created in the function itself. the parameters only consist of the src to the img and the pixel destination on the screen
function newImage(assetSrc, leftAlign, bottomAlign) {
        let object = document.createElement('img')
        object.src = assetSrc
        object.style.position = 'fixed'
        object.style.left = leftAlign + "px"
        object.style.bottom = bottomAlign + "px"
        document.body.append(object)
        return object
}

// ====================================================================================================================

// basically same as newImage function, except it allows the assets to be interactable.
function newItem(assetSrc, leftAlign, bottomAlign){
    let object = newImage(assetSrc, leftAlign, bottomAlign)

        object.addEventListener('dblclick', () => {
        object.remove()
        })
}

// ====================================================================================================================


let horizon = window.innerHeight / 1.75;
let hSky = window.innerHeight - horizon;
let hGrass = horizon;

// ====================================================================================================================


tile('assets/sky.png', 0, horizon, window.innerWidth/100, hSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, hGrass/100)

// =====================================================

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

// =====================================================

newItem('assets/sword.png', 500, 400)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

// =====================================================

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)