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
        var one = document.getElementsByClassName('user')[1];
        var o = one;
        var two = document.getElementsByClassName('user')[2];
        var t = two;
        newstyle.removeChild(two);
        newstyle.removeChild(one);
        var div = document.getElementsByClassName('user')[0];
        div.className = 'selected'
        var that = this;
        this.div = div;
        this.updateStyle();
        newstyle.appendChild(div);
        newstyle.appendChild(o);
        newstyle.appendChild(t);
    }
   
    unselect(){
        var oldstyle = document.getElementById('users'); 
        var one = document.getElementsByClassName('user')[0];
        var o = one;
        var two = document.getElementsByClassName('user')[1];
        var t = two;
        oldstyle.removeChild(two);
        oldstyle.removeChild(one);  
        var div = document.getElementsByClassName('selected')[0];
        div.className = 'user';
        var that = this;
        this.div = div;
        this.updateStyle();
        oldstyle.appendChild(div);
        oldstyle.appendChild(o);
        oldstyle.appendChild(t);
    }
}