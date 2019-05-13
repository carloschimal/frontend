MVC.Controller = class Controller {
  constructor(props){
    this.eventHandler()
    this.post();
    this.deleteP();
    this.model = new props.model(props.endpoint)
    this.view = new props.view(props.contentElement)
    

  }
  
  eventHandler(){
    document.body.addEventListener("onloadApp", (event) => {
      this.getData()
    })

  }
  getData(){
    this.model.getPersona()
      .then(data => {
        this.view.notify(data)
      })
      .catch(console.log)
  }

  post(){
    var boton = document.getElementById('botones');
    boton.addEventListener('click', ()=>{
      this.postData()
    } );
  }


 postData(){
    let data = this.view.datos()
    this.model.postPersona(data)
  }

  deleteP(){
    var botone = document.getElementById('eliminab');
    botone.addEventListener('click', ()=>{
      this.delete()
    } );
  }



  delete(){
    let elimina = this.view.delate()
    this.model.delete(elimina)
  }
 
}
