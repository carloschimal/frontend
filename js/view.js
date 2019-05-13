MVC.View = class View {
  constructor(elem){
    this.eventHandler()
    this.elem = elem
  
  }
  eventHandler(){
    document.body.addEventListener("onLoadData", (event) => {
      this.updateView(event.detail)
    })


  }

  notify(data){
    const onLoadDataEvent = new CustomEvent("onLoadData",{detail:data, bubbles: true})
    this.elem.dispatchEvent(onLoadDataEvent)
  }

  datos(){
    var ti = document.getElementById('tituloi').value;
    var au = document.getElementById('autori').value;
    var ar = document.getElementById('articuloi').value;
    var pa = document.getElementById('palabrai').value;

    var data = {articulo: ar , titulo: ti, 
     autor: au, palabrasClave: pa
    };
    return data;
  }



  delate(){
    var elimina = document.getElementById('elimina').value;
    return elimina;
  }

  //pone los datos del json a el formularion
  updateView(datos){



    var main = document.getElementsByTagName("section")[1];
 
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
   
   
    //crea los titulos de las tabas
    var titulos = document.createElement('tr');


    var  celdaTitulo1 = document.createElement('th');
    var  celdaTitulo2 = document.createElement('th');
    var  celdaTitulo3 = document.createElement('th');
    var  celdaTitulo4 = document.createElement('th');

    var ti1,ti2,ti3,ti4;

   ti1 = document.createTextNode("Articulo")
   ti2 = document.createTextNode("Titulo")
   ti3 = document.createTextNode("Autor")
   ti4 = document.createTextNode("Palabras clave")

     celdaTitulo1.appendChild(ti1);
     celdaTitulo2.appendChild(ti2);
     celdaTitulo3.appendChild(ti3);
     celdaTitulo4.appendChild(ti4);

    titulos.appendChild(celdaTitulo1);
    titulos.appendChild(celdaTitulo2);
    titulos.appendChild(celdaTitulo3);
    titulos.appendChild(celdaTitulo4);

    tblBody.appendChild(titulos);
    

    // Crea las celdas
    for (var i = 0; i < datos.length; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
   
      
        console.log(datos.length)
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var celda4 = document.createElement("td");
      

        var articulo = document.createTextNode(datos[i].articulo);
        var titulo = document.createTextNode(datos[i].titulo);
        var autor = document.createTextNode(datos[i].autor);
        var palabraClave = document.createTextNode(datos[i].palabrasClave);
        
        
        celda.appendChild(articulo);
        celda2.appendChild(titulo);
        celda3.appendChild(autor);
        celda4.appendChild(palabraClave);
        
        hilera.appendChild(celda);
        hilera.appendChild(celda2);
        hilera.appendChild(celda3);
        hilera.appendChild(celda4);
      
   
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
   
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    main.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    //tabla.setAttribute("border", "1");


  }

  
}
