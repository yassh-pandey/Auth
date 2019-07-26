auth.onAuthStateChanged((user)=>{
    if(user){
        
    }
    else{

    }
});
const addAdmin = (u)=>{
    const adminRef = db.collection('admin');
    adminRef.add({
        'adminID': u.uid,
        'adminEmail': u.email
    })
    .then()
    .catch(err=>{
        console.log(err);
    });
};
const createUser = (email, password, displayName)=>{
    auth.createUserWithEmailAndPassword(email, password)
        .then(()=>{
            const user = auth.currentUser;
            user.updateProfile({
                displayName
            });
            loggedInUI.forEach(UI=>{
                UI.style.display = "inline-block";
            });
            loggedOutUI.forEach(UI=>{
                UI.style.display = "none";
            });
            signUpForm.style.display = "none";
            error.forEach(er=>{
                er.style.display = 'none';
            });
            signUpForm.reset();
        })
        .catch(err=>{
            error.forEach(er=>{
            er.innerText = err.message;
            error.forEach(er=>{
                er.style.display = 'inline-block';
                });
        });
        });
};

const logInFunc = (email, password)=>{
    auth.signInWithEmailAndPassword(email, password)
        .then(()=>{
            loggedInUI.forEach(UI=>{
                UI.style.display = "inline-block";
            });
            loggedOutUI.forEach(UI=>{
                UI.style.display = "none";
            });
            error.forEach(er=>{
                er.style.display = 'none';
            });
            logInForm.reset();
            logInForm.style.display = "none";
        })
        .catch(err=>{
            error.forEach(er=>{
                er.innerText = err.message;
                error.forEach(er=>{
                er.style.display = 'inline-block';
                });
            });
        });
};