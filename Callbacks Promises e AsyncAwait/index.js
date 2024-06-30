const loginUser = (email, senha, callback) => {
    setTimeout(() => {
        console.log('Usuário logado')
        callback ({ email })
    }, 1500)
};

const user = longinUser("contatowalaceramos@gmail.com", "12345789", (user) => {
    
})

console.log({user})