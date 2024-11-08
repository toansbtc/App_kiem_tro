const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Khởi tạo ứng dụng
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/adsDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Định nghĩa model cho Ad
const adSchema = new mongoose.Schema({
  name: String,
  info: String,
  roomLocation: String,
  district: String,
  province: String,
  price: String,
  status: String,
  image: Object, // Lưu thông tin hình ảnh
});

const Ad = mongoose.model('Ad', adSchema);

// Định nghĩa route POST để lưu dữ liệu vào MongoDB
app.post('/api/ads', async (req, res) => {
  const adData = req.body;
  const newAd = new Ad(adData);
  try {
    await newAd.save();
    res.status(200).json({ message: 'Ad submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit the ad' });
  }
});

// Khởi chạy server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
