function checkUserExist(db,user){
    alert("services")
    const check=db.find((e)=>{  
        return e.email=== user.email || e.name===user.name
    });
    return check;
}