export async function postUsers({login,senha}){
    const response = await fetch("http://localhost:3001/usuarios",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(
            {
                login:login,
                senha:senha,
            }
        )      
    })

    return response.json();
}


export async function getUsers(){
    const response = await fetch("http://localhost:3001/usuarios",{
        method:"GET"
    })

    return response.json;
}