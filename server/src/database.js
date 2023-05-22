import mongoose from 'mongoose';

const dbConnect = async (DB_URI, DB_OPTS) => mongoose.connect(DB_URI, DB_OPTS);

export default dbConnect;
