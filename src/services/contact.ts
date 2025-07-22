// esse arquivo é reposnsavel para ter uma camada de serviço para os contatos
import * as  ContactModel from '../models/contacts';

//lista todos os contatos
export const getContacts = async () => {
    const list = await ContactModel.getContacts();
}

//adicinar um novo contato
export const createContact = async (name: string) => {
    await ContactModel.createContact(name);
}

// pegar um contato especifico

// deletar um contato
export const deleteContact = async (name: string) => {
    await ContactModel.deleteContact(name);
}