import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  service: String,
  message: String,
}, {
  timestamps: true,
});

export default mongoose.models.Form || mongoose.model('Form', FormSchema);
