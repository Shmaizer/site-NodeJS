const $card =document.querySelector('#card')
if($card){
    $card.addEventListener('click',event=>{
        if(event.target.classList.contains('js-remove')){
            const id = event.target.id
            fetch('/card/remove/'+id,{
                method: 'delete'
            }).then(res=>res.json())
            .then(card=>{
                console.log(card)
            })
        }
    })
}