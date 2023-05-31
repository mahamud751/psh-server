import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  availble: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  perDay: {
    type: Number,
    required: true,
  },
  perMonth: {
    type: Number,
    required: true,
  },
  perYear: {
    type: Number,
    required: true,
  },
  // cheapestPrice: {
  //   type: Number,
  //   required: true,
  // },
});

export default mongoose.model("Hotel", HotelSchema);
