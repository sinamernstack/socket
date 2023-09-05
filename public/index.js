

var socket = io()
socket.on("connect",()=>{console.log("conected to server")
socket.emit("newEmail",{
    from:"sina",
    text :"salam chetori this is roxo",
    createAt :1379
})
})


socket.on("disconnect",()=>{
console.log("user disconected")
})

socket.on("newEmail",(email)=>{
    console.log("new email",email)
})