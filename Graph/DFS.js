// Funzione di appoggio che restituisce tutti i nodi adiacenti 
// in un grafo G di un determiniinato nodo v
function *adj(G, v){
  for(let u of G.E){
    if(u[0] == v.val) {
      yield G.V.filter((value) => {
        if(value.val == u[1]) return value
      })[0]
    }
  }
}

function DFS_visit(G, v, time){
  v.color = "GRIGIO"
  time = time + 1
  v.d = time
  for(let u of adj(G,v)){
    if(u.color == "BIANCO"){
      u.p = v.val
      DFS_visit(G, u, time)
    }
  }
  v.color = "NERO"
  time = time + 1
  v.f = time
}

function DFS(G){
  for(let v of G.V){
    v.color = "BIANCO"
    v.p = null
  }
  var time = 0
  for(let v of G.V){
    if(v.color == "BIANCO"){
      DFS_visit(G,v,time)
    }
  }
}



G = {V: [{val: "r"},{val: "s"}, {val: "v"}, {val: "t"}, {val: "x"}, {val: "u"}, {val: "y"}, {val:"w"}],
    E: [["r","s"], ["s","r"], ["v","r"], ["r","v"], ["s","w"], ["w","s"], ["w","t"], ["t","w"],
       ["t","x"], ["x","t"], ["x","y"], ["y","x"], ["u","y"], ["y","u"], ["t","u"], ["u","t"], ["w","x"], ["x","w"]]}



DFS(G, {val:"s", d:0, p:null})
console.log(G)