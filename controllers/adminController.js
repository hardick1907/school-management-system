import Admin from '../models/Admin.js';

export const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {

    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ success: false, message: 'Admin already exists' });
    }

    const admin = new Admin({ name, email, password });
    await admin.save();

    res.status(201).json({
      success: true,
      message: 'Admin registered successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ success: false, message: 'Admin not found' });
    }

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const token = admin.generateAuthToken();
    res.json({
      success: true,
      message: 'Login successful',
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
