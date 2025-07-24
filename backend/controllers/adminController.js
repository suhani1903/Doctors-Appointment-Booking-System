import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from '../models/doctorModel.js';
import jwt from 'jsonwebtoken';

// ==============================
// ✅ Add Doctor Controller
// ==============================
const addDoctor = async (req, res) => {
    try {
        const {
            name, email, password, speciality, degree,
            experience, about, fees, address
        } = req.body;

        const imageFile = req.file;
        const available = req.body.available || 'true'; // default true

        // 1. Check all required fields
        if (!name || !email || !password || !speciality || !degree ||
            !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing details" });
        }

        // 2. Validate email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // 3. Validate password
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long" });
        }

        // 4. Check and upload image
        if (!imageFile) {
            return res.json({ success: false, message: "Image is required" });
        }

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image"
        });
        const imageUrl = imageUpload.secure_url;

        // 5. Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 6. Create doctor object
        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            available: available === 'true',
            date: Date.now()
        };

        // 7. Save to DB
        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({ success: true, message: "Doctor added successfully" });

    } catch (error) {
        console.error("❌ Add doctor error:", error);
        res.json({ success: false, message: error.message });
    }
};

// ==============================
// ✅ Admin Login Controller
// ==============================
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({ success: false, message: "Email and password are required" });
        }

        // Check against env variables
        if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        // Generate token
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });

        return res.json({ success: true, token });

    } catch (error) {
        console.error("❌ Admin login error:", error);
        res.json({ success: false, message: error.message });
    }
};

//API to get all doctors list for admin panel
const allDoctors = async (req,res) =>{
    try{

        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true,doctors})

    }
    catch (error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export { addDoctor, loginAdmin, allDoctors };
