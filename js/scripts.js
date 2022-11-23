function enablePhotoUpload() {
    const imageInput = document.querySelector("#image-input")
    imageInput.addEventListener("change", function () {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            const uploadImage = reader.result
            document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
        })
        reader.readAsDataURL(this.files[0])
    })
}

async function mapImageList() {
    const memesObject = [{
            "name": "giphy",
            "path": "pictures/giphy.gif"
        },
        {
            "name": "ml",
            "path": "pictures/ml.gif"
        },
        {
            "name": "cry",
            "path": "pictures/cry.gif"
        },
        {
            "name": "grito",
            "path": "pictures/gg.gif"
        },
        {
            "name": "happy",
            "path": "pictures/happy.gif"
        },
        {
            "name": "mail",
            "path": "pictures/mail.gif"
        },
        {
            "name": "engracados-2",
            "path": "pictures/engracados-2.gif"
        },
        {
            "name": "bobo-02",
            "path": "pictures/bobo-02.gif"
        },
        {
            "name": "ail",
            "path": "pictures/ail.gif"
        },
        {
            "name": "monkey",
            "path": "pictures/monkey.gif"
        },
        {
            "name": "hommer",
            "path": "pictures/hommer.gif"
        },
        {
            "name": "rick",
            "path": "pictures/rick.gif"
        },
        {
            "name": "john",
            "path": "pictures/john.gif"
        },
        {
            "name": "inferno",
            "path": "pictures/inferno.gif"
        },
        {
            "name": "esquilo",
            "path": "pictures/esquilo.gif"
        },
    ]

    return memesObject
}
async function createGallery(imageList) {
    const memeSelector = document.querySelector("#memes-list")
    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}

async function changeMemePicture(photo) {
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main() {
    const memesImageList = await mapImageList()
    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[0].path)
}

main()