#pragma strict

var Personagens:GameObject[];
var Personagem:GameObject;
var i:int;
function Start () {

Application.DontDestroyOnLoad(this);
i=0;

}

function Update () {
//if(Application.LoadLevel==0){

if(Input.GetKeyDown(KeyCode.Return)){

//PlayerPrefs.SetInt("Personagem",i);
Application.LoadLevel(1);
}


if(!Personagem){
Personagem=Instantiate(Personagens[i],transform.position+transform.forward*10,Quaternion.identity);
//Personagem.rigidbody.useGravity=false;
Personagem.transform.LookAt(transform);
}
else{
Personagem.transform.Rotate(0,90*Time.deltaTime,0);
}


if(Input.GetKeyDown(KeyCode.LeftArrow)){
i--;
if(i<0)i=Personagens.Length-1;
Destroy(Personagem);

}


if(Input.GetKeyDown(KeyCode.RightArrow)){
i++;
if(i<Personagens.Length) i=0;
Destroy(Personagem);



}
//else{
//Personagem
//Personagem=Instantiate(GameObject.Find("boneco"),Transform.position+)
//}


}

