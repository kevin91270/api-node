module.exports = mongoose => {
    const Movie = mongoose.model(
        "movie",
        mongoose.Schema(
            {
                title: String,
                duration: Number,
            },
            {
                versionKey: false
            }
        )
    );
    return Movie;
};