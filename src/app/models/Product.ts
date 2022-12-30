// Id = automatico
// name: String
// description: String
// imagePath: String
// price: Number
// ingredients: [{icon: String, name: String}]
// catergoty: ObjectId

import { model, Schema } from "mongoose";

export const Product = model("Product", new Schema({
    name: { type: String, required: true, },
    description: { type: String, required: true, },
    imagePath: { type: String, required: true, },
    prince: { type: Number, required: true, },
    ingredients: {
        type: [{
            name: { type: String, required: true, },
            icon: { type: String, required: true, },
        }], required: true,
    },
    category: { type: Schema.Types.ObjectId, required: true, ref: "Category", },
}));

