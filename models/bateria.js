import conexao from "../config/conexao.js";
const BateriaSchema = new conexao.Schema({
  nome: { type: String,required: true},
  marca: {type: String,required: true},
  cor:{type:String, required:false},
  madeira:{type:String, required:false},
  anoFeito:{type:Number, required:false},
  preco:{type:Number, required:false},
  descricao:{type:String,required:false}

});
const Bateria = 
conexao.model("Bateria", BateriaSchema);
export default Bateria;