let user0 = new User('Petea', 'peteapopov@mail.ru');
let user1 = new User('Nastea', 'Nasteapetrova@mail.ru');
let user2 = new User('Igor', 'igorpetrenco@mail.ru');

const users = []

console.log(users);
function generate_users(){
    users[0] = `{ username:"${user0.username}", email:"${user0.email}", avatar:"${user0.avatar}", created:${user0.created}, selected:${user0.selected}}`;
    users[1] = `${user1}`;
    users[2] = `${user2}`  
    }
generate_users(); 
function render_users(){
    users.forEach(m=>{
        var con = document.getElementById('users');
        var div = document.createElement('div');
        div.className = 'user' ;
        this.div = div;
        this.updateStyle();

        var img = document.createElement('img');
            img.src = m.avatar;
        var h2 = document.createElement('h2');
            h2.innerText = `${m.username} (${m.email});`
        var hr = document.createElement('hr');
        var small = document.createElement('small');
            small.innerText = m.created;
        
        con.appendChild(div);
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(hr);
        div.appendChild(small);})
}
function updateStyle(){
    if(this.div.className == 'user'){
    this.div.style.color = USER_STYLES.color;
    this.div.style.padding = USER_STYLES.padding;
    this.div.style.fontFamily = USER_STYLES.fontFamily;
    this.div.style.backgroundColor = USER_STYLES.backgroundColor;
} else if(this.div.className == 'selected'){
    this.div.style.color = USER_STYLES.selectedColor;
    this.div.style.backgroundColor = USER_STYLES.selectedBackgroundColor;
}
}
render_users();
// function updateMessageWindow(){
//     //messages.forEach(function( m ){
//       messages.forEach(m => { //arrow function
//       console.log(m.text);
//       var p = document.createElement("p");
//       p.innerText = m.text;
//       p.className = m.author;
//       var messages = document.getElementsByClassName('messages');
//       messages[0].appendChild(p);
//       var br = document.createElement("br");
//       p.appendChild(br);
//       var small = document.createElement("small")
//       small.innerText = m.time;
//       p.appendChild(small);