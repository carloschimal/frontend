MVC.Model = class Model {
  constructor(endpoint){
    this.endpoint = endpoint
    this.modelData = {}
  }
  getPersona(){
    return fetch(`${this.endpoint}`)
            .then(resp => {
              if (resp.ok) {
                return resp.json()
              }
              return Error("No se pudieron obtener los datos")
            })
            .then(data => {
              this.setModelo(data)
              return data
            })
  }
  

  postPersona(data){
      return fetch(this.endpoint, {

          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
              'Content-Type': 'application/json'
          }
      })
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  
  // buescaElimina(){
  //     return fetch(`${this.endpoint}`)
  //     .then(resp => {
  //       if (resp.ok) {
  //         return resp.json()
  //       }
  //       return Error("No se pudieron obtener los datos")
  //     })
  //     .then(data => {
  //       this.setModelo(data)
  //       return data
  //     })
      
  // }

//  prueb(){
//   return this.model.getPersona()
//       .then(data => {
//         return data
//       })
//  }


  delete(titulo){

    fetch(`http://localhost:8080/api/blogs/${titulo}`, {
            method: 'DELETE'
        }) // OR res.json()
        .then(res => console.log(res))
  }


  setModelo(data){
    this.modelData = data
  }

}
