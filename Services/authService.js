const User = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const authenticateUser = async (email, password) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Email informado não está no nosso banco');
        }

        const isEqual = await verifyHashPass(password, user.password);

        if (!isEqual) {
            throw new Error('Credenciais inválidas');
        }

        const token = generateRecoveryToken(user);
        return token;
    } catch (err) {
        throw err;
    }
};



const generateRecoveryToken = (user) => {
    const payload = {
      id: user._id,
      
    };
  

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '5m' }); 
  
    return token;



    
  };


  const verifyTokenAndGetUserId = (token) => {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      // Verifique se o token contém o ID do usuário
      if (decoded && decoded.userId) {
        return decoded.userId;
      }
    } catch (error) {
      throw new error ('Erro na decodificação do JWT:', error);
    }
    return false;
  };


  

const verifyHashPass = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = { authenticateUser,verifyHashPass,generateRecoveryToken ,verifyTokenAndGetUserId};