import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema({
   title: { type: String, required: true },
  desc: { type: String, required: true },
  liveUrl: { type: String, required:false},
  category: { type: String, required: true },
  videoLink: { type: String, },
  repoUrl: { type: String, required: true },
  resource: { 

    id: { type: String, required: true },
    secure_url: { type: String, required: true },
    public_id: { type: String, required: true },
    asset_id:{ type: String, required: true },
    original_filename:{ type: String, required: true },
   }
 
  
}, {
  timestamps: true,
});

export default mongoose.models.PortfolioProject || mongoose.model('PortfolioProject', PortfolioSchema);