const updateHoverListener = () => {
    $(".photo-block").hover(function(event) {
        console.log(123)
        $(this).children('.close').show()
    })
    
    $(".photo-block").mouseleave(function(event) {
        $(this).children('.close').hide()
    })
}

const fileTypes = [
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/tiff",
    "image/webp",
];

const newPhotoBlockInnerHTML = `<div class="close" style="display:none"></div>`;

const checkFileSize = (file) => {
    if (file.size > 100 * 1024 * 1024) {
        return false;
    }
}

const validFileType = (file) => {
    return fileTypes.includes(file.type);
}

const createNewImageBlock = (file) => {
    let newImage = document.createElement('img')
    newImage.className = 'photo__image photo__image-new'
    newImage.src = URL.createObjectURL(file)

    const newImageBlock = document.createElement('div')
    newImageBlock.className = 'photo-block photo-block-new'
    newImageBlock.innerHTML = newPhotoBlockInnerHTML;
    newImageBlock.appendChild(newImage)

    return newImageBlock;
}

updateHoverListener()

$(".file-input").on('change', function (event) {
    const photos = $(this).parents('.media').children('.photos-new')[0]
    const files = $(this)[0].files;
    if(files.length === 0) {
        return
    }
    for(let file of files){
        if(!validFileType(file)) break;

        let newImageBlock = createNewImageBlock(file)
        photos.appendChild(newImageBlock)
    }

    updateHoverListener()
})

