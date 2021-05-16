export default function server(url, method = 'GET', data = {}){
    console.log(method, data);
    return fetch(`/api/${url}`, {
        method,
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        body: JSON.stringify(data)
    }).then(data => {
        return data.json();
    })
}