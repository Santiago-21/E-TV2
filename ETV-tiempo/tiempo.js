function busca(){

var text = "";
var sp= prompt("Escribe 's' si quieres ver una serie y escribe 'p' si prefieres recomendación de película")

  if(sp=="p"){
    text = "<div class='card col-sm-3' style='margin: 10px; width:20rem; height: 250px" + "<img class='card-img-top' src='https://i1.wp.com/cine3.com/wp-content/uploads/2014/10/revert-old-netflix-app-new-xbox-360-update.w654.jpg?fit=592%2C321&w=640' style='width: 100px; margin-left: 30px' alt='Card image cap'>"
          + "<div class='card-body'>" + '<h4 class="card-title">Unusual Suspects</h4>' + '<p class="card-text">Esta película te va a encantar por tu gusto en detectives </p>' + '<a href="#" class="btn btn-primary">Verla</a>' +'</div>'+ '</div>' + "<div class='card col-sm-3' style='margin: 10px; width:20rem; height: 250px" + "<img class='card-img-top' src='https://i1.wp.com/cine3.com/wp-content/uploads/2014/10/revert-old-netflix-app-new-xbox-360-update.w654.jpg?fit=592%2C321&w=640' style='width: 100px; margin-left: 30px' alt='Card image cap'>"
                + "<div class='card-body'>" + '<h4 class="card-title">Relatos Salvajes</h4>' + '<p class="card-text">Esta peli te va a encantar por tus gustos en películas latinas</p>' + '<a href="#" class="btn btn-primary">Verla</a>' +'</div>'+ '</div>' + "<div class='card col-sm-3' style='margin: 10px; width:20rem; height: 250px" + "<img class='card-img-top' src='https://i1.wp.com/cine3.com/wp-content/uploads/2014/10/revert-old-netflix-app-new-xbox-360-update.w654.jpg?fit=592%2C321&w=640' style='width: 100px; margin-left: 30px' alt='Card image cap'>"
                      + "<div class='card-body'>" + '<h4 class="card-title">Run Lola Run</h4>' + '<p class="card-text">Esta peli te va a encantar por tu gusto en películas impredecibles </p>' + '<a href="#" class="btn btn-primary">Verla</a>' +'</div>'+ '</div>' + "<div class='card col-sm-3' style='margin: 10px; width:20rem; height: 250px" + "<img class='card-img-top' src='https://i1.wp.com/cine3.com/wp-content/uploads/2014/10/revert-old-netflix-app-new-xbox-360-update.w654.jpg?fit=592%2C321&w=640' style='width: 100px; margin-left: 30px' alt='Card image cap'>"
                            + "<div class='card-body'>" + '<h4 class="card-title">Memento</h4>' + '<p class="card-text">Esta peli te va a encantar por tu gusto en películas impredecibles</p>' + '<a href="#" class="btn btn-primary">Verla</a>' +'</div>'+ '</div>'
  } else { if(sp=="s"){
    text = "<div class='card col-sm-3' style='margin: 10px; width:20rem; height: 300px" + "<img class='card-img-top' src='https://i1.wp.com/cine3.com/wp-content/uploads/2014/10/revert-old-netflix-app-new-xbox-360-update.w654.jpg?fit=592%2C321&w=640' style='width: 100px; margin-left: 30px' alt='Card image cap'>"
          + "<div class='card-body'>" + '<h4 class="card-title">Rick and Morty</h4>' + '<p class="card-text">Esta serie te va a encantar por tus gustos en ciencia ficción. </p>' + '<a href="#" class="btn btn-primary">Verla</a>' +'</div>'+ '</div>' + "<div class='card col-sm-3' style='margin: 10px; width:20rem; height: 300px" + "<img class='card-img-top' src='https://i1.wp.com/cine3.com/wp-content/uploads/2014/10/revert-old-netflix-app-new-xbox-360-update.w654.jpg?fit=592%2C321&w=640' style='width: 100px; margin-left: 30px' alt='Card image cap'>"
                + "<div class='card-body'>" + '<h4 class="card-title">Game of Thrones</h4>' + '<p class="card-text">Esta serie te va a encantar por tu gusto de fantasía y acción</p>' + '<a href="#" class="btn btn-primary">Verla</a>' +'</div>'+ '</div>' + "<div class='card col-sm-3' style='margin: 10px; width:20rem; height: 300px" + "<img class='card-img-top' src='https://i1.wp.com/cine3.com/wp-content/uploads/2014/10/revert-old-netflix-app-new-xbox-360-update.w654.jpg?fit=592%2C321&w=640' style='width: 100px; margin-left: 30px' alt='Card image cap'>"
                      + "<div class='card-body'>" + '<h4 class="card-title">Seinfeld</h4>' + '<p class="card-text">Esta serie te va a encantar por tus gustos en comedia</p>' + '<a href="#" class="btn btn-primary">Verla</a>' +'</div>'+ '</div>' + "<div class='card col-sm-3' style='margin: 10px; width:20rem; height: 350px" + "<img class='card-img-top' src='https://i1.wp.com/cine3.com/wp-content/uploads/2014/10/revert-old-netflix-app-new-xbox-360-update.w654.jpg?fit=592%2C321&w=640' style='width: 100px; margin-left: 30px' alt='Card image cap'>"
                            + "<div class='card-body'>" + '<h4 class="card-title">The Man in The High Castle</h4>' + '<p class="card-text">Esta serie te va a encantar por tus gustos en general, puedes ver 2 capítulos con tu tiempo libre (95 min)</p>' + '<a href="#" class="btn btn-primary">Verla</a>' +'</div>'+ '</div>'
  }else{ alert(sp + " no es una opción ") }}

  document.getElementById('recomendaciones').innerHTML=text;

}
