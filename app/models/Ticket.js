import mongoose, { Schema } from "mongoose";

const run = async () => {
  mongoose.connect(process.env.MONGODB_URI);
  mongoose.Promise = global.Promise;
};

run().catch((err) => console.error(err));

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
