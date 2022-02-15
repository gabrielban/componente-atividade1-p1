import { LightningElement, api } from "lwc";

export default class App extends LightningElement {
  
   cod    = "1";
   name   = "Mamaco";
   phone  = "2131415161";
   email  = "mamacododoi@mcorp.com";
   rating = "Hot";


   pkm  = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg";
   pkm2 = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/98a48255-bedb-46d7-8f6e-a54229d3c75d.jpg"; 
   imagem = this.pkm;
   
    
   
    
  
  alteraValor(){
     
      this.cod    = "2";

      this.name   = "Golira" ;
     
      this.phone  = "6869676564";
      
      this.email  = "golirafaminto@gcompany.com";

      this.rating = "Cold";

  }
  alteraPkm(){
    if(this.imagem == this.pkm) {  
        this.imagem = this.pkm2;
     } else{
        this.imagem = this.pkm;
     }
  }

  minhaMusicaShow = [
    {cod: 1, nome: "Uprising", artista: "MUSE", album: "Resistance" },
    {cod: 2, nome: "Faster", artista: "Within Temptation", album: "The Unforgiven"},
    {cod: 3, nome: "Robozin", artista: "Supercombo", album: "Adeus, Aurora"},
    {cod: 4, nome: "The Unforgiven II", artista: "Metalica", album: "Reload"},
    {cod: 5, nome: "O Vencedor", artista: "Los Hermanos", album: "Ventura"}
  ];

}
