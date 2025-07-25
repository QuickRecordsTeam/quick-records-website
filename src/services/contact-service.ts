import ContactFormData from "../models/contact-form";
import apiClient from "./api-client";

export class ContactService {
    sendMessage(contact:ContactFormData){
        return apiClient.post('/public/quickrecords/send-inquiry-message', contact)
    }
}