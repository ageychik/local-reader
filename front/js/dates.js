import {sizeConverterFactory} from "./converter.js";

export class Dates{
    constructor(value) {
        this.value = value;
        this.ISO = this.getFormat('ISO', new Date(value));
        this.differ = this.getDiffer({start: value, end: null})
    }

    getDiffer({start, end}){
        end = end ? end : this.getFormat('parse', new Date());
        return sizeConverterFactory({type: 'timeSize', value: end - start} )
    }

    getFormat(format = 'ISO', date){
        const dateFormats = {
            ISO: date.toISOString().slice(0,10),
            RFC: date,
            parse: Date.parse(new Date(date).toISOString())
        };
        return dateFormats[format]
    }
}