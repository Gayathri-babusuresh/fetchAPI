

fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => {
    let element = '';
    data.forEach(user =>{
    
    const markup = `<tr>
        <td>${user.postId}</td>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.body}</td>
        </tr>`

        element += markup;
        
    });
    document.getElementById('tbody').innerHTML=element;
})
.catch(err => console.log(err));

