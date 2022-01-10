const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch(err) {
        console.log('Koneksi Monggo DB : ' + err);
        process.exit(1);
    }
}

module.exports = connectDB;
