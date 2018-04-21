let someJSON;
export default someJSON = {
    data: [],
    init: function(url = 'https://jsonplaceholder.typicode.com/posts') {

        return fetch(url).then( (response) => response.json())

        .then(json => someJSON.data = json)
    }
}