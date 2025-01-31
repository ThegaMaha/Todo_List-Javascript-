'use strict'

 const list = document.getElementById('list')
 const input =document.getElementById('input')
 const add = document.getElementById('add')
 const clear =document.getElementById('clear')
 const url = document.getElementById('url')
 const load =document.getElementById('load')


 //On recupere le tableau des tâches déja existantes
 const tasks = ['Salle de sport', 'Tourner des tutos']
//Une fonction qui ajoute les taches au DOM avec un bouton de suppression
//auquel on attache un évènement
function tasksToDom(task){
    if (typeof task === 'string' && task){
        const li = document.createElement('li')
        li.style.listStyleType ='none'
        const remove = document.createElement('button')
        remove.style.margin ='4%'
        remove.style.backgroundColor='red'
        remove.style.borderRadius='5px'
        

        li.textContent = task
        remove.textContent= 'REMOVE'

        remove.addEventListener('click', ()=>{
            list.removeChild(remove.parentNode)
        })

        li.appendChild(remove)

        list.insertBefore(li, list.firstChild)
    }
}

 //On ajoute chaque tâche à la liste puce
 /*for(let i = 0; i <tasks.length ; i++){
    tasksToDom(tasks[i])
    //Si on a une chaîne non-vide et type de tasck est un string
    }*/


    tasks.forEach(task => tasksToDom(task))

     
//On gere l'ajout de tache avec le bouton ADD et la touche Enter
    function newTask(){
        input.focus()//Ts miala gn curseur
    }

    add.addEventListener('click', newTask)
    input.addEventListener('keydown', e=>{
        if(e.key ==='Enter'){
            newTask()
        }
    })


    //On supprime la liste du DOM et du navigateur

    clear.addEventListener('click', ()=>{
        list.innerHTML=''
    })
        
    //On gere l'importation de taches

    load.addEventListener('click', ()=>{
        
    })
  