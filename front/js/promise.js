export default function promise(item){
    return new Promise((req, rej) => {
        item.addEventListener('load', () => {
            console.log('load');
            req(item.result);
        })
        item.addEventListener('error', () => {
            console.log('error');
            rej('error');
        })
    })
}