import promise from "./promise.js";
import { sizeConverterFactory } from "./converter.js";
import { Dates } from "./dates.js";

function getBlobFile(file){
    let reader = new FileReader();
    reader.readAsBinaryString(file);

    return promise(reader);
}

function getFileInfo(item){
    const {differ: modify, ISO} = new Dates(item.lastModified);

    return {
        blob: getBlobFile(item),
        size: sizeConverterFactory({type: 'fileSize', value: item.size}),
        name: item.name,
        fileType: item.type,
        exp: item.name.split('.')[item.name.split('.').length - 1],
        modify: {
            date: ISO,
            agoRound: modify.round,
            agoStrict: modify.strict
        }
    };
}

document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.querySelector('.add');

    addBtn.addEventListener('change', async function () {
        let file = this.files;
        let promiseList = [...file].map( getFileInfo )

        await Promise.all(promiseList).then((data) => {
            console.log(data)

            // server('files/add', 'POST', data);
        })
    })
})