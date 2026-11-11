import conexao from "../config/conexao.js";
const BateristaSchema = new conexao.Schema({
  nome: { type: String,required: true},
  bateria: {type: String,required: true},
  idade:{type:Number, required:false},
  baqueta:{type:String, required:false},
  prato:{type:String, required:false},
  descricao:{type:String,required:false}

});
const Baterista = 
conexao.model("Baterista", BateristaSchema);
export default Baterista;