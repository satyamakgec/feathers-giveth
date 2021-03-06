export const status = {
  ACTIVE: 'Active',
  PENDING: 'Pending',
  CANCELED: 'Canceled',
};

// campaigns-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
export default function createModel(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const campaign = new Schema(
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      projectId: { type: String, index: true },
      image: { type: String, required: true },
      txHash: { type: String },
      totalDonated: { type: String },
      donationCount: { type: Number },
      peopleCount: { type: Number },
      dacs: { type: [String] },
      reviewerAddress: { type: String, required: true, index: true },
      ownerAddress: { type: String, required: true, index: true },
      pluginAddress: { type: String },
      tokenAddress: { type: String },
      mined: { type: Boolean },
      status: {
        type: String,
        require: true,
        enum: Object.values(status),
        default: status.PENDING,
      },
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model('campaign', campaign);
}
