const USER_STYLES = {
    color: "#555",
    padding: "10px",
    fontFamily: "Arial",
    backgroundColor: "#BBB",
    selectedColor: "#585",
    selectedBackgroundColor: "#DDD",
}

class User{
    constructor(username, email, avatar = 'image/users.png', created = new Date(), selected = false ){
        this.username = username;
        this.email = email;
        this.avatar = avatar;
        this.created = created;
        this.selected = selected;
    }
    render(){ 
    var newuser = document.getElementById('users');
    var div = document.createElement('div');
        div.className = 'user' ;
        this.div = div;
        this.updateStyle();


        var img = document.createElement('img');
            img.src = this.avatar;
        var h2 = document.createElement('h2');
            h2.innerText = `${this.username} (${this.email});`
        var hr = document.createElement('hr');
        var small = document.createElement('small');
            small.innerText = this.created;

        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(hr);
        div.appendChild(small);
        newuser.appendChild(div);
    }

    updateStyle(){
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
            
    select(){
        var newstyle = document.getElementById('users');       
        var div = document.getElementsByClassName('user')[0];
        div.className = 'selected'
        var that = this;
        this.div = div;
        this.updateStyle();
        newstyle.appendChild(div);
    }
    // updStyle(){
    //     this.div.style.color = USER_STYLES.selectedColor;
    //     this.div.style.backgroundColor = USER_STYLES.selectedBackgroundColor;
    // }

    unselect(){
        // var selected = false;
        // var oldstyle = document.getElementById('users');

        // var div = document.getElementsByClassName('user')[0];
        //     div.style.color = USER_STYLES.color;
        //     div.style.backgroundColor = USER_STYLES.backgroundColor;
        // oldstyle.appendChild(div);
    }
}

let user4 = new User("Stas", "angel@mail.ru")
user4.render();
user4.select();
// <body>

//     <div id="pro"></div>
    

//     <script>
//         class User {
//             constructor(name, avatar, webAdress, password, dateReg = new Date()){
//                 this.name = name;
//                 this.avatar = avatar;
//                 this.webAdress = webAdress;
//                 this.password = password;
//                 this.created = dateReg;
//             }
            
//             render(){
//                 var text = "";
//                 var profil = document.getElementById("pro");
//                 profil.innerHTML += `<div
//                 <h2> ${this.name} </h2>  
//                 <h3> ${this.webAdress} <h3>
//                 <p> ${this.password} </p>
//                 <img src="${this.avatar}"/> 
//                 <p>user has registered ${this.period()} - days ago</p>
//                 </div>`;
//             }
            
//             period(){
//               var date1 = new Date();
//               var date2 = new Date(this.created);
//               var diffTime = Math.abs(date2.getTime() - date1.getTime());
//               var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//               return diffDays;
//             }
//         }
//         let user1 = new User("Stas", "images/hqdefault.jpg", "angel@mail.ru", "liusha32", "2019-08-06" );
//         let user2 = new User("Iulia", "images/user2.jpg", "iuly@mail.ru", "mypass89", "2019-07-06" );
//         let user3 = new User("Roman", "images/user3.jpg", "goodboy@mail.ru", "cool2008", "2019-03-06" );

//         user1.render();
//         user2.render();
//         user3.render();
//     </script>
// </body>

// </html>