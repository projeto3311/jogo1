#pragma strict

var velocidadeFrente : float;
var velocidadeRotacao: float;
var velocidadeAcel   : float;
//script de movimentacao da personagem 
function Start () {
}
function Update () {
velocidadeFrente = 8*Time.deltaTime;
velocidadeRotacao = 15*Time.deltaTime;

//caso o usuario esteja apertado a velocidade ira ser aumentada
if(Input.GetKey(KeyCode.LeftShift))
  {
    if(velocidadeFrente<30)
    velocidadeAcel   = velocidadeAcel+0.1*Time.deltaTime;
  }
else
  {
    velocidadeAcel   = 0;  
  }

velocidadeFrente = 8*Time.deltaTime+velocidadeAcel;
//andar para frente
  if(Input.GetKey("w")){
  transform.Translate(0,0,velocidadeFrente);
  }
  //andar para tras
if(Input.GetKey("s"))
  {
   transform.Translate(0,0,-velocidadeFrente);
  }
   //andar para o lado
if(Input.GetKey("a"))
  {
   transform.Translate(-velocidadeFrente ,0,0);
  }
   //andar para o lado
if(Input.GetKey("d"))
  {
   transform.Translate(velocidadeFrente ,0,0);
  }
   //rotacao da camera
  if(Input.GetKey("j"))
  {
   transform.Rotate(0,-velocidadeRotacao,0);
  }
   //rotacao da camera
if(Input.GetKey("l"))
  {
   transform.Rotate(0,velocidadeRotacao,0);
  }


}


