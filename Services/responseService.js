const mongoose = require('mongoose');

const Response = require('../Models/ResponseModel');
const createNewResponse = async (quest_id, response) => {
    const newResponse = new Response({
        response,
        quest_id
    });
    const data = await newResponse.save();
    return data;

    }


    module.exports = {
        createNewResponse
    }