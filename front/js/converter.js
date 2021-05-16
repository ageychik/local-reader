function convertTools(scales, fromTo) {
    let [from, to] = fromTo
    let sizeFormat = {
        from, to,
        string: '',
        roundString: ''
    }

    function getSize(startSize) {
        (function calcFullSize(size) {
            let {unit, modify, final} = getCurSize(size);
            let {sum, end} = convert(size, modify, unit, true);
            sizeFormat.string += `${sum}${unit.toLowerCase()} `;
            if (!final) calcFullSize(end)
        })(startSize);

        return sizeFormat.string;
    }

    const getCurSize = (size) => {
        return [...scales].reduce((cur, [unit, modify]) => {
            if (size >= modify) return {unit, modify, final: sizeFormat.from === unit}
            return cur;
        }, {});
    }

    const convert = (size, modify, unit, req) => {
        let value = size / modify;
        let sum = req ? Math.floor(value) : (value).toFixed(1);
        let end = req ? Math.floor(size % modify) : null;
        sizeFormat.roundString = sum + unit;
        return {sum, end, string: sizeFormat.roundString}
    }

    return {getCurSize, convert, getSize}
}

class Si {
    constructor(data) {
        const {modify, fromTo, units} = this.getUnit();
        this.type = data.type;
        this.size = data.value;
        this.tools = convertTools(this.getScale({modify, units}), fromTo);
    }

    convertInit() {
        let {unit, modify} = this.tools.getCurSize(this.size);
        return {
            value: this.size,
            round: this.tools.convert(this.size, modify, unit, false).string,
            strict: this.tools.getSize(this.size)
        }
    }

    getScale({modify, units}) {
        let sum = null;
        return units.reduce((map, item, index) => {
            let _generation = (typeof modify === 'number') ? modify : modify[index];
            sum = !index ? 1 : sum * _generation;
            map.set(item, sum);
            return map;
        }, new Map())
    }

    getUnit() {
        return {modify: 1, fromTo: ['min', 'max'], units: [], mask: null}
    }

}

class FileSize extends Si {

    getUnit() {
        let sup = super.getUnit()

        return {
            modify: 1024,
            fromTo: ['KB', 'TB'],
            units: ['Bytes', 'KB', 'MB', 'GB', 'TB'],
            mask: sup.mask
        }
    }
}

class TimeSize extends Si {

    getUnit() {
        let sup = super.getUnit();

        const units = {Ms: 1, Sec: 1000, Min: 60, Hours: 60, Days: 24, Month: 30, Years: 256};
        return {
            units: Object.keys(units),
            modify: Object.values(units),
            fromTo: ['Hours', 'Years'],
            mask: sup.mask
        }
    }
}

export function sizeConverterFactory({type, value}) {
    const list = {
        fileSize: FileSize,
        timeSize: TimeSize
    };
    const Converter = list[type];
    const converter = new Converter({type, value});
    return converter.convertInit();
}