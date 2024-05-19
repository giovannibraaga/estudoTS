let arr: number[] | string[];
let i: number;
arr = [18, 19, 20, 21];

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr = ["a", "b", "c", "d", "y"];

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// como parametro de funcoes ->

function deleteTeste(usuario: string | string[]) {
  // funcao de delete
  if (typeof usuario == "string") {
    //condicao
    console.log(usuario, "deletado"); //executa isso
  } else {
    let i: number;
    for (i = 0; i < usuario.length; i++) {
      console.log(usuario[i], "deletado");
    }
  }
}
