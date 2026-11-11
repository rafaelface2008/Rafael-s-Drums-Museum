import conexao from "../config/conexao.js";
const PratoSchema = new conexao.Schema({
  marca: { type: String,required: true},
  serie: {type: String,required: true},
  liga:{type:String, required:false},
  tipo:{type:String, required:false},
  preco:{type:Number, required:false},
  descricao:{type:String,required:false}

});
const Prato = 
conexao.model("Prato", PratoSchema);
export default Prato;