import mongoose from 'mongoose';
import dotenv from 'dotenv';

console.log(process.env.DB_HOST);
const dbState = [
    {
        value: 0,
        label: "disconnected",
    },
    {
        value: 1,
        label: "connected",
    },
    {
        value: 2,
        label: "connecting",
    },
    {
        value: 3,
        label: "disconnecting",
    },
];

const connectDB = async () => {
    try {
        mongoose.connect(process.env.DB_HOST);
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find((f) => f.value === state).label, "to database");
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }

};

export default connectDB;
