<!-- De acordo com a documentação do Mongoose, uma Interface, um Schema e uma Model servem para representar o quê? Dê exemplos -->

Schema: no mongodb serve pra representar a colecao, responsavel por descrever toda a estrutura de dados, por exemplo como um molde
<!-- import { Schema } from 'mongoose';

const petSchema = new Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: false },
  weight: { type: Number, required: true },
  dailyMealsNumber: { type: Number, required: true, min: 2, max: 5 },
}); -->

Model: 
<!-- import { Schema, model } from 'mongoose';

// const petSchema = new Schema({
//   name: { type: String, required: true },
//   species: { type: String, required: true },
//   age: { type: Number, required: false },
//   weight: { type: Number, required: true },
//   dailyMealsNumber: { type: Number, required: true, min: 2, max: 5 },
// });


const Pet = model('Pet', petSchema); -->

Interface: 
