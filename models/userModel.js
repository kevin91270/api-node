const { Schema } = require("mongoose");
const Movie = require('./movieModel');

module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                name: String,
                age: Number,

                movies: [{
                    type: Schema.Types.ObjectId,
                    ref: 'movie'
                }],

            },
            {
                versionKey: false
            }
        )
    );

    return User;
};